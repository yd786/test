import React from "react";
import propTypes from "prop-types"
import Img from "gatsby-image"
const IndividualService = ({icon,title, description}) => {
    console.log(icon)
    return(
    <div className="md:w-6/12 lg:w-5/12 text-center flex md:text-left flex-col md:flex-row p-10 md:p-10 justify-center md:justify-start">
        <div className="mx-auto w-full"  >
            {
                icon.childImageSharp ? <Img fluid={icon.childImageSharp.fluid} /> : <img src={icon} alt=''/>
            }
        </div>
        <div className="md:ml-6 mt-5 md:mt-0">
            <h4 className="text-3xl font-bold tracking-wide uppercase">{title}</h4>
            <p className="mt-2">{description}</p>
        </div>
    </div>
)}

IndividualService.propTypes = {
    title: propTypes.string,
    description: propTypes.string,
    icon: propTypes.object
};

export default IndividualService
