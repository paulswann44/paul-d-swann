import React from 'react';
import "./resume.css"
import {FaChevronRight} from "react-icons/fa";


function Resume (){
    return(
        <section id="resume" className="resume bg-white">
            <div className="container">

                <div className="section-title">
                    <h2>Resume</h2>
                    <p>
                        <em>
                            Results-driven Army Veteran and software developer with a Bachelor's degree in Accounting has a consistent track record of timely resolution and a proven ability to create innovative solutions through analytical and problem solving ability. Proficient in team coordination, problem solving, and service oriented approaches, adept at work independently and continuously striving for continuous improvement as a software developer. Experience in various technologies, including Javascript/React.js and Java/Spring Boot, seeking a position to leverage extensive skills and experience to make a positive impact on a development team.
                        </em>
                    </p>
                </div>

                <div className="row justify-content-center">
                    {/**/}
                    <div className="col-sm-8 col-md-6" data-aos="fade-up">
                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Bachelor of Art - Accounting </h4>
                            <h5>Jan 2017 - Dec 2023</h5>
                            <p><em>City University of New York - Queens College, Flushing, NY</em></p>
                            <p>Flushing, New York Bachelor of Art- Graduation- December 2020
                                Major: Accounting and Information Systems
                                Cumulative GPA: 3.3
                            </p>
                        </div>
                        <div className="resume-item">
                            <h4>Certificate of Completion</h4>
                            <h5>Oct 2022 - 2023</h5>
                            <p><em>Codeup LLC, Dallas, TX</em></p>
                            <p>A fully-immersive, project-based, and intensive 20-week Full-Stack Java Career Accelerator that provides students with 670 hours of expert instruction in software development.</p>
                        </div>

                        <h3 className="resume-title">Military Experience</h3>
                        <div className="resume-item">

                            <h4>United States Army</h4>
                            <h6>Airfield Operations Coordinator</h6>
                            <h5>Sep 2015 – Jan 2017</h5>
                            <p><em>Fort Stewart, GA</em></p>
                            <ul>
                                <li>
                                    Supervised and led a team of 12 personnel through a federal Aviation Resource Management Survey (ARMS) operational audit and achieved a satisfactory pass rate of 90%.
                                </li>
                                <li>
                                    Developed ad-hoc reports using Excel's Pivot Tables, V-Look Up/X-Look up, and Macros to facilitate accurate evaluation of employee performance and training requirements by management.

                                </li>
                            </ul>
                        </div>
                        <div className="resume-item">

                            <h6>Administrative Assistant/HR Coordinator </h6>
                            <h5>Apr 2013 – Sep 2015</h5>
                            <p><em>Seongnam, S. Korea</em></p>
                            <ul>
                                <li>
                                    Supervised and led a team of 12 personnel through a federal Aviation Resource Management Survey (ARMS) operational audit and achieved a satisfactory pass rate of 90%.
                                </li>
                                {/*<li>*/}
                                {/*    Managed aircraft clearances, security briefs, air tasking orders, crew schedules, and operational calendars with a combination of software tools and systems.                                */}
                                {/*</li>*/}
                                <li>
                                    Developed ad-hoc reports using Excel's Pivot Tables, V-Look Up/X-Look up, and Macros to facilitate accurate evaluation of employee performance and training requirements by management.

                                </li>
                                {/*<li>lorum</li>*/}
                            </ul>
                        </div>
                    </div>






                    <div className="col-sm-8 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                                <h4>LSG Group</h4>
                                <h6>Customer Service Representative</h6>
                            <h5>Jan 2022 – Sept 2022</h5>
                            <p><em>Irving, TX</em></p>
                            <ul>
                                <li>
                                    Utilized cloud-based collaboration software to communicate and coordinate with cross-functional teams across multiple locations, improving communication and reducing turnaround times for client orders.
                                </li>
                                <li>
                                    Acted as a mediator between clients and internal teams, resolving conflicts, and promoting a positive working relationship between the two parties.
                                </li>

                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>
                                Mesilla Valley Transportation
                            </h4>
                            <h6>
                               Transportation Specialist
                            </h6>
                            <h5>Nov 2020 – Jul 2021</h5>
                            <p><em>El Paso, TX</em></p>
                            <ul>
                                <li>
                                    Assisted in maintaining and updating transportation documentation to ensure compliance with regulations and standards.
                                </li>
                                <li>
                                    Utilized strong organizational and time management skills to plan and coordinate logistics, resulting in efficient and timely deliveries.
                                </li>

                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Veteran Affairs Work Study</h4>
                            <h6>Administrative Assistant</h6>
                            <h5>Jan 2019 – Dec 2019</h5>
                            <p><em>Flushing, NY</em></p>
                            <ul>
                                <li>
                                    Developed and maintained an online database of resources and information for veteran students, using IT tools to organize and streamline information for easy access.
                                </li>
                                <li>
                                    Managed a budget of $2,500 designated for veteran-related functions, utilizing Excel for expenses and asset tracking, perform analysis, and present financial reports to management.
                                </li>
                                <li>
                                    Utilized Google Forms to collect and analyze data from student surveys, performing various analytical procedures to identify patterns and trends in student feedback.
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
}

export default Resume;