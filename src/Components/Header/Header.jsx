import { NavLink } from 'react-router-dom';
import './Header.css'
import './Header.css'

const Header = () => {

    const links = <>
        <li className='mr-4 font-[500] text-[#393737f0] fonts-work-sans'>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border border-b font-bold text-[#23BE0A] border-[#23BE0A]" : ""
                }
            >Home</NavLink></li>
        <li className='mr-4 font-[500] text-[#393737f0] fonts-work-sans' >
            <NavLink
                to="/list_book"
                className={({ isActive, isPending }) =>
                    isPending ? "text-[#23BE0A] border-[#23BE0A]" : isActive ? "border border-b font-bold text-[#23BE0A] border-[#23BE0A]" : ""
                }
            >Listed Books</NavLink></li>
        <li className='mr-4 font-[500] text-[#393737f0] fonts-work-sans'>
            <NavLink
                to="/pages_to_book"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border border-b font-bold text-[#23BE0A] border-[#23BE0A]" : ""
                }
            >Pages to Read</NavLink></li>
        <li className='mr-4 font-[500] text-[#393737f0] fonts-work-sans'>
            <NavLink
                to="/about_us"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border border-b font-bold text-[#23BE0A] border-[#23BE0A]" : ""
                }
            >About Us</NavLink></li>
        <li className='mr-4 font-[500] text-[#393737f0] fonts-work-sans'>
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border border-b font-bold text-[#23BE0A] border-[#23BE0A]" : ""
                }
            >Contact</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl fonts-work-sans">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                <a className="btn text-white bg-[#23BE0A]">Sing In</a>
                <a className="btn text-white bg-[#59C6D2]">Sing Up</a>
            </div>
        </div>
    );
};

export default Header;