import React, { useState } from 'react';
//import { NavLink } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

export default function Home(){
    const [phone, setPhone] = useState('');
    const [modal, setModal] = useState(false);
    const [otp, setOtp] = useState('')
    const [success, setSuccess] = useState(false);
  //  const [scrolled, setScrolled] = useState(false);
    return(
        <div className='signup-form'>
        <h2>Juiy to your favourite<br /> places.</h2>
        <div className="form-group">
        <p className='juiyheader1' style={{ textAlign: 'center', fontSize: '19px', marginTop: '10px', marginBottom: '10px', color: '#ffffff', fontWeight: 'normal' }}>Join the exclusive Firstlist and get free rides upto 3 months. <span style={{ fontSize: '15px', color: '#ffffff70', textDecorationLine: 'underline' }}>Know more</span></p>
            <div className="input-group" style={{ margin: '0 auto', width: '300px', textAlign: 'center' }}>
                <input inputMode='tel' type="number" className="form-control" name="mobile" placeholder="+91 " required="required" value={phone} onChange={e=>setPhone(e.target.value)} />
            </div>
        {phone!=null && phone.length===10 ?
        (<div style={{ margin: '0 auto', marginTop: '5px', width: '300px', textAlign: 'center' }}>
            <Button onClick={async()=>{
                //
                await axios.post(`https://749vraxin6.execute-api.ap-south-1.amazonaws.com/addtofirstlist?phone=${phone}`).then((response)=>{
                   // const a = response.data;
                    console.log('response is',response);
                    console.log('phone is: ', phone, phone.length);
                    if(JSON.stringify(response.data)===phone){
                       console.log('status', response.status);
                        setModal(true);
                    }
                    else {
                        alert(response);
                    }
                }).catch((err)=>{
                    alert(err,'error occurred')
                });
            }} variant="success">Join the Firstlist</Button>
        </div>) : null}
        <div style={{ fontSize: '15px', color: '#ffffff', }} className="text-center">Joined already ? <span style={{ fontSize: '15px', color: '#ffffff70', textDecorationLine: 'underline' }}>check your position here</span></div>
        </div>
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
                            //
                            //setModal(true)
                            await axios.post(`https://749vraxin6.execute-api.ap-south-1.amazonaws.com/verify?phone=${phone}&otp=${otp}`).then((response)=>{
                              //  const a = response.data;
                                console.log('resp', response);
                                if(response.data==='success'){
                                    console.log('response.data :', response.data);
                                    setSuccess(true);
                                } else {
                                    alert(`err ${response}`);
                                }
                            }).catch((err)=>{
                                alert(err,'error occurred')
                            });
                        }} variant="success">Join the Firstlist</Button>
                    </div>) : null}
                </div>)}
            </Modal>
        </div>
    )
}

/*
        <div style={{ height: '600px', backgroundColor: '#ffffff', }}></div>
        <div style={{ height: '50px', backgroundColor: 'honeydew', }}>
            
        </div>

            <label className="form-check-label">By Clicking Join the Firstlist, I agree to your <NavLink to="/login">Terms of Use</NavLink> &amp; <NavLink to="/login">Privacy Policy</NavLink></label>

            How many of you agree that there are great places in your cities ?
            And how many of you quiet often go to these places ?
            Like wise for me its my home, office and i go out for lunch twice a week,  


            */

