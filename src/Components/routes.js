import About from "./About"
import Login from "./login"
import App from "../App"
import ErrorPage from "./ErrorPage"
import AddFurniture from "./AddFurniture"


const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />

    },
    {
        path: "/about",
        element: <About/>,
        errorElement: <ErrorPage />
    },
    {
        path:"/login",
        element: <Login/>,
        errorElement: <ErrorPage />
    },
    {
        path: "/AddFurniture",
        element: <AddFurniture/>,
        errorElement: <ErrorPage/>
    }
]

export default routes;