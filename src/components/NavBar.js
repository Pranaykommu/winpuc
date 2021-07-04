import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from './About';
import Home from './Home';

export default function NavBar(scrolled){
    //
    const [navColor, setNavColor] = useState('#ff3838');
    const [aboutTab, setAboutTab]= useState(false);
    const [homeTab, setHomeTab] = useState(true);
  //  const prevScroll = window.pageYOffset;
    //const [visible, setVisible] = useState(true);
    //const [scrollPos, setScrollPos] = useState(0);
/*
    function HandleScroll(){
        //const currentScroll = window.pageYOffset;
        //setVisible(prevScroll>currentScroll);

        setScrollPos(document.body.getBoundingClientRect().top);
        setVisible(document.body.getBoundingClientRect().top > scrollPos)
    }

    useEffect(()=>{
        window.addEventListener('scroll', HandleScroll);

        return ()=> {
            window.removeEventListener('scroll', HandleScroll);
        }
    },[visible])
*/

    return (
        <Router>
            <div>
                <Navbar className="navbar-header" style={{ backgroundColor: `${navColor}` }}>
                    <Navbar.Brand as={Link} to={"/home"}>
                        <img onClick={()=>setNavColor('#ff3838')}
                            alt=""
                            src='https://newmwebasset.s3.ap-south-1.amazonaws.com/juiy03.png'
                            width="77.1+20"
                            height="30.9+20"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {homeTab===false && aboutTab===true ?
                            (<Nav.Link onClick={()=>{
                                setNavColor('#ff3838');
                                setAboutTab(false);
                                setHomeTab(true);
                            }} style={{ color: '#ffffff', fontSize: '15px' }} as={Link} to={"/home"}>Home</Nav.Link>
                            ) : null}
                            {homeTab===true && aboutTab===false ?
                            (<Nav.Link onClick={()=>{
                                setNavColor('#ff3838');
                                setHomeTab(false);
                                setAboutTab(true);
                            }} style={{ color: '#ffffff', fontSize: '15px' }} as={Link} to={"/about"}>About Us</Nav.Link>
                            ) : null}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}