import React from 'react'
import img from './img/nat-8.jpg';
import './Navbar.css';
import {AiFillLinkedin} from 'react-icons/ai';
import {GoMarkGithub} from 'react-icons/go';
import {IoMdMail} from 'react-icons/io';

export default function Navbar() {
    return (
            <div className='profile'>
                <div className='profile-top'>
                    <span className='profile-image'> <img src={img} alt='profile'/></span>
                    <span className='profile-name'><h1>Rahan Bouess</h1></span>
                </div>

                <div className='profile-List'>
                   <div className='profile-List-content'>
                   <ul>
                        <li><a href='#about'>About Me</a></li>
                        <li><a href='#work'>My Work</a></li>
                        <li><a href='#contact'>Contact Me</a></li>
                    </ul>
                   </div>
                </div>

                <div className="profile-contact">
                    <div className='profile-contact-content'>
                    <div className="profile-contact-item">
                        <span><a href="#"><AiFillLinkedin/></a></span>
                    </div>
                    <div className="profile-contact-item">  
                    <span>  <a href="#"> <GoMarkGithub/> </a></span>
                    </div>
                    <div className="profile-contact-item">
                       <span> <a href="#"> <IoMdMail/> </a></span>
                    </div>
                    </div>
                </div>
        </div>
    )
}
