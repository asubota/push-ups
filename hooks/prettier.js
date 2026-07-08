import { spawnSync } from 'node:child_process'

const input = JSON.parse(await new Response(process.stdin).text())
const file = input.tool_response?.filePath || input.tool_input?.file_path

if (!file) {
  process.exit(0)
}

spawnSync('npx', ['prettier', '--write', file], { encoding: 'utf8' })
