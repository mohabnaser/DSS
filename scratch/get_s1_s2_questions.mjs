import fs from 'node:fs'

for (const f of ['src/data/exams/midterms.ts', 'src/data/exams/finals-a.ts', 'src/data/exams/finals-b.ts']) {
  const c = fs.readFileSync(f, 'utf8')
  const blocks = c.split(/\n\s*id:\s*'/)
  for (let i = 1; i < blocks.length; i++) {
    const b = "id: '" + blocks[i]
    if (b.includes("sectionId: 'foundations'") || b.includes("sectionId: 'process'")) {
      const id = (b.match(/id:\s*'([^']+)'/) || [])[1]
      const sec = (b.match(/sectionId:\s*'([^']+)'/) || [])[1]
      const exp = (b.match(/explanation:\s*\n?\s*(['"`][\s\S]*?['"`]),?\n\s*(?:solution|status|sectionId)/) || [])[1]
      const w = (b.match(/wording:\s*\n?\s*(['"`][\s\S]*?['"`]),?\n\s*(?:choices|answer)/) || [])[1]
      const ans = (b.match(/answer:\s*([^\n]+),/) || [])[1]
      console.log(`[${sec}] ${id} (${f})`)
      console.log(`  W: ${w}`)
      console.log(`  ANS: ${ans}`)
      console.log(`  EXP: ${exp}\n`)
    }
  }
}
