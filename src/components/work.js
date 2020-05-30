import React from "react";
import PropTypes from "prop-types"
import Img from "gatsby-image"
const Work = ({data}) => {
    return (
    <>
    <div className="w-full">
      {data.headerImage.childImageSharp ? <Img fluid={data.headerImage.childImageSharp.fluid} /> : <img src={data.headerImage} alt=''/>}
    </div>
    <div id="Work" className="md:p-10 pt-10 text-center bg-customBlack text-white">
        <div className="text-4xl font-bold ">WORK</div>
        <div className="flex flex-wrap justify-center items-center mt-5 md:mt-0">
        {
          data.logos.map(logo => (
            data.headerImage.childImageSharp ?
              <Img style={{width:"180px"}} key={logo.id} className="md:ml-4" fluid={logo.image.childImageSharp.fluid} /> : 
              <img style={{width:"180px"}} key={logo.id} className="md:ml-4" fluid={logo.image} />
          ))
        }
        </div>
    </div>
    </>
    )
}
Work.propTypes = {
  data : PropTypes.object
}
export default Work
