import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get In Touch</h2>

            <div className="contact__container">
                <div className="contact__info">
                    <h3 className="contact__title">Contact Details</h3>
                    <p className="contact__details">
                        I'd love to hear from you! Whether you have a question, want to work together, or just say hello, feel free to reach out via any of the methods below.
                    </p>

                    <ul className="contact__list">
                        <li className="contact__item">
                            <strong>Email:</strong>{" "}
                            <a href="mailto:kaif@example.com" className="contact__link">
                                kaif2239@gmail.com
                            </a>
                        </li>
                        <li className="contact__item">
                            <strong>Phone:</strong>{" "}
                            <a href="tel:+1234567890" className="contact__link">
                                +91 9390167733
                            </a>
                        </li>
                        <li className="contact__item">
                            <strong>LinkedIn:</strong>{" "}
                            <a 
                                href="https://www.linkedin.com/in/mahammed-kaif-dudekula-678273260" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="contact__link"
                            >
                                View Profile
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Contact;
