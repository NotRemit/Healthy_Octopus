import React from "react";
import "../styles/ContactUs.css";

function ContactUs() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Email: support@healthyfood.com</p>
      <p>Toll-Free: 1800-123-4567</p>

      <h2>Send Us a Message</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
