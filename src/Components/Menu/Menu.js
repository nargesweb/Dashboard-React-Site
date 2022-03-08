import React from 'react';
import { MdDashboard,MdTrendingUp,MdOutlinePersonOutline,MdErrorOutline,
    MdOutlineSettings,MdOutlineAdd,MdOutlineEmail ,MdOutlineTextSnippet} from "react-icons/md";

import {
    MenuContainer,
    ListItem,
    LinkItem,
} from "./MenuElements"
const Menu = ({menu}) => {
    return (
        <MenuContainer>
            <ListItem onClick={menu} >
                <LinkItem to ="/">
                    <MdDashboard/>
                    <h3>Dashboard</h3>
                </LinkItem>
            </ListItem>
            <ListItem onClick={menu}>
                <LinkItem to ="/">
                    <MdOutlinePersonOutline/>
                    <h3>Customers</h3>
                </LinkItem>
            </ListItem>
            <ListItem onClick={menu}>
                <LinkItem to ="/">
                    <MdOutlineTextSnippet/>
                    <h3>Orders</h3>
                </LinkItem>
            </ListItem>
            <ListItem onClick={menu}>
                <LinkItem to ="/">
                    <MdTrendingUp/>
                    <h3>Analytics</h3>
                </LinkItem>
            </ListItem>
            <ListItem onClick={menu}>
                <LinkItem to ="/" massage="26" className='massage'>
                    <MdOutlineEmail/>
                    <h3>Massage</h3>
                </LinkItem>
            </ListItem>
            <ListItem onClick={menu}>
                <LinkItem to ="/">
                    <MdErrorOutline/>
                    <h3>Reports</h3>
                </LinkItem>
            </ListItem>
            <ListItem onClick={menu}>
                <LinkItem to ="/">
                    <MdOutlineSettings/>
                    <h3>Setting</h3>
                </LinkItem>
            </ListItem>
            <ListItem onClick={menu}>
                <LinkItem to ="/">
                    <MdOutlineAdd/>
                    <h3>AddProducts</h3>
                </LinkItem>
            </ListItem>
        </MenuContainer>
    );
};

export default Menu;