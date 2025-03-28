const getCartFromLocalStorage=()=>{
    const storedCartString = localStorage.getItem("cart");
    if(storedCartString){
        const storedCart = JSON.parse(storedCartString)
        return storedCart
    }
    return []
}


const saveCartToLocalStorage = cart =>{
    const stringified = JSON.stringify(cart)
    localStorage.setItem("cart",stringified)
}

const addItemToLocalStorage = id =>{
    const cart = getCartFromLocalStorage();
    const newCart = [...cart,id]
    saveCartToLocalStorage(newCart)
}

export{getCartFromLocalStorage as GetLocalCart
    ,addItemToLocalStorage as addLocalCart
}