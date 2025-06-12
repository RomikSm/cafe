import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container" id="where">
      <div className="contact-content">
        <h5 className="contact-heading">
          <span className="contact-tag">WHERE TO FIND US</span>
        </h5>
        <p>Find us at some address at some place.</p>
        <img 
          src="https://www.w3schools.com/w3images/map.jpg" 
          alt="Map" 
          className="contact-map" 
        />
        <p>
          <span className="contact-note">FYI!</span> We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.
        </p>
        <p><strong>Reserve</strong> a table, ask for today's special or just send us a message:</p>
        
        <form className="contact-form">
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Name" 
              required 
              className="contact-input" 
            />
          </div>
          <div className="form-group">
            <input 
              type="number" 
              placeholder="How many people" 
              required 
              className="contact-input" 
            />
          </div>
          <div className="form-group">
            <input 
              type="datetime-local" 
              placeholder="Date and time" 
              required 
              className="contact-input" 
              defaultValue="2020-11-16T20:00" 
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Message \ Special requirements" 
              required 
              className="contact-input" 
            />
          </div>
          <div className="form-group">
            <button type="submit" className="contact-button">
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;