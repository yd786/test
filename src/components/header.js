import React,{useState} from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';
import propTypes from "prop-types"
const Header = ({title}) => {
    console.log(title)
    const [isExpanded, toggleExpansion] = useState(false);
    const links = ["About","Services","Work","Contact"];
    return (
    <header className="flex justify-between items-center flex-wrap ">
        <h1 className="font-bold text-2xl">{title}</h1>
        <button aria-label="button" className="flex cursor-pointer items-center block px-3 py-2 text-white rounded-lg md:hidden bg-black bg-opacity-50" 
        onClick={() => toggleExpansion(!isExpanded)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="25"  height="25" viewBox="0 0 50 50">
            <path fill="none" stroke="#FFFEFE" strokeWidth="5" d="M50 25L0 25M50 10L0 10M0 40L50 40" />
            </svg>
        </button>
        <nav className={
            `${
                isExpanded ? `block  mt-20` : `hidden`
            } md:block md:relative md:px-0 text-center absolute left-0 top-0 px-5 md:px-0 md:mt-0 md:flex md:items-center w-full md:w-auto text-center rounded-lg`
        }> {
            links.map((link) => (
            <button aria-label={link} key={link} onClick={() => scrollTo(`#${link}`)} className="w-full py-2 cursor-pointer bg-opacity-50 py-3 md:py-2 bg-black rounded-lg md:inline-block hover:bg-opacity-75 md:bg-opacity-0 md:mt-0 md:ml-4 mb-2 px-5"
            > <span>{link}</span>
            </button>))
        } </nav>
    </header>)
}
Header.propTypes = {
    title : propTypes.any
}
export default Header
