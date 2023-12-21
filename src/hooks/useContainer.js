import { useEffect, useState } from "react";

const useContainer = () => {
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

    const details = {
        name: 'diksha',
        education: 'mca'
    }
    
    return {
        cart,
        filteredData,
        searchText,
        updateCart,
        details,
        getSearchedProduct
    }
        
}
export default useContainer