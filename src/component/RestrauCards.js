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

export default RestrauCart