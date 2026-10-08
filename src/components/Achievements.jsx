function Achievements() {
  const achievements = [
    {
      number: "01",
      title: "Competitive Programming",
      text:
        "Participating in programming contests and technical challenges to strengthen logical thinking and problem-solving."
    },
    {
      number: "02",
      title: "Hackathon Participation",
      text:
        "Taking part in hackathon environments to collaborate with teams and work on practical technology-driven ideas."
    },
    {
      number: "03",
      title: "Campus Initiatives",
      text:
        "Contributing ideas and participating in initiatives focused on student activities, events and campus experiences."
    },
    {
      number: "04",
      title: "Creative Work",
      text:
        "Building a creative portfolio alongside my technical journey through art, visual design and digital content."
    }
  ];

  return (
    <section
      className="section achievements-section"
      id="achievements"
    >

      <div className="section-container">

        <div className="section-label section-index-label">
          <span>07</span>
          ACHIEVEMENTS
        </div>

        <div className="achievements-heading">

          <h2>
            Things I've
            <br />
            <span>explored.</span>
          </h2>

          <p>
            My journey isn't defined by one skill or one achievement.
            It's a collection of experiences, experiments and lessons.
          </p>

        </div>

        <div className="achievement-grid">

          {achievements.map((achievement) => (
            <article
              className="achievement-card"
              key={achievement.number}
            >

              <div className="achievement-top">

                <span>
                  {achievement.number}
                </span>

                <span className="achievement-icon">
                  ✦
                </span>

              </div>

              <h3>
                {achievement.title}
              </h3>

              <p>
                {achievement.text}
              </p>

              <div className="achievement-line"></div>

            </article>
          ))}

        </div>

        <div className="achievements-bottom">

          <span>
            ALWAYS LEARNING
          </span>

          <span className="achievement-star">
            ✦
          </span>

          <span>
            ALWAYS EXPLORING
          </span>

        </div>

      </div>

    </section>
  );
}

export default Achievements;