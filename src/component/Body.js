import { cartData } from '../constants/restraConstant'
import RestrauCart from './RestrauCards'
import { useState, useEffect } from 'react'
import ShimmerUi from './ShimmerUi'

const Body = () => {
    const [cart, setCart ] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [searchText, setSearchText] = useState('')
    
    const updateCart = () => {
        let filteredData = cart.filter((item) => item.rating >= 4.4)
        setFilteredData(filteredData)
    }

    const fetchData = async () => {
        const data = await fetch('https://dummyjson.com/products/')
        const json = await data.json()
        json.products.length = 6
        console.log(json.products)
        setCart(json.products)
        setFilteredData(json.products)
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    const getSearchedProduct = (value) => {
        console.log(value)
        setSearchText(value)
        let filteredData =cart.filter((item) => item?.title?.toLowerCase()?.includes(value))
        console.log(filteredData)
        setFilteredData(filteredData)
    }
    
    
    return ((filteredData.length === 0  && searchText.length === 0) ? <ShimmerUi/> : (<div className='container'>
            <h3>Search for the products</h3>
            <input placeholder='search for the product'  onChange={(e)=> getSearchedProduct(e.target.value)} value={searchText}/>
            <button onClick={() => updateCart()}>Get the highest quantity product</button>
            <button onClick={() => setFilteredData(cart)}>refresh the cart</button>
            <div className='res'>
            {
                filteredData &&  filteredData.length > 0 && filteredData.map((item) => 
                    (
                        <RestrauCart {...item}/>   
                    )
                )
            }
            </div>
    </div>))
}
export default Body