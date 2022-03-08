import React,{useContext} from 'react';
// context 
import { DarkmoodProvider } from '../../Context/DarkmoodContextProvider';
// style 
import {
    RightCards,
    CardImg,
    CaptionCard,
    RightCards2,
    Name,
    DateCard,
    IconCardText,
    NameIcon,
    Precent,
    Number,
    Icons
} from "./RightCardElements"
const RightCard = ({img,name,dates,icon,precent,num,color}) => {
    const darkmood = useContext(DarkmoodProvider);
    return (
        <div>
           
            {
                icon ?
                <RightCards darkmood={darkmood}  icon={icon} >
                    <Icons color={color}>{icon}</Icons>
                    <IconCardText>
                            <NameIcon>
                                <p>{name}</p>
                                <span>Lost 24 Hours</span>
                            </NameIcon>
                            <Precent className={precent >0 ? "green" : "red"} >
                                    {precent}%
                            </Precent>
                            <Number>
                                {num}
                            </Number>
                    </IconCardText>
                </RightCards>
                :
                <RightCards2 darkmood={darkmood} >
                    <CardImg src={img} alt='profile' />
                    <CaptionCard>
                        <Name>{name}</Name>
                        <span>received his order of Night lion tech GPS drone.</span>
                        <DateCard>{dates}</DateCard>
                    </CaptionCard>
                    
                </RightCards2>
            }
        </div>
    );
};

export default RightCard;