function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Development",
      description:
        "Technologies I use to create websites and software experiences.",
      skills: [
        "Java",
        "JavaScript",
        "HTML",
        "CSS",
        "React",
        "Node.js",
        "Express.js"
      ]
    },
    {
      number: "02",
      title: "Computer Science",
      description:
        "Core concepts that form the foundation of my technical learning.",
      skills: [
        "Data Structures",
        "Algorithms",
        "DBMS",
        "Operating Systems",
        "Computer Networks"
      ]
    },
    {
      number: "03",
      title: "Database & Tools",
      description:
        "Tools and technologies I work with during development.",
      skills: [
        "MongoDB",
        "Mongoose",
        "SQL",
        "Git",
        "GitHub",
        "VS Code",
        "Postman"
      ]
    },
    {
      number: "04",
      title: "Creative",
      description:
        "Skills that help me approach technology from a visual perspective.",
      skills: [
        "Digital Design",
        "Visual Communication",
        "Creative Thinking",
        "Content Creation"
      ]
    }
  ];

  return (
    <section className="section skills-section" id="skills">

      <div className="section-container">

        <div className="section-label section-index-label">
          <span>03</span>
          WHAT I WORK WITH
        </div>

        <div className="skills-intro">

          <h2>
            Tools are just tools.
            <br />
            <span>Ideas come first.</span>
          </h2>

          <p>
            My current toolkit combines programming fundamentals,
            web development, databases and creative skills. I'm
            continuously expanding it as I learn.
          </p>

        </div>

        <div className="skills-grid">

          {skillGroups.map((group) => (
            <article className="skill-card" key={group.number}>

              <div className="skill-card-top">

                <span className="skill-number">
                  {group.number}
                </span>

                <span className="skill-arrow">
                  ↗
                </span>

              </div>

              <h3>{group.title}</h3>

              <p>{group.description}</p>

              <div className="skill-tags">

                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;