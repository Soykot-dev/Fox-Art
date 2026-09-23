import { addToCart, addToWhiteList } from "./LocalStorage";


const handleAddToWhiteList = (id) => {
    addToWhiteList(id);
}

const handleAddToCart = (id) => {
    addToCart(id);
}
export { handleAddToWhiteList, handleAddToCart };