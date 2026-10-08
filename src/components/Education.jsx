function Education() {
    return (
        <section id="education" className="education-section">
            <div className="section-container">

                {/* Section Heading */}
                <div className="section-heading">
                    <div className="section-label section-index-label">
                        <span>02</span>
                        EDUCATION
                    </div>

                    <h2>
                        Education <span>&</span> Learning
                    </h2>

                    <p>
                        My academic journey combines computer science, artificial
                        intelligence, and a strong foundation built through school.
                    </p>
                </div>

                {/* Education Timeline */}
                <div className="education-timeline">

                    {/* =================================
              SCALER SCHOOL OF TECHNOLOGY
              ================================= */}
                    <div className="education-item">

                        <div className="education-marker">
                            <div className="education-icon">
                                🎓
                            </div>
                        </div>

                        <div className="education-card">

                            <div className="education-top">
                                <span className="education-year">
                                    2025 — 2029
                                </span>

                                <span className="education-status">
                                    CURRENT
                                </span>
                            </div>

                            <h3>
                                Scaler School of Technology
                            </h3>

                            <h4>
                                CS & AI
                            </h4>

                            <p className="education-location">
                                📍 Bengaluru, Karnataka
                            </p>

                            <p className="education-description">
                                Pursuing a Computer Science and Artificial Intelligence
                                course with a focus on programming, problem-solving,
                                software development, and modern technologies.
                            </p>

                            <div className="education-tags">
                                <span>Computer Science</span>
                                <span>Artificial Intelligence</span>
                                <span>Programming</span>
                                <span>Software Development</span>
                            </div>

                        </div>
                    </div>


                    {/* =================================
              BITS PILANI DIGITAL
              ================================= */}
                    <div className="education-item">

                        <div className="education-marker">
                            <div className="education-icon">
                                💻
                            </div>
                        </div>

                        <div className="education-card">

                            <div className="education-top">
                                <span className="education-year">
                                    2025-2029
                                </span>

                                <span className="education-status">
                                    IN PROGRESS
                                </span>
                            </div>

                            <h3>
                                BITS Pilani Digital
                            </h3>

                            <h4>
                                B.Sc. in Computer Science
                            </h4>

                            <p className="education-location">
                                📍 BITS Pilani
                            </p>

                            <p className="education-description">
                                Pursuing a digital degree in Computer Science through
                                BITS Pilani, developing a deeper foundation in computing,
                                programming, and technology.
                            </p>

                            <div className="education-tags">
                                <span>Computer Science</span>
                                <span>Programming</span>
                                <span>Computing</span>
                            </div>

                        </div>
                    </div>


                    {/* =================================
              ST. MARY'S SCHOOL
              ================================= */}
                    <div className="education-item">

                        <div className="education-marker">
                            <div className="education-icon">
                                🏫
                            </div>
                        </div>

                        <div className="education-card">

                            <div className="education-top">
                                <span className="education-year">
                                    2025
                                </span>
                            </div>

                            <h3>
                                St. Mary's School
                            </h3>

                            <h4>
                                School Education
                            </h4>

                            <p className="education-location">
                                📍 Bijnor, Uttar Pradesh
                            </p>

                            <p className="education-description">
                                Completed my schooling at St. Mary's School, Bijnor,
                                building the academic foundation that led to my interest
                                in computer science and technology.
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Education;