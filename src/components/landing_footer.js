import React from "react";
import propTypes from "prop-types"
const Footer = ({data}) => (
    <footer id="Contact" className="flex flex-col-reverse md:flex-row justify-between bg-customBlack text-white p-5 py-5 lg:p-10">
        <div className="md:w-2/12 flex justify-center md:justify-start items-end pt-10 pb-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 39.758"><path d="M40.563,20.563A20,20,0,1,0,17.438,40.321V26.344H12.357V20.563h5.081V16.156c0-5.012,2.984-7.781,7.554-7.781a30.779,30.779,0,0,1,4.477.39v4.919H26.946c-2.484,0-3.259,1.542-3.259,3.123v3.754h5.547l-.887,5.781h-4.66V40.321A20.007,20.007,0,0,0,40.563,20.563Z" transform="translate(-0.563 -0.563)" fill="#efefef"/></svg>
        <svg className="ml-4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 39.991"><path d="M20,11.98A10.253,10.253,0,1,0,30.252,22.233,10.237,10.237,0,0,0,20,11.98ZM20,28.9a6.666,6.666,0,1,1,6.666-6.666A6.678,6.678,0,0,1,20,28.9ZM33.063,11.561a2.392,2.392,0,1,1-2.392-2.392A2.386,2.386,0,0,1,33.063,11.561Zm6.791,2.427c-.152-3.2-.883-6.041-3.23-8.379s-5.176-3.07-8.379-3.23c-3.3-.187-13.2-.187-16.5,0C8.55,2.53,5.713,3.262,3.366,5.6S.3,10.775.135,13.979c-.187,3.3-.187,13.2,0,16.5.152,3.2.883,6.041,3.23,8.379s5.176,3.07,8.379,3.23c3.3.187,13.2.187,16.5,0,3.2-.152,6.041-.883,8.379-3.23s3.07-5.176,3.23-8.379c.187-3.3.187-13.189,0-16.491ZM35.589,34.021a6.749,6.749,0,0,1-3.8,3.8c-2.632,1.044-8.879.8-11.788.8s-9.165.232-11.788-.8a6.749,6.749,0,0,1-3.8-3.8c-1.044-2.632-.8-8.879-.8-11.788s-.232-9.165.8-11.788a6.749,6.749,0,0,1,3.8-3.8c2.632-1.044,8.879-.8,11.788-.8s9.165-.232,11.788.8a6.749,6.749,0,0,1,3.8,3.8c1.044,2.632.8,8.879.8,11.788S36.633,31.4,35.589,34.021Z" transform="translate(0.005 -2.238)" fill="#efefef"/></svg>
        </div>
        <div className="md:w-3/12 ml-4 mt-4 md:mt-0 text-left mr-20">
            <div className="text-3xl font-bold uppercase">Contact</div>
            <div>
                <p className="whitespace-pre-line leading-normal">{data.address}</p>
                <div className="mt-8">
                    <p>{data.phone}</p>
                    <p>{data.contact}</p>
                </div>
            </div>
        </div>
    </footer>
)
Footer.propTypes = {
    data: propTypes.object
}
export default Footer
