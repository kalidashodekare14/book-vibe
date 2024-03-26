import banner from '../../assets/images.jpg'
const Banner = () => {
    return (
        <div className="lg:hero h-[80%] bg-base-200 rounded-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="lg:max-w-sm rounded-lg" />
                <div className="lg:w-[50%] space-y-10">
                    <h1 className="lg:text-5xl text-3xl font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn text-white font-bold bg-[#23BE0A]">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;