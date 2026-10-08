function CreativeWork() {
    return (
        <section id="creative-work" className="creative-section">
            <div className="section-container">

                {/* Section Heading */}
                <div className="section-heading creative-heading">
                    <div className="section-label section-index-label">
                        <span>05</span>
                        CREATIVE WORK
                    </div>

                    <h2>
                        Creativity is part of
                        <span> how I think.</span>
                    </h2>

                    <p>
                        Alongside computer science and technology, I explore creativity
                        through sketching, painting, digital design, DIY projects, and
                        visual content.
                    </p>
                </div>


                {/* Creative Introduction */}
                <div className="creative-intro">

                    <div className="creative-intro-text">
                        <span className="creative-small-label">
                            CREATIVE EXPLORATION
                        </span>

                        <h3>
                            From ideas to
                            <em> visual stories.</em>
                        </h3>

                        <p>
                            I enjoy turning ideas into visual work — from traditional
                            sketches and paintings to digital designs and social media
                            content. My creative work allows me to explore a different
                            side of problem-solving and visual communication.
                        </p>
                    </div>

                    <div className="creative-intro-mark">
                        <span>✦</span>
                    </div>

                </div>


                {/* Creative Categories */}
                <div className="creative-grid">

                    {/* Art */}
                    <article className="creative-card">

                        <div className="creative-card-number">
                            01
                        </div>

                        <div className="creative-card-icon">
                            🎨
                        </div>

                        <h3>
                            Art & Illustration
                        </h3>

                        <p>
                            Sketches, paintings, character drawings, creative studies,
                            and traditional artwork.
                        </p>

                        <div className="creative-tags">
                            <span>Sketching</span>
                            <span>Painting</span>
                            <span>Illustration</span>
                        </div>

                    </article>


                    {/* Digital Design */}
                    <article className="creative-card">

                        <div className="creative-card-number">
                            02
                        </div>

                        <div className="creative-card-icon">
                            ✦
                        </div>

                        <h3>
                            Digital Design
                        </h3>

                        <p>
                            Posters, visual concepts, digital artwork, creative layouts,
                            and design experiments.
                        </p>

                        <div className="creative-tags">
                            <span>Digital Art</span>
                            <span>Posters</span>
                            <span>Design</span>
                        </div>

                    </article>


                    {/* Content */}
                    <article className="creative-card">

                        <div className="creative-card-number">
                            03
                        </div>

                        <div className="creative-card-icon">
                            🎬
                        </div>

                        <h3>
                            Content Creation
                        </h3>

                        <p>
                            Creative videos, reels, and content
                            created around my artwork and ideas.
                        </p>

                        <div className="creative-tags">
                            <span>Instagram</span>
                            <span>YouTube</span>
                            <span>Visual Content</span>
                        </div>

                    </article>

                </div>


                {/* Platforms */}
                <div className="creative-platforms">

                    <div className="platform-heading">
                        <span className="section-label">
                            FIND MY CREATIVE WORK
                        </span>

                        <h3>
                            Explore what I create.
                        </h3>
                    </div>


                    <div className="platform-links">

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/canvilla._studio/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="platform-link"
                        >
                            <div>
                                <span className="platform-icon">◎</span>

                                <div>
                                    <strong>Instagram</strong>
                                    <span>Art, sketches & creative reels</span>
                                </div>
                            </div>

                            <span className="platform-arrow">↗</span>
                        </a>


                        {/* YouTube */}
                        <a
                            href="https://www.youtube.com/@canvilla_studio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="platform-link"
                        >
                            <div>
                                <span className="platform-icon">▶</span>

                                <div>
                                    <strong>YouTube</strong>
                                    <span>Creative videos & visual content</span>
                                </div>
                            </div>

                            <span className="platform-arrow">↗</span>
                        </a>


                        {/* Pinterest */}
                        <a
                            href="https://in.pinterest.com/canvilla_studio_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="platform-link"
                        >
                            <div>
                                <span className="platform-icon">P</span>

                                <div>
                                    <strong>Pinterest</strong>
                                    <span>Artwork, ideas & visual collections</span>
                                </div>
                            </div>

                            <span className="platform-arrow">↗</span>
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default CreativeWork;