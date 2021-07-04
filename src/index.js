import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import BaseNav from './components/BaseNav';



ReactDOM.render(
    <React.Fragment>
      <NavBar/>
      <BaseNav/>
    </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*

          <p style={{ height: 100, backgroundColor: 'green', textAlign: 'left', }}>
            <text style={{ fontSize: '35px', color: '#ffffff', fontWeight: 'bold', fontFamily: 'sans-serif', textAlign: 'left' }}>Juiy, Light and Fun<br />to Places</text>
          </p>
      <div style={{ flex: 9, backgroundColor: '#ffffff', }}>
        <img src={`${process.env.PUBLIC_URL}/assets/n1.jpg`} height='500' width='300' />
      </div>

*/