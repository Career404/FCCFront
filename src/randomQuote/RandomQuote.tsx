import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { FaQuoteRight, FaTwitter, FaTumblr } from 'react-icons/fa'
import './randomQuote.css'

async function fetchQuoteData() {
	const response = await fetch(
		'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
		{ method: 'GET' }
	)
	const result = await response.json()
	return result
}
const quoteData = await fetchQuoteData()

function RandomQuote({
	quoteData: {
		quotes: {},
	},
}) {
	const [quote, setQuote] = useState({
		quote: 'Life isn’t about getting and having, it’s about giving and being.',
		author: 'Kevin Kruse',
	})

	function newQuote() {
		setQuote(
			quoteData.quotes[Math.floor(Math.random() * quoteData.quotes.length)]
		)
	}
	return (
		<div className="randomQuote">
			<div id="quote-box">
				<div className="quote-text">
					<FaQuoteRight />
					<span id="text">{quote.quote}</span>
				</div>
				<div className="quote-author">
					- <span id="author">{quote.author}</span>
				</div>
				<div className="buttons">
					<a
						className="button"
						id="tweet-quote"
						title="Tweet this quote!"
						target="_blank"
						href="https://www.twitter.com/intent/tweet"
					>
						<FaTwitter />
					</a>
					<a
						className="button"
						id="tumblr-quote"
						title="Post this quote on tumblr!"
						target="_blank"
						href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Bill%20Cosby&amp;content=In%20order%20to%20succeed%2C%20your%20desire%20for%20success%20should%20be%20greater%20than%20your%20fear%20of%20failure.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button"
					>
						<FaTumblr />
					</a>
					<button className="button" id="new-quote" onClick={newQuote}>
						New quote
					</button>
				</div>
			</div>
		</div>
	)
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RandomQuote quoteData={quoteData} />
	</React.StrictMode>
)
