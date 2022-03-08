import styled from "styled-components";

export const RightCards = styled.div`
    display: flex;
    align-items: flex-start;
    color: ${({darkmood})=>(darkmood ? "var(--color-dark-text)" : "var(--color-dark)")} ;
    padding: ${({icon})=> (icon ?"20px 25px" : " 5px 25px")};
    background: ${({darkmood})=>(darkmood ? "var(--color-dark-white)" : "#fff")} ;
    margin-top: 10px;
    border-radius: var(--border-radius-3);
    box-shadow: ${({darkmood})=>(darkmood ? "var(--box-shadow-dark)" : "var(--box-shadow)")} ;

    cursor: pointer;
`;
export const RightCards2 = styled.div`
    display: flex;
    align-items: flex-start;
    color: ${({darkmood})=>(darkmood ? "var(--color-dark-text)" : "var(--color-dark)")} ;
    padding: ${({icon})=> (icon ?"20px 25px" : " 5px 25px")};
    margin-top: 10px;
    cursor: pointer;
`;
export const CardImg = styled.img`
    width: 40px;
    border-radius: 50%;
    cursor: inherit;

`;
export const CaptionCard = styled.div`
    margin-left: 15px;
    cursor: inherit;

    span{
        color: var(--color-dark-variant);
        font-size: 11px;
    }
`;
export const Name = styled.p`
    display: inline;
    margin-right: 8px;
    font-weight: bold;
    font-size: 12px;
`;
export const DateCard = styled.p`
    font-size: 10px;
    color: var(--color-dark-variant);
    cursor: inherit;

`; 
export const IconCardText = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: flex-start;
    cursor: inherit;

    width: 100%;
    .green{
        color: #3aa146;
    }
    .red{
        color: red;
    }
    
`;
export const Icons = styled.div`
    background-color: ${({color})=>(color)};
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #fff;
    margin-right: 15px;
    font-size: 20px;
    cursor: inherit;


`;
export const NameIcon = styled.div`
    p{
        font-weight: bold;
        font-size: 12px;
    }
    span{
        color: var(--color-dark-variant);
        font-size: 11px;
    }
`;
export const Precent = styled.div`
    font-size: 12px;
    font-weight: bold;
    
`;
export const Number= styled.div`
    font-size: 12px;
    font-weight: bold;
`;