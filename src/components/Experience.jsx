function Experience() {
  const experiences = [
    {
      number: "01",
      category: "TECHNICAL",
      title: "Hackathons & Technical Events",
      organization: "Student & Technical Activities",
      description:
        "Participating in technical competitions and hackathon environments where I get to collaborate, explore technologies and solve practical problems."
    },
    {
      number: "02",
      category: "LEADERSHIP",
      title: "Leadership & Student Initiatives",
      organization: "Scaler School of Technology",
      description:
        "Taking part in student communities and initiatives that involve teamwork, communication, organization and contributing ideas."
    },
    {
      number: "03",
      category: "CREATIVE",
      title: "Creative & Communication",
      organization: "College Communities",
      description:
        "Exploring creative work, communication and visual content while contributing to activities that combine ideas with presentation."
    },
    {
      number: "04",
      category: "VOLUNTEERING",
      title: "Volunteering & Events",
      organization: "College & Community Activities",
      description:
        "Contributing to event and volunteering activities that have helped me develop coordination, teamwork and execution skills."
    }
  ];

  return (
    <section className="section experience-section" id="experience">

      <div className="section-container">

        <div className="section-label section-index-label">
          <span>06</span>
          EXPERIENCE & INVOLVEMENT
        </div>

        <div className="experience-header">

          <h2>
            More than
            <br />
            <span>just code.</span>
          </h2>

          <p>
            Some of the experiences that have shaped how I work,
            collaborate and think.
          </p>

        </div>

        <div className="experience-list">

          {experiences.map((experience) => (
            <article
              className="experience-row"
              key={experience.number}
            >

              <div className="experience-number">
                {experience.number}
              </div>

              <div className="experience-category">
                {experience.category}
              </div>

              <div className="experience-main">

                <h3>{experience.title}</h3>

                <p className="experience-org">
                  {experience.organization}
                </p>

                <p className="experience-description">
                  {experience.description}
                </p>

              </div>

              <div className="experience-arrow">
                ↗
              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;