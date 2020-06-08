import React, {useState} from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Input from './Input'


const SearchCountryStyled = styled.div`
    display: flex;
    position: relative;
    .close {
        position: absolute;
        right: 1em;
        top: 1rem;
        border-radius: 50%;
        border: none;
        box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);
    }
`;

function SearchCountry() {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    const handleOnchange=(event) => {
        setInputValue(event.target.value)
        dispatch({
            type:'SET_COUNTRY_LIST_BY_NAME',
            payload: {name: event.target.value}
        })
        
    }

    const clearInput=(event) => {
        dispatch({
            type:'SET_COUNTRY_LIST_BY_NAME',
            payload: {name: ''}
        })
        setInputValue('')
    }
    return (
        <SearchCountryStyled>
            {inputValue && 
                <i className="fa fa-times close" onClick={clearInput}/>
            }
            
            <Input type="text" value={inputValue} placeholder="Search for a Country..." onChange={handleOnchange} />
        </SearchCountryStyled>
    )
}

export default SearchCountry
