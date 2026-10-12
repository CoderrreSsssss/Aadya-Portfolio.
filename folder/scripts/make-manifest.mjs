// Runs automatically before `npm run dev` and `npm run build`.
// Lists every image in public/images so you never have to type filenames.
import { readdirSync, writeFileSync, mkdirSync } from 'node:fs'
let files = []
try { files = readdirSync('public/images').filter(f => /\.(jpe?g|png|webp|avif|gif)$/i.test(f)) } catch {}
files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
mkdirSync('src/data', { recursive: true })
writeFileSync('src/data/images.generated.json', JSON.stringify(files, null, 2) + '\n')
console.log(`Found ${files.length} images in public/images`)
