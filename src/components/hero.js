import React from "react";
import Header from "./header"
import Img from "gatsby-image"
import scrollTo from 'gatsby-plugin-smoothscroll'; 

const Hero = ({title,heading,subheading,image}) => {
    return (
    <div className="relative h-screen" style={{ height:"calc(var(--vh, 1vh) * 100)"}}>
        {image.childImageSharp ? <Img fluid={image.childImageSharp.fluid} className="h-full w-full top-0 left-0 bg-gray-900 z-0 " /> : 
        <img src={image} alt='' style={{objectFit:'cover'}} className="h-full w-full top-0 left-0 bg-gray-900 z-0 " />}
        <div style={{backgroundColor:"#717171"}} className="overlay h-full w-full absolute opacity-50 top-0 left-0 z-0 h-full w-full"></div>
        <div className="absolute top-0 left-0 h-full w-full md:px-10 lg:px-20 p-5 md:py-10 text-white ">
            <Header title={title}/>
            <div className="z-20 flex flex-col justify-end h-full pb-40">
                <h1 className="text-5xl font-bold uppercase leading-tight">{heading}</h1> 
                <h2 className="text-xl uppercase">{subheading}C</h2>
            </div>
            <div className="z-20 absolute bottom-0 left-0 w-full text-center mb-8">
                <button aria-label="button" onClick={() => scrollTo(`#CallToAction`)} className='cursor-pointer inline-block p-2 rounded-lg bg-black bg-opacity-0 hover:bg-opacity-50'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 inline-block" viewBox="0 0 50 50">
                        <path fill="none" stroke="#FFFEFE" strokeLinecap="round" strokeWidth="4" d="M45 9L25 29 5 9"/>
                        <path fill="none" stroke="#FFFEFE" strokeLinecap="round" strokeWidth="4" d="M45 22L25 42 5 22"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
)}

export default Hero
