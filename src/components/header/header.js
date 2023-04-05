import React from "react";
import {
    FaHome,
    FaUser,
    FaServer,
    FaFile,
    FaEnvelope,
    FaFolderOpen,
    FaLinkedin,
    FaGithub
} from "react-icons/fa";
import './header.css';
import codeup from '../../img/codeup.ico';
import headshot from '../../img/headshot.png';


function Header() {

    const iconStyle = {
        width: '20px',
        height: '20px',
        backgroundImage: `url(${codeup})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'inline-block',
        paddingTop: "5px",

    };

    return (
        <header id="header">
            <div className="d-flex flex-column">
                <div className="profile">
                    <img
                        src={headshot}
                        alt="Paul Swann"
                        className="img-fluid rounded-circle"
                    />
                    <h1 className="text-light">
                        <a href="index.html">Paul Swann</a>
                    </h1>
                    <div className="social-links mt-3 text-center">
                        <a href="https://github.com/paulswann44" className="github">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/paul-d-swann/" className="linkedin">
                            <FaLinkedin />
                        </a>

                        <a href="https://alumni.codeup.com/students/1763">
                           <span style={iconStyle} className="contact-icon"></span>
                        </a>

                    </div>
                </div>

                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                        <li>
                            <a href="#hero" >
                                <FaHome />
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#about" >
                                <FaUser />
                                <span>About</span>
                            </a>
                        </li>
                        <li>
                            <a href="#resume" >
                                <FaFile />
                                <span>Resume</span>
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio" >
                                <FaFolderOpen />
                                <span>Portfolio</span>
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="nav-link ">
                                <FaEnvelope />
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
