import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setSuccessMessage("Please fill in all fields.");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const newData = { name: name, email: email, message: message };

    localStorage.setItem("users", JSON.stringify([...existingUsers, newData]));

    setName("");
    setEmail("");
    setMessage("");
    setSuccessMessage("Thank you! Your message has been sent successfully.");

   setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <>
      <div className="contact">
        <div className="title">
          <h5>Get in Touch</h5>
          <h2>Contact Me</h2>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-md-4">
              <div className="social">
                <i className="fa-brands fa-facebook"></i>
                <h3>Facebook</h3>
                <h4>RedoTech</h4>
                <a href="https://www.facebook.com/share/1R2wvTGv4d/" target="_blank" rel="noopener noreferrer">
                  Send a Message
                </a>
              </div>
              <div className="social">
                <i className="fa-brands fa-whatsapp"></i>
                <h3>WhatsApp</h3>
                <h4>01552769471</h4>
                <a href="https://wa.me/+201552769471" target="_blank" rel="noopener noreferrer">
                  Send a Message
                </a>
              </div>
              <div className="social">
                <i className="fa-brands fa-telegram"></i>
                <h3>Telegram</h3>
                <h4>@omniyaabdelnasser</h4>
                <a href="https://t.me/omniyaabdelnasser" target="_blank" rel="noopener noreferrer">
                  Send a Message
                </a>
              </div>
            </div>

            <div className="col-md-8">
              <form onSubmit={submit}>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  required
                  aria-label="Your Full Name"
                  style={{ height: "50px" }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  aria-label="Your Email"
                  style={{ height: "50px" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  placeholder="Write your message here"
                  required
                  aria-label="Write your message"
                  style={{ height: "100px" }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {successMessage && (
                  <p className="success-message" style={{ color: "green", marginTop: "10px" }}>
                    {successMessage}
                  </p>
                ) }
                <button className="submit" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
