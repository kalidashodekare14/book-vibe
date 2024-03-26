import { useLoaderData, useParams } from "react-router-dom";

const BooksDetails = () => {

    const books = useLoaderData();
    const { bookId } = useParams();
    
    const bookDetail = books.find(book => book.id == bookId)
    console.log(bookDetail)

    return (
        <div>
            <h2>book details</h2>
            <div>
                
            </div>
        </div>
    );
};

export default BooksDetails;