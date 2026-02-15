#!/usr/bin/env node

import { Command } from "commander";
import { register } from "./commands/register.js";
import { deploy } from "./commands/deploy.js";
import { list } from "./commands/list.js";

const program = new Command();
program.name("agentscale").description("AgentScale CLI").version("0.1.0");

program.command("register")
  .description("Register and get an API key")
  .action(register);

program.command("deploy")
  .description("Deploy a service")
  .option("--name <name>", "Service name (auto-generated if omitted)")
  .action(deploy);

program.command("list")
  .description("List your services")
  .action(list);

program.parse();
