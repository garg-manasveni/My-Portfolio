function Contact() {
  return (
    <section className="section contact-section" id="contact">

      <div className="contact-glow"></div>

      <div className="section-container">

        <div className="section-label section-index-label">
          <span>08</span>
          CONTACT
        </div>

        <div className="contact-heading">

          <p className="contact-eyebrow">
            HAVE AN IDEA?
          </p>

          <h2>
            Let's create
            <br />
            <span>something meaningful.</span>
          </h2>

          <p className="contact-description">
            Whether it's an opportunity, collaboration, idea or simply
            a conversation about technology — I'd love to hear from you.
          </p>

        </div>

        <div className="contact-main">

          <a
            href="mailto:gargmanasveni@gmail.com"
            className="email-link"
          >
            <span className="email-label">
              DROP ME A LINE
            </span>

            <span className="email-address">
              gargmanasveni@gmail.com
              <span>↗</span>
            </span>
          </a>

        </div>

        <div className="contact-socials">

          <a
            href="https://github.com/garg-manasveni"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <span>↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/manasveni-garg-577023372/"
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            <span>↗</span>
          </a>

          <a
            href="mailto:gargmanasveni@gmail.com"
          >
            <span>Email</span>
            <span>↗</span>
          </a>

        </div>

        <div className="resume-area">

          <p>
            Want to know more about my journey?
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-button"
          >
            View Resume
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;