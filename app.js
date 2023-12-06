import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


const Header = () => (
    <div className='header'>
        <div className='logo'>
            <img src= "https://images-platform.99static.com//Ba6VdSQsbU4OpiyQEzLi7yHy9KQ=/440x521:1494x1575/fit-in/500x500/99designs-contests-attachments/127/127439/attachment_127439993" alt= "app logo" /> 
        </div>
        <div className='nav-item'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Cart Item</li>
            </ul>
        </div>
    </div>
)

const RestrauCart = ({title, price, thumbnail}) =>{
    return (       
        <div className='card'>
            <div className='food-logo'>
                <img src={thumbnail}/>
            </div>
            <div className='card-content'>
                <h3>{title}</h3>
                <h4>Rs{price}</h4>
                <h4>Biryani, north-indian</h4>
            </div>
        </div>)

}

        
const cartData = [
    {
        "id": 59,
        "title": "Spring and summershoes",
        "price": 20,
        "quantity": 3,
        "total": 60,
        "discountPercentage": 8.71,
        "discountedPrice": 55,
        "thumbnail": "https://i.dummyjson.com/data/products/59/thumbnail.jpg"
      },
      {
        "id": 88,
        "title": "TC Reusable Silicone Magic Washing Gloves",
        "price": 29,
        "quantity": 2,
        "total": 58,
        "discountPercentage": 3.19,
        "discountedPrice": 56,
        "thumbnail": "https://i.dummyjson.com/data/products/88/thumbnail.jpg"
      },
      {
        "id": 18,
        "title": "Oil Free Moisturizer 100ml",
        "price": 40,
        "quantity": 2,
        "total": 80,
        "discountPercentage": 13.1,
        "discountedPrice": 70,
        "thumbnail": "https://i.dummyjson.com/data/products/18/thumbnail.jpg"
      },
      {
        "id": 95,
        "title": "Wholesale cargo lashing Belt",
        "price": 930,
        "quantity": 1,
        "total": 930,
        "discountPercentage": 17.67,
        "discountedPrice": 766,
        "thumbnail": "https://i.dummyjson.com/data/products/95/thumbnail.jpg"
      }
]
const Body = () => {
    return (<div className='container'>
            <h3>Search for the food</h3>
            <div className='res'>
            {
                cartData.map((item) => 
                    (
                        <RestrauCart {...item}/>   
                    )
                )
            }
                
            </div>
            
    </div>)
}  

const App = () => {
    return <>
        <Header /> <Body/>
    </>
}
let root= ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
