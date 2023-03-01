import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { FaRandom, FaAsterisk } from 'react-icons/fa'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import a11yDark from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark'

import './JSProjects.css'

SyntaxHighlighter.registerLanguage('JavaScript', js)

function PalindromeChecker() {
	const palindromeList = [
		'UFO tofu',
		'Taco cat',
		'Oozy rat in a sanitary zoo',
		'Murder for a jar of red rum',
		'Madam, in Eden, I’m Adam',
		'Borrow or rob',
		'Amore, Roma',
		'A nut for a jar of tuna.',
		'Step on no pets.',
		'Eva, can I see bees in a cave?',
		'Sit on a potato pan, Otis',
		'sator arepo tenet opera rotas',
		'Poor Dan is in a droop',
		'Ned, I am a maiden',
		'Now, sir, a war is won!',
		'A man, a plan, a canal, Panama!',
		'Won’t lovers revolt now?',
		'Red roses run no risk, sir, on Nurse’s order',
		'Never odd or even',
	]
	const [currentString, setCurrentString] = useState(
		palindromeList[Math.floor(Math.random() * palindromeList.length)]
	)

	function checkPalindrome(str: string): string {
		let lowStr = str.toLowerCase()
		let strArr = lowStr.match(/[a-z0-9]/gi)
		console.log(strArr)
		if (strArr == null) {
			return (
				'is just an empty field. Did you mean ' +
				palindromeList[Math.floor(Math.random() * palindromeList.length)]
			)
		}
		let reverseStrArr = strArr.slice().reverse()
		console.log(reverseStrArr)
		if (strArr.join() === reverseStrArr.join()) {
			return 'is a palindrome'
		}
		return 'is NOT a palindrome'
	}

	function randomString() {
		const chars =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
		const stringLength = Math.floor(Math.random() * 10) + 8
		let result = ''
		for (let i = 0; i < stringLength; i++) {
			result += chars.charAt(Math.floor(Math.random() * chars.length))
		}
		return result
	}

	return (
		<>
			<div className="glass">
				<input
					className="darkTextInput"
					type="text"
					value={currentString}
					onChange={(e) => {
						setCurrentString(e.target.value)
					}}
				/>{' '}
				<FaRandom
					style={{ cursor: 'pointer' }}
					size={'30px'}
					onClick={() =>
						setCurrentString(
							palindromeList[Math.floor(Math.random() * palindromeList.length)]
						)
					}
				/>{' '}
				<FaAsterisk
					style={{ cursor: 'pointer' }}
					size={'30px'}
					onClick={() => setCurrentString(randomString())}
				/>
				<br />
				{currentString !== null ? (
					<h3>{checkPalindrome(currentString)}</h3>
				) : null}
			</div>
			<div className="glass">
				<h4>
					<small>This is the </small>Task
				</h4>
				<p>
					Return true if the given string is a palindrome. Otherwise, return
					false. <br />
					<br /> A palindrome is a word or sentence that's spelled the same way
					both forward and backward, ignoring punctuation, case, and spacing.{' '}
					<br />
					<br />
					Note: You'll need to remove all non-alphanumeric characters
					(punctuation, spaces and symbols) and turn everything into the same
					case (lower or upper case) in order to check for palindromes. <br />
					<br /> We'll pass strings with varying formats, such as racecar,
					RaceCar, and race CAR among others. <br />
					<br /> We'll also pass strings with special symbols, such as 2A3*3a2,
					2A3 3a2, and 2_A3*3#A2.{' '}
				</p>
			</div>
			<div className="glass">
				<h4>
					<small>This is the </small>solution
				</h4>
				<SyntaxHighlighter language="JavaScript" style={a11yDark}>
					{`function palindrome(str) {
  let lowStr = str.toLowerCase();
  let strArr = lowStr.match(/[a-z0-9]/gi)
  console.log(strArr)
  if (strArr==null){return true}
  let reverseStrArr = strArr.slice().reverse()
  console.log(reverseStrArr)
  if(strArr.join() === reverseStrArr.join()){
  return true;
  }
  return false
}`}
				</SyntaxHighlighter>
			</div>
		</>
	)
}

function RomanNumeralConverter() {
	const [currentNumber, setCurrentNumber] = useState(49)

	function convertToRoman(num: number) {
		if (num > 99999) {
			return 'This can significantly hinder performance... Please use smaller numbers'
		}
		let roman = ''
		const lookup: { [key: string]: number } = {
			M: 1000,
			CM: 900,
			D: 500,
			CD: 400,
			C: 100,
			XC: 90,
			L: 50,
			XL: 40,
			X: 10,
			IX: 9,
			V: 5,
			IV: 4,
			I: 1,
		}
		for (const key in lookup) {
			while (num >= lookup[key]) {
				roman += key
				num -= lookup[key]
			}
		}
		return roman
	}
	return (
		<>
			<div className="glass romanNumeralEx">
				<input
					className="darkNumInput"
					type="number"
					value={currentNumber}
					min={1}
					max={99999}
					onChange={(e) => {
						setCurrentNumber(Number(e.target.value))
					}}
				/>
				<br />
				{currentNumber !== null ? <p>{convertToRoman(currentNumber)}</p> : null}
			</div>
			<div className="glass">
				<h4>
					<small>This is the </small>Task
				</h4>
				<p>
					Convert the given number into a roman numeral.
					<br />
					<br />
					All roman numerals answers should be provided in upper-case.
				</p>
			</div>
			<div className="glass">
				<h4>
					<small>This is the </small>solution
				</h4>
				<SyntaxHighlighter language="JavaScript" style={a11yDark}>
					{`function convertToRoman(num) {
    let roman = '';
    const lookup = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    for (const key in lookup) {
        while (num >= lookup[key]) {
            roman += key;
            num -= lookup[key];
        }
    }
    return roman;
}
`}
				</SyntaxHighlighter>
			</div>
		</>
	)
}

function CaesarsCipher() {
	return (
		<>
			<p>Hello Caesars Cipher </p>
		</>
	)
}

function TelephoneNumberValidator() {
	return (
		<>
			<p>Hello Telephone Number </p>
		</>
	)
}

function CashRegister() {
	return (
		<>
			<p>Hello Cash Register </p>
		</>
	)
}

function JSProjects() {
	const [currentWindow, setCurrentWindow] = useState('introduction')
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
							<option value="introduction">Hello, friend</option>
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
				{currentWindow === 'introduction' ? (
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
						<PalindromeChecker />
					</div>
				) : currentWindow === 'RomanNumeralConverter' ? (
					<div>
						<h3>Roman Numeral Converter!</h3>
						<RomanNumeralConverter />
					</div>
				) : currentWindow === 'CaesarsCipher' ? (
					<div>
						<h3>Caesars Cipher!</h3>
						<CaesarsCipher />
					</div>
				) : currentWindow === 'TelephoneNumberValidator' ? (
					<div>
						<h3>Telephone Number Validator!</h3>
						<TelephoneNumberValidator />
					</div>
				) : currentWindow === 'CashRegister' ? (
					<div>
						<h3>Cash Register!</h3>
						<CashRegister />
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
