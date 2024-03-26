import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { id, image, tags, bookName, publisher, category, rating } = book
    return (
        <Link to={`/book/${id}`}>
            <div className="card w-96 bg-base-100 border p-3">
                <img className="h-80 bg-[#F3F3F3] rounded-2xl p-10" src={image} alt="Shoes" />
                <div className="card-body">
                    <div className="flex mr-3 font-semibold text-[18px]">
                        <p className="text-[#23BE0A] ">{tags[0]}</p>
                        <p className="text-[#23BE0A] ">{tags[1]}</p>
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {publisher}</p>
                    <div className="flex mr-3">
                        <p>{category}</p>
                        <div className="flex items-center space-x-3">
                            <p className="">{rating}</p>
                            <FaRegStar />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;