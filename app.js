import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Body from './src/component/Body'
import { Header } from './src/component/Header'

const App = () => {
    return <>
        <Header /> <Body/>
    </>
}
let root= ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
