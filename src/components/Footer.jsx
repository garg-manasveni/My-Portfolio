function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">

            <div className="footer-top">

                <div className="footer-brand">

                    <a href="#home">
                        M<span>.</span>
                    </a>

                    <p>
                        Building, learning
                        <br />
                        and creating.
                    </p>

                </div>

                <a href="#home" className="back-top">
                    Back to top
                    <span>↑</span>
                </a>

            </div>

            <div className="footer-bottom">

                <p>
                    © {currentYear} Manasveni Garg. All rights reserved.
                </p>

                <p>
                    Designed & built with curiosity.
                </p>

            </div>

        </footer>
    );
}

export default Footer;