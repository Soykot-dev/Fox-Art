import { useLoaderData } from "react-router";
import Banner from "../../Components/Banner/Banner";
import Shirts from "../../Components/Shirts/Shirts";

const Home = () => {
    const data = useLoaderData();
    return (
        <div className="">
            <Banner />
            <Shirts data={data} />
        </div>
    );
};

export default Home;