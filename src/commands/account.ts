import { API_URL, loadApiKey } from "../config.js";

export async function account(): Promise<void> {
  const apiKey = loadApiKey();
  if (!apiKey) {
    console.log("No API key found. Run `agentscale register` first.");
    process.exit(1);
  }

  const res = await fetch(`${API_URL}/account`, {
    headers: { "x-api-key": apiKey }
  });
  const data = await res.json();

  if (!res.ok) {
    console.error("Failed to get account info:", data.error);
    process.exit(1);
  }

  console.log(`Tier: ${data.tier}`);
  console.log(`Credits: $${(data.credits / 100).toFixed(2)}`);
  console.log(`\nTo add credits, pay ${API_URL}/add-credits`);
  console.log("Use agentspend skill (credit card or crypto) or any x402 wallet.");
}
