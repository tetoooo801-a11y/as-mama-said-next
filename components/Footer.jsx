export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <span className="logo small">
              AS MAMA SAID<span className="dot-inline"></span>
            </span>
            <p>
              A creative studio for brand identity, content, film, and paid media —
              based in Cairo, working across Dubai.
            </p>
          </div>
          <div className="foot-col">
            <h4>Site</h4>
            <a href="#services">Services</a>
            <a href="#results">Results</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="foot-col">
            <h4>Social</h4>
            <a
              href="https://www.instagram.com/as.mama.said"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
          <div className="foot-col">
            <h4>Contact</h4>
            <a href="mailto:hello@asmamasaid.com">hello@asmamasaid.com</a>
            <a href="#">Cairo · Dubai</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {currentYear} As Mama Said. All rights reserved.</span>
          <span>Mama said it. We made it.</span>
        </div>
      </div>
    </footer>
  );
}
