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

	const [cid, setCid] = useState([
		['PENNY', 1.01],
		['NICKEL', 2.05],
		['DIME', 3.1],
		['QUARTER', 4.25],
		['ONE', 90],
		['FIVE', 55],
		['TEN', 20],
		['TWENTY', 60],
		['ONE HUNDRED', 100],
	])

	return (
		<>
			<div className="cashMachine">
				<div className="lists">
					<div className="goods">
						<p> Start shopping by clicking on the items you want</p>
						{goods.map((good) => (
							<div
								key={good.name}
								className="goods__item"
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
							Remove items by clicking on them
						</p>{' '}
						<br />
						<p>
							{cart?.length !== 0
								? Object.values(cart).map((item) => (
										<p
											key={item.name}
											className="cart__item"
											onClick={() => handleRemoveItem(item)}
										>
											{item.name}, <span>{item.quantity}</span>
										</p>
								  ))
								: null}
						</p>{' '}
						<br />
						<p>Total price: ${total.toFixed(2)}</p>
					</div>
				</div>
				<div className="checkout">
					<button className="checkout__button">Checkout</button>
				</div>
			</div>
		</>
	)
}
