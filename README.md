# Amber Supplier Answer - AI-Powered Supplier Simulator

A supplier simulation service built with Elysia and Bun that generates realistic supplier responses using AI. This service simulates different supplier personalities and negotiation strategies to create authentic procurement scenarios.

## Overview

The Amber Supplier Answer service acts as a supplier simulator for the Amber AI negotiation platform. It receives negotiation requests, generates contextual responses based on supplier profiles, and communicates back to the main system via webhooks.

## Supplier Profiles

### 1. ValueSource Manufacturing (ID: 1)
- **Quality Rating**: 4.0/5.0
- **Lead Time**: 45-60 days
- **Pricing**: Cheapest option (1.0x multiplier)
- **Payment Terms**: 33/33/33 (deposit/mid-production/delivery)
- **Personality**: Pragmatic and cost-focused
- **Key Advantages**: Most competitive pricing, flexible payment terms, volume discounts

### 2. PremiumCraft Industries (ID: 2)
- **Quality Rating**: 4.7/5.0
- **Lead Time**: 30-40 days
- **Pricing**: Premium option (1.25x multiplier)
- **Payment Terms**: 30/70 (deposit/delivery)
- **Personality**: Quality-focused and premium
- **Key Advantages**: Highest quality, premium materials, strict quality control

### 3. RapidFlex Sourcing (ID: 3)
- **Quality Rating**: 4.0/5.0
- **Lead Time**: 20-25 days
- **Pricing**: Most expensive (1.35x multiplier)
- **Payment Terms**: 30/70 (deposit/delivery)
- **Personality**: Efficiency-focused and responsive
- **Key Advantages**: Fastest delivery, express logistics, urgent order capability

## Project Structure

```
amber-supplier-answer/
├── src/
│   ├── index.ts              # Main server setup
│   ├── types/                # TypeScript type definitions
│   │   └── index.ts
│   ├── controllers/          # Business logic
│   │   ├── negotiation.ts    # Negotiation processing
│   │   └── ai.ts            # AI text generation
│   ├── database/            # Data storage (in-memory)
│   │   ├── suppliers.ts     # Supplier profiles
│   │   └── prompts.ts       # AI prompt generation
│   └── diplomat/            # External communication
│       └── amber-ai.ts      # Webhook client
└── package.json
```

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables (create `.env` file):
```env
OPENAI_API_KEY=your_api_key_here
```

### Development

Start the development server:
```bash
npm run dev
```

The service will run at `http://localhost:3001`

## How It Works

1. **Receive Request**: Amber AI sends a negotiation request with conversation history
2. **Retrieve Profile**: System fetches the corresponding supplier profile
3. **Generate Prompt**: Creates a specialized prompt based on supplier characteristics
4. **AI Processing**: OpenAI generates a contextual response matching the supplier's personality
5. **Webhook Callback**: Service sends the generated message back to Amber AI