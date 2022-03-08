import styled  from "styled-components";

export const OrderContainer = styled.div`
margin-top: 20px ;
`;
export const OrderH2 = styled.h2`
    margin-bottom: 20px;
`;
export const TableWrap = styled.div`
    width: 100%;
    padding: 30px 0;
    background-color: ${({darkmood})=>(darkmood ? "var(--color-dark-white)" : "#fff")};
    height: 400px;
    box-shadow: ${({darkmood})=>(darkmood ? "var(--box-shadow-dark)" : "var(--box-shadow)")} ;
    border-radius: var(--card-border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    table{
        width: 90%;
        height: 100%;
        align-items: center;
        text-align: center;
        td{
            border-bottom: 1px solid var(--color-dark-variant);
            color: var(--color-dark-variant);
            cursor:pointer ;

        }
        th{
       
            cursor:pointer ;
        }
        @media screen and (max-width: 1024px){
            tr{
                td{
                    :last-child{
                        display: none;
                    }
                    :first-child{
                        display: none;
                    }
                }
                th{
                    :last-child{
                        display: none;
                    }
                    :first-child{
                        display: none;
                    }
                }
            }


        }

    }
`;