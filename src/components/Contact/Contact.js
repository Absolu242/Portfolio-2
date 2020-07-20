import React from 'react'
import img from '../Navbar/img/nat-8.jpg';
import './Contact.css'
import {IoMdMail} from 'react-icons/io';
import {MdPerson} from 'react-icons/md';
export default function Contact() {
    return (
        <div className='Contact' id='contact'>
             <span className='title'>
               <h2>Contact</h2>
               </span>
            <div className='Contact-content' >
              
            <div className='Contact-content-left' >
                <span>
                😃
                </span>
                <p>Thank You for Your Time</p>
                <p>Contact Me here</p>
            </div>
            <div className='Contact-content-right' >
                <form className='form'>
                   <div className='form-content'>
                   <div className='item'> 
                       <label>Name</label>
                      <span>
                      <input type='text' placeholder='Your Name'/>
                      <span><MdPerson/></span>
                      </span>
                   </div>
                   <div className='item'> 
                       <label>Email</label>
                       <span>
                      <input type='email' placeholder='Your Email'/>
                        <span><IoMdMail/></span>
                      </span>
                   </div>
                   <div className='item'> 
                       <label>Message</label>
                      <span> <textarea rows='5' cols='22' name='message'>
                           Write here
                       </textarea></span>
                   </div>
                   </div>
                </form>
            </div>
            </div>
        </div>
    )
}
