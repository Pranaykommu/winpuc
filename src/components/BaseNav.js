import React from 'react';
import { Nav } from 'react-bootstrap';

import {
    BrowserRouter as Router,
  } from "react-router-dom";

export default function BaseNav(){
    //

    return (
        <Router>
            <div>
                <Nav style={{ backgroundColor: '#ff3838' }} className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                    <Nav.Link style={{ color: '#ffffff', fontSize: '14px' }} eventKey="link-1">Team</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link style={{ color: '#ffffff', fontSize: '14px' }} eventKey="link-2">Privacy Policy</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link style={{ color: '#ffffff', fontSize: '14px' }} eventKey="link-3">Terms of Service</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link style={{ color: '#ffffff99', fontSize: '17px' }} eventKey="disabled" disabled>
                    © Juiy Mobility Pvt. Ltd.
                    </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </Router>
    )
}