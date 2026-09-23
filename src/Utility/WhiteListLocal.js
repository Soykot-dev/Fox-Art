const getWhiteList = () => {

    const storedWhiteListSTR = localStorage.getItem('whiteList');

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

export { addToWhiteList }