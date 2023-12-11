import { useState } from "react"
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
                <li>Home</li>
                <li>About</li>
                <li>Cart Item</li>
                <button onClick={updateBtnState}>{btnState}</button>
            </ul>
        </div>
    </div>)
}
