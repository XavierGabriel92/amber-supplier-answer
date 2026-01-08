import { streamText, type ModelMessage } from "ai";
import { openai } from "@ai-sdk/openai";

/**
 * AI Controller for generating supplier responses
 * Uses Vercel AI SDK
 */
export class AIController {
	async generateText(
		messages: ModelMessage[],
		temperature = 0.7,
	): Promise<string> {
		const response = await streamText({
			model: "openai/gpt-4o-mini",
			messages: messages,
			temperature,
		});

		return await response.text;
	}
}

