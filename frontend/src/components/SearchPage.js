import React from "react";
import "../styles/SearchPage.css";
import SearchField from "./SearchField";

const SearchPage = () => {
    return (
        <div className="body">
            <div className="primary-search-container">
                <SearchField />
            </div>
        </div>
    )
}

export default SearchPage