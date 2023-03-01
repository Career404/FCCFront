import { useState } from 'react'
import './App.css'

function App() {
	return (
		<div className="App">
			<h1>Take a look at these pages:</h1>
			<div className="links">
				<a href="surveyForm/">Survey form</a>{' '}
				<a href="https://survey-form.freecodecamp.rocks/">FCC example</a>
			</div>
			<div className="links">
				<a href="randomQuote/">Random quote generator</a>{' '}
				<a href="https://random-quote-machine.freecodecamp.rocks/">
					FCC example
				</a>
			</div>
			<div className="links">
				<a href="pomodoro/">25 and 5 clock</a>{' '}
				<a href="https://25--5-clock.freecodecamp.rocks/">FCC example</a>
			</div>
		</div>
	)
}

export default App
