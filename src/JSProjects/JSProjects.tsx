import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './JSProjects.css'

function JSProjects() {
	const [currentWindow, setCurrentWindow] = useState('intro')
	return (
		<>
			<nav className="Navbar">
				<a href="/" className="Title">
					<h2>FCCFront main page</h2>
				</a>
				<div className="custom-select">
					<label className="select" htmlFor="slct">
						<p className="selectTitle"> Display project:</p>
						<select
							className="slct"
							onChange={(e) => setCurrentWindow(e.target.value)}
						>
							<option value="PalindromeChecker">Palindrome Checker</option>
							<option value="RomanNumeralConverter">
								Roman Numeral Converter
							</option>
							<option value="CaesarsCipher">Caesars Cipher</option>
							<option value="TelephoneNumberValidator">
								Telephone Number Validator
							</option>
							<option value="CashRegister">Cash Register</option>
						</select>
					</label>
				</div>
			</nav>

			<main className="Main">
				{currentWindow === 'intro' ? (
					<div>
						<h3>Hello there</h3>{' '}
						<p>
							This page has some demo code - freecodecamp JavaScript Algorithms
							and Data Structures certification projects to be precise. You can
							try out the following algorithms yourself, or click a button to
							see some tests run automatically
						</p>
						<ul>
							<li
								onClick={() => {
									setCurrentWindow('PalindromeChecker')
								}}
							>
								Palindrome Checker
							</li>
							<li
								onClick={() => {
									setCurrentWindow('RomanNumeralConverter')
								}}
							>
								Roman Numeral Converter
							</li>
							<li
								onClick={() => {
									setCurrentWindow('CaesarsCipher')
								}}
							>
								Caesars Cipher
							</li>
							<li
								onClick={() => {
									setCurrentWindow('TelephoneNumberValidator')
								}}
							>
								Telephone Number Validator
							</li>
							<li
								onClick={() => {
									setCurrentWindow('CashRegister')
								}}
							>
								Cash Register
							</li>
						</ul>
					</div>
				) : currentWindow === 'PalindromeChecker' ? (
					<div>
						<h3>Palindrome checker!</h3>
					</div>
				) : currentWindow === 'RomanNumeralConverter' ? (
					<div>
						<h3>Roman Numeral Converter!</h3>
					</div>
				) : currentWindow === 'CaesarsCipher' ? (
					<div>
						<h3>Caesars Cipher!</h3>
					</div>
				) : currentWindow === 'TelephoneNumberValidator' ? (
					<div>
						<h3>Telephone Number Validator!</h3>
					</div>
				) : currentWindow === 'CashRegister' ? (
					<div>
						<h3>Cash Register!</h3>
					</div>
				) : (
					<div>
						<h3>Oops!</h3>
						<p>There seems to be an error. Please, try reloading the page</p>
					</div>
				)}
			</main>
		</>
	)
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<JSProjects />
)
