import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Body from './src/component/Body'
import { Header } from './src/component/Header'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import About from './src/component/About'
import Contact from './src/component/Contact'
import { Error } from './src/component/Error'
import ProductDetails from './src/component/ProductDetails'

const App = () => {
    return <>
        <Header /> <Outlet/>
    </>
}
const appRouter = createBrowserRouter(
    [{
        path: '/',
        element: <App/>,
        children: [
            {   path: '/',
                element: <Body/>,
            },
            {   path: '/about',
                element: <About/>,
            },
            {   path: '/contact',
                element: <Contact/>,
            },
            {
                path: '/details/:productId',
                element: <ProductDetails/>
            }
        ],
        errorElement: <Error/>

    }]
)

let root= ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router= {appRouter} />)
