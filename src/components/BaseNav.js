import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { Context as AuthContext } from '../context/AuthContext';

import {
    BrowserRouter as Router,
  } from "react-router-dom";
import { Switch, withStyles } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

export default function BaseNav(){
    //
    const { state: { mode }, changeToDarkMode, changeToLightMode } = useContext(AuthContext);
    const PurpleSwitch = withStyles({
        switchBase: {
          color: '#252526',
          '&$checked': {
            color: '#ffffff',
          },
          '&$checked + $track': {
            backgroundColor: '#fafafa',
          },
        },
        checked: {},
        track: {},
      })(Switch);
    return (
        <Router>
            <div>
                <Nav style={{ backgroundColor:mode==='Light Mode' ? '#F3F3F5' : '#1D1D1D' }} className="justify-content-center" activeKey="/">
                    <Nav.Item>
                    <Nav.Link style={{ color: mode==='Light Mode' ? '#00000099' : '#ffffff', fontSize: '15px' }} eventKey="link-1">Privacy Policy</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link style={{ color: mode==='Light Mode' ? '#00000099' : '#ffffff', fontSize: '15px' }} eventKey="link-1">T&C</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link style={{ color: mode==='Light Mode' ? '#00000099' : '#ffffff99', fontSize: '14px' }} eventKey="link-1">© Integer Info Solutions Pvt. Ltd.</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </Router>
    )
}