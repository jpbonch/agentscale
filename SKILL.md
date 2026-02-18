---
name: agentscale
description: Deploy web apps and APIs to a public URL with a single command.
required_tools: ["tar"]
---

## Free Tier

- No signup or payment required to start.
- Run `npx agentscale register` to get an API key.
- Free deploys expire after 1 hour.
- Limited to 1 service.

## Paid Tier

- Add credits to remove the 1-hour expiry and deploy permanently.
- Use `npx agentscale account` to check your tier and credit balance.
- Services cost approximately $0.005-$0.01 per hour depending on usage.

### How to Add Credits

**Option 1: AgentSpend skill** (credit card or crypto)
- Use the AgentSpend skill: https://agentspend.co/skill.md
- Or use the `agentspend pay` command (see Account section below for details)

**Option 2: x402 wallet** (payment protocol for AI agents)
- x402 enables AI agents to make automated HTTP payments
- Pay directly by calling `POST https://api.agentscale.co/add-credits` with your `x-api-key` header and `amount_cents` in the body

## Commands

### Register

```bash
npx agentscale register
```

Generates an API key and saves it to `~/.agentscale/config.json`.

### Deploy

```bash
npx agentscale deploy
```

Run this from your project directory. Packages the current directory and deploys it.

**Options:**
- `--name <name>` — Service name (auto-generated if omitted)

**Returns:**
- Service name
- Public URL in format: `https://<service-name>.agentscale.app`
- Expiry notice if on free tier

### List

```bash
npx agentscale list
```

Lists your services and their status, URLs, and credit summary.

**Returns:**
- Service name, status (running/expires in Xm), and creation date
- Public URLs for each service in format: `https://<service-name>.agentscale.app`
- Credit summary: balance, burn rate, and time remaining (if applicable)

### Account

```bash
npx agentscale account
```

Shows your account tier (free/paid), credit balance, burn rate, and time remaining.

**Returns:**
- Account tier (free or paid)
- Credit balance in dollars
- Burn rate (cost per hour) if you have active services
- Estimated time remaining based on current credits and burn rate
- Instructions for adding credits

**To add credits**, use the `agentspend pay` command:

```bash
agentspend pay https://api.agentscale.co/add-credits \
  --header "x-api-key:<your-api-key>" \
  --body '{"amount_cents": <your number>}'
```

Or pay directly with an x402 wallet (x402 is a payment protocol for AI agents) by calling:
```
POST https://api.agentscale.co/add-credits
Headers: x-api-key: <your-api-key>
Body: {"amount_cents": <your number>}
```

## Project Requirements

- Deploy APIs and web services. Supports Node.js, Python, Go, and more.
- Your project needs a standard structure to be auto-detected:
  - **Node.js:** a `package.json` with a start script.
  - **Python:** a `requirements.txt`.
  - **Go:** a `go.mod`.
- Custom domains, build commands, and start commands are not yet supported.

## Environment Variables

- `AGENTSCALE_API_URL` — Overrides the default API base URL. **Warning:** this redirects all API calls, including those carrying your API key, to the specified URL.

## System Requirements

- `tar` must be available on PATH (used to package projects for deploy).

## Limits

- Upload: 100 MB compressed, 500 MB decompressed.
