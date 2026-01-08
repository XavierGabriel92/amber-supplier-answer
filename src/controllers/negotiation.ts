import { getSupplierById } from "../database/suppliers";
import { getSupplierAgentPrompt } from "../database/prompts";
import { AIController } from "../controllers/ai";
import { callAmberAi } from "../diplomat/amber-ai"; 

export async function processNegotiation(
	quoteId: string,
	supplierId: number,
	conversationHistory: Array<{ role: string; content: string }>,
	webhookUrl: string,
): Promise<void> {
	try {
		// Get supplier
		const supplier = getSupplierById(supplierId);
		if (!supplier) {
			console.error(`Supplier not found: ${supplierId}`);
			return;
		}

		// Extract product details from conversation history
		const systemMessage = conversationHistory.find((m) => m.role === "system");
		const productDetails = systemMessage?.content || "";

		// Generate supplier prompt
		const supplierPrompt = getSupplierAgentPrompt(supplier, productDetails);

		// Build full conversation with supplier system prompt
		const fullConversation = [
			{ role: "system" as const, content: supplierPrompt },
			...conversationHistory
				.filter((m) => m.role !== "system")
				.map((m) => ({
					role: m.role as "user" | "assistant",
					content: m.content,
				})),
		];


		// Generate AI response
		const aiController = new AIController();
		const supplierMessage = await aiController.generateText(
			fullConversation,
			0.7,
		);

		console.log(
			`Generated response for quote ${quoteId}, supplier ${supplierId}`,
		);

		await callAmberAi(webhookUrl, quoteId, supplierId, supplierMessage);

		console.log(
			`Webhook called successfully for quote ${quoteId}, supplier ${supplierId}`,
		);
	} catch (error) {
		console.error(
			`Error processing negotiation for quote ${quoteId}:`,
			error,
		);
	}
}
