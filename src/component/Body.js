import { cartData } from '../constants/restraConstant'
import RestrauCart, {withRestrauCart} from './RestrauCards'
import { useState, useEffect, useContext } from 'react'
import ShimmerUi from './ShimmerUi'
import TeamClass from './TeamClass'
import useContainer from '../hooks/useContainer'
import UserContext from './context'

const Body = () => {
    const {cart, filteredData, updateCart, details , getSearchedProduct, setFilteredData,searchText} = useContainer()
    const [selectedRestrant, setSelectedRestrant] = useState('manisha')
    const {user, setUser} = useContext(UserContext)
    const RestrauCardsPromoted = withRestrauCart(RestrauCart)
    
    return ((filteredData?.length === 0  && searchText?.length === 0) ? <ShimmerUi/> : (<div className='container'>
            <h3>Search for the products</h3>
            <input placeholder='search for the product'  onChange={(e)=> getSearchedProduct(e.target.value)} value={searchText}/>
            <input placeholder='enter the user name'  onChange={(e)=> setUser({...user, name:e.target.value})} value={user.name}/>
            <input placeholder='enter the user email'  onChange={(e)=> setUser({...user, email:e.target.value})} value={user.email}/>
            <TeamClass  {...details} />
            <button onClick={updateCart}>Get the highest quantity product</button>
            <button onClick={() => setFilteredData(cart)}> refresh the cart</button>
            <p>selected restrant is {selectedRestrant}</p>
            <div className='res'>
            {
                filteredData &&  filteredData?.length > 0 && filteredData?.map((item) => 
                    (   item?.discountPercentage > 12 ?
                        <RestrauCart {...item} key={item.id} setSelectedRestrant ={setSelectedRestrant}  selectedRestrant={selectedRestrant} /> :
                        <RestrauCardsPromoted  {...item} key={item.id} setSelectedRestrant ={setSelectedRestrant}  selectedRestrant={selectedRestrant} />
                    )
                )
            }
            </div>
    </div>))
}
export default Body