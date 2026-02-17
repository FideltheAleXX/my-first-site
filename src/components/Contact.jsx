const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-title">
        <h2>Get In Touch</h2>
      </div>

      <div className="form">
        <div className="block">
          <div className="message-description">Your Name</div>
          <input
            type="text"
            className="name-input"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="block">
          <div className="message-description">Your Email</div>
          <input
            type="email"
            className="email-input"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="block">
          <div className="message-description">Your message</div>
          <textarea
            rows="5"
            className="message-input"
            placeholder="Write your message here"
            required
          ></textarea>
        </div>
        <div className="btn-container">
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
