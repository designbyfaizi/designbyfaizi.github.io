import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Blog from './Components/Blog'
import Error from './Components/Error'
import Navbar from './Components/Navbar'
import { Switch, Route, Redirect } from 'react-router';
import NavItem from './Components/NavItem';
import DropdownMenu from './Components/DropdownMenu';

import {ReactComponent as DownIcon} from './icons/arrow-down.svg';
import {ReactComponent as HomeIcon} from './icons/home.svg';



const App = ()=>{
    return(
        <>
            <Navbar>
                
                <NavItem path="/" icon={<HomeIcon/>}></NavItem>
                <NavItem icon={<DownIcon/>}>

                    {/* Dropdown goes here */}
                    <DropdownMenu />

                </NavItem>
            </Navbar>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/service" component={Services}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/404-Error" component={Error}/>
            <Route exact path="/blog" component={Blog}/>
            <Redirect to="/404-Error" />
        </Switch>
        </>
        
    );
};


export default App;