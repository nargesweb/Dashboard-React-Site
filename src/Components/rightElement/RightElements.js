import styled from "styled-components";

export const RightContainer = styled.div`
    position: sticky;
    top: 0;
    max-height:950px ;
    padding: 50px 30px;
    @media screen and (max-width: 840px) {
        position: static;
        max-height: 200vh;
    }
    
    `;
export const RightWrap = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        `;
export const RightTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index : 3;
    @media screen and (max-width: 840px) {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        background: ${({darkmood})=>(darkmood ? "var(--color-dark-background)" : "var(--color-background)")} ;
        padding: 10px ;
    }
`;
export const MenuBtn = styled.button`
    border: none;
    background: transparent;
    font-size: 26px;
    color: var(--color-dark-variant);
    display: none;
    @media screen and (max-width: 840px) {
        display: inline;
    }
`;
export const BgMood = styled.div`
    width: 3.5rem;
    height: 1.5rem;
    background-color: #737fec28;
    border-radius: 5px;
    display: flex;
    margin-right:20px ;
    align-items: center;
    position: relative;
    justify-content: space-evenly;
    ::after{
        content: " ";
        background-color: var(--color-primary);
        position: absolute;
        width: 1.75rem;
        top: 0;
        right : ${({darkmood})=>(darkmood ? ` 0 ` : `50%`)};
        bottom: 0;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;

    }
    .icon{
        transition: all 0.3s ease-in-out;

        z-index: 2;
        cursor: pointer;
        :first-child{
            color:${({darkmood})=>(darkmood ? ` #fff` : `#fff`)} ;
        }
        :last-child{
            color:${({darkmood})=>(darkmood ? `#fff ` : `var(--color-dark)`)} ;
        }
    }
    @media screen and (max-width: 640px) {
        position:absolute ;
        right: 50px;

    }

`;
export const ProfileSection = styled.div`
    display: flex;
    align-items: center;
`;
export const Name = styled.div`
    padding-right: 20px;
    direction: rtl;
    line-height: 15px;
    span{
        color: var(--color-info-dark);
        font-size: 10px;
    }
    @media screen and (max-width: 640px) {
        display: none;
    }
`;
export const ProfileImg = styled.img`
    width: 40px;
    border-radius: 50%;

`;
export const RightMein = styled.div`
    margin: 20px 10px;
    h2{
        margin-bottom: 20px;
    }
`;
export const Cards = styled.div`
    background-color: #fff;
    border-radius: var(--border-radius-3);
    padding: 10px;
    box-shadow: ${({darkmood})=>(darkmood ? "var(--box-shadow-dark)" : "var(--box-shadow)")} ;
    background: ${({darkmood})=>(darkmood ? "var(--color-dark-white)" : "var(--color-background)")} ;

`;
export const AddProject = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px; 
    margin-top: 20px;
    border: 2px dashed var(--color-primary) ;
    color: var(--color-primary);
    border-radius: var(--border-radius-3);
    font-size: 20px;
    font-weight: bold;
    transition: all 0.3s ease-out ;
    p{
        font-size: 16px;
        margin-left: 10px;
    }
    
    :hover{
        background-color: var(--color-primary);
        color : #fff;
        transition: all 0.3s ease-in ;

    }
`;