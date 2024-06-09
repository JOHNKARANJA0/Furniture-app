import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactForm.css"

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fu7wah5', 'template_6kq6izn', form.current, {
        publicKey: 'arsit-fj_4qJGf3Ao',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Sent Successfully")
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Error sending the message. Please try again")
        },
      );
  }
  
  return (  
    <div className="contact-form">
      <h2>Get in Touch</h2>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" className='name-input' placeholder='Enter your name...'/>
        <label>Email</label>
        <input type="email" name="user_email" className='email-input' placeholder='Enter your email...'/>
        <label>Message</label>
        <textarea name="message" className='feedback-input' placeholder='Enter the message below...'/>
        <input type="submit" value="Send" className='submit-button'/>
      </form>
    </div>
  );
}

export default Contact;