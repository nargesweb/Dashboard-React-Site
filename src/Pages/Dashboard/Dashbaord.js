import React,{useContext} from 'react';
// components 
import Cards from '../../Components/Cards/Cards';
import Orders from '../../Components/OrdersSection/Orders';
// context 
import { DarkmoodProvider } from '../../Context/DarkmoodContextProvider';
// style 
import{
    DashbaordContainer,
    DashboardWrap,
    DashbaordH1,
    Date,
} from "./DashboardElements"
const Dashbaord = () => {
    const darkmood = useContext(DarkmoodProvider);
    return (
        <DashbaordContainer darkmood={darkmood}>
            <DashboardWrap>
                <DashbaordH1>Dashboard</DashbaordH1>
                <Date darkmood={darkmood}>
                    <input type="date" placeholder='Date'/>
                </Date>
                <Cards />
                <Orders/>
            </DashboardWrap>
            <DashboardWrap>
                <Orders/>
                <Orders/>
            </DashboardWrap>
        </DashbaordContainer>
    );
};

export default Dashbaord;