import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { localStorageCheck } from '../Utility/LocalStorage';
import Read from '../Read/Read';
import { localWishStorageCheck } from '../Utility/LocalStorageWish';
import WishlistBook from '../WishlistBook/WishlistBook';


const ListedBook = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [listBook, setListBook] = useState([])
    const [wishlist, setWishList] = useState([])

    const bookList = useLoaderData()

    useEffect(() => {
        const localStorage = localStorageCheck()
        const listedBook = bookList.filter(list => localStorage.includes(list.id))
        setListBook(listedBook);
    }, [])

    useEffect(() => {
        const wishLocalStorage = localWishStorageCheck()
        const wisthListBook = bookList.filter(wish => wishLocalStorage.includes(wish.id))
        setWishList(wisthListBook)
    }, [])


    return (
        <div>
            <div className='bg-[#F3F3F3] p-4 rounded-2xl'>
                <h1 className='text-center font-bold text-4xl'>Books</h1>
            </div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                <TabPanel>
                    <div className='my-10 space-y-4'>
                        {
                            listBook.map(read => <Read key={read.id} read={read}></Read>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                        <div>
                            {
                              wishlist.map(wish => <WishlistBook key={wish.id} wish={wish}></WishlistBook>)  
                            }
                        </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBook;