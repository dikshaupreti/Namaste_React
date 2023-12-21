import { cartData } from '../constants/restraConstant'
import RestrauCart from './RestrauCards'
import { useState, useEffect } from 'react'
import ShimmerUi from './ShimmerUi'
import TeamClass from './TeamClass'
import useContainer from '../hooks/useContainer'

const Body = () => {
    const {cart, filteredData, updateCart, details , getSearchedProduct, setFilteredData,searchText} = useContainer()

    return ((filteredData?.length === 0  && searchText?.length === 0) ? <ShimmerUi/> : (<div className='container'>
            <h3>Search for the products</h3>
            <input placeholder='search for the product'  onChange={(e)=> getSearchedProduct(e.target.value)} value={searchText}/>
            <TeamClass  {...details} />
            <button onClick={updateCart}>Get the highest quantity product</button>
            <button onClick={() => setFilteredData(cart)}>refresh the cart</button>
            <div className='res'>
            {
                filteredData &&  filteredData?.length > 0 && filteredData?.map((item) => 
                    (
                        <RestrauCart {...item} key={item.id}/>   
                    )
                )
            }
            </div>
    </div>))
}
export default Body