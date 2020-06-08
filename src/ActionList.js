import React from 'react'
import styled from 'styled-components';
import FilterRegion from './FilterRegion';
import Wrapper from './Wrapper'
import SearchCountry from './SearchCountry'

const ActionListStyled = styled.div`
    .grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 20px;
    }

    @media screen and (min-width: 768px) {
        .grid{
            grid-template-columns: 480px 1fr 200px;
        }
    }
`;


function ActionList() {
    return (
        <ActionListStyled>
            <Wrapper>
                <div className="grid">
                    <SearchCountry />
                    <span></span>
                    <FilterRegion />
                </div>
            </Wrapper>
            
        </ActionListStyled>
    )
}

export default ActionList
