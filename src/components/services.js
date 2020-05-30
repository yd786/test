import React from "react";
import IndividualService from "../components/IndividualService"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import scrollTo from 'gatsby-plugin-smoothscroll';

const Service = ({data}) => (
<>
	{
		data.image1.childImageSharp ? (
			<div className="flex flex-wrap">
			<div className="w-full md:w-1/3"><Img className="w-full" fluid={data.image1.childImageSharp.fluid} /></div>
			<div className="w-full md:w-1/3"><Img className="w-full" fluid={data.image2.childImageSharp.fluid} /></div>
			<div className="w-full md:w-1/3"><Img className="w-full" fluid={data.image3.childImageSharp.fluid} /></div>
			</div>
		) :
		(
			<div className="flex flex-wrap">
			<div className="w-full md:w-1/3 text-center"><img className="inline-block w-full" src={data.image1} alt='' /></div>
			<div className="w-full md:w-1/3 text-center"><img className="inline-block w-full" src={data.image2} alt='' /></div>
			<div className="w-full md:w-1/3 text-center"><img className="inline-block w-full" src={data.image3} alt='' /></div>
			</div>
		)
	}
	<div id="Services" className="bg-customBlue text-white py-16 px-6">
		<div className="text-center pb-10 md:pb-5">
			<h1 className="text-4xl font-bold">WHAT WE DO</h1>
		</div>
		<div>
			<div className="flex mt-6 mb-16 flex-col md:flex-row justify-center flex-wrap">
				{
					data.service.map(s => (
						<IndividualService key={s.title} icon={s.image} title={s.title} description={s.description}/>
					))
				}
			</div>
			<div className="text-center mb-4 mt-10 ">
				<button aria-label="button" onClick={() => scrollTo(`#Contact`)} className="kel bg-gray-100 border-2 border-bgCustomBlue inline-block text-center text-customBlue text-xl font-bold tracking-wide px-24 py-4 rounded uppercase transition duration-300 hover:bg-customBlue hover:border-white hover:text-white">Get started</button>
			</div>
		</div>
	</div>
</>
)

Service.propTypes = {
	data : PropTypes.object
}

export default Service
