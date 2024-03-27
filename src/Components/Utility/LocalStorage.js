import { toast } from "react-toastify"
const localStorageCheck = () => {
    const getLocalStorage = localStorage.getItem('read_book')
    if (getLocalStorage) {
        return JSON.parse(getLocalStorage)
    }
    return []
}


const saveLocalStorage = id => {
    const getStorage = localStorageCheck();
    const exists = getStorage.find(isId => isId === id)
    if (!exists) {
        toast.success("Books add to Read List")
        getStorage.push(id)
        localStorage.setItem('read_book', JSON.stringify(getStorage))
    }
    else {
        return toast.error("You have Already Read this book")
    }
}





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

    const checker = localStorageCheck()
    const checkLocal = checker.find(check => check === id)
    if (!checkLocal) {

        if (!exists) {
            toast.success("Books add to wishlist")
            getWishStorage.push(id)
            localStorage.setItem('wishlist_book', JSON.stringify(getWishStorage))
        }
        else {
            return toast.error("You have Already Read this book")
        }


    }
    else {
        return toast.error("You have Already Read this book")
    }


}








export { saveLocalStorage, saveWishLocalStorage, localStorageCheck, localWishStorageCheck }