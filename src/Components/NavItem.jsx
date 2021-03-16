import React, { useState } from 'react';

const NavItem = (props) => {

    const[open, setOpen] = useState(false);

    return (
        <>
            <li className="my-nav-item">
                <a href={props.path} className="icon-button" onClick={()=>setOpen(!open)} style={{cursor:'pointer'}}>
                    {props.icon}
                </a>

                {open && props.children}
            </li>
        </>
    );
};

export default NavItem;