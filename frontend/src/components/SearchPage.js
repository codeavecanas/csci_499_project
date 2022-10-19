import React from "react";
import "../styles/SearchPage.css";
import SearchField from "./SearchField";
import SearchResultsBody from "./SearchResultsBody";

const SearchPage = () => {
    return (
        <div>
            <div className="primary-search-container">
                <SearchField />
            </div>
            <SearchResultsBody />
        </div>
    )
}

export default SearchPage