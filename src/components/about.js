import React from "react";
// import customImage from "../images/about.png"
import Img from "gatsby-image"
import scrollTo from 'gatsby-plugin-smoothscroll'; 
import Proptype from "prop-types"
// styled compo
const About = ({data}) => {
    return (
        <div id="About" className="flex flex-col md:flex-row p-5 py-16 lg:px-12">
            <div className="md:w-5/12 bg-gray-100">
                {
                    data.sideImage.childImageSharp ? <Img fluid={data.sideImage.childImageSharp.fluid} /> : <img src={data.sideImage} alt=''/>
                }
            </div>
            <div className="md:w-5/12 md:ml-8 mt-4 md:mt-0">
                <h1 className="text-4xl font-bold">{data.title}</h1>
                <div className="mt-4 whitespace-pre-line">
                    <p>{data.description}</p>
                </div>
                <button onClick={() => scrollTo(`#Services`)} className="kel mt-10 md:mt-16 bg-customBlue block mx-auto md:inline-block text-center text-white text-xl font-bold tracking-wide px-24 py-4 rounded transition duration-300 hover:bg-opacity-75">SERVICES</button>
            </div>
        </div>
    )
}
About.prototype = {
    data: Proptype.object
}
export default About
