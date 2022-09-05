import React from 'react';
import image1 from '../assets/image1.jpg';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {Link} from 'react-scroll';

const Home = () => {
    return (
        <div name = "home" className = "h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className = "max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className = "flex flex-col justify-center h-full">
                    <h2 className = "text-4xl sn:text-7xl font-bold text-white">
                        Hi, I'm Ashfat && I'm a Software Engineer
                    </h2>
                    <p className = "text-gray-500 py-4 max-w-md">
                       Currently I'm working on many projects related to Web Development & Web Application Development. My goal is to become associated with an organization where I can utilize my skills and gain further experience while enhancing the company's productivity and reputation. I am also very excited to see what new opportunities are waiting for me.
                    </p>
                    <div>
                        <Link to = "portfolio" smooth duration = {500} className = "text-white group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer">
                            Portfolio
                            <span className = "group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={30} className="ml-1"></MdOutlineKeyboardArrowRight>
                            </span>   
                        </Link>
                    </div>
                </div>

                <div>
                    <img src = {image1} alt="My Profile"
                    className="rounded-2xl mx-auto w-2/3 md:w-full"/>
                </div>
            </div>
        </div>
    );
};

export default Home;