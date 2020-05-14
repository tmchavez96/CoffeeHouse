import React from "react";
//import router?
import './contact.css';

import { BsClock } from 'react-icons/bs'
import { BsGeo } from 'react-icons/bs';
import {BsEnvelopeFill} from 'react-icons/bs';
import { BsChatDots } from 'react-icons/bs';


function ContactSubComponent(props){
    return (
        <div className="contatc-sub-comp">
            <h1 className="contatc-sub-comp-icon">
                {props.icon}<br></br> {props.title}
            </h1>
            <div className="contatc-sub-comp-info">
                {props.info}
            </div>
            <div className="contatc-sub-comp-details">
                {props.details}
            </div>
        </div>
    )
}


function ContactComponent () {
    return (
        <div className="contact-body">
            <h1>
                Contact Us!
            </h1>
            <div className="contact-body-flex">
                <ContactSubComponent title="Hours" icon={<BsClock/>} info="5am-5pm Monday-Friday" details="6am-5pm Saturday-Sunday"/>
                <ContactSubComponent title="Phone" icon={<BsChatDots/>} info="999-999-9999" details="Call In an order ahead of time"/>
                <ContactSubComponent title="Email" icon={<BsEnvelopeFill/>} info="me@gmail" details="Email for inquires"/>
                <ContactSubComponent title="Address" icon={<BsGeo/>} info="me@gmail" details="Email for inquires"/>
            </div>
        </div>
    )
}


export default ContactComponent;