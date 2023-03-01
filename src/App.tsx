import { useState } from 'react'
import './App.css'

function App() {
	return (
		<div className="App">
			<a href="/">
				<h1 style={{ marginBottom: '1em' }}>Take a look at these pages:</h1>
			</a>
			<h2>(New) Responsive web design</h2>
			<div className="links">
				<a href="src/surveyForm/">Survey form</a>{' '}
				<a href="https://survey-form.freecodecamp.rocks/">FCC example</a>
			</div>
			<div className="links">
				<a href="src/tribute/">Tribute page</a>{' '}
				<a href="https://tribute-page.freecodecamp.rocks/">FCC example</a>
			</div>
			<h2>Front End Development Libraries</h2>
			<div className="links">
				<a href="src/randomQuote/">Random quote generator</a>{' '}
				<a href="https://random-quote-machine.freecodecamp.rocks/">
					FCC example
				</a>
			</div>
			<div className="links">
				<a href="src/pomodoro/">25 and 5 clock</a>{' '}
				<a href="https://25--5-clock.freecodecamp.rocks/">FCC example</a>
			</div>
		</div>
	)
}

export default App
