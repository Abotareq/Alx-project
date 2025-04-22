import styles from "./header.module.css";
import { Link } from "react-router-dom";
export default function Header(){
    return(
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                <Link to="/">
                    <span>S</span><span>m</span><span>a</span><span>r</span><span>t</span><span>S</span><span>t</span><span>e</span><span>p</span>
                </Link>
                 </div>
        <nav className={styles.nav}>
            
            <div className={styles.tgs}>
            <Link to="/"><a href="#" class={styles.active}>Home</a></Link>
            <Link to="#">Our Services</Link>
            <Link to="#">Projects</Link>
            <Link to="#">Shop</Link>
            <Link to="/blog"><button className={styles.tgs}>Blog</button></Link>
            <Link to="#">ContactUs</Link>
        </div>
        </nav>
        <div className={styles.action}>
            <div className={styles.iconbutton}>
                🔍
            </div>
            <Link to="/signin"><button className={styles.btn}>Login</button></Link>
            <Link to="/signup"><button className={styles.btn}>Sign Up</button></Link>


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
          <a href="#">Blog</a>
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
