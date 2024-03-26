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
        getStorage.push(id)
        localStorage.setItem('read_book', JSON.stringify(getStorage))
    }
}

export {saveLocalStorage, localStorageCheck}