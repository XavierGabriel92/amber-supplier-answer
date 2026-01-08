export interface NegotiateRequest {
	quoteId: string;
	supplierId: number;
	conversationHistory: Array<{
		role: "system" | "user" | "assistant";
		content: string;
	}>;
	webhookUrl: string;
}

export interface WebhookPayload {
	quoteId: string;
	supplierId: number;
	supplierMessage: string;
}

export interface Supplier {
	id: number;
	name: string;
	quality: number;
	speedDescription: string;
	leadTimeDays: { min: number; max: number };
	paymentTerms: string;
	pricingModel: "cheapest" | "expensive" | "most-expensive";
	priceMultiplier: number;
	advantages: string[];
	negotiationPoints: string[];
	personalityTrait: string;
}

