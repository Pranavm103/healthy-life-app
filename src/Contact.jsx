import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-description">
          Got questions or feedback? We'd love to hear from you!
        </p>

        <form className="contact-form">
          <div>
            <label className="contact-label">Name</label>
            <input type="text" className="contact-input" placeholder="Your name" />
          </div>
          <div>
            <label className="contact-label">Email</label>
            <input type="email" className="contact-input" placeholder="Your email" />
          </div>
          <div>
            <label className="contact-label">Message</label>
            <textarea
              rows="4"
              className="contact-textarea"
              placeholder="Your message"
            ></textarea>
          </div>
          <div style={{ textAlign: "center" }}>
            <button type="submit" className="contact-button">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
