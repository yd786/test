import React from "react";
import propTypes from "prop-types"
import Img from "gatsby-image"
const IndividualService = ({icon,title, description}) => {
    const style = {
        width: '100px'
    }
    return(
    <div className="md:w-6/12 lg:w-5/12 text-center flex lg:text-left flex-col lg:flex-row p-10 md:p-10 justify-center md:justify-start">
        <div className="mx-auto" style={style} >
            {
                icon.childImageSharp ? <Img fluid={icon.childImageSharp.fluid} style={style}/> : <img src={icon} alt='' style={style}/>
            }
        </div>
        <div className="lg:ml-6 mt-5 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-wide uppercase">{title}</h1>
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
