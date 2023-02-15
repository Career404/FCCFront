import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
const outDir = resolve(__dirname, 'dist')
export default defineConfig({
	plugins: [react()],
	base: '/FCCFront/',
	build: {
		outDir,
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve('index.html'),
				'src/randomQuote/': resolve('src', 'randomQuote', 'index.html'),
			},
		},
	},
})
