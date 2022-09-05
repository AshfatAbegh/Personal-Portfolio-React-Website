import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';

const SocialLinks = () => {
    const Links = [
        {
            id:1,
            child: (
                <>
                  Github <FaGithub size={30}></FaGithub>
                </>
            ),
            href:'https://github.com/AshfatAbegh',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child: (
                <>
                  LinkedIn <FaLinkedin size={30}></FaLinkedin>
                </>
            ),
            href:'https://www.linkedin.com/in/ashfat-al-rashid-297852175/'
        },
        {
            id:3,
            child: (
                <>
                  Mail <HiOutlineMail size={30}></HiOutlineMail>
                </>
            ),
            href:'mailto:mdabegh50@gmail.com',
            style: 'rounded-br-md'
        },
    ]
    return (
        <div className = "hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {
                    Links.map(({id, child, href, style}) => (
                        <li key = {id} className = {"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>
                          <a href={href}
                           className = "flex justify-between items-center w-full text-white">
                           {child}
                        </a>
                        </li>
                    ))
                } 
            </ul>
        </div>
    );
};

export default SocialLinks;