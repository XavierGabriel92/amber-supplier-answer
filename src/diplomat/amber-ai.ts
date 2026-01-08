export async function callAmberAi(webhookUrl: string, quoteId: string, supplierId: number, supplierMessage: string): Promise<void> {
	// Call webhook back to amber-ai
    const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            quoteId,
            supplierId,
            supplierMessage,
        }),
    });

    if (!response.ok) {
        throw new Error(`Webhook call failed: ${response.statusText}`);
    }
}