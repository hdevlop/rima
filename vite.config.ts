import { defineConfig } from 'vite'
import path from "path"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: 'RimaInput',
      fileName: "rima-input",
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
          'react/jsx-runtime': 'ReactJsxRuntime',
        },
      },
    }
  },
})
