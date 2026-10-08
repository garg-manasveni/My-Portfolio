import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
    {
        number: "01",
        title: "FinSight",
        subtitle: "Personal Finance Dashboard",
        description:
            "A frontend finance dashboard designed to help users track transactions, understand spending patterns, manage budgets, and visualize their financial activity through an intuitive interface.",
        technologies: [
            "React",
            "Vite",
            "JavaScript",
            "Recharts",
            "CSS",
            "LocalStorage",
        ],
        type: "Featured Project",
        liveLink:
            "https://finsight-finance-dashboard-ten.vercel.app/",
        githubLink:
            "https://github.com/garg-manasveni/finsight-finance-dashboard",
        featured: true,
    },

    {
        number: "02",
        title: "Smart Life Manager",
        subtitle: "Personal Productivity System",
        description:
            "A personal productivity and life-management application for organizing tasks, building habits, tracking goals, managing notes, planning schedules, and reviewing personal progress.",
        technologies: [
            "React",
            "Vite",
            "JavaScript",
            "React Router",
            "Context API",
            "LocalStorage",
        ],
        type: "Productivity",
        liveLink: "https://smart-life-manager-fmw4-h2nulfwp1-garg-manasvenis-projects.vercel.app",
        githubLink: "https://github.com/garg-manasveni/smart-life-manager",
        featured: false,
    },

    {
        number: "03",
        title: "CopyFlow",
        subtitle: "Copy-Paste Helper",
        description:
            "A lightweight productivity tool designed to make frequently used text and copy-paste workflows faster and more convenient.",
        technologies: [
            "React",
            "Vite",
            "JavaScript",
            "CSS",
        ],
        type: "Productivity",
        liveLink: "https://garg-manasveni.github.io/copy-flow/",
        githubLink:
            "https://github.com/garg-manasveni/copy-flow",
        featured: false,
    },
];

function Projects() {
    return (
        <section
            id="projects"
            className="projects-section"
        >
            <div className="projects-container">

                {/* Section Header */}
                <div className="projects-header">
                    <div>
                        <div className="section-label section-index-label">
                            <span>04</span>
                            PROJECTS
                        </div>

                        <h2>
                            Things I've
                            <span> built.</span>
                        </h2>
                    </div>

                    <p className="projects-intro">
                        A selection of projects where
                        I explore technology, design,
                        and practical problem solving.
                    </p>
                </div>

                {/* Projects */}
                <div className="projects-list">

                    {projects.map(
                        (project, index) => (
                            <article
                                key={project.title}
                                className={`project-card ${project.featured
                                        ? "featured-project"
                                        : ""
                                    }`}
                            >
                                <div className="project-top">

                                    <span className="project-number">
                                        {project.number}
                                    </span>

                                    <span className="project-type">
                                        {project.type}
                                    </span>

                                    <ArrowUpRight
                                        className="project-arrow"
                                        size={24}
                                    />
                                </div>

                                <div className="project-content">

                                    <h3>
                                        {project.title}
                                    </h3>

                                    <h4>
                                        {project.subtitle}
                                    </h4>

                                    <p>
                                        {
                                            project.description
                                        }
                                    </p>

                                    <div className="project-technologies">
                                        {project.technologies.map(
                                            (
                                                technology
                                            ) => (
                                                <span
                                                    key={
                                                        technology
                                                    }
                                                >
                                                    {
                                                        technology
                                                    }
                                                </span>
                                            )
                                        )}
                                    </div>

                                    <div className="project-links">

                                        {project.liveLink && (
                                            <a
                                                href={
                                                    project.liveLink
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                                className="project-link primary-project-link"
                                            >
                                                <ExternalLink
                                                    size={
                                                        16
                                                    }
                                                />

                                                Live
                                                Demo
                                            </a>
                                        )}

                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="project-link"
                                            >
                                                GitHub
                                                <ArrowUpRight size={16} />
                                            </a>
                                        )}

                                    </div>
                                </div>
                            </article>
                        )
                    )}

                </div>

                {/* Bottom text */}
                <div className="projects-footer">
                    <p>
                        More experiments and projects
                        are continuously in progress.
                    </p>

                    <a
                        href="https://github.com/garg-manasveni"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View all on GitHub
                        <ArrowUpRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Projects;