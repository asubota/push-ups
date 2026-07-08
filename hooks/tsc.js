import { spawnSync } from 'node:child_process'

const input = JSON.parse(await new Response(process.stdin).text())
const file = input.tool_response?.filePath || input.tool_input?.file_path

if (!file || !/\.(ts|tsx)$/.test(file)) {
  process.exit(0)
}

const result = spawnSync('npm', ['run', 'typecheck'], { encoding: 'utf8' })

if (result.status !== 0) {
  const output = (result.stdout ?? '') + (result.stderr ?? '')
  console.error(output.split('\n').slice(0, 50).join('\n'))
  process.exit(2)
}
