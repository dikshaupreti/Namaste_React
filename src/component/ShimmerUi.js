import '../../index.css'
let content = 'fgdfgf'
let data = ['gdfg', 'gg', 'gg', 'gg', 'gg', 'ggg', 'gg', 'gg']

const ShimmerUi = () =>{
   return (
    <div className='shimmer-container'>
    {data.map(()=>
        (   
                <div className='card'>
                <div className='food-logo'>
                </div>
                
                <div className='card-content'>
                </div>     
                </div>
        )
    )} 
    </div>
   ) 
    
}
export default ShimmerUi