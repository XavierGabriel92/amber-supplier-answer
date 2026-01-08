import { Elysia, t } from "elysia";
import type { NegotiateRequest } from "./types";
import { processNegotiation } from "./controllers/negotiation";

const app = new Elysia()
	.post(
		"/negotiate",
		async ({ body }) => {
			const { quoteId, supplierId, conversationHistory, webhookUrl } =
				body as NegotiateRequest;

			console.log(
				`Received negotiation request for quote ${quoteId}, supplier ${supplierId}`,
			);

			processNegotiation(quoteId, supplierId, conversationHistory, webhookUrl);

			return new Response(null, { status: 204 });
		},
		{
			body: t.Object({
				quoteId: t.String(),
				supplierId: t.Number(),
				conversationHistory: t.Array(
					t.Object({
						role: t.Union([
							t.Literal("system"),
							t.Literal("user"),
							t.Literal("assistant"),
						]),
						content: t.String(),
					}),
				),
				webhookUrl: t.String(),
			}),
		},
	)
	.listen(3001);


console.log(
	`🦊 Amber Supplier Answer API running at ${app.server?.hostname}:${app.server?.port}`,
);
