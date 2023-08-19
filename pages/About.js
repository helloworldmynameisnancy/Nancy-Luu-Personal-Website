import React from 'react';
import Layout from './Layout';
import Typical from "react-typical"
import Image from 'next/image';
import lauren from '../public/Nancy Final.png';


function AboutPage({ darkMode, setDarkMode }) {
 return (
   <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
     <section className="flex flex-col md:flex-row -my-28 -mb-8">
       <div className="text-emerald-700 font-titleFont2 px-4 md:px-16 py-6 md:py-12 dark:text-red-50 md:w-1/2 md:pr-8">
         <p className="sm: text-2xl md:text-3xl lg:text-4xl md:max-w-xl">
             Xin Chào, I&apos;m a{' '}
             <Typical
               loop={1}
               wrapper="b"
               steps={[
                 'student.',
                 1000,
                 'developer.',
                 1000,
                 'chef (wannabe).',
                 1000,
                 'plant-mom.',
                 1000,
                 'student.',
                 1000,
               ]}
             />
         </p>
         <p className="text-xl md:text-lg ">
           Nice to meet you! My name is Nancy, and I am currently a 2nd year Honors student studying Computer Science at
           the University of Houston. I was born and raised in Houston, but my family is from Vietnam. Growing up, I
           always had a fascination for computers, and I am very grateful that I get to study something that I am
           passionate about.
         </p>
         <p className="text-xl md:text-lg mt-4 md:mt-6 md:mb-40">
           On campus, I am involved in the Terry Scholar Organization as the Secretary and the Society of Women
           Engineers as the Webmaster. Feel free to contact or connect with me to follow my journey.
         </p>
       </div>
       <div className="md:w-1/2 px-4 md:px-20 mb-6 md:mb-0">
         <div className="max-w-full mx-auto">
           <Image src={lauren} alt="Lauren" className="w-full md:max-w-md mx-auto" />
         </div>
       </div>
     </section>
   </Layout>
 );
}


export default AboutPage;