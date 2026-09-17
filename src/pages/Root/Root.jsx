import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Header/Navbar";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-2">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;