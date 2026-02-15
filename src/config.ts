import "dotenv/config";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import os from "node:os";

export const API_URL = process.env.AGENTSCALE_API_URL ?? "https://api.agentscale.co";

const CONFIG_DIR = path.join(os.homedir(), ".agentscale");
const CONFIG_FILE = path.join(CONFIG_DIR, "config.json");

export function saveApiKey(apiKey: string): void {
  mkdirSync(CONFIG_DIR, { recursive: true });
  writeFileSync(CONFIG_FILE, JSON.stringify({ apiKey }));
}

export function loadApiKey(): string | null {
  try {
    const data = JSON.parse(readFileSync(CONFIG_FILE, "utf-8"));
    return data.apiKey ?? null;
  } catch {
    return null;
  }
}
