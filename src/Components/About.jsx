import React from 'react';

const About = () => {
    return (
        <div name = "about" className = "w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
           <div className = "max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
              <div className = "pb-8">
                 <p className = "text-4xl font-bold inline border-b-4 border-gray-500">About</p>
              </div>

              <p className = "text-xl mt-10">
                I am pursuing my Bachelor of Science in Computer Science and Engineering (CSE) degree from one of the renowned private university in Bangladesh which is American International University - Bangladesh (AIUB). I started my university back in 2019 for the 4 year BSc. program and Currently, I am the final year student. Obtaining necessary skills to start a Software Developer career is quite challenging and time consuming, even for those who genuinely enjoy everything about the process. I have been working on Web Development and Web Application Development area since 2020. I have 2 years experience in making custom Web sites and Web Application. I like Problem Solving and also I can work under pressure. Also I have strong communication skill which helps me to work with teams. Right now, I'm looking for the chance to gain work experience so that I'll improve my skills.
              </p>
            </div>
        </div>
    );
};

export default About;