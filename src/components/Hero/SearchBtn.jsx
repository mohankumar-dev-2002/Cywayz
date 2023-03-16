import React, { useState } from 'react';
import './searchbt.css';

import { BsSearch } from 'react-icons/bs';
const SearchBtn = ({ data }) => {
    const [filteredData, setFilteredData] = useState([]);
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
        }
        else {
            setFilteredData(newFilter);
        }
    }
    return (
        <>
            <div className='wrapper'>
                <BsSearch className='search-icon' />
                <input type="text" placeholder='Search your Mentor' onChange={handleFilter} />
                <button>  Search</button>
            </div>
            {filteredData.length !== 0 && (
                <div className='search-results'>
                    {filteredData.map((x) => {

                        return (<>
                            <div className='row-container-search'>
                                <div className='row-search'>
                                    <div className='profile-avatar'>{x.avatar}</div>
                                    <div className='data-item'>{x.name}</div>
                                    <div className='data-job'>{x.job}</div>
                                    <button className='see-profile'> See Full profile</button>
                                </div>
                            </div>
                        </>);

                    })}
                </div>
            )}
        </>
    )
}
export default SearchBtn;