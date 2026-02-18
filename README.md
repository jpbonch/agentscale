# agentscale

Deploy web apps and APIs to a public URL with a single command. No config, no Docker, no CI pipeline — just `agentscale deploy`.

Supports Node.js, Python, Go, and anything [Nixpacks](https://nixpacks.com) can detect.

## Quick start

```bash
npx agentscale register   # get an API key (saved to ~/.agentscale)
npx agentscale deploy     # package and deploy the current directory
```

Your app gets a public URL on deploy.

## Commands

### `agentscale register`

Creates an API key and saves it to `~/.agentscale/config.json`. No account or payment needed.

### `agentscale deploy`

Packages the current directory and deploys it.

```bash
agentscale deploy              # auto-generates a service name
agentscale deploy --name myapp # deploy to a specific service
```

Output:
```
Packaging project...
Uploading tarball (123.4 KB)...
Deployed to service: quick-fox-1234
Free tier: service will expire in 1 hour. Add credits for permanent deploys.
URL: https://quick-fox-1234.agentscale.app
Your service should be live shortly.
```

### `agentscale list`

Lists your services, their status, and URLs.

Output:
```
Your services:
  quick-fox-1234  [expires in 42m]  (created 2/15/2026)
    https://quick-fox-1234.agentscale.app
  my-api  [running]  (created 2/14/2026)
    https://my-api.agentscale.app

Credits: $5.00 | $0.01/hr (2 services) | ~500h remaining
```

### `agentscale account`

Shows your account tier, credit balance, and burn rate.

Output:
```
Tier: paid
Credits: $5.00
Burn rate: $0.01/hr (2 active services)
Time remaining: ~20d 20h

To add credits, pay https://api.agentscale.co/add-credits
Use agentspend skill (credit card or crypto) or any x402 wallet.
```

## Free tier

- No signup or payment required.
- Free deploys expire after 1 hour.
- Limited to 1 service.

## Paid tier

Add credits to remove the 1-hour expiry and deploy permanently.

### How to pay

You can add credits using either:

1. **AgentSpend** (credit card or crypto):
   ```bash
   agentspend pay https://api.agentscale.co/add-credits \
     --header "x-api-key:<your-api-key>" \
     --body '{"amount_cents": 1000}'
   ```
   Or use the [AgentSpend skill](https://agentspend.co/skill.md) from Claude Code or other AI agents.

2. **x402 wallet** (payment protocol for AI agents):
   ```bash
   # Using any x402-compatible wallet
   POST https://api.agentscale.co/add-credits
   Headers: x-api-key: <your-api-key>
   Body: {"amount_cents": 1000}
   ```

Your API key can be found in `~/.agentscale/config.json`.

### Pricing

- Services cost approximately $0.005-$0.01 per hour depending on usage
- Check your current burn rate with `agentscale account`
- Credits are deducted hourly based on active services

## Limits

- Upload: 100 MB compressed, 500 MB decompressed.
- Your project needs a standard structure (e.g. `package.json` with a start script, `requirements.txt`, or `go.mod`).

## License

MIT
