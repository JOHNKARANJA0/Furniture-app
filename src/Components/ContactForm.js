import React, { useState } from 'react';
import "./ContactForm.css"

function Contact() {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation (optional)
    if (!feedback.trim() || !email.trim()) {
      alert('Please enter feedback and email address.');
      return;
    }

    fetch('https://furniture-website-data.onrender.com/Emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, feedback }),
    })
      .then((response) => {
        if (response.ok) {
            console.log(response)
          alert('Feedback submitted successfully!');
          setFeedback('');
          setEmail('');

        } else {
          alert('Error submitting feedback. Please try again later.');
        }
      })
      .catch((error) => {
        console.error('Error submitting feedback:', error);
        alert('An unexpected error occurred. Please try again later.');
      });
  };

  return (
    <div className="about-container">
      {/* About content */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
        <label>
            Email Address:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="email-input"/>
          </label>
          <label>
            Feedback:
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="feedback-input"
            />
          </label>
          <button type="submit" className="submit-button">Send Feedback</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;