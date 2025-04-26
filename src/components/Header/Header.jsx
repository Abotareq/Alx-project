import styles from "./header.module.css";
import { Link } from "react-router-dom";
import React from "react";
import userIcon from "../../assets/images/noun-user-4216248.png";
export default function Header() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  console.log(user);
  const admin = user.isAdmin;
  console.log(admin);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <span>M</span>
          <span>I</span>
          <span>N</span>
          <span>D</span>
          <span>B</span>
          <span>L</span>
          <span>O</span>
          <span>O</span>
          <span>M</span>
          <span>E</span>
          <span>R</span>
          <span>S</span>
        </Link>
      </div>

      <nav className={styles.nav}>
        <Link to="/" className={styles.active}>
          Home
        </Link>

        <div className={styles.tgs}>
          {/* Replace these with real <Link>s when routing is ready */}
          <Link to="/learning">Learning</Link>
          <Link to="#">Services</Link>
          <Link to="/blog">Blog</Link>
          {admin && <Link to="/admin">Admin</Link>}
        </div>
      </nav>

      <div className={styles.action}>
        {!user ? (
          <Link to="/signin">
            <button className={styles.btn}>Login</button>
          </Link>
        ) : null}

        {!user ? (
          <Link to="/signup">
            <button className={styles.btn}>Sign Up</button>
          </Link>
        ) : null}
        {user ? (
          <Link to="/user">
            <button className={`${styles.iconbutton}`}>
              <img src={userIcon} alt="user" />
            </button>
          </Link>
        ) : null}
      </div>
    </header>
  );
}
