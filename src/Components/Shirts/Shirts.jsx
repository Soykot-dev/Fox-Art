import { useEffect, useState } from "react";
import Shirt from "./Shirt";

const Shirts = ({ data }) => {
    // const [allShirts, setAllShirts] = useState([]);
    // useEffect(() => {
    //     fetch("t-shirt-data.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    // })
    return (
        <div className="grid grid-cols-4 gap-5 mt-5">
            {
                data.map(shirt => <Shirt key={shirt.id} shirt={shirt}></Shirt>)
            }
        </div>
    );
};

export default Shirts;