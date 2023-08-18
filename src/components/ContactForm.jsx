import React from "react";

import {useState} from "react"
import { Row, Col, Container } from "react-bootstrap";

import contactImage from '../assets/images/contact-img.png'

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email:'',
        phone:'',
        message:''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({});
      

    const onFormUpdate = (category, newValue) => {
        setFormDetails({
            ...formDetails,
            [category]: newValue
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setButtonText('Sending...')
        try {
            let response = await fetch('http://localhost:5001/contact', {
              method: 'POST',
              headers: {
                "Content-Type": "application/json;charset=utf-8"
              },
              body: JSON.stringify(formDetails)
            });
        
            console.log('Response Status:', response.status);
        
            let result = await response.json();
            console.log('Result:', result);
        
            setFormDetails(formInitialDetails);
        
            if (result.code === 200) {
              setStatus({ success: true, message: 'Message sent' });
            } else {
              setStatus({ success: false, message: 'Something went wrong :(' });
            }
          } catch (error) {
            console.error('Error Ojas:', error);
            setStatus({ success: false, message: 'Error sending the message.' });
          } finally {
            setButtonText("Send");
          }
        };


    return (
        <section className="contact" id='connect'>
        <Container>
            <Row className='align-items-center'>
                <Col md = {12} lg = {4}>
                    <img src = {contactImage}/>
                </Col>
                <Col md = {12} lg = {8} className="contact-bx">
                    <h2> Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col className = 'px-1'>
                                <input type='text' value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                            </Col>
                            <Col className = 'px-1'>
                                <input type='text' value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className = 'px-1'>
                                <input type='email' value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className = 'px-1'>
                                <input type='tel' value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="px-1">
                                <textarea row='6' value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}/>
                                <button type='submit'><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message && 
                                <Col>
                                    <p> className={status.success === false ? "danger" : "success"}{status.message}</p>
                                </Col>
                            }      
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
        </section>
    )
}

