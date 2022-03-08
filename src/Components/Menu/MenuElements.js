import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuContainer = styled.ul`
    margin: 30px 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8,1fr);

`;
export const ListItem = styled.li`
    position: relative;
    .massage {
    
        ::after{
            content: "32";
            background-color: var(--color-denger);
            color: #fff;
            padding: 5px 5px;
            font-size: 8px;
            border-radius: 50%;
            margin-left: 5px;
            margin-bottom: 10px;
        }

    }
`;
export const LinkItem = styled(Link)`
    display: flex;
    align-items: center;
    font-size: 18px;
    height: 50px;
    padding-left: 30px;
    color: var(--color-dark-variant);
    transition: all 0.2s ease-out;
    @media screen  and (min-width: 841px) and (max-width: 1020px) {
        font-size: 20px;
        h3{
            display: none;
        }
    }
    h3{
        font-weight: 400;
        margin-left: 15px;
        
    }
    :hover{
        transition: all 0.2s ease-in;
        border-left: 10px solid var(--color-primary);
        color: var(--color-primary);
        padding-left: 40px;
        ::before{
            content: " ";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--color-primary);
            opacity: 0.2;
        }
    }
    
`;