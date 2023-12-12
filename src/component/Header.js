import { useState } from "react"
import { Link } from "react-router-dom"
export const Header = () => {
    const  [btnState, setBtnState]  = useState('Login')
    const updateBtnState = () => {
        if(btnState === 'Login') {
            setBtnState('Logout')
        }
        else {
            setBtnState('Login')
        }
    }
    return (<div className='header'>
        <div className='logo'>
            <img src= "https://images-platform.99static.com//Ba6VdSQsbU4OpiyQEzLi7yHy9KQ=/440x521:1494x1575/fit-in/500x500/99designs-contests-attachments/127/127439/attachment_127439993" alt= "app logo" /> 
        </div>
        <div className='nav-item'>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to= '/about'><li>About</li></Link>
                <Link to = '/contact'><li>Cart Item</li></Link>
                <button onClick={updateBtnState}>{btnState}</button>
            </ul>
        </div>
    </div>)
}
