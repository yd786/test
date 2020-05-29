import React from "react";
import IndividualService from "../components/IndividualService"
import propTypes from "prop-types"
import Img from "gatsby-image"
import scrollTo from 'gatsby-plugin-smoothscroll';

const Service = ({data}) => {
	return (<>
    <div className="flex flex-wrap">
		<div className="w-full md:w-1/3"><Img fluid={data.image1.childImageSharp.fluid} /></div>
		<div className="w-full md:w-1/3"><Img fluid={data.image2.childImageSharp.fluid} /></div>
		<div className="w-full md:w-1/3"><Img fluid={data.image3.childImageSharp.fluid} /></div>
	</div>
	<div id="Services" className="bg-customBlue text-white">
		<div className="text-center pt-10 md:pb-5">
			<div className="text-4xl font-bold">WHAT WE DO</div>
		</div>
		<div className=" pb-10 ">
			<div className="flex flex-col md:flex-row justify-center flex-wrap">
				{
					data.service.map(s => (
						<IndividualService icon={s.image} title={s.title} description={s.description}/>
					))
				}
			</div>
			<div className="text-center mb-4 mt-10 ">
				<button onClick={() => scrollTo(`#Contact`)} className="bg-gray-100 border-2 border-bgCustomBlue inline-block text-center text-customBlue text-xl font-bold tracking-wide px-24 py-4 rounded uppercase transition duration-300 hover:bg-customBlue hover:border-white hover:text-white">Get started</button>
			</div>
		</div>
	</div>
</>)}
Service.propTypes = {
	data : propTypes.object
}

export default Service
