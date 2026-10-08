function Hero() {
  return (
    <section className="hero-section" id="home">

      <div className="hero-grid-background"></div>

      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container">

        <div className="hero-content">

          <div className="availability">
            <span className="availability-dot"></span>
            <span>Computer Science Student</span>
          </div>

          <p className="hero-eyebrow">
            COMPUTER SCIENCE <span>×</span> CREATIVITY
          </p>

          <h1 className="hero-title">
            Hi, I'm
            <br />
            <span>Manasveni</span>
          </h1>

          <h2 className="hero-subtitle">
            I build digital experiences
            <br />
            with <em>logic & creativity.</em>
          </h2>

          <p className="hero-description">
            I'm a Computer Science student passionate about software
            development, web technologies, problem-solving and creating
            digital experiences that are both functional and engaging.
          </p>

          <div className="hero-actions">

            <a href="#about" className="button button-primary">
              Explore my journey
              <span>↗</span>
            </a>

            <a href="#contact" className="button button-outline">
              Let's connect
            </a>

          </div>

          <div className="hero-meta">

            <span>Bengaluru, India</span>

            <span className="meta-divider"></span>

            <span>CS Student</span>

            <span className="meta-divider"></span>

            <span>Creative Thinker</span>

          </div>

        </div>

        <div className="hero-visual">

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="orbit orbit-three"></div>

          <div className="visual-circle">

            <div className="visual-circle-inner">

              <img
                src="/profile.jpg"
                alt="Manasveni Garg"
              />

            </div>

          </div>

          <div className="floating-tag tag-top">
            <span className="tag-number">01</span>
            Developer
          </div>

          <div className="floating-tag tag-bottom">
            Creative
            <span className="spark">✦</span>
          </div>

          <div className="floating-dot dot-one"></div>
          <div className="floating-dot dot-two"></div>
          <div className="floating-dot dot-three"></div>

        </div>

      </div>

      <div className="hero-bottom">

        <div className="scroll-prompt">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line"></div>
        </div>

        <div className="hero-index">
          <span>00</span>
          <span>/</span>
          <span>08</span>
        </div>

      </div>

    </section>
  );
}

export default Hero;