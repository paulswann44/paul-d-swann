import React from 'react';
import "./contacts.css"
import { FaHome, FaEnvelope, FaPhone } from 'react-icons/fa';


function Contact (){
    return(
        <section id="contact" className="contact bg-white">
            <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Thank you for taking the time to visit my portfolio website. I am based in New York and currently seeking new opportunities in the field of Technology Industry. I am available to relocate and am excited to explore potential job opportunities outside of my current location.  Should you have any further questions or require additional information, please do not hesitate to contact me.  My information is available below.

                        The contact form is <b>disabled</b> for now, and currently being worked upon.  Nevertheless, feel free to contact me via my contact information below.  </p>

                </div>

                <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch ">

                        <div className="info bg-light">
                            <div className="address">
                                <FaHome />
                                <h4 className="d-inline-block ml-2">Location:</h4>
                                <p>New York, NY 10001</p>
                            </div>

                            <div className="email">
                                <FaEnvelope/>
                                <h4 className="d-inline-block ml-2">Email:</h4>
                                <p>paul.d.swann3@gmail.com</p>
                            </div>

                            <div className="phone">
                                <FaPhone/>
                                <h4 className="d-inline-block ml-2">Call:</h4>
                                <p>(469) 554-8894</p>
                            </div>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387196.5810796895!2d-74.55400584328127!3d40.69658590564907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1679791550532!5m2!1sen!2sus" frameBorder="0" style={{ border: 0, width: '100%', height: '290px' }} allowFullScreen></iframe>

                        </div>
                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form action={null} method="post" role="form" className="email-form bg-light">
                            <div className="row ">
                                <div className="form-group col-md-6 ">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" name="name" className="form-control" id="name" disabled />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Email</label>
                                    <input type="email" className="form-control" name="email" id="email" disabled />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Subject</label>
                                <input type="text" className="form-control" name="subject" id="subject" disabled />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Message</label>
                                <textarea className="form-control" name="message" rows="10" disabled></textarea>
                            </div>
                            <div className="my-3">
                     
                            </div>
                            <div className="text-center"><button type="submit" disabled>Send Message</button></div>
                        </form>
                    </div>

                </div>

            </div>
        </section>




    );
}

export default Contact;

//FUTURE FEATURE
// https://documentation.formspark.io/examples/react.html#use-formspark
