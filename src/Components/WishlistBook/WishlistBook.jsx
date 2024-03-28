import { CiLocationOn, CiUser } from "react-icons/ci";
import { RiPagesLine } from "react-icons/ri";

const WishlistBook = ({ wish }) => {

    const { image, bookName, author, tags, yearOfPublishing, totalPages, publisher, category, rating } = wish

    return (
        <div className="card lg:card-side bg-base-100 border lg:p-4">
            <img className="bg-[#F3F3F3] p-10 rounded-2xl h-80 lg:w-72" src={image} alt="Movie" />
            <div className="lg:p-5 p-2 lg:space-y-5 space-y-5">
                <h2 className="card-title text-3xl">{bookName}</h2>
                <p className="font-[500] text-[#000000cd]">By : {author}</p>
                <div className="flex items-center space-x-2">
                    <p>Tag</p>
                    <div className="grid  grid-cols-2 lg:grid-cols-4 lg:space-x-5 font-[500] text-[#000000cd]">
                        <p className="lg:px-5 lg:py-2 rounded-2xl text-[14px] bg-[#F4FCF3] text-[#23BE0A]">#{tags[0]}</p>
                        <p className="lg:px-5 lg:py-2 rounded-2xl text-[14px] bg-[#F4FCF3] text-[#23BE0A]">#{tags[1]}</p>
                        <div className="flex items-center space-x-2">
                            <CiLocationOn className="text-xl" />
                            <p className="font-[500] text-[14px] text-[#000000cd]">Year of Publishing: {yearOfPublishing}</p>
                        </div>
                    </div>

                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <CiUser className="text-xl" />
                        <p className="text-[18px] font-[500] text-[#000000b5]">Publisher: {publisher}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RiPagesLine className="text-xl" />
                        <p className="text-[18px] font-[500] text-[#000000b5]">Page {totalPages}</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 text-center gap-3 lg:space-x-5 lg:w-[80%]">
                    <p className="lg:px-5 px-2 py-3 font-[500] rounded-2xl bg-[#E0EEFF] text-[#3C93FF]">Category: {category}</p>
                    <p className="lg:px-5 px-2 py-3 font-[500] rounded-2xl bg-[#FFF3E1] text-[#FFAC33]">Rating: {rating}</p>
                    <div className="">
                        <button className="btn text-white font-bold bg-[#23BE0A]">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistBook;