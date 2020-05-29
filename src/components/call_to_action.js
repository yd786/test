import React from "react";
import scrollTo from 'gatsby-plugin-smoothscroll'; 
import PropTypes from "prop-types"
const CallToAction = ({data}) => (
    <div className="text-center py-10 px-6 md:px-0">
        <div className="font-bold text-4xl md:text-5xl  uppercase leading-tight">{data.title}</div>
        <div className="md:mt-3 mt-8 md:w-5/12 mx-auto">
            <p>{data.description}</p>
        </div>
        <button className="md:mt-16 mt-10 bg-customBlue inline-block text-white text-xl font-bold tracking-wide px-24 py-4 rounded-lg transition duration-300 hover:bg-opacity-75" onClick={() => scrollTo(`#Services`)} >SERVICES</button>
    </div>
)
CallToAction.propTypes = {
    data: PropTypes.object
} 
export default CallToAction