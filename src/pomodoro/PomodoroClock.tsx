import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { FiPlay, FiPause, FiRefreshCw } from 'react-icons/fi'
import NumberControl from './NumberControl'
import './PomodoroClock.css'

export default function PomodoroClock() {
	const [breakLength, setBreakLength] = useState<number>(5)
	const [sessionLength, setSessionLength] = useState<number>(25)
	const [isSession, setIsSession] = useState<boolean>(true)
	const [timeLeft, setTimeLeft] = useState<number>(25 * 60 * 1000)
	const [timerInterval, setTimerInterval] = useState<ReturnType<
		typeof setInterval
	> | null>(null)
	const [isRunning, setIsRunning] = useState<boolean>(false)
	const [testMode, setTestMode] = useState(false)
	const beep = new Audio('/BeepSound.wav')

	const timerRun = () => {
		setTimerInterval(
			setInterval(() => {
				setTimeLeft((prevTimeLeft) => prevTimeLeft - 1000)
			}, 1000)
		)
		setIsRunning(true)
	}
	const testTimerRun = () => {
		setTimerInterval(
			setInterval(() => {
				setTimeLeft((prevTimeLeft) => prevTimeLeft - 1000)
			}, 100)
		)
		setIsRunning(true)
	}
	const timerPause = () => {
		if (timerInterval) {
			clearInterval(timerInterval)
			setTimerInterval(null)
			setIsRunning(false)
		}
	}
	const handleReset = () => {
		clearInterval(timerInterval!)
		setBreakLength(5)
		setSessionLength(25)
		setIsSession(true)
		setTimeLeft(25 * 60 * 1000)
		setTimerInterval(null)
		setIsRunning(false)
	}
	const timerOver = () => {
		timerPause()
		beep.addEventListener(
			'canplaythrough',
			() => {
				beep.play()
			},
			{ once: true }
		)
		setTimeout(() => beep.pause(), 1000)
		setIsSession(!isSession)
		!testMode ? timerRun() : testTimerRun()
	}
	const formatTime = (time: number): string => {
		const minutes = Math.floor(time / 60000)
		const seconds = ((time % 60000) / 1000).toFixed(0)
		return `${minutes}:${Number(seconds) < 10 ? '0' : ''}${seconds}`
	}

	useEffect(() => {
		if (timeLeft <= 0) {
			timerOver()
		}
	}, [timeLeft])

	useEffect(() => {
		if (isRunning) {
			timerPause()
		}
		isSession
			? setTimeLeft(sessionLength * 60 * 1000)
			: setTimeLeft(breakLength * 60 * 1000)
	}, [sessionLength, breakLength])

	useEffect(() => {
		if (!isSession && isRunning) {
			timerPause()
			setTimeLeft(breakLength * 60 * 1000)

			!testMode ? timerRun() : testTimerRun()
		} else if (isSession && isRunning) {
			timerPause()
			setTimeLeft(sessionLength * 60 * 1000)

			!testMode ? timerRun() : testTimerRun()
		} else
			isSession
				? setTimeLeft(sessionLength * 60 * 1000)
				: setTimeLeft(breakLength * 60 * 1000)
	}, [isSession])

	return (
		<div id="container">
			<h1 className="main-title">Pomodoro Clock</h1>
			<div className="controls">
				<NumberControl
					defaultValue={breakLength}
					minValue={1}
					maxValue={60}
					title="Break"
					callback={setBreakLength}
				/>
				<button
					className="sessionSwitch"
					onClick={() => setIsSession(!isSession)}
				>
					{isSession === true ? ' Take a break ' : 'Ready for the session'}
				</button>

				<NumberControl
					defaultValue={sessionLength}
					minValue={1}
					maxValue={60}
					title="Session"
					callback={setSessionLength}
				/>
			</div>
			<div className="timer">
				<div id="timer-label">{isSession ? 'Session' : 'Break'}</div>
				<div id="time-left">{formatTime(timeLeft)}</div>
			</div>
			<div className="timer-control">
				<button
					id="start_stop"
					onClick={() =>
						isRunning ? timerPause() : !testMode ? timerRun() : testTimerRun()
					}
				>
					<FiPlay />
					<FiPause />
				</button>
				<span> &nbsp; </span>
				<button id="reset" onClick={handleReset}>
					<FiRefreshCw />
				</button>
			</div>
			<label htmlFor="testMode">
				Enable test mode (10x faster time)
				<input
					type="checkbox"
					style={{ margin: '25px', scale: '2' }}
					id="testMode"
					onChange={() => setTestMode(!testMode)}
					checked={testMode}
				></input>
			</label>
		</div>
	)
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<PomodoroClock />
)
