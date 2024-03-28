import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('./books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])

    return (
        <div>
            <h2 className="text-center text-4xl font-bold my-20">Book</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;