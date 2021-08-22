import React, { useCallback, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context as AuthContext } from '../context/AuthContext';
import { FormControl, IconButton, InputAdornment, InputLabel, makeStyles, OutlinedInput, TextField, withStyles, Button, FilledInput } from '@material-ui/core';
import { SingleBedOutlined, Visibility, VisibilityOff } from '@material-ui/icons';

import clsx from 'clsx';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(0),
    },
    textField: {
      width: '300px',
    },
  }));
export default function Login(){


  useEffect(() => {
    (async () => {
     // if ("serial" in navigator) {
        //
       // alert('hiiii')
      //  await navigator.serial.requestPort();
       //console.log('port:  ', serial);
     // }
    })();
  }, []);
  /*
useEffect(()=>{

  if("serial" in navigator){
    window.alert("Serial suported");
    const ports = navigator.serial.getPorts();
    window.alert("ports" + ports);
  } else {
    window.alert("Not supported");
  }

  // RNSerialport.getDeviceList((response) => {
  //   if (!response.status) {
  //     response.log("Error from getDeviceList()", response.errorCode + " " + response.errorMessage)
  //     return;
  //   }
  //   console.log(response.devices)//list
  // });
},[])

*/
const readLoop = useCallback(async(selectedDevice)=>{
  //
  await selectedDevice.controlTransferIn({
    requestType: 'class',
    recipient: 'interface',
    request: 0x22,  
    value: 0x01,
    index: interfaceNumber
  },255).then(() => selectedDevice.transferIn(5, 64)) // Waiting for 64 bytes of data from endpoint #5.
  .then(result => {
    const decoder = new TextDecoder();
    console.log('Received: ' + decoder.decode(result.data));
  })
},[])




    const [interfaceNumber, setInterfaceNumber] = useState(0);
    const [endpointIn, setEndpointIn] = useState(null);
    const [endpointOut, setEndpointOut] = useState(null);
    const [email, setEmail] = useState('');
    const [modal, setModal] = useState(false);
   const [otp, setOtp] = useState('');
    const [success, setSuccess] = useState(false);
    const [password, setPassword] = useState('')
    const { state: { mode }, signin } = useContext(AuthContext);
    console.log('mode from login is', mode);
    const [showPassword, setShowPassword] = useState(false);
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
        <div className='login-form'>
            <div style={{ height: '1000px', width: '100%', backgroundColor: mode==='Light Mode' ? '#FAFAFA' : '#252526', margin: '0 auto' }}>
                <div style={{ height: '650px', width: '400px', margin: '0 auto', }}>
                    <div style={{ height: '150px', width: '100%', flexDirection: 'row', backgroundColor: mode==='Light Mode' ? '#FAFAFA' :  '#252526', }}>
                        <div style={{ height: '100%', width: '150px', margin: '0 auto' }}>
                            <img
                            alt=""
                            src='https://www.tapeit.in/assets/images/logoNew1.png'
                            width="60%"
                            height="30%"
                            style={{ marginTop: 50, marginLeft: 30 }}
                        />
                        </div>
                    </div>
                    <div style={{ height: '500px', width: '100%', backgroundColor: mode==='Light Mode' ? '#FFFFFF' :  '#3E3E3E', }}>
                        <h2 style={{ color:mode==='Light Mode' ? '#000000' :   '#ffffff', }}>Get Started</h2>
                        <h3 style={{ color:mode==='Light Mode' ? '#00000099' :   '#ffffff99', }}>Enter your Auto user name and password</h3>
                        <div className="input-group" style={{ margin: '0 auto', width: '300px', textAlign: 'center', marginTop: 30 }}>
                            <FormControl className={clsx(classes.margin, classes.textField)} variant='filled'>
                                <InputLabel style={{ color: '#252526', borderColor: '#FAFAFA' }} htmlFor="outlined-adornment-password">User name</InputLabel>
                                <FilledInput
                                    style={{ backgroundColor: mode==='Light Mode' ? '#fafafa' : '#FAFAFA' }}
                                    id="outlined-adornment-password"
                                    type='text'
                                    value={email}
                                    autoComplete='none'
                                    onChange={(e)=>setEmail(e.target.value)}
                                    labelwidth={80}
                                />
                                </FormControl>
                        </div>
                        <div className="input-group" style={{ margin: '0 auto', width: '300px', textAlign: 'center', marginTop: 30 }}>
                            <FormControl className={clsx(classes.margin, classes.textField)} variant='filled'>
                                <InputLabel style={{ color: '#252526', borderColor: '#FAFAFA',  }} htmlFor="outlined-adornment-password">Password</InputLabel>
                                <FilledInput
                                    style={{ backgroundColor: mode==='Light Mode' ? '#fafafa' : '#FAFAFA' }}
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    autoComplete='none'
                                    onChange={(e)=>setPassword(e.target.value)}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={()=>setShowPassword(!showPassword)}
                                        onMouseDown={(e)=> e.preventDefault()}
                                        edge="end"
                                        >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    labelwidth={70}
                                />
                                </FormControl>
                        </div>
                        <div style={{ margin: '0 auto', marginTop: '30px', width: '300px', textAlign: 'center' }}>
                        <Button onClick={async()=>{
 // const a =  await navigator.serial.requestPort();
    /*    await navigator.usb.getDevices().then((devices)=>{
          //
          devices.forEach((device)=>{
            console.log('device name is : ',device.productName);
            console.log('device vendor id: ', device);
          })
        }).catch((err)=>{
          console.log('err is :', err);
        })*/
        await navigator.geolocation.getCurrentPosition((position)=> {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
        });
        const selectedDevice = await navigator.usb.requestDevice({
          filters: [
            {
              path: '\\'
            }
          ]
        });
        console.log('selectedDevice: ', selectedDevice);
        if (selectedDevice!=null){
          console.log('selectedDevices')
          if (selectedDevice.configurations.opened===false){
            //
          console.log('open is false')
            await selectedDevice.open().then(()=> console.log('open is working')).catch((err)=> console.log('err is: ', err)); 
            if (selectedDevice.configuration===null){
              console.log('it is open')
              await selectedDevice.selectConfiguration(selectedDevice.configuration.configurationValue).then(()=> console.log('a')).catch((err)=> console.log('err is: ', err)); 
              setInterfaceNumber(selectedDevice.configuration.interfaces[0].interfaceNumber); 
              await selectedDevice.configuration.interfaces[0].alternates[0].endpoints.forEach(elementendpoint => {
                if(elementendpoint.direction === 'out'){
                  console.log('element end point num for out is: ', elementendpoint.endpointNumber);
                  setEndpointOut(elementendpoint.endpointNumber);
                }
                if(elementendpoint.direction === 'in'){
                  console.log('element end point num for in is: ', elementendpoint.endpointNumber);
                  setEndpointIn(elementendpoint.endpointNumber);
                }
              })
              await selectedDevice.claimInterface(interfaceNumber).then(()=> console.log('one')).catch((err)=> console.log('err is: ', err)); 
              await selectedDevice.selectAlternateInterface(interfaceNumber,0).then(()=> console.log('heytwo')).catch((err)=> console.log('err is: ', err));  
              await selectedDevice.controlTransferIn({
                requestType: 'class',
                recipient: 'interface',
                request: 6,  
                value: 0,
                index: interfaceNumber
              },273).then(async() => {
                console.log('oldddd')
                await selectedDevice.transferIn(1, 64) // Waiting for 64 bytes of data from endpoint #5.
              .then(result => {
                    console.log(result);
                const decoder = new TextDecoder();
                console.log('Received: ' + decoder.decode(result.data));
              }).catch((err)=> console.log('oherr is: ', err))
              }).catch((err)=> console.log('omerr is: ', err))
            }
          } else {
            // close the device
            // or read data directly
            console.log('open is true')
            if (selectedDevice.configuration.configurationName===null){
              console.log('hi')
              await selectedDevice.open().then(()=> console.log('open is working')).catch((err)=> console.log('err is: ', err)); 
              await selectedDevice.selectConfiguration(selectedDevice.configuration.configurationValue).then(()=> console.log('a')).catch((err)=> console.log('err is: ', err)); 
              setInterfaceNumber(selectedDevice.configuration.interfaces[0].interfaceNumber); 
              await selectedDevice.configuration.interfaces[0].alternates[0].endpoints.forEach(elementendpoint => {
                if(elementendpoint.direction === 'out'){
                  console.log('element end point num for out is: ', elementendpoint.endpointNumber);
                  setEndpointOut(elementendpoint.endpointNumber);
                }
                if(elementendpoint.direction === 'in'){
                  console.log('element end point num for in is: ', elementendpoint.endpointNumber);
                  setEndpointIn(elementendpoint.endpointNumber);
                }
              })
              await selectedDevice.claimInterface(interfaceNumber).then(()=> console.log('one')).catch((err)=> console.log('err is: ', err)); 
              await selectedDevice.selectAlternateInterface(interfaceNumber,0).then(()=> console.log('mtwo')).catch((err)=> console.log('serr is: ', err)); 
              await selectedDevice.controlTransferIn({
                requestType: 'class',
                recipient: 'interface',
                request: 6,  
                value: 0,
                index: interfaceNumber
              },273).then(async() => {
                console.log('newwwww')
                await selectedDevice.transferIn(1, 64) // Waiting for 64 bytes of data from endpoint #5.
              .then(result => {
                    console.log(result);
                const decoder = new TextDecoder();
                console.log('Received: ' + decoder.decode(result.data));
              }).catch((err)=> console.log('herr is: ', err))
              }).catch((err)=> console.log('merr is: ', err))
              /*selectedDevice.transferIn(1, 64).then(()=>{
                console.log('result is: ');
              }).catch((err)=> console.log('err is: ', err)) */
            }
          }
        }






/*






        await navigator.usb.requestDevice({ filters: [{ path: '/dev/bus/' }] }).then(async(selectedDevice)=>{
         const device = selectedDevice;
         console.log('device is: ', device);
         await device.open().then(()=>{
          console.log('zero');
           if(device.configuration===null){
             console.log('one');
             return device.selectConfiguration(1);
           }
         }).then(()=>{
          console.log('two');
           var configurationInterfaces = device.configuration.interfaces;
           configurationInterfaces.forEach(element => {
             element.alternates.forEach(elementalt => {
               if(elementalt.interfaceClass===0xff){
                console.log('three', elementalt);
                 setInterfaceNumber(elementalt.interfaceNumber);
                 elementalt.endpoints.forEach(elementendpoint => {
                   if (elementendpoint.direction === 'out'){
                    console.log('four', elementendpoint);
                    console.log('fournew', interfaceNumber);
                     setEndpointOut(elementendpoint.endpointNumber);
                   }
                   if (elementendpoint.direction === 'in'){
                    console.log('five', elementendpoint);
                    console.log('fivenew', interfaceNumber);
                     setEndpointIn(elementendpoint.endpointNumber);
                   }
                 })
               }
             })
           })
         })
         await device.claimInterface(0).then(()=> {
           console.log('sixnew');
           console.log('seven');
           // device.selectAlternateInterface(interfaceNumber,0)
            device.selectAlternateInterface(0,0).then((d)=>{
              //
            console.log('nine');
            if(endpointIn!=null){
              //
              console.log('endpointin', endpointIn);
              device.transferIn(endpointIn,64).then((e)=>{
                //
            console.log('ten');
              const decoder = new TextDecoder();
              console.log('Received: ' + decoder.decode(e.data));
              })
            } else {
              console.log('endpointIn in null', endpointIn);
            }
            })
         })
         
         
         .then(()=> {
           if(interfaceNumber===null){
            console.log('six');
            device.claimInterface(0).then(()=> console.log('sixnew')).catch((err)=> console.log('err is: ', err))
            // device.claimInterface(interfaceNumber)
           }
         }).then(()=> {
          console.log('seven');
          // device.selectAlternateInterface(interfaceNumber,0)
           device.selectAlternateInterface(0,0)
         }).then((d)=>{
            //
          console.log('nine');
          if(endpointIn!=null){
            //
            console.log('endpointin', endpointIn);
            device.transferIn(endpointIn,64).then((e)=>{
              //
          console.log('ten');
            const decoder = new TextDecoder();
            console.log('Received: ' + decoder.decode(e.data));
            })
          } else {
            console.log('endpointIn in null', endpointIn);
          }
          })
         await device.selectConfiguration(1).then(()=> console.log('selectConfiguration'));
         await device.claimInterface().then(()=> console.log('claimInterface')).catch((err)=>{
           alert(err);
         })
         await device.controlTransferOut({
           //
           requestType: 'class',
           recipient: 'interface',
           request: 0x22,
           value: 0x01,
           index: 0x02
         }).then((d)=>{
           //
           console.log('control transfer out success')
           d.transferIn(5,64).then((e)=>{
             //
           const decoder = new TextDecoder();
           console.log('Received: ' + decoder.decode(e.data));
           })
         })
         
         
         .then((b)=>{
           console.log('select config success')
            b.claimInterface(1).then((c)=>{
              //
              console.log('claim interface success')
              c.controlTransferOut({
                //
                requestType: 'class',
                recipient: 'interface',
                request: 0x22,
                value: 0x01,
                index: 0x02
              }).then((d)=>{
                //
                console.log('control transfer out success')
                d.transferIn(5,64).then((e)=>{
                  //
                const decoder = new TextDecoder();
                console.log('Received: ' + decoder.decode(e.data));
                })
              })
            })
         })
         //return device.open()
       })
       .then((device) => device.selectConfiguration(1)) // Select configuration #1 for the device.
       .then((device) => device.claimInterface(1)) // Request exclusive control over interface #2.
       .then((device) => device.controlTransferOut({
           requestType: 'class',
           recipient: 'interface',
           request: 0x22,
           value: 0x01,
           index: 0x02})) // Ready to receive data
       .then((device) => device.transferIn(5, 64)) // Waiting for 64 bytes of data from endpoint #5.
       .then(result => {
         const decoder = new TextDecoder();
         console.log('Received: ' + decoder.decode(result.data));
       })*/
        //await a.open();
                           signin({ username: email, password: password })
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
                        }} style={{ backgroundColor:mode==='Light Mode' ? '#7F7F7F' :   '#252526', borderColor:mode==='Light Mode' ? '#FAFAFA' : '#252526', width: '300px', height: '40px', }}>Continue</Button>
                        <div style={{ fontSize: '13px', color:mode==='Light Mode' ? '#000000' :   '#ffffff', marginTop: '10px' }} className="text-center">By continuing, you agree to <span style={{ fontSize: '13px', color:mode==='Light Mode' ? '#000000' :   '#ffffff', textDecorationLine: 'underline' }} onClick={()=>{
                            //
                            alert('t&c')
                        }}>T&C</span> & <span style={{ fontSize: '13px', color: mode==='Light Mode' ? '#000000' :  '#ffffff', textDecorationLine: 'underline' }} onClick={()=>{
                            //
                            alert('pp')
                        }}>Privacy Policy</span></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


