#!/usr/bin/env node
// Keeps .claude-plugin/plugin.json's and .claude-plugin/marketplace.json's
// version in step with package.json. `--check` exits 1 on drift instead of
// writing.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const packagePath = path.join(root, "package.json");
const pluginPath = path.join(root, ".claude-plugin", "plugin.json");
const marketplacePath = path.join(root, ".claude-plugin", "marketplace.json");
const { version } = JSON.parse(fs.readFileSync(packagePath, "utf8"));
const plugin = JSON.parse(fs.readFileSync(pluginPath, "utf8"));
const marketplace = JSON.parse(fs.readFileSync(marketplacePath, "utf8"));

const check = process.argv.includes("--check");
let drifted = false;

if (plugin.version !== version) {
  if (check) {
    console.error(`plugin.json version ${plugin.version} drifted from package.json ${version}; run pnpm version`);
    drifted = true;
  } else {
    plugin.version = version;
    fs.writeFileSync(pluginPath, JSON.stringify(plugin, null, 2) + "\n");
    console.log(`plugin.json set to ${version}.`);
  }
}

const marketplacePlugin = marketplace.plugins?.[0];
if (!marketplacePlugin) {
  console.error("marketplace.json: plugins[0] is missing");
  process.exit(1);
}
if (marketplacePlugin.version !== version) {
  if (check) {
    console.error(`marketplace.json version ${marketplacePlugin.version} drifted from package.json ${version}; run pnpm version`);
    drifted = true;
  } else {
    marketplacePlugin.version = version;
    fs.writeFileSync(marketplacePath, JSON.stringify(marketplace, null, 2) + "\n");
    console.log(`marketplace.json set to ${version}.`);
  }
}

if (check) {
  if (drifted) process.exit(1);
  console.log(`plugin.json and marketplace.json in step at ${version}.`);
}
