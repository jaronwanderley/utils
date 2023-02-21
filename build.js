import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { copyFileSync, readdirSync } from 'fs'
import { build } from 'vite'

const toPascalcase = text => ` ${text}`.toLowerCase()
  .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())

const __dirname = dirname(fileURLToPath(import.meta.url))
const path = relativePath => resolve(__dirname, relativePath)

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

const libraries = getDirectories(path('./src/'))
  .map(name => ({
    name: toPascalcase(name),
    entry: path(`./src/${name}/index.ts`),
    fileName: name,
  }))

for (const library of libraries) {
  await build({
    build: {
      outDir: './dist',
      minify: true,
      lib: {
        ...library,
        formats: ['es', 'umd', 'iife'],
      },
      emptyOutDir: false,
    },
  })
}

copyFileSync(path('./src/index.ts'), path('./dist/index.d.ts'))
