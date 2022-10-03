import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CountryDetail = () => {
    const countryDetail = useLoaderData()[0];
    return (
        <div>
            <h3>Name: {countryDetail.name.common}</h3>
            <img src={countryDetail.flags.png} alt="" width={'200px'} height={'120px'}/>
        </div>
    );
};

export default CountryDetail;