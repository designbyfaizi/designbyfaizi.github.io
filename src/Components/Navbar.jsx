import React from 'react';
import {ReactComponent as Faizi} from '../icons/Design by Faizi.svg';

const Navbar = (props) => {
    return (
        <>
            <nav className="my-navbar">
                <div className="row container mx-auto">
                    <div className="col-2 my-auto faizi-logo">
                    <a className="" href="/">{<Faizi />}</a>
                    </div>
                    <div className="col-10 mx-auto">
                        <div className="my-navbar">
                            <ul className="my-navbar-nav">
                                {props.children}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;