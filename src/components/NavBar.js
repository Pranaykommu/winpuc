import React, { useContext, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Context as AuthContext } from '../context/AuthContext';
import {
    BrowserRouter as Router,
    Switch as RSwitch,
    Route,
    Link
  } from "react-router-dom";
import About from './About';
import Home from './Home';
import Login from './Login';
import { Switch, withStyles } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

export default function NavBar(scrolled){
    //
    const { state: { mode }, changeToDarkMode, changeToLightMode } = useContext(AuthContext);
    const [navColor, setNavColor] = useState('#1e1e1e');
    const [aboutTab, setAboutTab]= useState(false);
    const [homeTab, setHomeTab] = useState(true);
    const { state : { token } } = useContext(AuthContext);
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
const PurpleSwitch = withStyles({
    switchBase: {
      color: mode==='Dark Mode' ? '#252526' : '#ffffff',
      '&$checked': {
        color: mode==='Dark Mode' ? '#252526' : '#ffffff',
      },
      '&$checked + $track': {
        backgroundColor: mode==='Dark Mode' ? '#fafafa' : '#fafafa',
      },
    },
    checked: {},
    track: {},
  })(Switch);
    return (
        <Router>
            <div>
                <Navbar /* hidden={token!=null ? false : true}*/ className="navbar-header" 
                style={{ backgroundColor: mode==='Light Mode' ? token!=null ? '#ffffff' : '#fafafa' : token!=null ? '#1e1e1e' : '#252526' }}>
                    <Navbar.Brand>
                        {token!=null ?
                        <img
                            alt=""
                            src='https://www.tapeit.in/assets/images/logoNew1.png'
                            width="22%"
                            height="11%"
                            className="d-inline-block align-top"
                        /> : null}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {token===null ?
                            (<Nav.Link onClick={()=>{
                                setNavColor('#ff3838');
                                //remove token from state
                                setHomeTab(false);
                                setAboutTab(true);
                            }} style={{ color: '#ffffff', fontSize: '15px' }}></Nav.Link>
                            ) : null}
                        </Nav>
                        <Nav className="ml-auto">
                            <PurpleSwitch checked={mode==='Dark Mode' ? true : false} onChange={(e)=>{
                                if(e.target.checked===true){
                                    changeToDarkMode()
                                } else{
                                    changeToLightMode()
                                }
                            }} />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div>
                <RSwitch>
                    <Route path="/">
                        {token!=null ?
                        <Home /> : <Login />}
                    </Route>
                </RSwitch>
            </div>
        </Router>
    )
}

///// use context to update sethometab to true after saving token