import { cartData } from '../constants/restraConstant'
import RestrauCart from './RestrauCards'
import { useState } from 'react'

const Body = () => {
    const [cart, setCart ] = useState(cartData)
    const updateCart = () => {
        let filteredData = cart.filter((item) => item.quantity >= 2)
        setCart(filteredData)
    }
    return (<div className='container'>
            <h3>Search for the products</h3>
            <button onClick={() => updateCart()}>Get the highest quantity product</button>
            <button onClick={() => setCart(cartData)}>refresh the cart</button>
            <div className='res'>
            {
                cart.map((item) => 
                    (
                        <RestrauCart {...item}/>   
                    )
                )
            }
                
            </div>
            
    </div>)
}
export default Body