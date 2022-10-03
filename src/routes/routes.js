import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Countries from "../components/Countries";
import CountryDetail from "../components/CountryDetail";
import Home from "../components/Home";
import Main from "./Main";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <Main/>, 
        children: [
            {path: '/home', element: <Home/>},
            {path: '/about', element: <About/>},
            {
                path: '/countries', 
                element: <Countries/>, 
                loader: async () => fetch ('https://restcountries.com/v3.1/all')
            },
            {
                path: '/countries/:name', 
                element: <CountryDetail/>, 
                loader: async ({params}) => fetch(`https://restcountries.com/v3.1/name/${params.name}`),
            }
        ]
    }
])

export default router;