import { readFileSync, writeFileSync } from 'node:fs'

const path = 'dist/client/wrangler.json'
const sessionKvId = '1eb64c47ae2042c1a03323937bd068b2'

const config = JSON.parse(readFileSync(path, 'utf8'))

for (const ns of config.kv_namespaces ?? []) {
	if (ns.binding === 'SESSION') ns.id = sessionKvId
}

if (config.previews?.kv_namespaces) {
	for (const ns of config.previews.kv_namespaces) {
		if (ns.binding === 'SESSION') ns.id = sessionKvId
	}
}

writeFileSync(path, JSON.stringify(config))
