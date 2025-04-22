import styles from "./Footer.module.css";
import Blog1 from "../../assets/images/blog1.PNG";
import Blog2 from "../../assets/images/blog2.PNG";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Upper Section */}
      <section className={styles.upper}>
        <div className={styles.social}>
          <a href="#" className={styles.icon}>
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" className={styles.icon}>
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#" className={styles.icon}>
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        <div className={styles.contacts}>
          <div className={styles.phone}>
            <a href="#" className={styles.icon}>
              <i className="fa-solid fa-phone"></i>
            </a>
            <div className={styles.info}>
              <p>Phone number</p>
              <p>+20 115 688 9741</p>
            </div>
          </div>

          <div className={styles.phone}>
            <a href="#" className={styles.icon}>
              <i className="fa-solid fa-envelope"></i>
            </a>
            <div className={styles.info}>
              <p>Email Address</p>
              <p>smartstep@gmail.com</p>
            </div>
          </div>

          {/* Uncomment when you have a location */}
          {/* 
          <div className={styles.phone}>
            <a href="#" className={styles.icon}>
              <i className="fa-solid fa-location-dot"></i>
            </a>
            <div className={styles.info}>
              <p>Our Address</p>
              <p>25 El-Tahrir Street, Cairo</p>
            </div>
          </div> 
          */}
        </div>
      </section>

      {/* Mid Section */}
      <section className={styles.midsection}>
        <div className={styles.about}>
          <h1>About Us</h1>
          <p>
            In Smart Step, we believe that every child shines — and children
            with Down syndrome light up the world with love and joy.
          </p>
          <button className={styles.btn}>About Us</button>
        </div>

        <div className={styles.usefullinks}>
          <h1>Useful Links</h1>
          <nav>
            <div className={styles.column}>
              <a href="#">Home</a>
              <a href="#">Pages</a>
              <a href="#">Our Services</a>
            </div>
            <div className={styles.column}>
              <a href="#">Projects</a>
              <a href="#">Blog</a>
              <a href="#">Contact Us</a>
            </div>
          </nav>
        </div>

        <div className={styles.blogs}>
          <h1>Blogs & Articles</h1>
          <div className={styles.blogdata}>
            <img src={Blog1} alt="Helping Kids blog" />
            <div className={styles.bloginfo}>
              <a
                href="https://preview.themeforest.net/item/parezy-child-therapy-wordpress-theme/full_screen_preview/28772350"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Helping Kids speak with confidence</p>
              </a>
              <p>June 28, 2020</p>
            </div>
          </div>
          <div className={styles.blogdata}>
            <img src={Blog2} alt="Helping Kids blog" />
            <div className={styles.bloginfo}>
              <a
                href="https://preview.themeforest.net/item/parezy-child-therapy-wordpress-theme/full_screen_preview/28772350"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Helping Kids speak with confidence</p>
              </a>
              <p>June 28, 2020</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lower Section */}
      <section className={styles.lower}>
        <div className={styles.right}>
          <a href="#">Privacy Policy</a>
          <a href="#">Conditions</a>
        </div>
        <div className={styles.left}>
          <h3>Copyright © Parezy. All rights reserved.</h3>
        </div>
      </section>
    </footer>
  );
}
