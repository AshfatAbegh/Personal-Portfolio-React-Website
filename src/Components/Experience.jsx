import React from 'react';
import html from '../assets/html.png'; 
import css from '../assets/css.png'; 
import javascript from '../assets/javascript.png'; 
import reactImage from '../assets/react.png'; 
import materialUi from '../assets/materialUi.png'; 
import firebase from '../assets/firebase.png'; 
import api from '../assets/api.png'; 
import selenium from '../assets/selenium.jpg'; 
import netlify from '../assets/netlify.png'; 
import dsa from '../assets/dsa.png';
import c from '../assets/c.png'; 
import cplusplus from '../assets/cplusplus.jpg'; 
import java from '../assets/java.png'; 
import php from '../assets/php.png'; 
import cSharp from '../assets/cSharp.jpg'; 
import python from '../assets/python.jpg'; 
import tailwind from '../assets/tailwind.png'; 
import node from '../assets/node.png'; 
import mySql from '../assets/mySql.png';
import mSql from '../assets/mSql.png';
import jira from '../assets/jira.png'; 
import github from '../assets/github.png';
import boot from '../assets/boot.jpg';
import reactBoot from '../assets/reactBoot.png';

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: materialUi,
            title: 'MaterialUi',
            style: 'shadow-sky-500'
        },
        {
            id: 6,
            src: firebase,
            title: 'Firebase',
            style: 'shadow-yellow-500'
        },
        {
            id: 7,
            src: api,
            title: 'API',
            style: 'shadow-gray-500'
        },
        {
            id: 8,
            src: selenium,
            title: 'Selenium',
            style: 'shadow-green-500'
        },
        {
            id: 9,
            src: boot,
            title: 'Bootstrap',
            style: 'shadow-purple-500'
        },
        {
            id: 10,
            src: netlify,
            title: 'Netlify',
            style: 'shadow-cyan-500'
        },
        {
            id: 11,
            src: dsa,
            title: 'Data Structure & Algorithm',
            style: 'shadow-green-500'
        },
        {
            id: 12,
            src: c,
            title: 'C',
            style: 'shadow-blue-500'
        },
        {
            id: 13,
            src: cplusplus,
            title: 'C++',
            style: 'shadow-blue-500'
        },
        {
            id: 14,
            src: java,
            title: 'Java',
            style: 'shadow-orange-500'
        },
        {
            id: 15,
            src: php,
            title: 'PHP',
            style: 'shadow-purple-500'
        },
        {
            id: 16,
            src: cSharp,
            title: 'C#',
            style: 'shadow-purple-500'
        },
        {
            id: 17,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-500'
        },
        {
            id: 18,
            src: tailwind,
            title: 'Tailwind CSS',
            style: 'shadow-sky-400'
        },
        {
            id: 19,
            src: node,
            title: 'Node.js',
            style: 'shadow-green-500'
        },
        {
            id: 20,
            src: mySql,
            title: 'MySQL',
            style: 'shadow-violet-500'
        },
        {
            id: 21,
            src: mSql,
            title: 'Microsoft SQL Server',
            style: 'shadow-red-500'
        },
        {
            id: 22,
            src: jira,
            title: 'Jira',
            style: 'shadow-blue-500'
        },
        {
            id: 23,
            src: github,
            title: 'Github',
            style: 'shadow-gray-400'
        },
        {
            id: 24,
            src: reactBoot,
            title: 'ReactBootstrap',
            style: 'shadow-sky-400'
        }
    ]

    return (
        <div name = "experience" className = "bg-gradient-to-b from-gray-800 to-black w-full h-screen">
            
            <div className = "max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                
                <div>
                    <p className = "text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                    <p className = "py-6">These are the Technologies I've Worked With</p>
                </div>

                <div className = "w-full grid grid-cols-5 sm:grid-cols-6 gap-8 text-center py-8 px-12  sm:px-0">
                    
                    {
                      techs.map(({id, src, title, style}) => (
                        <div key = {id} className = {`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                          <img src= {src} alt = "" className = "w-20 mx-auto"/>
                          <p className = "mt-4">{title}</p>
                        </div>
                      ))
                    }  
                </div>
            </div>
        </div>
    );
};

export default Experience;