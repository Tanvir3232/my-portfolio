import { Link } from "react-router-dom";
import logo from '../../src/assets/images/logo.png'
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
    const navItems = (
        <>
          <li>
            <ScrollLink to="banner" smooth={true} duration={500}>
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact Us
            </ScrollLink>
          </li>
        </>
      );
    return (
        <div className="navbar  bg-[#00091A] text-white px-5 md:px-16 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-gradient-to-r from-[#cc2b5e] to-[#753a88] rounded-box w-52">
                      {navItems}
                    </ul>
                </div>
                <Link >
                    <img src={logo} className="w-full " alt="" />
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            
        </div>
    );
};

export default Header;