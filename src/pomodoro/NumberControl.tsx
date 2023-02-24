import React from 'react'
import './NumberControl.css'

interface ControlProps {
	title?: string
	defaultValue?: number
	callback?: (value: any) => void
	//currentNum is passed to callback every time the value changes
	minValue?: number
	maxValue?: number
}

export default function NumberControl({
	title = 'Number',
	defaultValue = 10,
	callback = (e: string) => {
		console.log(`Current ${title} value is: ${e}`)
	},
	minValue,
	maxValue,
}: ControlProps) {
	const [currentNum, setCurrentNum] = React.useState<number>(defaultValue)
	if (minValue && currentNum < minValue) {
		setCurrentNum(minValue)
	}
	if (maxValue && currentNum > maxValue) {
		setCurrentNum(maxValue)
	}
	function handleDecrement() {
		setCurrentNum(currentNum - 1)
	}
	function handleIncrement() {
		setCurrentNum(currentNum + 1)
	}

	React.useEffect(() => callback(currentNum), [currentNum])
	return (
		<div className="NumberControl">
			{title ? <h5 className="ControlTitle">{title}</h5> : null}
			<div>
				<div
					className="label"
					id={`${title.toLowerCase().replace(/\s+/g, '')}-label`}
				>
					<button
						id={`${title.toLowerCase().replace(/\s+/g, '')}-decrement`}
						onClick={handleDecrement}
					>
						<svg
							stroke="currentColor"
							fill="none"
							strokeWidth="2"
							viewBox="0 0 24 24"
							strokeLinecap="round"
							strokeLinejoin="round"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line x1="12" y1="5" x2="12" y2="19"></line>
							<polyline points="19 12 12 19 5 12"></polyline>
						</svg>
					</button>
					<span id={`${title.toLowerCase().replace(/\s+/g, '')}-length`}>
						{currentNum}
					</span>
					<button
						id={`${title.toLowerCase().replace(/\s+/g, '')}-increment`}
						onClick={handleIncrement}
					>
						<svg
							stroke="currentColor"
							fill="none"
							strokeWidth="2"
							viewBox="0 0 24 24"
							strokeLinecap="round"
							strokeLinejoin="round"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line x1="12" y1="19" x2="12" y2="5"></line>
							<polyline points="5 12 12 5 19 12"></polyline>
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
}
