import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { build } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

const libraries = [
  {
    name: 'Array',
    entry: resolve(__dirname, './src/array/index.ts'),
    fileName: 'array',
  },
  {
    name: 'DOM',
    entry: resolve(__dirname, './src/dom/index.ts'),
    fileName: 'dom',
  },
  {
    name: 'Geometry',
    entry: resolve(__dirname, './src/geometry/index.ts'),
    fileName: 'geometry',
  },
  {
    name: 'Http',
    entry: resolve(__dirname, './src/http/index.ts'),
    fileName: 'http',
  },
  {
    name: 'Math',
    entry: resolve(__dirname, './src/math/index.ts'),
    fileName: 'math',
  },
  {
    name: 'Object',
    entry: resolve(__dirname, './src/object/index.ts'),
    fileName: 'object',
  },
]

libraries.forEach(async (lib) => {
  await build({
    build: {
      outDir: './dist',
      lib: {
        ...lib,
        formats: ['es', 'umd', 'iife'],
      },
      emptyOutDir: false,
    },
  })
})

