import styles from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <span>S</span>
          <span>m</span>
          <span>a</span>
          <span>r</span>
          <span>t</span>
          <span>S</span>
          <span>t</span>
          <span>e</span>
          <span>p</span>
        </Link>
      </div>

      <nav className={styles.nav}>
        <Link to="/" className={styles.active}>
          Home
        </Link>

        <div className={styles.tgs}>
          {/* Replace these with real <Link>s when routing is ready */}
          <a href="#">Pages</a>
          <a href="#">Our Services</a>
          <Link to="/blog">Blog</Link>
          <a href="#">Contact Us</a>
        </div>
      </nav>

      <div className={styles.action}>
        <div className={styles.iconbutton}>🔍</div>

        <Link to="/signin">
          <button className={styles.btn}>Login</button>
        </Link>

        <Link to="/signup">
          <button className={styles.btn}>Sign Up</button>
        </Link>
      </div>
    </header>
  );
}
