import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Countries = () => {
    const countries = useLoaderData();
    return (
        <div>
            <h1>All Countries: {countries.length}</h1>
            <div className='country-container'>
                {
                    countries.map(country => <li key={country.cca3}><Link to ={`/countries/${country.name.common}`}>{country.name.common}</Link></li>)
                }
            </div>
        </div>
    );
};

export default Countries;