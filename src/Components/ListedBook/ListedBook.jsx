import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { localStorageCheck } from '../Utility/LocalStorage';
import Read from '../Read/Read';


const ListedBook = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [listBook, setListBook] = useState([])
    const bookList = useLoaderData()

    useEffect(() => {
        const localStorage = localStorageCheck()
        const listedBook = bookList.filter(list => localStorage.includes(list.id))
        setListBook(listedBook);
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

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBook;