import type { Supplier } from "../types";

const SUPPLIERS_DATA: Supplier[] = [
	{
		id: 1,
		name: "ValueSource Manufacturing",
		quality: 4.0,
		speedDescription: "Standard delivery",
		leadTimeDays: { min: 45, max: 60 },
		paymentTerms: "33/33/33 (deposit/mid-production/delivery)",
		pricingModel: "cheapest",
		priceMultiplier: 1.0,
		advantages: [
			"Most competitive pricing",
			"Flexible payment terms (33/33/33)",
			"Established supply chain for cost-effective materials",
			"Volume discount opportunities",
		],
		negotiationPoints: [
			"Can offer material substitutions to reduce cost",
			"Willing to negotiate on volume discounts",
			"May improve lead time slightly for larger orders",
			"Flexible on payment schedule adjustments",
		],
		personalityTrait:
			"pragmatic and cost-focused, emphasizing value and flexibility",
	},
	{
		id: 2,
		name: "PremiumCraft Industries",
		quality: 4.7,
		speedDescription: "Expedited delivery",
		leadTimeDays: { min: 30, max: 40 },
		paymentTerms: "30/70 (deposit/delivery)",
		pricingModel: "expensive",
		priceMultiplier: 1.25,
		advantages: [
			"Highest quality rating (4.7/5.0)",
			"Premium materials and craftsmanship",
			"Faster than standard delivery",
			"Strict quality control processes",
		],
		negotiationPoints: [
			"Can guarantee premium materials and quality certifications",
			"Offers quality assurance and inspection services",
			"May provide material upgrades at competitive rates",
			"Limited flexibility on pricing due to quality standards",
		],
		personalityTrait:
			"quality-focused and premium, highlighting craftsmanship and reliability",
	},
	{
		id: 3,
		name: "RapidFlex Sourcing",
		quality: 4.0,
		speedDescription: "Express delivery",
		leadTimeDays: { min: 20, max: 25 },
		paymentTerms: "30/70 (deposit/delivery)",
		pricingModel: "most-expensive",
		priceMultiplier: 1.35,
		advantages: [
			"Fastest delivery time (20-25 days)",
			"Express logistics network",
			"Reliable for urgent orders",
			"Quick turnaround capabilities",
		],
		negotiationPoints: [
			"Can further expedite if needed (with additional cost)",
			"Priority production scheduling available",
			"Less flexible on payment terms due to express nature",
			"May offer slight discounts for repeat business",
		],
		personalityTrait:
			"efficiency-focused and responsive, emphasizing speed and reliability",
	},
];

export function getAllSuppliers(): Supplier[] {
	return SUPPLIERS_DATA;
}

export function getSupplierById(id: number): Supplier | undefined {
	return SUPPLIERS_DATA.find((s) => s.id === id);
}

export function getSupplierName(id: number): string {
	const supplier = getSupplierById(id);
	return supplier?.name || `Supplier ${id}`;
}

