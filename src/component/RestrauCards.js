import { Link } from "react-router-dom"
const RestrauCart = ({title, price, thumbnail, id}) =>{
    return (    
        <Link to ={`/details/${id}`} >
            <div className='card'>
            <div className='food-logo'>
                <img src={thumbnail}/>
            </div>
            <div className='card-content'>
                <h3>{title}</h3>
                <h4>Rs{price}</h4>
                <h4>Biryani, north-indian</h4>
            </div>
            </div>
        </Link>   
        )
}

export default RestrauCart