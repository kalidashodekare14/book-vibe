import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { id, image, tags, bookName, publisher, category, rating } = book
    return (
        <Link to={`/book/${id}`}>
            <div className="card bg-base-100 border p-3 lg:h-[90vh]">
                <img className="h-80 bg-[#F3F3F3] rounded-2xl p-10" src={image} alt="Shoes" />
                <div className="card-body space-y-2">
                    <div className="flex mr-3 font-[500] space-x-3 text-[18px]">
                        <p className="text-[#23BE0A] py-1 px-3 bg-[#F4FCF3] rounded-full fonts-work-sans">{tags[0]}</p>
                        <p className="text-[#23BE0A] py-1 px-3 bg-[#F4FCF3] rounded-full fonts-work-sans">{tags[1]}</p>
                    </div>
                    <h2 className="text-2xl font-semibold fonts-work-sans">{bookName}</h2>
                    <p className="fonts-work-sans">By: {publisher}</p>
                    <div className="flex mr-3">
                        <p className="fonts-work-sans">{category}</p>
                        <div className="flex items-center space-x-3">
                            <p className="fonts-work-sans">{rating}</p>
                            <FaRegStar />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;