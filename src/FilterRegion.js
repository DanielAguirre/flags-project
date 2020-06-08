import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const FilterRegionStyled = styled.select`
    padding: 1.3em;
    border: none;
    outline: 0;
    box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);
    background: var(--white);
    color: var(--black);
`;

export default function FilterRegion() {
    const dispatch  =  useDispatch();
    const handleOnchage = (event)  => {
        console.log('event', event.target.value)
        dispatch({
            type: 'SET_COUNTRY_REGION',
            payload: { region: event.target.value }
        })
    }
    return (
        <FilterRegionStyled onChange={handleOnchage}>
            <option value="">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </FilterRegionStyled> 
    )
}
