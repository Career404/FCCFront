import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { FaRandom, FaAsterisk } from 'react-icons/fa'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import a11yDark from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark'

import './JSProjects.css'

SyntaxHighlighter.registerLanguage('javascript', js)

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
		if (strArr == null) {
			return (
				'is just an empty field. Did you mean ' +
				palindromeList[Math.floor(Math.random() * palindromeList.length)]
			)
		}
		let reverseStrArr = strArr.slice().reverse()
		if (strArr.join() === reverseStrArr.join()) {
			return 'is a palindrome'
		}
		return 'is NOT a palindrome'
	}

	function randomString() {
		const chars =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\\:;?><,./-='
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
				<SyntaxHighlighter language="javascript" style={a11yDark}>
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
				<SyntaxHighlighter language="javascript" style={a11yDark}>
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
	const [currentString, setCurrentString] = useState(
		'The quick brown fox jumps over the lazy dog'
	)
	const [currentCode, setCurrentCode] = useState(
		'GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT'
	)
	const secretWordsArray = [
		'classified',
		'covert',
		'furtive',
		'hush-hush',
		'mysterious',
		'obscure',
		'private',
		'secluded',
		'undercover',
		'underground',
		'undisclosed',
		'unknown',
		'unpublished',
		'backdoor',
		'close',
		'closet',
		'dark',
		'deep',
		'mystic',
		'occult',
		'unseen',
		'abstruse',
		'ambiguous',
		'arcane',
		'camouflaged',
		'cloak-and-dagger',
		'clouded',
		'conspiratorial',
		'covered',
		'cryptic',
		'disguised',
		'enigmatical',
		'esoteric',
		'mystical',
		'on the Q.T.',
		'out-of-the-way',
		'recondite',
		'reticent',
		'retired',
		'shrouded',
		'strange',
		'under wraps',
		'unenlightened',
		'unfrequented',
		'unintelligible',
		'veiled',
	]

	function encodeRot13(str: string) {
		let encoded = ''
		for (let i = 0; i < str.length; i++) {
			let charCode = str.charCodeAt(i)
			if (charCode >= 65 && charCode <= 90) {
				charCode -= 65
				charCode = (charCode + 13) % 26
				charCode += 65
			} else if (charCode >= 97 && charCode <= 122) {
				charCode -= 97
				charCode = (charCode + 13) % 26
				charCode += 97
			}
			encoded += String.fromCharCode(charCode)
		}
		return encoded.toUpperCase()
	}
	function rot13(str: string) {
		let decoded = ''
		for (let i = 0; i < str.length; i++) {
			let charCode = str.charCodeAt(i)
			if (charCode >= 65 && charCode <= 90) {
				charCode -= 65
				charCode = (charCode + 13) % 26
				charCode += 65
			}
			decoded += String.fromCharCode(charCode)
		}
		return decoded
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
							secretWordsArray[
								Math.floor(Math.random() * secretWordsArray.length)
							]
						)
					}
				/>
				<br />
				{currentString !== null ? <h3>{encodeRot13(currentString)}</h3> : null}
				<input
					className="darkTextInput"
					type="text"
					value={currentCode}
					onChange={(e) => {
						setCurrentCode(e.target.value)
					}}
				/>{' '}
				<FaRandom
					style={{ cursor: 'pointer' }}
					size={'30px'}
					onClick={() =>
						setCurrentCode(
							encodeRot13(
								secretWordsArray[
									Math.floor(Math.random() * secretWordsArray.length)
								]
							)
						)
					}
				/>
				{currentCode !== null ? <h3>{rot13(currentCode)}</h3> : null}
			</div>
			<div className="glass">
				<h4>
					<small>This is the </small>Task
				</h4>
				<p>
					One of the simplest and most widely known ciphers is a Caesar cipher,
					also known as a shift cipher. In a shift cipher the meanings of the
					letters are shifted by some set amount.
					<br />
					<br />
					A common modern use is the ROT13 cipher, where the values of the
					letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
					<br />
					<br />
					Write a function which takes a ROT13 encoded string as input and
					returns a decoded string.
					<br />
					<br />
					All letters will be uppercase. Do not transform any non-alphabetic
					character (i.e. spaces, punctuation), but do pass them on.
				</p>
			</div>
			<div className="glass">
				<h4>
					<small>This is the </small>solution
				</h4>
				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`function rot13(str) {
     let decoded = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            charCode -= 65;
            charCode = (charCode + 13) % 26;
            charCode += 65;
        }
        decoded += String.fromCharCode(charCode);
    }
    return decoded;
}
`}
				</SyntaxHighlighter>
			</div>
		</>
	)
}

