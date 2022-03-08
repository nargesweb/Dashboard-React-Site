import React,{useState} from 'react';
import { v4 } from 'uuid';
// components 
import DBCard from '../DashBoardCard/DBCard';
// icons from react icons 
import {FaChartLine,FaChartBar} from 'react-icons/fa'
import {BsBarChartLineFill} from 'react-icons/bs'
// style 
import {
    CardsContainer,
    CardsWrapper
} from './CardsElement'

const Cards = () => {
    // data of cards 
    const [data,setData] = useState([
        {id : 0 ,title : "Total Sales" , price : "25,024" , time : "Last 24 Hours" ,offset : "-30" , array : "200" , percentage : "81",bgicon : "var(--color-primary)" ,icon : [<FaChartBar/>]},
        {id : 1 ,title : "Total Expenses" , price : "14,160" , time : "Last 4 Hours" ,offset : "20" , array : "80" , percentage : "60",bgicon : "var(--color-denger)" ,icon : [<BsBarChartLineFill/>]},
        {id : 2 ,title : "Total Income" , price : "10,024" , time : "Last 14 Hours" ,offset : "35" , array : "100" , percentage : "45",bgicon : "var(--color-success)" ,icon : [<FaChartLine/>]},
    ])
    return (
        <CardsContainer>
            <CardsWrapper>
                {data.map(item => <DBCard  key={v4()} data={item}/>)}

            </CardsWrapper>
        </CardsContainer>
    );
};

export default Cards;