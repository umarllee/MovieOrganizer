import React, { useState } from 'react';
import './Search.css';
function SearchBox({ onSearch }) {

    const [searchStr, setSearchStr] = useState('');
 
    return (  
        <div className="search-box">
            <form className="search-box__form" onSubmit={onSearch}>
                <label className="search-box__form-label">
                    Search movie by title:
                    <input
                        name='search'
                        type="text"
                        className="search-box__form-input"
                        placeholder="Lucifer, Harry Potter,..."
                        onChange={e => setSearchStr(e.target.value)}
                        value={searchStr}
                    />
                </label>

                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!searchStr}
                >  
                    <i class="fa fa-search"></i> Search
                </button>
            </form>
        </div>
    );
}

export default SearchBox;