import { useState } from 'react'
import './App.css'

function App() {
	return (
		<div className="App">
			<h1>Take a look at these pages:</h1>
			<div className="links">
				<a href="src/randomQuote/">Random quote generator</a> -{' '}
				<a href="https://random-quote-machine.freecodecamp.rocks/">
					FCC example
				</a>
			</div>
		</div>
	)
}

export default App
