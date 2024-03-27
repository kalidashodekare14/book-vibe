import { toast } from "react-toastify"

const localWishStorageCheck = () => {
    const getWishLocalStorage = localStorage.getItem('wishlist_book')
    if (getWishLocalStorage) {
        return JSON.parse(getWishLocalStorage)
    }
    return []
}


const saveWishLocalStorage = id => {
    const getWishStorage = localWishStorageCheck();
    const exists = getWishStorage.find(isId => isId === id)
    if (!exists) {
        toast.success("successfuly")
        getWishStorage.push(id)
        localStorage.setItem('wishlist_book', JSON.stringify(getWishStorage))
    }
    else {
        return toast.error("Already Add")
    }
}


export { saveWishLocalStorage, localWishStorageCheck }