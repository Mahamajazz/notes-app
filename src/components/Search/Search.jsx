import React from "react";
import './Search.css';

const Search = ({handleSearchNote}) =>{
    return(
        <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input onChange={(e) => handleSearchNote(e.target.value)} type="text" placeholder="Type to search..." />
        </div>
    )
}
export default Search;