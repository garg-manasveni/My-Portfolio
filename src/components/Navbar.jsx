import { useEffect, useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

            <div className="nav-wrapper">

                <a href="#home" className="brand" onClick={closeMenu}>
                    <span className="brand-mark">M</span>

                    <span className="brand-name">
                        Manasveni<span></span>
                    </span>
                </a>

                <button
                    className={`menu-toggle ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>

                    <a href="#home" onClick={closeMenu}>
                        <span>00</span>
                        Home
                    </a>

                    <a href="#about" onClick={closeMenu}>
                        <span>01</span>
                        About
                    </a>

                    <a href="#education" onClick={closeMenu}>
                        <span>02</span>
                        Education
                    </a>

                    <a href="#skills" onClick={closeMenu}>
                        <span>03</span>
                        Skills
                    </a>
                    <a href="#projects" onClick={closeMenu}>
                        <span>04</span>
                        Projects
                    </a>

                    <a href="#creative-work" onClick={closeMenu}>
                        <span>05</span>
                        Creative Work
                    </a>

                    <a href="#experience" onClick={closeMenu}>
                        <span>06</span>
                        Experience
                    </a>

                    <a href="#achievements" onClick={closeMenu}>
                        <span>07</span>
                        Achievements
                    </a>

                    <a href="#contact" onClick={closeMenu} className="nav-contact">
                        Let's Talk
                        <span className="arrow">↗</span>
                    </a>

                </nav>

            </div>

        </header>
    );
}

export default Navbar;