import React, { useContext, useRef, useState } from 'react';
//import { NavLink } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { Context as AuthContext } from '../context/AuthContext';
import { ButtonGroup, FormControl, IconButton, InputAdornment, InputLabel, makeStyles, OutlinedInput, TextField, withStyles, Button, FilledInput, Grid, Paper } from '@material-ui/core';
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';
import Webcam from "react-webcam";
import clsx from 'clsx';
import Donut from './Donut';
import Bar from './Bar';
import Credits from './Credits';
import Tabe from './Tabe';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(0),
    },
    textField: {
      width: '100%',
      marginTop: 20,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
export default function Home(){
    const [image, setImage] = useState(null);
    const webcamRef = useRef(null);
    const [phone, setPhone] = useState('');
    const [modal, setModal] = useState(false);
    const [otp, setOtp] = useState('')
    const [success, setSuccess] = useState(false);
    const [puc, setPuc] = useState(true);
    const [reports, setReports] = useState(false);
    const [credits, setCredits] = useState(false);
    const [history, setHistory] = useState(false);
    const [show, setShow] = useState('Reports');
    const [user, setUser] = useState('Operator');
    const [fetc, setFetc] = useState(false);
    const [fetcReports, setFetcReports] = useState(false);
    const [fetcHistory, setFetcHistory] = useState(false);
    const [fetcCredits, setFetcCredits] = useState(false);
  //  const [scrolled, setScrolled] = useState(false);
    const { state: { mode }, signin } = useContext(AuthContext);
    console.log('mode from home is', mode);

    const classes = useStyles();
    const CssTextField = withStyles({
        root: {
          '& label.Mui-focused': {
            color: '#FAFAFA',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#FAFAFA',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: mode==='Light Mode' ? '#FAFAFA' : '#252526',
            },
            '&:hover fieldset': {
              borderColor: '#FAFAFA',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FAFAFA',
            },
          },
        },
      })(TextField);
    return(
        <div className='signup-form'>
            <div style={{ height: '100px', width: '100%',textAlign: 'center', margin: '0 auto', justifyContent: 'center', alignItems: 'center', backgroundColor: mode==='Light Mode' ? '#F3F3F5' : '#252526', }}>
                    <ButtonGroup  style={{ margin: '0 auto', marginTop: '50px', marginBottom: '50px' }} color="primary" aria-label="outlined primary button group">
                        <Button onClick={()=>{
                            //
                            setUser('Admin');
                        }} style={{ backgroundColor: show==='Admin' ? mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' : mode==='Dark Mode' ? '#252526' : '#fafafa99', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' }}>Admin</Button>
                        <Button onClick={()=>{
                            //
                            setUser('RTO');
                        }} style={{ backgroundColor: show==='RTO' ? mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' : mode==='Dark Mode' ? '#252526' : '#fafafa99', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' }}>RTO</Button>
                        <Button onClick={()=>{
                            //
                            setUser('Operator');
                        }} style={{ backgroundColor: show==='Operator' ? mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' : mode==='Dark Mode' ? '#252526' : '#fafafa99', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' }}>Operator</Button>
                    </ButtonGroup>
                </div>
            {user==='Operator' ?
            (<div style={{ height: '1000px', width: '100%', backgroundColor: mode==='Light Mode' ? '#F3F3F5' : '#252526', margin: '0 auto' }}>
                <div style={{ height: '100px', width: '100%',textAlign: 'center', margin: '0 auto', justifyContent: 'center', alignItems: 'center', backgroundColor: mode==='Light Mode' ? '#F3F3F5' : '#252526', }}>
                    <ButtonGroup  style={{ margin: '0 auto', marginTop: '50px', }} color="primary" aria-label="outlined primary button group">
                        <Button onClick={()=>{
                            //
                            setShow('PUC');
                        }} style={{ backgroundColor: show==='PUC' ? mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' : mode==='Dark Mode' ? '#252526' : '#fafafa99', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' }}>PUC</Button>
                        <Button onClick={()=>{
                            //
                            setShow('Reports');
                        }} style={{ backgroundColor: show==='Reports' ? mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' : mode==='Dark Mode' ? '#252526' : '#fafafa99', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' }}>Reports</Button>
                        <Button onClick={()=>{
                            //
                            setShow('Credits');
                        }} style={{ backgroundColor: show==='Credits' ? mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' : mode==='Dark Mode' ? '#252526' : '#fafafa99', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' }}>Credits</Button>
                        <Button onClick={()=>{
                            //
                            setShow('History');
                        }} style={{ backgroundColor: show==='History' ? mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' : mode==='Dark Mode' ? '#252526' : '#fafafa99', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' }}>History</Button>
                    </ButtonGroup>
                </div>
                {show==='PUC' ? fetc===false ? 
                (
                        <div style={{ height: /*fetc===false ? '700px' : */'600px', width: '70%', backgroundColor: mode==='Light Mode' ? '#ffffff' : '#1e1e1e', margin: '0 auto', marginBottom: 30 }}>
                        <div className="input-group" style={{ margin: '0 auto', width: '35%', textAlign: 'center', flexDirection: 'row', }}>
                            <FormControl className={clsx(classes.margin, classes.textField)} variant='filled'>
                                <InputLabel style={{ color: mode==='Light Mode' ? '#252526' : '#fafafa', borderColor: '#FAFAFA' }} htmlFor="outlined-adornment-password">Phone Number</InputLabel>
                                <FilledInput
                                    style={{ backgroundColor: mode==='Light Mode' ? '#fafafa' : '#252526', color: mode==='Light Mode' ? '#252526' : '#fafafa' }}
                                    id="outlined-adornment-password"
                                    type='text'
                                    value={phone}
                                    autoComplete={false}
                                    autoCorrect={false}
                                    onChange={(e)=>setPhone(e.target.value)}
                                    labelWidth={80}
                                />
                                </FormControl>
                        </div>
                        <div className="input-group" style={{ margin: '0 auto', width: '35%', textAlign: 'center', flexDirection: 'row' }}>
                            <FormControl className={clsx(classes.margin, classes.textField)} variant='filled'>
                                <InputLabel style={{ color: mode==='Light Mode' ? '#252526' : '#fafafa', borderColor: '#FAFAFA' }} htmlFor="outlined-adornment-password">Vehicle Number</InputLabel>
                                <FilledInput
                                    style={{ backgroundColor: mode==='Light Mode' ? '#fafafa' : '#252526', color: mode==='Light Mode' ? '#252526' : '#fafafa' }}
                                    id="outlined-adornment-password"
                                    type='text'
                                    value={phone}
                                    autoComplete={false}
                                    autoCorrect={false}
                                    onChange={(e)=>setPhone(e.target.value)}
                                    labelWidth={80}
                                />
                                </FormControl>
                        </div>
                        <div className="input-group" style={{ margin: '0 auto', width: '35%', textAlign: 'center', flexDirection: 'row' }}>
                            {image===null ?
                                (<Webcam onClick={()=> {
                                if(webcamRef){
                                    //
                                    const photo = webcamRef.current.getScreenshot();
                                    setImage(photo);
                                }
                            }} width='100%' height='100%' style={{ margin: '0 auto', marginTop: 20 }} audio={false} ref={webcamRef} />) : 
                            (
                                <img   
                                alt=""
                                src={image}
                                width="100%"
                                height="100%"
                                style={{  margin: '0 auto', marginTop: 10  }}
                                className="d-inline-block align-top" />
                            )
                            }
                        </div>
                        {image!=null ? fetc===false ?
                        <div className="input-group" style={{ margin: '0 auto', width: '35%', textAlign: 'center', flexDirection: 'row' }}>
                            <Button onClick={async()=>{
                            setModal(true)
                            //  signin({ username: email, password: password })
                            /*   await axios.post(`http://13.233.138.227:8080/puc-certificate-services/login?username=${email}&password=${password}`).then((response)=>{
                                    console.log('resp', response);
                                    if(response.data==='success'){
                                    //set token
                                        setPassword('');
                                        setEmail('');
                                    } else {
                                        setPassword('');
                                        setEmail('');
                                        alert(`err occurred`);
                                    }
                                }).catch((err)=>{
                                    alert('error occurred')
                                });*/
                            }} style={{ backgroundColor:mode==='Light Mode' ? '#f3f3f5' :   '#7f7f7f', borderColor:mode==='Light Mode' ? '#FAFAFA' : '#252526', width: '100%', height: '40px', marginTop: 20 }}>Continue</Button>
                        </div> : null : null}
                </div>
                )
                :
                <div style={{ height: '800px', width: '70%', backgroundColor: mode==='Light Mode' ? '#ffffff' : '#1e1e1e', margin: '0 auto',  }}>
                <div className="input-group" style={{ margin: '0 auto', width: '90%', height: '300px', textAlign: 'center', }}>
                            <Grid style={{ marginTop: 1 }} container spacing={3}>
                                <Grid item xs={4}>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#1e1e1e'  : 'transparent', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%', marginTop: 30 }}>Phone Number</Button>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#1e1e1e'  : 'transparent', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%', marginTop: 30 }}>Vehicle Number</Button>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#1e1e1e'  : 'transparent', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%', marginTop: 10  }}>Chasis Number</Button>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#1e1e1e'  : 'transparent', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%', marginTop: 10  }}>Year of Regn</Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#252526'  : '#fafafa', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%', marginTop: 30  }}>9618625767</Button>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#252526'  : '#fafafa', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%', marginTop: 30  }}>AP 29 AW 8033</Button>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#252526'  : '#fafafa', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%', marginTop: 10  }}>APAW8033AP29AW8033</Button>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#252526'  : '#fafafa', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%', marginTop: 10  }}>2012</Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <img   
                                alt=""
                                src={image}
                                width="100%"
                                height="100%"
                                style={{  margin: '0 auto', marginTop: 10  }}
                                className="d-inline-block align-top" />
                                </Grid>
                                <Grid item xs={3}>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#1e1e1e'  : 'transparent', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%', }}>Type of Vehicle</Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#252526'  : '#fafafa', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%' }}>2 Wheeler</Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#1e1e1e'  : 'transparent', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%' }}>Type of Engine</Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#252526'  : '#fafafa', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%' }}>2 Stroke</Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#1e1e1e'  : 'transparent', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%', }}>Make</Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#252526'  : '#fafafa', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%' }}>Honda</Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#1e1e1e'  : 'transparent', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%' }}>Model</Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#252526'  : '#fafafa', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%' }}>Activa</Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#1e1e1e'  : 'transparent', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%' }}>Fuel</Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#252526'  : '#fafafa', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%' }}>Petrol</Button>
                                </Grid>
                                <Grid item xs={6}>
                                </Grid>
                                <Grid item xs={2}>
                                </Grid>
                                <Grid item xs={2}>
                                    <span style={{ width: '100px' }}  style={{ color: mode==='Light Mode' ? '#252526' : '#f3f3f599' }}>CO</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span style={{ width: '100px' }}  style={{ color: mode==='Light Mode' ? '#252526' : '#f3f3f599' }}>HC</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span style={{ width: '100px' }}  style={{ color: mode==='Light Mode' ? '#252526' : '#f3f3f599' }}>CO2</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span style={{ width: '100px' }}  style={{ color: mode==='Light Mode' ? '#252526' : '#f3f3f599' }}>O2</span>
                                </Grid>
                                <Grid item xs={2}>
                                </Grid>
                                <Grid item xs={2}>
                                    <span  style={{ color: mode==='Light Mode' ? '#252526' : '#f3f3f599' }}>Pres STD</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#252526'  : '#fafafa', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%' }}>-</Button>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#252526'  : '#fafafa', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%' }}>-</Button>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#252526'  : '#fafafa', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%' }}>-</Button>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#252526'  : '#fafafa', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%' }}>-</Button>
                                </Grid>
                                <Grid item xs={2}>
                                </Grid>
                                <Grid item xs={2}>
                                    <span style={{ color: mode==='Light Mode' ? '#252526' : '#f3f3f599' }}>Measured Level</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#252526'  : '#fafafa', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%' }}>-</Button>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#252526'  : '#fafafa', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%' }}>-</Button>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#252526'  : '#fafafa', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%' }}>-</Button>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#252526'  : '#fafafa', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%' }}>-</Button>
                                </Grid>
                                <Grid item xs={2}>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#252526'  : '#fafafa', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%' }}>Test Result ? </Button>
                                </Grid>
                            </Grid>
                        </div>
                </div> : null}
                {show==='Reports' ? fetcReports===false ? 
                (
                <div style={{ height: /*fetc===false ? '700px' : */'700px', width: '70%', backgroundColor: mode==='Light Mode' ? '#ffffff' : '#1e1e1e', margin: '0 auto', marginBottom: 30 }}>
                <div className="input-group" style={{ margin: '0 auto', width: '100%', height: '100%', textAlign: 'center', }}>
                    <Grid style={{ marginTop: 20, height: '100%', width: '100%',margin: '0 auto', }} container spacing={3}>
                    <Grid item xs={12}>
                        <Donut />
                    </Grid>
                    <Grid style={{ margin: '0 auto', }} item xs={12}>
                        <Bar />
                    </Grid>
                   </Grid>
                   </div>
                </div>)
                :
                (
                <div>
                </div>
                ) : null}
                {show==='History' ? fetcHistory===false ? 
                (
                <div style={{ height: /*fetc===false ? '700px' : */'600px', width: '70%', backgroundColor: mode==='Light Mode' ? '#ffffff00' : '#1e1e1e00', margin: '0 auto', marginBottom: 30 }}>
                    <Tabe />
                </div>)
                :
                (
                <div>
                </div>
                ) : null}
                {show==='Credits' ? fetcCredits===false ? 
                (
                <div style={{ height: /*fetc===false ? '700px' : */'600px', width: '70%', backgroundColor: mode==='Light Mode' ? '#ffffff' : '#1e1e1e', margin: '0 auto', marginBottom: 30 }}>
                    <Credits />
                </div>)
                :
                (
                <div>
                </div>
                ) : null}
            </div>)
            : null
            }
            {user==='RTO' ?
            (<div style={{ height: '1000px', width: '100%', backgroundColor: mode==='Light Mode' ? '#F3F3F5' : '#252526', margin: '0 auto' }}>
                <div style={{ height: '100px', width: '100%',textAlign: 'center', margin: '0 auto', justifyContent: 'center', alignItems: 'center', backgroundColor: mode==='Light Mode' ? '#F3F3F5' : '#252526' }}>
                    <ButtonGroup  style={{ margin: '0 auto', marginTop: '50px', }} color="primary" aria-label="outlined primary button group">
                        <Button onClick={()=>{
                            //
                            setShow('Reports');
                        }} style={{ backgroundColor: show==='Reports' ? mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' : mode==='Dark Mode' ? '#252526' : '#fafafa99', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' }}>Reports</Button>
                        <Button onClick={()=>{
                            //
                            setShow('Manage');
                        }} style={{ backgroundColor: show==='Manage' ? mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' : mode==='Dark Mode' ? '#252526' : '#fafafa99', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' }}>Manage Operator</Button>
                        <Button onClick={()=>{
                            //
                            setShow('History');
                        }} style={{ backgroundColor: show==='History' ? mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' : mode==='Dark Mode' ? '#252526' : '#fafafa99', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' }}>History</Button>
                    </ButtonGroup>
                </div>
                {show==='Reports' ? fetcReports===false ? 
                (
                <div style={{ height: /*fetc===false ? '700px' : */'700px', width: '70%', backgroundColor: mode==='Light Mode' ? '#ffffff' : '#1e1e1e', margin: '0 auto', marginBottom: 30 }}>
                <div className="input-group" style={{ margin: '0 auto', width: '100%', height: '100%', textAlign: 'center', }}>
                    <Grid style={{ marginTop: 20, height: '100%', width: '100%',margin: '0 auto', }} container spacing={3}>
                    <Grid item xs={12}>
                        <Donut />
                    </Grid>
                    <Grid style={{ margin: '0 auto', }} item xs={12}>
                        <Bar />
                    </Grid>
                   </Grid>
                   </div>
                </div>)
                :
                (
                <div>
                </div>
                ) : null}
                {show==='History' ? fetcHistory===false ? 
                (
                <div style={{ height: /*fetc===false ? '700px' : */'600px', width: '70%', backgroundColor: mode==='Light Mode' ? '#ffffff00' : '#1e1e1e00', margin: '0 auto', marginBottom: 30 }}>
                    <Tabe />
                </div>)
                :
                (
                <div>
                </div>
                ) : null}
                {show==='Manage' ? fetcCredits===false ? 
                (
                <div style={{ height: /*fetc===false ? '700px' : */'600px', width: '70%', backgroundColor: mode==='Light Mode' ? '#ffffff' : '#1e1e1e', margin: '0 auto', marginBottom: 30 }}>
                    
                </div>)
                :
                (
                <div>
                </div>
                ) : null}
            </div>)
            : null
            }
            {user==='Admin' ?
            (<div style={{ height: '1000px', width: '100%', backgroundColor: mode==='Light Mode' ? '#F3F3F5' : '#252526', margin: '0 auto' }}>
                <div style={{ height: '100px', width: '100%',textAlign: 'center', margin: '0 auto', justifyContent: 'center', alignItems: 'center', backgroundColor: mode==='Light Mode' ? '#F3F3F5' : '#252526' }}>
                    <ButtonGroup  style={{ margin: '0 auto', marginTop: '50px', }} color="primary" aria-label="outlined primary button group">
                        <Button onClick={()=>{
                            //
                            setShow('RManage');
                        }} style={{ backgroundColor: show==='RManage' ? mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' : mode==='Dark Mode' ? '#252526' : '#fafafa99', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' }}>Manage RTO</Button>
                        <Button onClick={()=>{
                            //
                            setShow('Reports');
                        }} style={{ backgroundColor: show==='Reports' ? mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' : mode==='Dark Mode' ? '#252526' : '#fafafa99', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' }}>Reports</Button>
                        <Button onClick={()=>{
                            //
                            setShow('Manage');
                        }} style={{ backgroundColor: show==='Manage' ? mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' : mode==='Dark Mode' ? '#252526' : '#fafafa99', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' }}>Manage Operator</Button>
                        <Button onClick={()=>{
                            //
                            setShow('History');
                        }} style={{ backgroundColor: show==='History' ? mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' : mode==='Dark Mode' ? '#252526' : '#fafafa99', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff' }}>History</Button>
                    </ButtonGroup>
                </div>
                {show==='Reports' ? fetcReports===false ? 
                (
                <div style={{ height: /*fetc===false ? '700px' : */'700px', width: '70%', backgroundColor: mode==='Light Mode' ? '#ffffff' : '#1e1e1e', margin: '0 auto', marginBottom: 30 }}>
                <div className="input-group" style={{ margin: '0 auto', width: '100%', height: '100%', textAlign: 'center', }}>
                    <Grid style={{ marginTop: 20, height: '100%', width: '100%',margin: '0 auto', }} container spacing={3}>
                    <Grid item xs={12}>
                        <Donut />
                    </Grid>
                    <Grid style={{ margin: '0 auto', }} item xs={12}>
                        <Bar />
                    </Grid>
                   </Grid>
                   </div>
                </div>)
                :
                (
                <div>
                </div>
                ) : null}
                {show==='History' ? fetcHistory===false ? 
                (
                <div style={{ height: /*fetc===false ? '700px' : */'600px', width: '70%', backgroundColor: mode==='Light Mode' ? '#ffffff00' : '#1e1e1e00', margin: '0 auto', marginBottom: 30 }}>
                    <Tabe />
                </div>)
                :
                (
                <div>
                </div>
                ) : null}
                {show==='RManage' ? fetcCredits===false ? 
                (
                <div style={{ height: /*fetc===false ? '700px' : */'600px', width: '70%', backgroundColor: mode==='Light Mode' ? '#ffffff' : '#1e1e1e', margin: '0 auto', marginBottom: 30 }}>
                    
                </div>)
                :
                (
                <div>
                </div>
                ) : null}
                {show==='Manage' ? fetcCredits===false ? 
                (
                <div style={{ height: /*fetc===false ? '700px' : */'600px', width: '70%', backgroundColor: mode==='Light Mode' ? '#ffffff' : '#1e1e1e', margin: '0 auto', marginBottom: 30 }}>
                    
                </div>)
                :
                (
                <div>
                </div>
                ) : null}
            </div>)
            : null
            }
            <Modal show={modal} onHide={()=> setModal(false)}>
                <Modal.Header closeButton onClick={()=>setModal(false)} />
                {success===true ? (<div style={{ backgroundColor: '#ffffff', height: '400px', margin: '0 auto', width: '300px', textAlign: 'center' }}>
                    <span style={{ fontSize: '17px', marginTop: '90px', color: '#32a852' }}>
                        Congratulations, {phone} is added to the firstlist and please wait till our next update
                    </span>
                </div>) :
                (
                <div style={{ backgroundColor: '#ffffff', height: '400px', margin: '0 auto', width: '300px', textAlign: 'center' }}>
                    <h5 style={{ marginTop: '90px' }}>
                        Enter Your One Time Password sent to {phone}
                    </h5>
                    <div style={{ margin: '0 auto', width: '300px', textAlign: 'center', }}>
                        <input inputMode='tel' type="number" className="form-control" name="mobile" placeholder="OTP" required="required" value={otp} onChange={e=>setOtp(e.target.value)} />
                    </div>
                    {otp!=null && otp.length===6 ?
                    (<div style={{ margin: '0 auto', marginTop: '5px', width: '300px', textAlign: 'center' }}>
                        <Button onClick={async()=>{
                            setModal(false)
                            setFetc(true)
                            //
                            //setModal(true)
                           /* await axios.post(`https://749vraxin6.execute-api.ap-south-1.amazonaws.com/verify?phone=${phone}&otp=${otp}`).then((response)=>{
                              //  const a = response.data;
                              //  console.log('resp', response);
                                if(response.data==='success'){
                                //    console.log('response.data :', response.data);
                                    setSuccess(true);
                                    setOtp('');
                                    setPhone('');
                                } else {
                                    setOtp('');
                                    setPhone('');
                                    alert(`err occurred`);
                                }
                            }).catch((err)=>{
                                alert('error occurred')
                            });*/
                        }} variant="success">Join the Firstlist</Button>
                    </div>) : null}
                </div>)}
            </Modal>
        </div>
    )
}


/*


                            <FormControl className={clsx(classes.margin, classes.textField)} variant='filled'>
                                <InputLabel style={{ color: mode==='Light Mode' ? '#252526' : '#fafafa', borderColor: '#FAFAFA' }} htmlFor="outlined-adornment-password">Vehicle Number</InputLabel>
                                <FilledInput
                                    style={{ backgroundColor: mode==='Light Mode' ? '#fafafa' : '#252526', color: mode==='Light Mode' ? '#252526' : '#fafafa' }}
                                    id="outlined-adornment-password"
                                    type='text'
                                    value={phone}
                                    autoComplete={false}
                                    autoCorrect={false}
                                    onChange={(e)=>setPhone(e.target.value)}
                                    labelWidth={80}
                                />
                                </FormControl>

                            <FormControl className={clsx(classes.margin, classes.textField)} variant='filled'>
                                <InputLabel style={{ color: mode==='Light Mode' ? '#252526' : '#fafafa', borderColor: '#FAFAFA' }} htmlFor="outlined-adornment-password">Phone Number</InputLabel>
                                <FilledInput
                                    style={{ backgroundColor: mode==='Light Mode' ? '#fafafa' : '#252526', color: mode==='Light Mode' ? '#252526' : '#fafafa' }}
                                    id="outlined-adornment-password"
                                    type='text'
                                    value={phone}
                                    autoComplete={false}
                                    autoCorrect={false}
                                    onChange={(e)=>setPhone(e.target.value)}
                                    labelWidth={80}
                                />
                                </FormControl>
*/

/*
        <div style={{ height: '600px', backgroundColor: '#ffffff', }}></div>
        <div style={{ height: '50px', backgroundColor: 'honeydew', }}>
            
        </div>

            <label className="form-check-label">By Clicking Join the Firstlist, I agree to your <NavLink to="/login">Terms of Use</NavLink> &amp; <NavLink to="/login">Privacy Policy</NavLink></label>

            How many of you agree that there are great places in your cities ?
            And how many of you quiet often go to these places ?
            Like wise for me its my home, office and i go out for lunch twice a week,  


            */

