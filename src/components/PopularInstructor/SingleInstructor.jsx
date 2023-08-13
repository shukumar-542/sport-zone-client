import React from 'react';
import './style.css'
import { FaLinkedinIn, FaGithub, FaLink } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const SingleInstructor = ({ instructor }) => {
console.log(instructor);
    return (
       

        <div  className="our-team">
        <div className="pic">
            <img src={instructor.image} className='h-52' />
        </div>
        <div className="team-content">
            <h3 className="title">{instructor.name}</h3>
            <div className='flex items-center justify-center'>
                <p><GrMail className='me-2 text-[#2563EB]' /></p>
                <p className="post lowercase">{instructor.email}</p>
            </div>
        </div>
        <ul className="social">
            <li>
                <a  target="_blank"><FaLink /></a>
            </li>
            <li>
                <a  target="_blank"><FaGithub /></a>
            </li>
            <li>
                <a  target="_blank"><FaLinkedinIn /></a>
            </li>
        </ul>
    </div>
    );
};

export default SingleInstructor;