import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
//import { } from 'react-icons/fa'
import './PomodoroClock.css'

export default function PomodoroClock() {
	return (
		<div>
			<h1>Pomodoro Clock</h1>
		</div>
	)
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<PomodoroClock />
	</React.StrictMode>
)
