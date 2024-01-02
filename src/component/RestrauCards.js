const RestrauCart = ({title, price, thumbnail, id,setSelectedRestrant, selectedRestrant }) =>{
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
            <p>selected restrant is {selectedRestrant}</p>
            <button onClick={() => setSelectedRestrant('dikshs')}>get the selected item</button>
        </div>
    )
}

export const withRestrauCart = (RestrauCards) => {
    return (props) => {
        return (
            <div>
                <h4>RestrauCards promoted</h4>
                <RestrauCards {...props} />
            </div>
        )
    }
}
export default RestrauCart



