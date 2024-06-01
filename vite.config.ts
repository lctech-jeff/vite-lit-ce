import { globSync } from 'glob'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'

const toCamelCase = str => {
  const matchRes = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)

  if (!matchRes) return ''
  const mapRes = matchRes.map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
  const joinRes = mapRes.join('')
  return joinRes.slice(0, 1).toLowerCase() + joinRes.slice(1)
}

const inputFiles = Object.fromEntries(
  globSync('src/components/**/index.ts').map(filePath => {
    const a = filePath.replace('src/components/', '').split('/')
    a.pop()
    return [toCamelCase(a.join(',')), fileURLToPath(new URL(filePath, import.meta.url))]
  })
)

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: {
        ...inputFiles,
        all: fileURLToPath(new URL('./src/index.ts', import.meta.url))
      },
      fileName: `j-[name]`,
    },
  },
  define: {
    'process.env': process.env,
  },
})
