import React from "react";
import PropTypes from "prop-types"
import Img from "gatsby-image"
const Work = ({data}) => {
    return (
    <>
    <div className="w-full">
      {data.headerImage.childImageSharp ? <Img fluid={data.headerImage.childImageSharp.fluid} /> : <img src={data.headerImage} alt=''/>}
    </div>
    <div id="Work" className="py-16 px-12 text-center bg-customBlack text-white">
        <h1 className="text-4xl font-bold ">WORK</h1>
        <div className="flex flex-wrap justify-around items-center mt-10 md:mt-5 md:mt-0">
        {
          data.logos.map(logo => (
            logo.image && logo.image.childImageSharp  ?
              <Img style={{width:"180px"}} key={logo.image.id} className="md:ml-4" fluid={logo.image.childImageSharp.fluid} /> : 
              <img style={{width:"180px"}} key={logo.image} className="md:ml-4" src={logo.image} />
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
