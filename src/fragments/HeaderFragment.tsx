import { Header, HeaderNav, List, ListItem, SidePanel, SidePanelContent } from "mds-react";
import { useState } from "react";
import { NavLink } from "react-router";


function HeaderFragment (){

    const [isMenuOpen, setisMenuOpen] = useState(false);

    const sidePanelCloseHandler = () => {
        setisMenuOpen(false);
    }

    const menuOpenHandler = () => {
        setisMenuOpen(true);
    }

    const navListItem = [
        {label: "Home", destination: "/"},
        {label: "A Component", destination: "/component"},
        {label: "Page WP", destination: "/exemple"}
    ];


    const headerNav = <HeaderNav>
        {navListItem.map((el) => {
            return (
                <li className="mds-header__menu-item " key={el.label}>
                    <NavLink style={{height: '100%'}} className="mds-btn mds-header__nav-item " to={el.destination}>{el.label}</NavLink>
                </li>
            )
        })
        }
        </HeaderNav>

    return (
        <>
            <SidePanel onClose={sidePanelCloseHandler} open={isMenuOpen} showCloseButton={true} visuallyHideTitle={true} title="menu">
                <SidePanelContent>
                    <List className="mds-stack-t--48" divider={false}>
                        {navListItem.map((el) => {
                            return (
                                <ListItem key={el.label}>
                                    <div className="mds-action-list__item-container-content">
                                        <div className="mds-action-list__item-text-content">
                                            <span className="mds-action-list__item-title">
                                                <NavLink className="mds-action-list__item-link" to={el.destination}>{el.label}</NavLink>
                                            </span>
                                        </div>
                                    </div>
                                </ListItem>
                            )
                        })}
                    </List>
                </SidePanelContent>
            </SidePanel>
            <Header onMenuOpen={menuOpenHandler} headerLogoDesktopUrl="assets/exploration.jpg" headerLogoUrl="assets/logo-mobile.jpg" headerNav={headerNav} headerNavPosition="inside"/>
        </>
    )
}

export default HeaderFragment;