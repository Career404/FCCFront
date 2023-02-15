import React from 'react'
import ReactDOM from 'react-dom/client'
import { FaQuoteRight, FaTwitter, FaTumblr } from 'react-icons/fa'
import './randomQuote.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<div className="randomQuote">
			<div id="quote-box">
				<div className="quote-text">
					<FaQuoteRight />
					<span id="text">
						In order to succeed, your desire for success should be greater than
						your fear of failure.
					</span>
				</div>
				<div className="quote-author">
					- <span id="author">Bill Cosby</span>
				</div>
				<div className="buttons">
					<a
						className="button"
						id="tweet-quote"
						title="Tweet this quote!"
						target="_top"
						href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22In%20order%20to%20succeed%2C%20your%20desire%20for%20success%20should%20be%20greater%20than%20your%20fear%20of%20failure.%22%20Bill%20Cosby"
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
					<button className="button" id="new-quote">
						New quote
					</button>
				</div>
			</div>
		</div>
	</React.StrictMode>
)
