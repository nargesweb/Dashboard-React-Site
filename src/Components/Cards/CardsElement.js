import styled from "styled-components";

export const CardsContainer = styled.div`
    width: 100%;

`;
export const CardsWrapper = styled.div`
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    @media screen and (max-width: 1024px){
        /* flex-direction: column; */
        justify-content: space-evenly;
   
    }

`;