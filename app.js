import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Body from './src/component/Body'
import { Header } from './src/component/Header'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import { Error } from './src/component/Error'
import ProductDetails from './src/component/ProductDetails'
import { lazy, Suspense } from 'react'

const About = lazy(() => import('./src/component/About'))
const Contact = lazy(() => import('./src/component/Contact'))

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
                element: <Suspense fallback={<div>hiiii loading</div>}><About/></Suspense>,
            },
            {   path: '/contact',
            element: <Suspense fallback={<div>hiiii loading</div>}><Contact/></Suspense>,
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
