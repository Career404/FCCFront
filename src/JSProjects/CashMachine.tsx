import { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import './CashMachine.css'

interface CartItem {
	id: number
	name: string
	price: number
	quantity: number
}

const goods = [
	{
		id: 0,
		name: 'Milk, (0.25 liter)',
		price: 0.26,
	},
	{
		id: 1,
		name: 'Loaf of Fresh White Bread (125 g)',
		price: 0.82,
	},
	{
		id: 2,
		name: 'Rice (white), (0.10 kg)',
		price: 0.41,
	},
	{
		id: 3,
		name: 'Eggs (regular) (10)',
		price: 0.82,
	},
	{
		id: 4,
		name: 'Local Cheese (0.10 kg)',
		price: 1.17,
	},
	{
		id: 5,
		name: 'Chicken Fillets (0.15 kg)',
		price: 1.79,
	},
	{
		id: 6,
		name: 'Beef Round (0.15 kg)',
		price: 2.25,
	},
	{
		id: 7,
		name: 'Apples (0.30 kg)',
		price: 1.45,
	},
	{
		id: 8,
		name: 'Banana (0.25 kg)',
		price: 0.4,
	},
	{
		id: 9,
		name: 'Oranges (0.30 kg)',
		price: 1.24,
	},
	{
		id: 10,
		name: 'Tomato (0.20 kg)',
		price: 0.91,
	},
	{
		id: 11,
		name: 'Potato (0.20 kg)',
		price: 0.55,
	},
	{
		id: 12,
		name: 'Onion (0.10 kg)',
		price: 0.27,
	},
	{
		id: 13,
		name: 'Lettuce (0.20 head)',
		price: 0.39,
	},
	{
		id: 14,
		name: 'Gas (10 gallons)',
		price: 45.2,
	},
	{
		id: 15,
		name: 'Xbox one x',
		price: 659,
	},
]
export default function CashMachine() {
	const [cart, setCart] = useState<CartItem[]>([])
	let total = 0
	if (cart.length > 0) {
		const totalArr = cart.map((item) =>
			item.quantity === 1 ? item.price : item.price * item.quantity
		)
		total = totalArr.reduce((acc, value) => acc + value)
	} else {
		total = 0
	}

	function handleAddItem(good: { id: number; name: string; price: number }) {
		const foundProduct = cart.find((item) => item.id === good.id)
		if (foundProduct) {
			//
			setCart(
				cart.filter((item) =>
					item.id === good.id ? (item.quantity += 1) : item
				)
			)
		} else {
			setCart([
				...cart,
				{ id: good.id, name: good.name, price: good.price, quantity: 1 },
			])
		}
	}
	function handleRemoveItem(good: {
		id: number
		name: string
		price: number
		quantity: number
	}) {
		if (good.quantity > 1) {
			setCart(
				cart.map((item) =>
					item.id === good.id ? { ...item, quantity: item.quantity - 1 } : item
				)
			)
		} else {
			setCart((prevCart) => prevCart.filter((item) => item.id !== good.id))
		}
	}

	const [cid, setCid] = useState<
		[unitName: string, current: number, unitCost: number][]
	>([
		['PENNY', 1.01, 0.01],
		['NICKEL', 2.05, 0.05],
		['DIME', 3.1, 0.1],
		['QUARTER', 4.25, 0.25],
		['ONE', 90, 1],
		['FIVE', 55, 5],
		['TEN', 20, 10],
		['TWENTY', 60, 20],
		['ONE HUNDRED', 100, 100],
	])
	const [payWith, setPayWith] = useState<
		[unitName: string, current: number, unitCost: number][]
	>([
		['PENNY', 0, 0.01],
		['NICKEL', 0, 0.05],
		['DIME', 0, 0.1],
		['QUARTER', 0, 0.25],
		['ONE', 0, 1],
		['FIVE', 0, 5],
		['TEN', 0, 10],
		['TWENTY', 0, 20],
		['ONE HUNDRED', 0, 100],
	])

	let totalInDrawer = cid
		.reduce((acc, current) => acc + Number(current[1]), 0)
		.toFixed(2)

	let totalPayment = payWith
		.reduce((acc, current) => acc + Number(current[1]), 0)
		.toFixed(2)

	function handleAddUnit(unit: string) {
		setPayWith(
			payWith.map((item) => {
				return item[0] === unit
					? [item[0], Number((item[1] += item[2]).toFixed(2)), item[2]]
					: item
			})
		)
	}
	function removeSingleUnit(unit: string) {
		setPayWith(
			payWith.map((item) => {
				return item[0] === unit && item[1] > 0
					? [item[0], Number((item[1] -= item[2]).toFixed(2)), item[2]]
					: item
			})
		)
	}
	const [transactionResult, setTransactionResult] = useState<{
		status: string
		change: any[] | null
	} | null>(null)

	function checkCashRegister() {
		//'God' function
		let change = Number(totalPayment) - total
		//check if given cash less than price
		if (Number(totalPayment) < total) {
			setTransactionResult({
				status: 'Not enough money for transaction',
				change: null,
			})
			return
		}
		//check if cash is way over the price
		if (change > 100) {
			setTransactionResult({
				status: 'Please use recalculate the payment',
				change: null,
			})
			return
		}
		//check if not enough money in cash machine
		if (Number(totalInDrawer) < change) {
			setTransactionResult({
				status: 'INSUFFICIENT FUNDS - not enough change in cash drawer',
				change: null,
			})
			return
		}
		//Add recieved cash to drawer:
		let tempCid: [unitName: string, current: number, unitCost: number][] =
			cid.map((item, index) => [item[0], item[1] + payWith[index][1], item[2]])

		//calculate the needed change
		let result: any[] = []
		for (let i = cid.length - 1; i >= 0; i--) {
			let currencyName = cid[i][0]
			let currencyUnit = cid[i][2]
			let currencyAmount = cid[i][1]
			if (change >= currencyUnit && currencyAmount > 0) {
				let needed = Math.min(
					Math.floor(change / currencyUnit) * currencyUnit,
					currencyAmount
				)
				change -= needed
				change = Math.round(change * 100) / 100
				result.push([currencyName, needed])
			}
		}
		//take change from the drawer:
		tempCid = tempCid.map((item, index) =>
			item[0] === result[0]
				? [item[0], item[1] - result[index][1], item[2]]
				: item
		)
		setCid(tempCid)
		setTransactionResult({ status: 'OPEN', change: result })
		return
	}

	return (
		<>
			<div className="cashMachine">
				<div className="lists">
					<div className="goods">
						<p> Start shopping by clicking on the items you want</p>
						{goods.map((good) => (
							<div
								key={good.name}
								className="goods__item item"
								onClick={() => handleAddItem(good)}
							>
								<p>{good.name}</p>
								<p>{good.price}$</p>
							</div>
						))}
					</div>
					<div className="cart">
						<p>
							<FaShoppingCart />
							{'   '}
							Remove items by clicking on them, or{' '}
							<button onClick={() => setCart([])} style={{ color: 'black' }}>
								Remove all
							</button>
						</p>{' '}
						<br />
						<div>
							{cart?.length !== 0
								? Object.values(cart).map((item) => (
										<p
											key={item.name}
											className="cart__item item"
											onClick={() => handleRemoveItem(item)}
										>
											{item.name}, <span>{item.quantity}</span>
										</p>
								  ))
								: null}
						</div>
						<br />
					</div>
				</div>
				<div className="checkout">
					<div className="checkout__money">
						<p>
							Total price:{' '}
							<span style={{ fontSize: '22px' }}>${total.toFixed(2)}</span>
						</p>{' '}
						<p>
							{' '}
							Cash machine balance: <span>{totalInDrawer} $</span>
						</p>{' '}
					</div>
					<br />
					<div>
						<p>
							Pay with{' '}
							<span style={{ fontSize: '22px' }}>{totalPayment} $ </span>
						</p>{' '}
						<hr />
						<p>
							<button
								style={{ color: 'black' }}
								onClick={() =>
									setPayWith([
										['PENNY', 0, 0.01],
										['NICKEL', 0, 0.05],
										['DIME', 0, 0.1],
										['QUARTER', 0, 0.25],
										['ONE', 0, 1],
										['FIVE', 0, 5],
										['TEN', 0, 10],
										['TWENTY', 0, 20],
										['ONE HUNDRED', 0, 100],
									])
								}
							>
								Reset all
							</button>
							...or right-click on each button to remove the units one by one
						</p>
						{payWith.map((cash) => (
							<button
								key={cash[0]}
								onClick={() => handleAddUnit(cash[0] as string)}
								onContextMenu={(e) => {
									e.preventDefault()
									removeSingleUnit(cash[0] as string)
								}}
								style={{ color: 'black', fontSize: '16px' }}
							>
								{cash[0]}
								{cash[1] !== 0 ? (
									<b style={{ color: 'black' }}>
										{' '}
										- currently {cash[1].toFixed(2)} $
									</b>
								) : null}
							</button>
						))}{' '}
					</div>
					<br />
					<button
						className="checkout__button"
						onClick={() => checkCashRegister()}
					>
						Checkout
					</button>
				</div>
				{transactionResult ? (
					<div>
						<p>Cash register: {transactionResult.status}</p>
						{transactionResult.change ? (
							<p>
								Your change: <br />
								{transactionResult.change.map((unit) =>
									unit.length > 0 ? (
										<span key={unit[0]}>
											{unit[0]} -{' '}
											<span style={{ fontSize: '22px' }}>{unit[1]}$ </span>
											<br />
										</span>
									) : null
								)}
								<br />
								total:{' '}
								<span style={{ fontSize: '22px' }}>
									{transactionResult.change
										.reduce((acc, current) => acc + current[1], 0)
										.toFixed(2)}{' '}
									$
								</span>
							</p>
						) : null}
					</div>
				) : null}
			</div>
		</>
	)
}
