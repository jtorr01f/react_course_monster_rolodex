import React from 'react';

import './search-field.component';

export const SearchField = ({placeholder, handleChange}) => (
    <input className='search'
        type='search'
        placeholder={placeholder} 
        onChange={handleChange}
    />
)