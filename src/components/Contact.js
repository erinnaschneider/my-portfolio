function Contact() {
    // return JSX for a contact form with name, email, and message
  
    return (
      <section className='contact'>
        <header>
          <h2>Contact Me</h2>
        </header>
        <div className="container">
          <div className="email-contact">
            <a href='mailto:erinnaschneider@gmail.com'>
              <i class="fa-solid fa-envelope"></i>
              <p>erinnaschneider@gmail.com</p>
            </a>
          </div>
          <div className="phone-contact">
            <a href='tel:9196384087'>
              <i class="fa-solid fa-phone"></i>
              <p>(919) 638-4087</p>
            </a>
          </div>
          <div className="github-contact">
            <a href="https://github.com/erinnaschneider" target="_blank">
              <i className="fa fa-github"></i>
              <p>GitHub</p>
            </a>
          </div>
          <div className="linkedin-contact">
            <a href="https://www.linkedin.com/in/erinn-schneider-3b0173215/" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
              <p>LinkedIn</p>
            </a>
          </div>
        </div>
      </section>
    );
  
  }
  
  export default Contact;