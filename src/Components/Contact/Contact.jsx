import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { RiGlobalLine } from "react-icons/ri";
import './Contact.css'

const Contact = () => {
    return (
        <div>

            <div className='text-center p-10 space-y-3 '>
                <h2 className='text-5xl font-bold fonts-work-sans'>Contact Me</h2>
                <p className="fonts-work-sans">Exploring Contact Across Dimensions</p>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-4 gap-4 px-2">
                <div className=" bg-[#F5F4FB] p-10 space-y-3 rounded-2xl h-[50vh]">
                    <div className="flex flex-col justify-center items-center text-2xl space-y-3 rounded-2xl">
                        <div className="bg-[#17B978] p-10 rounded-full">
                            <CiLocationOn className="text-4xl text-white" />

                        </div>
                        <h2 className="fonts-work-sans">Address</h2>
                    </div>
                    <p className="text-center fonts-work-sans">5396 North Reese Avenue, Fresno CA 93722</p>
                </div>
                <div className=" bg-[#F5F4FB] p-10 space-y-3 rounded-2xl h-[50vh]">
                    <div className="flex flex-col justify-center items-center text-2xl space-y-3">
                        <div className="bg-[#17B978] p-10 rounded-full">
                            <IoCallOutline className="text-4xl text-white" />

                        </div>
                        <h2 className="fonts-work-sans">Contact Number</h2>
                    </div>
                    <p className="text-center fonts-work-sans">818-709-0964</p>
                </div>
                <div className=" bg-[#F5F4FB] p-10 space-y-3 rounded-2xl h-[50vh]">
                    <div className="flex flex-col justify-center items-center text-2xl space-y-3">
                        <div className="bg-[#17B978] p-10 rounded-full">
                            <CiMail className="text-4xl text-white" />

                        </div>
                        <h2 className="fonts-work-sans">Email Address</h2>
                    </div>
                    <p className="text-center fonts-work-sans">bexac26880@sentrau.com</p>
                </div>
                <div className=" bg-[#F5F4FB] p-10 space-y-3 rounded-2xl h-[50vh]">
                    <div className="flex flex-col justify-center items-center text-2xl space-y-3">
                        <div className="bg-[#17B978] p-10 rounded-full">
                            <RiGlobalLine className="text-4xl text-white" />
                        </div>
                        <h2 className="fonts-work-sans">Website</h2>
                    </div>
                    <p className="text-center fonts-work-sans">bookvide.com</p>
                </div>
            </div>
            <div className=" flex flex-col lg:flex-row  lg:space-x-32 items-center bg-[#F5F4FB] my-10 p-2">
                <div className="lg:w-[40%] mb-5">
                    <iframe className="max-w-full lg:w-%] lg:ml-20 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d579465.8141517568!2d-120.03514714249967!3d36.64740452386809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sbd!4v1711610763660!5m2!1sen!2sbd"
                        width="500"
                        height="400"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>
                <div className="flex flex-col  space-y-5 lg:p-10  lg:w-[40%] ">
                    
                    <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
                    <input type="text" placeholder="Your Email" className="input input-bordered " />
                    <input type="text" placeholder="Your Subject" className="input input-bordered " />
                    <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
                    <button className="btn bg-[#28BE13] text-white btn-wide">Sent Message</button>
                </div>
            </div>
        </div >
    );
};

export default Contact;