import styled from "styled-components";

export const DashbaordContainer = styled.div`
    padding: 50px 30px;
    width: 100%;

`;
export const DashboardWrap = styled.div`

`;
export const DashbaordH1 = styled.h1`

`;
export const Date = styled.div`
    margin: 20px 0;
    input{
        color: ${({darkmood})=>(darkmood ? "var(--color-dark-text)" : "var(--color-dark)")};
        padding: 10px 15px;
        border-radius: var(--border-radius-1);
        border: none;
        background-color: #737fec28;
        outline: none;
        :autofill{
            background: red;
        }
    }
   
`;