import React,{useContext} from 'react';
// icon from react-icons
import { MdMenu , MdWbSunny,MdDarkMode,MdShoppingCart,MdShoppingBasket,MdPerson,MdOutlineAdd} from "react-icons/md";
// image 
import Profile from "../../Image/17.jpg"
import Profile1 from "../../Image/44.jpg"
import Profile2 from "../../Image/86.jpg"
import Profile3 from "../../Image/96.jpg"
// component 
import RightCard from '../RightCard/RightCard';
// context 
import { DarkmoodBtnProvider } from '../../Context/DarkmoodContextProvider';
import { DarkmoodProvider } from '../../Context/DarkmoodContextProvider';
// style 
import {
    RightContainer,
    RightWrap,
    RightTop,
    BgMood,
    ProfileSection,
    Name,
    ProfileImg,
    MenuBtn,
    RightMein,
    Cards,
    AddProject
} from "./RightElements"
 
const RightElement = ({menu}) => {
    const dark = useContext(DarkmoodBtnProvider);

    const darkmood = useContext(DarkmoodProvider);
    const darkBtn =()=>{
        dark(!darkmood)
    }
    return (
        <RightContainer darkmood={darkmood}>
            <RightWrap>
                <RightTop darkmood={darkmood}>
                    <MenuBtn onClick={menu}>
                        <MdMenu/>
                    </MenuBtn>
                    <BgMood darkmood={darkmood} onClick={darkBtn} >
                        <MdWbSunny className='icon'  />
                        <MdDarkMode className='icon' />
                    </BgMood>
                    <ProfileSection>
                        <Name>
                            <h4>Narges</h4>
                            <span>Admin</span>
                        </Name>
                        <ProfileImg src={Profile} alt="profile" />
                    </ProfileSection>
                </RightTop>
                <RightMein>
                    <h2>Recent Updates</h2>
                    <Cards  darkmood={darkmood}>
                        <RightCard  darkmood={darkmood} img={Profile3} name="NargesRahimi" dates="2 day ago" />
                        <RightCard  darkmood={darkmood} img={Profile2} name="Mike Tyson" dates="1 week ago" />
                        <RightCard  darkmood={darkmood} img={Profile1} name="NargesRahimi" dates="5 day ago" />

                    </Cards>
                </RightMein>
                <RightMein>
                    <h2>Sales Analytics</h2>
                    <div>
                        <RightCard icon={<MdShoppingCart />} name="ONLINE ORDERS"  num="3849" precent="+23" color="var(--color-primary)" />
                        <RightCard icon={<MdShoppingBasket />} name="OFFLINE ORDERS"  num="1100" precent="-17" color="var(--color-denger)" />
                        <RightCard icon={<MdPerson />} name="NEW CUSTOMER" num="850" precent="+25" color="var(--color-success)" />
                    </div>
                    <AddProject>
                        <MdOutlineAdd />
                        <p>Add Project</p>
                    </AddProject>
                </RightMein>
            </RightWrap>

        </RightContainer>
    );
};

export default RightElement;