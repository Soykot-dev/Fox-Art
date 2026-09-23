import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
// import ProductDetails from "../Components/Shirts/ProductDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                loader: () => fetch("t-shirt-data.json"),
                path: "/",
                Component: Home
            },
            // {
            //     path: "/ProductDetails/:id",
            //     Component: ProductDetails
            // }
        ]
    },
]);