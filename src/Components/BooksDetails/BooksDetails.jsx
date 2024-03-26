import { useLoaderData, useParams } from "react-router-dom";
import { saveLocalStorage } from "../Utility/LocalStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BooksDetails = () => {

    const books = useLoaderData();
    const { id } = useParams();
    const parseId = parseInt(id)
    const bookDetail = books.find(bId => bId.id === parseId)
    console.log(books)

    const { image, bookName, publisher, review, tags, author, yearOfPublishing, rating, totalPages, category } = bookDetail


    const handleRead = () => {
        toast("Read Successfully");
        saveLocalStorage(parseId)
    }




    return (
        <div>
            <div className="hero lg:h-[80vh]">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="flex h-[80vh] justify-center items-center lg:w-[40%] bg-base-200 p-10">
                        <img src={image} className="h-[60vh]" />
                    </div>
                    <div className="lg:w-[50%] space-y-2 p-3">
                        <h1 className="lg:text-5xl text-4xl font-bold">{bookName}</h1>
                        <p className="py-6 text-[20px] text-[#0000009f] font-[500] border-b pb-3">By : {publisher}</p>
                        <p className="text-[20px] text-[#0000009f] font-[500] border-b pb-3">{category}</p>
                        <p>
                            <span className="font-bold">Review : </span>
                            <span className="text-[#000000b6] font-[500]">{review}
                            </span>
                        </p>
                        <div className="flex items-center space-x-6 font-[500] text-[16px] border-b pb-3">
                            <p className="font-bold">Tag</p>
                            <p className="bg-[#F4FCF3] px-5 py-2 rounded-full text-[#23BE0A]">#{tags[0]}</p>
                            <p className="bg-[#F4FCF3] px-5 py-2 rounded-full text-[#23BE0A]">#{tags[1]}</p>
                        </div>
                        <div className="flex space-x-3 items-center pb-10">
                            <div className="text-[18px] text-[#0000009f] font-[500] space-y-3">
                                <p>Number of Pages:</p>
                                <p>Publisher:</p>
                                <p>Year of Publishing:</p>
                                <p>Rating:</p>
                            </div>
                            <div className="text-[18px]  font-[500] space-y-3 ">
                                <p>{totalPages}</p>
                                <p>{author}</p>
                                <p>{yearOfPublishing}</p>
                                <p>{rating}</p>
                            </div>
                        </div>
                        <div className="space-x-3">
                            <button onClick={handleRead} className="btn btn-outline text-[18px]">Read</button>
                            <button className="btn text-[18px] text-white bg-[#50B1C9]">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div >
    );
};

export default BooksDetails;