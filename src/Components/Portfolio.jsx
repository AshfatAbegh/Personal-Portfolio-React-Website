import React from 'react';
import emaJohn from '../assets/portfolio/emaJohn.png';
import HungryMonster from '../assets/portfolio/HungryMonster.png';
import PenguinFashion from '../assets/portfolio/PenguinFashion.png';
import UltraNation from '../assets/portfolio/UltraNation.png';
import HardRock from '../assets/portfolio/HardRock.png';
import SearchMeal from '../assets/portfolio/SearchMeal.png';

const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: emaJohn,
        },
        {
            id:2,
            src: HungryMonster
        },
        {
            id:3,
            src: PenguinFashion
        },
        {
            id:4,
            src: UltraNation 
        },
        {
            id:5,
            src: HardRock 
        },
        {
            id:6,
            src: SearchMeal 
        },
    ]
    return (
        <div name = "portfolio" className = "bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className = "max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
              <div className = "pb-8">
                 <p className = "text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                 <p className = "py-6">Check Out Some of My Projects Right Here</p>
              </div>

              <div className = "grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {
                portfolios.map(({id, src}) => (
                    
                    <div key = {id} className = "shadow-md shadow-gray-600 rounded-lg">
                        <img src = {src} alt ="" className = "rounded-md duration - 200 hover:scale-105"/>
                    </div>
                ))
              }
            </div>
        </div>
    </div>
    );
};

export default Portfolio;