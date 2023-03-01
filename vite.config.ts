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
				'src/randomQuote': resolve('src', 'randomQuote', 'index.html'),
				'src/pomodoro': resolve('src', 'pomodoro', 'index.html'),
				'src/JSProjects': resolve('src', 'JSProjects', 'index.html'),
				'src/surveyForm': resolve('src', 'surveyForm', 'index.html'),
				'src/tribute': resolve('src', 'tribute', 'index.html'),
			},
		},
		target: 'esnext',
	},
})