function TelephoneNumberValidator() {
	const numbersList = [
		'555-555-5555',
		'(555)555-5555',
		'(555) 555-5555',
		'555 555 5555',
		'5555555555',
		'1 555 555 5555',
	]
	const [currentString, setCurrentString] = useState(
		numbersList[Math.floor(Math.random() * numbersList.length)]
	)

	function telephoneCheck(str: string) {
		const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/
		return regex.test(str)
	}

	function randomString() {
		const chars = '0123456789()-'
		let result = ''
		for (let i = 0; i < 10; i++) {
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
							numbersList[Math.floor(Math.random() * numbersList.length)]
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
					<h3>
						{telephoneCheck(currentString)
							? '...is a valid number'
							: 'is not a valid number'}
					</h3>
				) : null}
			</div>
			<div className="glass">
				<h4>
					<small>This is the </small>Task
				</h4>
				<p>
					Return true if the passed string looks like a valid US phone number.{' '}
					<br /> <br />
					The user may fill out the form field any way they choose as long as it
					has the format of a valid US number. The following are examples of
					valid formats for US numbers (refer to the tests below for other
					variants):
					<pre>
						555-555-5555
						<br />
						(555)555-5555
						<br />
						(555) 555-5555
						<br />
						555 555 5555
						<br />
						5555555555
						<br />1 555 555 5555
					</pre>
					For this challenge you will be presented with a string such as
					800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or
					reject the US phone number based on any combination of the formats
					provided above. The area code is required. If the country code is
					provided, you must confirm that the country code is 1. Return true if
					the string is a valid US phone number; otherwise return false.
				</p>
			</div>
			<div className="glass">
				<h4>
					<small>This is the </small>solution
				</h4>
				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`function telephoneCheck(str) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  return regex.test(str);
}`}
				</SyntaxHighlighter>
			</div>
		</>
	)
}

function CashRegister() {
	return (
		<>
			<div className="glass"></div>
			<div className="glass">
				<h4>
					<small>This is the </small>Task
				</h4>
				<p>
					Design a cash register drawer{' '}
					<code className="code">function checkCashRegister()</code> that
					accepts purchase price as the first argument (
					<code className="code">price</code>), payment as the second argument (
					<code className="code">cash</code>), and cash-in-drawer (
					<code className="code">cid</code>) as the third argument.
					<br />
					<br />
					<code className="code">cid</code> is a 2D array listing available
					currency.
					<br />
					<br />
					The <code className="code">checkCashRegister()</code> function should
					always return an object with a status key and a change key.
					<br />
					<br />
					Return{' '}
					<code className="code">
						{'{'}status: "INSUFFICIENT_FUNDS", change: []{'}'}
					</code>{' '}
					if cash-in-drawer is less than the change due, or if you cannot return
					the exact change.
					<br />
					<br />
					Return{' '}
					<code className="code">
						{'{'}status: "CLOSED", change: [...]{'}'}
					</code>{' '}
					with cash-in-drawer as the value for the key change if it is equal to
					the change due.
					<br />
					<br />
					Otherwise, return{' '}
					<code className="code">
						{'{'}status: "OPEN", change: [...]{'}'}
					</code>
					, with the change due in coins and bills, sorted in highest to lowest
					order, as the value of the change key.
					<br />
					<br />
				</p>
				<table className="currencyTable">
					<thead>
						<tr>
							<th>Currency Unit</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Penny</td>
							<td>$0.01 (PENNY)</td>
						</tr>
						<tr>
							<td>Nickel</td>
							<td>$0.05 (NICKEL)</td>
						</tr>
						<tr>
							<td>Dime</td>
							<td>$0.1 (DIME)</td>
						</tr>
						<tr>
							<td>Quarter</td>
							<td>$0.25 (QUARTER)</td>
						</tr>
						<tr>
							<td>Dollar</td>
							<td>$1 (ONE)</td>
						</tr>
						<tr>
							<td>Five Dollars</td>
							<td>$5 (FIVE)</td>
						</tr>
						<tr>
							<td>Ten Dollars</td>
							<td>$10 (TEN)</td>
						</tr>
						<tr>
							<td>Twenty Dollars</td>
							<td>$20 (TWENTY)</td>
						</tr>
						<tr>
							<td>One-hundred Dollars</td>
							<td>$100 (ONE HUNDRED)</td>
						</tr>
					</tbody>
				</table>
				<p>
					<br />
					See below for an example of a cash-in-drawer array:
					<br /> <br />
				</p>
				<pre>
					[ ["PENNY", 1.01],
					<br /> ["NICKEL", 2.05],
					<br /> ["DIME", 3.1],
					<br /> ["QUARTER", 4.25],
					<br /> ["ONE", 90],
					<br /> ["FIVE", 55],
					<br /> ["TEN", 20],
					<br /> ["TWENTY", 60],
					<br /> ["ONE HUNDRED", 100] ]
				</pre>
			</div>
			<div className="glass">
				<h4>
					<small>This is the </small>solution
				</h4>
				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let result = [];
  let unit = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };
  let totalInDrawer = cid.reduce((acc, current) => acc + current[1], 0);
  if (totalInDrawer < change) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  if (totalInDrawer === change) {
    return {status: "CLOSED", change: cid};
  }
  for (let i = cid.length - 1; i >= 0; i--) {
    let currencyName = cid[i][0];
    let currencyUnit = unit[currencyName];
    let currencyAmount = cid[i][1];
    if (change >= currencyUnit && currencyAmount > 0) {
      let needed = Math.min(Math.floor(change / currencyUnit) * currencyUnit, currencyAmount);
      change -= needed;
      change = Math.round(change * 100) / 100;
      result.push([currencyName, needed]);
    }
  }
  if (change > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  return {status: "OPEN", change: result};
}`}
				</SyntaxHighlighter>
			</div>
		</>
	)
}

function JSProjects() {
	const [currentWindow, setCurrentWindow] = useState('CashRegister') //introduction
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
