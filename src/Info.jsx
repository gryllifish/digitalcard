import React from "react"
import { FaEnvelopeSquare } from 'react-icons/fa';
import { FaLinkedin} from 'react-icons/fa';
export default function Info(){
    return (
        <div className="info">
            <div className="img-wrapper">
            <img src="./src/assets/fran.jpeg"/>
            </div>
            <h1 className="info--title">Fran Páez</h1>
            <h4 className="info--secondTitle">Frontend Developer</h4>
            <h6 className="info--webadress"><a href="www.franpaezgrillo.com">www.franpaezgrillo.com</a></h6>
            <div className="buttons">
                <a href="www.gmail.com"><button className="email"><FaEnvelopeSquare/>Email</button></a>
                <a href="www.linkedin.com"><button className="linkedin"><FaLinkedin/>LinkedIn</button></a>
            </div>
        </div>
    
    )
}