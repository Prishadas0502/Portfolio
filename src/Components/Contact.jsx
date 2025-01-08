import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm';
import GoogleMap from './GoogleMaps'
function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-container">
        <GoogleMap />
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
