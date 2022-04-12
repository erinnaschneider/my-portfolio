function Footer() {
    // return JSX for links to my github, linkedin, and other profiles
    return (
      <section className="footer">
        <ul>
          <li>
            <a href="https://github.com/erinnaschneider" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/erinn-schneider-3b0173215/" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </section>
    )
  }
  
  export default Footer;