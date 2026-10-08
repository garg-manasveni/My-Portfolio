function About() {
  return (
    <section className="section about-section" id="about">

      <div className="section-container">

        <div className="section-label section-index-label">
          <span>01</span>
          ABOUT ME
        </div>

        <div className="about-heading">

          <h2>
            A curious mind,
            <br />
            <span>always building.</span>
          </h2>

          <div className="heading-line"></div>

        </div>

        <div className="about-layout">

          <div className="about-main">

            <p className="about-lead">
              I'm a Computer Science student who enjoys turning ideas
              into practical digital experiences.
            </p>

            <p>
              My journey in technology started with learning the
              fundamentals of programming and gradually grew into an
              interest in web development, software engineering and
              problem-solving.
            </p>

            <p>
              I enjoy learning by building, experimenting with new
              technologies and working with people on challenging ideas.
              College activities, technical events and hackathons have
              also helped me develop my communication, teamwork and
              leadership skills.
            </p>

            <p>
              Beyond code, I have a strong creative side. I enjoy
              exploring visual design, digital content and different
              ways of communicating ideas.
            </p>

          </div>

          <div className="about-side">

            <div className="identity-card">

              <span className="card-small-label">
                CURRENTLY
              </span>

              <h3>
                Learning.
                <br />
                Building.
                <br />
                Exploring.
              </h3>

              <div className="card-line"></div>

              <p>
                Focused on growing as a developer while discovering
                where technology and creativity intersect.
              </p>

            </div>

          </div>

        </div>

        <div className="about-values">

          <div className="value-card">
            <span>01</span>
            <h3>Curiosity</h3>
            <p>
              I enjoy understanding how things work and learning
              technologies beyond the surface.
            </p>
          </div>

          <div className="value-card">
            <span>02</span>
            <h3>Problem Solving</h3>
            <p>
              I like breaking complicated problems into smaller,
              understandable pieces.
            </p>
          </div>

          <div className="value-card">
            <span>03</span>
            <h3>Creativity</h3>
            <p>
              I bring a visual and creative perspective to the things
              I build.
            </p>
          </div>

          <div className="value-card">
            <span>04</span>
            <h3>Growth</h3>
            <p>
              Every project and experience is an opportunity to improve.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;