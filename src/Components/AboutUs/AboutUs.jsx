import read from '../../assets/read.avif'
import read2 from '../../assets/read2.jpeg'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <h2 className="text-5xl font-bold text-center my-20">About Us</h2>
            <div className='flex flex-col lg:flex-row justify-around items-center '>
                <div className='relative lg:mr-10 p-3'>
                    <img src={read} alt="" />
                    <div className='absolute hidden -right-10 -bottom-8 bg-[#DD321E] rounded-full lg:w-72 lg:h-72  lg:flex flex-col justify-center items-center text-white'>
                        <h1 className='text-2xl text-center fonts-work-sans'>Good Experience <br /> In Last</h1>
                        <h2 className='text-[80px]'>15</h2>
                        <h3 className='text-2xl'>Year</h3>
                    </div>
                </div>
                <div className='lg:w-[50%] p-5 space-y-3'>
                    <h1 className='text-4xl font-bold fonts-work-sans'>Established in 1989, renowned for excellence, trust, and innovation.</h1>
                    <h3 className='text-2xl fonts-work-sans'>2023 Best Book Shop Award winners.</h3>
                    <p className='fonts-work-sans'>Under the guidance of its visionary founder, Dunki graciously accepts the prestigious award, acknowledging the unwavering dedication of its team and the loyalty of discerning clients. This achievement represents a significant milestone for Dunki, reaffirming its status as a pioneering force in the world of exquisite adornments.</p>
                    <button className='btn bg-black text-white'>Explore Now</button>
                </div>
            </div>
            <div className='flex flex-col-reverse lg:flex-row my-32 justify-center items-center p-2'>
                <div className='lg:w-[50%] space-y-4 lg:mr-4'>
                    <h1 className='lg:text-5xl text-3xl  mt-2 leading-tight fonts-work-sans'>Dunki is founder thanks team, clients; solidifies trailblazer status.</h1>
                    <p className='leading-relaxed fonts-work-sans'>Dunki, where joy intertwines with elegance, offers masterpieces cherished and handled with pleasure. Each creation embodies timeless delight, showcasing exquisite craftsmanship that transcends trends, evoking admiration and appreciation in every touch.</p>
                </div>
                <div className='lg:w-[50%]'>
                    <img className='rounded' src={read2} alt="" />
                </div>
            </div>

        </div>
    );
};

export default AboutUs;