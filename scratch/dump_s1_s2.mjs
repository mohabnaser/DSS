import fs from 'node:fs'

// Let's extract full text of all foundations and process questions
for (const f of ['src/data/exams/midterms.ts', 'src/data/exams/finals-a.ts', 'src/data/exams/finals-b.ts']) {
  const c = fs.readFileSync(f, 'utf8')
  const parts = c.split(/\n  (?:tf\(|mcq\(|written\(|diagram\(|\{)/)
  for (const p of parts) {
    if (p.includes("sectionId: 'foundations'") || p.includes("sectionId: 'process'")) {
      console.log('--- FROM', f, '---')
      console.log(p.slice(0, 1200))
    }
  }
}
