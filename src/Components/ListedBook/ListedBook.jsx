import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ListedBook = () => {
    const [tabIndex, setTabIndex] = useState(0);

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

                </TabPanel>
                <TabPanel>
                    
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBook;