import { toast } from "react-toastify"
const localStorageCheck = () =>{
    const getLocalStorage = localStorage.getItem('read_book')
    if(getLocalStorage){
        return JSON.parse(getLocalStorage)
    }
    return []
}


const saveLocalStorage = id =>{
    const getStorage = localStorageCheck();
    const exists = getStorage.find(isId => isId === id)
    if(!exists){
        toast.success("successfuly")
        getStorage.push(id)
        localStorage.setItem('read_book', JSON.stringify(getStorage))
    }
    else{
        return toast.error("You have Already Read this book")
    }
}

export {saveLocalStorage, localStorageCheck}