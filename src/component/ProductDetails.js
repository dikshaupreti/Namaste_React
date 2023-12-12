import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"

const ProductDetails = () => {
    const {productId} = useParams()
    const [productDescription, setProductDescription] = useState()
    const fetchData = async() => {
        const data = await fetch(`https://dummyjson.com/products/1${productId}`)
        const result = await data.json()
        
        setProductDescription(result)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>   
            <h1> Hi the brand is {productDescription?.brand}</h1>
            <h3>The price is {productDescription?.price}</h3>
        </div>
    )
}

export default ProductDetails