import React, {useEffect} from 'react'
import styled from 'styled-components';
import Country from './Country';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from './Wrapper'

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  grid-auto-flow: columns;
  grid-column-gap: 66px;
  grid-template-columns: repeat(auto-fill, 270px);
  background: var(--background);
  justify-content: center;
  padding: 3em 0;
`;

function CountryList() {
    const dispatch = useDispatch()
    const countryList = useSelector(state => {
        if (state.countryListByRegion.length > 0 && state.countryListByName === 0) {
            return state.countryListByRegion
        }

        if (state.countryListByName.length > 0 ) {
            return state.countryListByName
        }
        
        return state.countryList
    })
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')        
        .then(res => res.json())
        .then(list => {
            dispatch({
                type: 'SET_COUNTRY_LIST', 
                payload: list
            });
        })
        .catch(err => console.log('error', err))

    }, [dispatch]);

    return (
        <Wrapper>
            <CountryListStyled>
                {countryList.map(({flag, name, population, region, capital, nativeName, alpha2Code}) => {
                    return (
                        <Country
                            key={name}
                            flag={flag}
                            name={name}
                            population={population}
                            region={region}
                            capital={capital}
                            nativeName={nativeName}
                            alpha2Code={alpha2Code}
                        />
                    )
                })}
            </CountryListStyled>
        </Wrapper>
    )
}

export default CountryList
