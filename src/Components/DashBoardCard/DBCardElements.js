import styled from "styled-components";

export const Card = styled.div`
    width: 310px;
    max-width: 360px;
    background-color: ${({darkmood})=>(darkmood ? "var(--color-dark-white)" : "#fff")};
    padding: 35px;
    margin-bottom: 20px ;
    border-radius: var(--card-border-radius);
    box-shadow: ${({darkmood})=>(darkmood ? "var(--box-shadow-dark)" : "var(--box-shadow)")} ;
    span{
        color: var(--color-dark-variant);
    }

`;
export const Logo = styled.div`
    span{
        padding: 5px 10px;
        background: ${({bgicon})=>(bgicon)};
        border-radius: 50%;
        color: #fff;
        font-size: 20px;
    }

`;
export const Min = styled.div`
    display: flex;
    margin: 30px 0;
    justify-content: space-between;
    align-items: center;
    width: 100%;

`;
export const Text = styled.div`
`;
export const Title = styled.h3`

`;
export const Price = styled.h2`

`;
export const Chart = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
        /* background: red; */
       width: 6rem;
       height: 6rem;

    }
    circle{
        fill:none;
        stroke-width: 14;
        stroke : var(--color-primary);
        stroke-linecap : round ;
        transform: translate(7px,7px);
        stroke-dashoffset :${({offset})=>(offset)};
        stroke-dasharray : ${({array})=>(array)};
    }
    span{
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       display: flex;
       justify-content: center;
       align-items: center;
    }
    
`;
export const Time = styled.span`
 
`;