import '../../index.css'
let content = 'fgdfgf'
let data = ['gdfg', 'gg', 'gg', 'gg', 'gg', 'ggg', 'gg', 'gg']
console.log(data.length)

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
// data.map((item) => (
//     <div className='card'>
//         {item}
//     <div className='food-logo'>
//     </div>
//         <div className='card-content'>
//             <p>gkdfjgdfk</p>
//         </div>
//     </div>
// ))
export default ShimmerUi