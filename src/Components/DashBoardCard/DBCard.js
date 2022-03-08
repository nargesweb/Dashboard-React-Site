import React,{useContext} from 'react';
// context 
import { DarkmoodProvider } from '../../Context/DarkmoodContextProvider';
// style 
import {
    Card,
    Logo,
    Min,
    Text,
    Title,
    Price,
    Chart,
    Time,
} from './DBCardElements'

const DBCard = ({data}) => {
    const darkmood = useContext(DarkmoodProvider)
    return (
        <Card darkmood={darkmood}>
           <Logo bgicon={data.bgicon}>
               <span>
                    {data.icon}
               </span>
            </Logo> 
           <Min>
                <Text>
                    <Title>{data.title}</Title>
                    <Price>$ {data.price}</Price>
                </Text>
                <Chart offset={data.offset} array={data.array}>
                    <svg>
                        <circle cx="38" cy="38" r="36" />
                    </svg>
                    <span>{data.percentage} %</span>
                </Chart>
           </Min>
           <Time>
                {data.time}
           </Time>
        </Card>
    );
};

export default DBCard;