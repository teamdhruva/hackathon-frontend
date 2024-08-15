import React from 'react';
import './Contact.css';
import Navbar from './Navbar'; 


const contacts = [
    {
        name: "Manohara",
        role: "It is what it is",
        email: "bmmanohara.cs23@rvce.edu.in",
        phone: "+91 83105 38052",
    },
    {
        name: "Rohith",
        role: "It's not what it's not",
        email: "rohithgowdam.cs21@rvce.edu.in",
        phone: "+91 80951 97258",
    },
];

const ContactCard = ({ contact }) => (
    <div className="contact-card">
        <h2>{contact.name}</h2>
        <p className="role">{contact.role}</p>
        <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <p>Phone: <a href={`tel:${contact.phone}`}>{contact.phone}</a></p>
    </div>
);

const Contact = () => (
    <div className="contact-background">
        <Navbar />
        <div className="contact-container">
            {contacts.map((contact, index) => (
                <ContactCard key={index} contact={contact} />
            ))}
        </div>
        <div className="fireworks">
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
        </div>
    </div>
);

export default Contact;
