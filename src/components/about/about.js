
import React from 'react';
import "./about.css";
import {
    FaChevronRight
} from "react-icons/fa";
import paul from '../../img/paul.jpeg';



const About = () => {
    return (
        <section id="about" className="about bg-light">
            <div className="container">

                <div className="section-title">
                    <h2>About</h2>
                    <p>
                        Welcome to my portfolio website! I am <strong>Paul Swann</strong>, a skilled software developer with expertise in frontend, database administration, and backend. My goal is to leverage my technical knowledge and problem-solving abilities to create high-quality software products that drive business growth and success.
                    </p>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src={paul}className="img-fluid rounded" alt='Paul Swann' />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3> Software Developer - Full Stack</h3>
                        <p className="fst-italic">
                            The Following is technology and programming languages that I am familiar with:
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <FaChevronRight style={{color: "#005eff",}} />
                                        HTML
                                    </li>
                                    <li><FaChevronRight
                                        style={{color: "#005eff",}} />
                                        CSS
                                    </li>
                                    <li>
                                        <FaChevronRight style={{color: "#005eff",}} />
                                        Bootstrap
                                    </li>
                                    <li>
                                        <FaChevronRight style={{color: "#005eff",}} />
                                        Javascript</li>

                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <FaChevronRight style={{color: "#005eff",}} />
                                        React.js
                                    </li>
                                    <li>
                                        <FaChevronRight style={{color: "#005eff",}} />
                                        SQL/MySQL
                                    </li>
                                    <li>
                                        <FaChevronRight style={{color: "#005eff",}} />
                                        Java EE
                                    </li>
                                    <li>
                                        <FaChevronRight style={{color: "#005eff",}} />
                                        Spring Boot
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            As a full stack software developer, I'm passionate about creating innovative, user-friendly applications that drive business growth and success. With a strong foundation in accounting, which emphasized technical and analytical skills in information technology for accounting, transaction processing, data analysis, auditing, and communications, I'm committed to staying up-to-date with the latest technologies in fintech and beyond.
                        </p>
                        <p>In software development, testing and automation are critical to ensuring that applications meet all necessary requirements. That's why I'm excited to take on new learning opportunities, with a particular focus on mastering tools and frameworks such as <em>Cucumber, Selenium, and JUnit</em>. Although I haven't yet had the opportunity to work with these tools, I believe that they offer significant potential for improving testing and automation processes and creating even more powerful applications.</p>


                    </div>
                </div>

        </div>
</section>

    );
}

export default About;