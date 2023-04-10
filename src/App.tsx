import './App.css';

function App() {
	return (
		<div className="App">
			<h1 style={{ marginBottom: '1em' }}>Take a look at these pages:</h1>

			<h2>(New) Responsive web design</h2>
			<p>These are non-representative aka done with minimal effort. Sorry.</p>
			<div className="links">
				<a href="src/surveyForm/">Survey form</a>{' '}
				<a href="https://survey-form.freecodecamp.rocks/">FCC example</a>
			</div>
			<div className="links">
				<a href="src/tribute/">Tribute page</a>{' '}
				<a href="https://tribute-page.freecodecamp.rocks/">FCC example</a>
			</div>
			<h2>JavaScript Algorithms and Data Structures</h2>
			<p>
				Nice course, even nicer projects. Total headcrackers, some of them...
			</p>
			<div className="links">
				<a href="src/JSProjects/">
					Palindrome Checker, Roman Numeral Converter, Caesars Cipher, Telephone
					Number Validator, Cash Register
				</a>{' '}
				<a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/">
					FCC course
				</a>
			</div>
			<h2>Front End Development Libraries</h2>
			<p>
				Fun little projects, this whole repo is up because these pages require a
				deploy for certification
			</p>
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
			<div className="links">
				<a href="src/MDPreview/">Markdown Previewer</a>{' '}
				<a href="https://markdown-previewer.freecodecamp.rocks/">FCC example</a>
			</div>
		</div>
	);
}

export default App;
