import React from 'react';
import "../styles/SearchResultsBody.css";
import SearchResultsCard from './SearchResultsCard';

const SearchResultsBody = () => {
    return (
        <div className='body'>
            <SearchResultsCard />
        </div>
    );
};

export default SearchResultsBody;