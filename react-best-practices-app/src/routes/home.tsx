import { RouteObject } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductPage from "../pages/ProductPage";
import ErrorPage from "../pages/ErrorPage";

const homeRoutes: RouteObject[] = [
    {
        path: '/',
        element: <App />, // root layout
        errorElement: <ErrorPage />, // #23 สร้างเพจ  Global Error Page ใน React Router
        children: [
            { path: "", element: <HomePage /> },
            { path: "about", element: <AboutPage /> },
            { path: "product", element: <ProductPage /> }
        ]
    }
]

export default homeRoutes;