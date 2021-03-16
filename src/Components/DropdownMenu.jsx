import React, { useState } from 'react';

import { ReactComponent as AboutIcon } from '../icons/about.svg';
import { ReactComponent as ServiceIcon } from '../icons/idea.svg';
import { ReactComponent as ContactIcon } from '../icons/contact-book.svg';
import { ReactComponent as BlogIcon } from '../icons/blogging.svg';
import { ReactComponent as FiverrIcon } from '../icons/fiverr.svg';
import { ReactComponent as LinkedInIcon } from '../icons/linkedin.svg';
import { ReactComponent as GithubIcon } from '../icons/github.svg';
import { ReactComponent as InstagramIcon } from '../icons/instagram.svg';
import { ReactComponent as LeftIcon } from '../icons/back.svg';
import { ReactComponent as RightIcon } from '../icons/forward.svg';
import {CSSTransition} from 'react-transition-group';


const DropdownMenu = () => {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(element){
        const height = element.offsetHeight;
        setMenuHeight(height);
    }

    const DropdownItem = (props) => {
        return (
            <>
                <a href={props.path} target={props.target} className="my-menu-item" onClick={()=>props.goToMenu && setActiveMenu(props.goToMenu)} style={{cursor:'pointer'}}>
                    <span className="icon-button">{props.leftIcon}</span>
                    <span className="menu-item-text">{props.children}</span>
                    <span className="icon-right">{props.rightIcon}</span>
                </a>
            </>
        );
    }

    return (
        <>
            <div className="my-dropdown" style={{ height: menuHeight }}>
                <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="my-menu-primary" onClick={calcHeight}>
                    <div className="my-menu">
                        
                        <DropdownItem path = "/blog" leftIcon={<BlogIcon />}>Blog</DropdownItem>
                        <DropdownItem path = "/about" leftIcon={<AboutIcon />}>About</DropdownItem>
                        <DropdownItem path = "/services" leftIcon={<ServiceIcon />}>Services</DropdownItem>
                        <DropdownItem leftIcon={<RightIcon />} goToMenu="contact">Contact Me</DropdownItem>
                    </div>

                </CSSTransition>

                <CSSTransition in={activeMenu === 'contact'} unmountOnExit timeout={500} classNames="my-menu-secondary" onClick={calcHeight}>
                    <div className="menu">
                        <DropdownItem leftIcon={<LeftIcon />} goToMenu="main"></DropdownItem>
                        <DropdownItem path = "/contact" leftIcon={<ContactIcon />}>Contact Form</DropdownItem>
                        <DropdownItem path = "https://www.linkedin.com/in/designbyfaizi/" target="_blank" leftIcon={<LinkedInIcon />}>LinkedIn</DropdownItem>
                        <DropdownItem path = "https://github.com/faizanullah1999" target="_blank" leftIcon={<GithubIcon />}>Github</DropdownItem>
                        <DropdownItem path = "https://instagram.com/pakistanicomicartist" target="_blank" leftIcon={<InstagramIcon />}>Instagram</DropdownItem>
                        <DropdownItem path = "https://fiverr.com/faizi_draws" target="_blank" leftIcon={<FiverrIcon />}>Fiverr</DropdownItem>

                    </div>

                </CSSTransition>
            </div>
        </>
    );
};

export default DropdownMenu;