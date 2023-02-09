import React from "react";
import './Header.css';

const Header = ({value, handleToggleDarkMode, darkMode}) =>{
    return(
      <div className="header">
        <h1 className="title">{value}</h1>
        <button
        onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}
        className="btn">
          {
            darkMode ? <i className="fa-solid fa-sun"/> : <i className="fa-solid fa-moon"/>
          }
          {
            darkMode ? 'Light Mode' : 'Dark Mode'
          } 
           </button>
     </div>
    )
}

export default Header