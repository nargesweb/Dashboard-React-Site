import React,{useContext} from 'react';

// logo 
import Logo from "../../Image/logo.png"
// icons 
import { AiOutlineClose} from "react-icons/ai";
import {MdLogout} from "react-icons/md"
// components 
import Menu from '../Menu/Menu';
// context
import { DarkmoodProvider } from '../../Context/DarkmoodContextProvider';
// style 
import {
    SidebarContainer,
    SidebarWrapper,
    Top,
    Logosection,
    LogoImg,
    LogoName,
    CloseBtn,
    Mein,
    Logout,
} from "./SideBarElements"
const SlideBar = ({openMenu,menu,}) => {
    const darkmood = useContext(DarkmoodProvider)
    return (
        <>
            <SidebarContainer openMenu={openMenu} darkmood={darkmood}>
                <SidebarWrapper>
                    <Top>
                        <Logosection to="/"  onClick={menu}>
                            <LogoImg src={Logo} alt="logo picture" />
                            <LogoName  darkmood={darkmood}> EGA<span>TORE</span></LogoName>
                        </Logosection>
                        <CloseBtn onClick={menu}>
                            <AiOutlineClose />
                        </CloseBtn>
                    </Top>
                        <Mein>
                            <Menu menu={menu} />
                        </Mein>
                        <Logout>
                            <MdLogout />
                            <span>
                                Logout
                            </span>
                        </Logout>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    );
};

export default SlideBar;