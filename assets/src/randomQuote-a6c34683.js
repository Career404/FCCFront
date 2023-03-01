import{c as r,j as t,R as u,r as n}from"../client-b452be96.js";import{G as a}from"../iconBase-5a5a595f.js";function i(e){return a({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1.8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5.9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z"}}]})(e)}function h(e){return a({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function d(e){return a({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"}}]})(e)}async function l(){const e=await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",{method:"GET"});return console.log("got data"),await e.json()}const o=await l();function m({quoteData:{quotes:{}}}){const[e,c]=n.useState({quote:"Life isn’t about getting and having, it’s about giving and being.",author:"Kevin Kruse"});n.useEffect(()=>s,[]);function s(){c(o.quotes[Math.floor(Math.random()*o.quotes.length)])}return t.jsx("div",{className:"randomQuote",children:t.jsxs("div",{id:"quote-box",children:[t.jsxs("div",{className:"quote-text",children:[t.jsx(d,{}),t.jsx("span",{id:"text",children:e.quote})]}),t.jsxs("div",{className:"quote-author",children:["- ",t.jsx("span",{id:"author",children:e.author})]}),t.jsxs("div",{className:"buttons",children:[t.jsx("a",{className:"button",id:"tweet-quote",title:"Tweet this quote!",target:"_blank",href:"https://www.twitter.com/intent/tweet",children:t.jsx(h,{})}),t.jsx("a",{className:"button",id:"tumblr-quote",title:"Post this quote on tumblr!",target:"_blank",href:"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Bill%20Cosby&content=In%20order%20to%20succeed%2C%20your%20desire%20for%20success%20should%20be%20greater%20than%20your%20fear%20of%20failure.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button",children:t.jsx(i,{})}),t.jsx("button",{className:"button",id:"new-quote",onClick:s,children:"New quote"})]})]})})}r.createRoot(document.getElementById("root")).render(t.jsx(u.StrictMode,{children:t.jsx(m,{quoteData:o})}));
