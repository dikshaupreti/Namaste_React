import React from 'react'
import ReactDOM from 'react-dom/client'
/**
 * < div id= "parent">
 *      <div id= "child1">
 *              <h1>Hii daddy</h1>
 *              <h2> hiiiiii </h2>
 *       </div>
 *      <div id= "child2">
            <h1>Hii chhiiii</h1>
 *          <h2> hiiiiii </h2>
 *      </div>
 * </div>
 * 
 */
// let heading1 = React.createElement('h1', {id: "heading"}, [
//     React.createElement('div', {id: 'child1'}, [
//         React.createElement('h1', {}, 'Hii daddy'),
//         React.createElement('h2', {}, 'Hiiiiiiiii'),
//     ]),
//     React.createElement('div', {id: 'child2'}, [
//         React.createElement('h1', {}, 'Hii chhiiii'),
//         React.createElement('h2', {}, 'Hiiiiiiiii'),
//     ])
// ])
//console.log(heading1)
// component inside react element
let heading2 = (<div>
    <div>
        <h1>hiiii</h1>
        <Section />
        <Section></Section>
        {   /** as compoent are basically function only */
            Section()}
    </div>
</div>)
console.log(heading2)
// other way of writing component
const Section = function() {
    <div>
        <h1>diksha</h1>
    </div>
}
    
const num = 1000
const Footer = () => {
    return (
        <div>
    <div>
        <h1>hiiii</h1>
        {heading2} {num + 2000} 
        <Section />
    </div>
    </div>
    )
}
let root= ReactDOM.createRoot(document.getElementById('root'))
root.render(<Footer />)
