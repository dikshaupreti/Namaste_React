import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Body from './src/component/Body'
import { Header } from './src/component/Header'




// const RestrauCart = ({title, price, thumbnail}) =>{
//     return (       
//         <div className='card'>
//             <div className='food-logo'>
//                 <img src={thumbnail}/>
//             </div>
//             <div className='card-content'>
//                 <h3>{title}</h3>
//                 <h4>Rs{price}</h4>
//                 <h4>Biryani, north-indian</h4>
//             </div>
//         </div>)

// }

        
// const Body = () => {
//     return (<div className='container'>
//             <h3>Search for the food</h3>
//             <div className='res'>
//             {
//                 cartData.map((item) => 
//                     (
//                         <RestrauCart {...item}/>   
//                     )
//                 )
//             }
                
//             </div>
            
//     </div>)
// }  

const App = () => {
    return <>
        <Header /> <Body/>
    </>
}
let root= ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
