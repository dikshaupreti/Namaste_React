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
let heading = React.createElement('h1', {id: "heading"}, [
    React.createElement('div', {id: 'child1'}, [
        React.createElement('h1', {}, 'Hii daddy'),
        React.createElement('h2', {}, 'Hiiiiiiiii'),
    ]),
    React.createElement('div', {id: 'child2'}, [
        React.createElement('h1', {}, 'Hii chhiiii'),
        React.createElement('h2', {}, 'Hiiiiiiiii'),
    ])
])
let root= ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)
