import React from "react";
import { FaTwitterSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';

export default function Footer(){
    return(
        <div className="footer">
            <a href="www.twitter.com" target="blank"><FaTwitterSquare className="social-icon"/></a>
            <a href="www.facebook.com" target="blank"><FaFacebookSquare className="social-icon"/></a>
            <a href="www.instragram.com" target="blank"><FaInstagramSquare className="social-icon"/></a>
            <a href="www.github.com" target="blank"><FaGithubSquare className="social-icon"/></a>
        </div>
    )
}
