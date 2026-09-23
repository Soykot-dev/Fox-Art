// WhiteList
const getWhiteList = () => {

    const storedWhiteListSTR = localStorage.getItem("whiteList");

    if (storedWhiteListSTR) {
        const storedWhiteList = JSON.parse(storedWhiteListSTR);
        return storedWhiteList;
    }
    else {
        return [];
    }
}

const addToWhiteList = (id) => {

    const storedWhiteListData = getWhiteList();

    if (storedWhiteListData.includes(id)) {
        alert("Already available in your white list");
    }
    else {
        storedWhiteListData.push(id);
        const data = JSON.stringify(storedWhiteListData);
        localStorage.setItem('whiteList', data)
    }
}

// Cart
const getCart = () => {

    const storedCartSTR = localStorage.getItem("cart");

    if (storedCartSTR) {
        const storedCart = JSON.parse(storedCartSTR);
        return storedCart;
    }
    else {
        return [];
    }
};


const addToCart = (id) => {

    const storedCartData = getCart();

    if (storedCartData.includes(id)) {
        alert("Already available in your cart");
    }
    else {
        storedCartData.push(id);

        const data = JSON.stringify(storedCartData);

        localStorage.setItem("cart", data);
    }
};



export { addToWhiteList, addToCart };