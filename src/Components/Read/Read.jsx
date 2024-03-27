import { CiLocationOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { RiPagesLine } from "react-icons/ri";


const Read = ({ read }) => {
    // console.log(read)

    const { image, bookName, author, tags, yearOfPublishing, totalPages, publisher, category, rating } = read


    return (
        <div className="card card-side bg-base-100 border p-4">
            <img className="bg-[#F3F3F3] p-10 rounded-2xl h-80 w-72" src={image} alt="Movie" />
            <div className="p-5 space-y-3">
                <h2 className="card-title text-3xl">{bookName}</h2>
                <p className="font-[500] text-[#000000cd]">By : {author}</p>
                <div className="flex items-center space-x-5 font-[500] text-[#000000cd]">
                    <p>Tag</p>
                    <p className="px-5 py-2 rounded-2xl bg-[#F4FCF3] text-[#23BE0A]">#{tags[0]}</p>
                    <p className="px-5 py-2 rounded-2xl bg-[#F4FCF3] text-[#23BE0A]">#{tags[1]}</p>
                    <div className="flex items-center space-x-2">
                        <CiLocationOn className="text-xl" />
                        <p className="font-[500] text-[#000000cd]">Year of Publishing: {yearOfPublishing}</p>
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
                <div className="flex items-center space-x-5">
                    <p className="px-5 py-2 font-[500] rounded-2xl bg-[#E0EEFF] text-[#3C93FF]">Category: {category}</p>
                    <p className="px-5 py-2 font-[500] rounded-2xl bg-[#FFF3E1] text-[#FFAC33]">Rating: {rating}</p>
                    <button className="btn text-white font-bold bg-[#23BE0A]">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Read;