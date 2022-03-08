import styled from "styled-components";
import { Link } from 'react-router-dom';

export const SidebarContainer =styled.div `
    position: sticky;
    top: 0;
    bottom: 0 ;
    height: 100vh;
    left: ${({openMenu})=>(openMenu ? "0" : "-100%")};
    transition: left 0.3s ease-out;
    color: ${({darkmood})=>(darkmood ? "var(--color-dark-variant2)" : "var(--color-dark)")} ;
    background : ${({darkmood})=>(darkmood ? "var(--color-dark-background)" : "var(--color-background)")};
    z-index: 5;
    padding: 30px 0;
    @media screen and (max-width: 840px) {
        position: fixed;
        top:0 ;
        right: 0;
        bottom: 0;
    
        width: 100%;
        height: 100%;
    }
    
   
`;
export const SidebarWrapper =styled.div `
    color: var(--color-dark-variant);
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: start;
  

`;
export const Top = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
`;

export const Logosection = styled(Link) `
    display: flex;
    align-items: center;
    margin: 30px 0;
    cursor: pointer ;
`;
export const LogoImg = styled.img `
    width : 30px;
    cursor:inherit ;
`;
export const LogoName = styled.h2 `
    padding-left: 15px;
    color: ${({darkmood})=>(darkmood ? "var(--color-dark-text)" : "var(--color-dark)")} ;
    cursor:inherit ;

    @media screen  and (min-width: 640px) and (max-width: 1020px) {
        display: none;
    }
    span{
        color: var(--color-denger);
        cursor:inherit ;

    }
`;
export const CloseBtn = styled.div `
    font-size: 20px;
    cursor: pointer;
    display: none;
    
    @media screen and (max-width: 840px) {
        display: inline;
    }
`;
export const Mein = styled.div `

`;
export const Logout = styled.div `
    margin-left: 30px;
    position: absolute;;
    bottom: 100px ;
    cursor: pointer;
    @media screen and (max-width:800px){
        position: static;

    }
    @media screen  and (min-width: 640px) and (max-width: 1020px) {
        span{
            display: none;
        }
    }
    :hover{
        color: var(--color-primary);
    }
`;