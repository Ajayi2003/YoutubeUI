import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/common/Layout"
import Landingpage from "../pages/Landingscreen/Landingpage"

export const MainRoute = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index: true,
                element: <Landingpage/>
            }
        ]
    }
])