import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const PROJECT_NAME = "DOCS";

const readJson = (relativePath) => {
  const content = fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
  return JSON.parse(content);
};

const readText = (relativePath) =>
  fs.readFileSync(path.join(repoRoot, relativePath), "utf8");

test("docs.json has required Mintlify structure", () => {
  const docs = readJson("docs.json");

  assert.equal(docs.$schema, "https://mintlify.com/docs.json");
  assert.equal(docs.name, PROJECT_NAME);
  assert.equal(docs.theme, "mint");
  assert.deepEqual(Object.keys(docs.colors).sort(), ["dark", "light", "primary"]);
  assert.ok(Array.isArray(docs.navigation));
  assert.ok(docs.navigation.length > 0);
});

test("docs navigation includes Getting Started/index", () => {
  const docs = readJson("docs.json");
  const gettingStarted = docs.navigation.find((item) => item.group === "Getting Started");

  assert.ok(gettingStarted, "Getting Started group must exist");
  assert.ok(Array.isArray(gettingStarted.pages));
  assert.ok(gettingStarted.pages.includes("index"));
});

test("index.mdx contains expected frontmatter and intro content", () => {
  const index = readText("index.mdx");
  const docs = readJson("docs.json");

  assert.match(index, /^---\s*[\s\S]*?---/m);
  assert.match(index, /title:\s*"[^"]+"/);
  assert.match(index, /description:\s*"[^"]+"/);
  assert.match(index, new RegExp(`^#\\s+${docs.name}$`, "m"));
  assert.match(index, /Welcome to .*documentation site\./i);
});

test("Cloudflare and Wrangler configuration stay in sync", () => {
  const wrangler = readText("api/wrangler.toml");
  const cloudflare = readJson("cloudflare/config.json");

  const accountIdMatch = wrangler.match(/account_id\s*=\s*"([^"]+)"/);
  const domainMatch = wrangler.match(/DOMAIN\s*=\s*"([^"]+)"/);
  const zoneIdMatch = wrangler.match(/ZONE_ID\s*=\s*"([^"]+)"/);
  const routeZoneIdMatch = wrangler.match(/zone_id\s*=\s*"([^"]+)"/);
  const routePatternMatch = wrangler.match(/pattern\s*=\s*"([^"]+)"/);

  assert.ok(accountIdMatch);
  assert.ok(domainMatch);
  assert.ok(zoneIdMatch);
  assert.ok(routeZoneIdMatch);
  assert.ok(routePatternMatch);

  const accountId = accountIdMatch[1];
  const domain = domainMatch[1];
  const zoneId = zoneIdMatch[1];
  const routeZoneId = routeZoneIdMatch[1];
  const routePattern = routePatternMatch[1];

  assert.equal(accountId, cloudflare.account_id);
  assert.ok(cloudflare.zones[domain], "Domain must exist in cloudflare/config.json");
  assert.equal(zoneId, cloudflare.zones[domain].zone_id);
  assert.equal(routeZoneId, zoneId);
  assert.match(routePattern, /\/\*$/);
  const routeHost = routePattern.replace(/\/\*$/, "");
  assert.ok(routeHost.endsWith(`.${domain}`), "Route host must target a subdomain of DOMAIN");
});

test("Deploy workflow includes core pages deployment steps", () => {
  const workflow = readText(".github/workflows/deploy-docs.yml");

  assert.match(workflow, /name:\s+Deploy Mintlify Docs/);
  assert.match(workflow, /npx mintlify@latest export --output export\.zip/);
  assert.match(workflow, /actions\/upload-pages-artifact@v3/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
});
