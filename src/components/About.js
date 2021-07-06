import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

export default function About(){
    const [signinmodal, setSigninmodal] = useState(false);
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('')

    const [asuccess, setASuccess] = useState(false);
    return(
        <div className='about'>
        <h2>Mobility i.e<br /> Smart<br /> Electric<br />Shared<br /> Inclusive</h2>
        <div className="form-group">
        <p className='juiyheader1' style={{ textAlign: 'center', fontSize: '19px', marginTop: '10px', marginBottom: '10px', color: '#000000', fontWeight: 'normal' }}>making commutes in the cities,<br /> light and fun.</p>
        
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
                        setSigninmodal(true);
                    }
                    else {
                        alert(response);
                    }
                }).catch((err)=>{
                    alert(err,'error occurred')
                });
            }} variant="success">Join the Firstlist</Button>
        </div>) : null}
        <div style={{ fontSize: '15px', color: '#000000', }} className="text-center">Joined already ? <span style={{ fontSize: '15px', color: '#000000', textDecorationLine: 'underline' }}>check your position here</span></div>
        </div>
            <Modal show={signinmodal} onHide={()=> setSigninmodal(false)}>
                <Modal.Header closeButton onClick={()=>setSigninmodal(false)} />
                {asuccess===true ? (<div style={{ backgroundColor: '#ffffff', height: '400px', margin: '0 auto', width: '300px', textAlign: 'center' }}>
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
                                    setASuccess(true);
                                    setOtp('');
                                    setPhone('');
                                } else {
                                    setOtp('');
                                    setPhone('');
                                    alert(`err ${response}`);
                                }
                            }).catch((err)=>{
                                    setOtp('');
                                    setPhone('');
                                alert(err,'error occurred')
                            });
                        }} variant="success">Join the Firstlist</Button>
                    </div>) : null}
                </div>)}
            </Modal>
        
        </div>
    )
}
