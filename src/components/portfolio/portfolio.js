import React, { useState } from 'react';
import './portfolio.css';
import {
    FaChevronRight,
    FaChevronDown
} from "react-icons/fa";

const Accordion = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleTitleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    //I LOVE BOOTSTRAP
    return (
        <div id="accordion" className="accordion-flush ">
            {data.map((item, index) => (
                <div className="card" key={index}>
                    <div
                        className=" card-header bg-white "
                        id={`heading${index}`}
                        onClick={() => handleTitleClick(index)}
                    >
                        <h5 className="mb-0 ">
                            <button
                                className="btn btn-link"
                                data-toggle="collapse"
                                data-target={`#collapse${index}`}
                                aria-expanded={activeIndex === index}
                                aria-controls={`collapse${index}`}
                            >

                                {activeIndex === index ? (
                                    <FaChevronDown style={{
                                        color: "#005eff",
                                        marginRight: "1rem"
                                    }} />
                                ) : (
                                    <FaChevronRight style={{
                                        color: "#005eff",
                                        marginRight: "1rem"
                                    }} />
                                )}{item.title}
                            </button>
                        </h5>
                    </div>

                    <div
                        id={`collapse${index}`}
                        className={`collapse ${activeIndex === index ? 'show' : ''}`}
                        aria-labelledby={`heading${index}`}
                        data-parent="#accordion"
                    >
                        <div className="card-body">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="rounded mx-auto d-md-block mw-100"
                                id="card-img"
                            />
                            <p>{item.content}</p>
                            <p><b>Technologies used:</b> {item.technology}</p>
                            {item.projectLink && (
                                <div className="d-flex justify-content-around">
                                    <a
                                        className="btn btn-link text-decoration-none bold-button hover-underline-animation"
                                        href={item.projectLink}>
                                        Source Code
                                    </a>
                                    <a
                                        className="btn btn-link text-decoration-none bold-button hover-underline-animation"
                                        href={item.projectDemo}>
                                        Live Demo
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Portfolio = () => {
    const data = [
        {
            title: "Aviatio - Flying Spades",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtss30K8zaU_EhXLa0g6KuUfgEIllYl-SezAW8I_TSbQ&usqp=CAU&ec=48665701",
            content: "Aviato is full-stack web application that follows Agile and Scrum methodologies to enable customers to easily sign up, search for flights, and make reservations for travel destinations around the world. With Aviato, you have the ability to manage your flights with ease by adding or deleting them as per your needs. This user-friendly platform makes flight booking hassle-free and enjoyable. Please note that Aviato is currently undergoing updates and is temporarily offline, but we assure you that we are working hard to improve your travel experience.",
            technology:"HTML, CSS, JavaScript, Bootstrap, MySQL, Java, Spring Boot",
            projectLink: "https://github.com/swann-deanda-deciga-holder/aviato-airlines-captone",
            projectDemo: "https://www.aviatoflyingspades.com:8080/",
        },
        {
            title: "Electro - Ad Lister",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtss30K8zaU_EhXLa0g6KuUfgEIllYl-SezAW8I_TSbQ&usqp=CAU&ec=48665701",
            content: "Electro is a full-stack project that enables users to create an account and manage ads with ease. You can easily create, read, update, and delete (CRUD) electronic devices/services related ads based on your preferences. With Electro, you have the flexibility to search for ads by category or keyword, making it incredibly user-friendly.",
            technology:"HTML, CSS, JavaScript, jQuery, Bootstrap, MySQL, Java EE, Postman",
            projectLink: "https://github.com/Herb-carlos-paul/adlister",
            projectDemo: "",

        },
        {
            title: "Contact Manager",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtss30K8zaU_EhXLa0g6KuUfgEIllYl-SezAW8I_TSbQ&usqp=CAU&ec=48665701",
            content: "Contact manager is a program to store and manage contact information. In Java, we can use file I/O libraries to read and write the contact data to a file on the server. We can then implement RESTful API endpoints to interact with the contact data, and handle error conditions and implement authentication and authorization mechanisms. Using appropriate data structures and algorithms can efficiently manage contact data in the file.",
            technology:"Java",
            projectLink: "https://github.com/hunt-swann-contact-manager/contacts-manager/tree/main/src/ContactsManagerCLI",
            projectDemo: "",

        },
        {
            title: "Movie API Project",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtss30K8zaU_EhXLa0g6KuUfgEIllYl-SezAW8I_TSbQ&usqp=CAU&ec=48665701",
            content: "The Movies API is a fantastic front-end project that provides users with a user-friendly, web-based movie database featuring dynamic search and rename functionality. Designed for managing movie collections, the application offers RESTful API calls, full CRUD functionality for the database, and a convenient double-click renaming feature. With its easy-to-use interface and unique features, The Movies API is an excellent tool for movie enthusiasts who want to keep their collections organized.",
            technology:"HTML, CSS, JavaScript, Bootstrap",
            projectLink: "https://github.com/swann-holder-zhang/Movies-project",
            projectDemo: "",

        },
        {
            title: "Coffee Project",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtss30K8zaU_EhXLa0g6KuUfgEIllYl-SezAW8I_TSbQ&usqp=CAU&ec=48665701",
            content: "This coffee project allows users to query coffee products from a JavaScript object using vanilla JavaScript. The users can filter the products based on roasts. They can also create a new roast if it is not already available in the object, and all submissions are stored in local storage for future use. The front-end can be built using HTML and CSS with JavaScript functionality. The project provides an efficient and user-friendly way to discover and explore different coffee roasts while honing your vanilla JavaScript skills.",
            technology:"HTML, CSS, JavaScript",
            projectLink: "https://github.com/swann-holder-zhang/Movies-project",
            projectDemo: "",

        },

    ];

    return (
        <section id="portfolio" className="portfolio bg-light">
            <div className="container">
                <div className="section-title">
                    <h2>Portfolio</h2>
                </div>
                <p>The Projects within the accordions are coming soon, nevertheless please check out my Linkedin in the meantime!</p>
                <p>
                    Here, you'll find a collection of my full-stack projects, which demonstrate my skills in creating dynamic and functional applications from start to finish. From front-end development to back-end programming, I'm passionate about crafting seamless user experiences and efficient code. I hope you enjoy exploring my projects and seeing what I can create!
                </p>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <Accordion data={data} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
