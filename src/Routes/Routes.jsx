import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import ProductDetails from "../Components/Shirts/ProductDetails";
import Cart from "../pages/Cart/Cart";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                loader: () => fetch("/t-shirt-data.json"),
                path: "/",
                Component: Home
            },
            {
                path: "/ProductDetails/:id",
                loader: () => fetch("/t-shirt-data.json"),
                Component: ProductDetails
            },
            {
                path: "/cart",
                loader: () => fetch("/t-shirt-data.json"),
                Component: Cart
            }
        ]
    },
]);