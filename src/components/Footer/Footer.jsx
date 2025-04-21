import styles from "./Footer.module.css";
import Blog1 from "../../assets/images/blog1.PNG"
import Blog2 from "../../assets/images/blog2.PNG"
export default function Footer(){
    return(
        <>
        <footer className={styles.footer}>
            <section className={styles.upper}>
                <div className={styles.social}>
                    <a href="#" class="facebook"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" class="facebook"><i class="fa-brands fa-youtube"></i></a>
                    <a href="#" class="facebook"><i class="fa-brands fa-instagram"></i></a>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.phone}>
                        <a href="#" className={styles.facebook}><i class="fa-solid fa-phone"></i></a>
                        <div className={styles.info}>
                            <p>Phone number</p>
                            <p>+201156889741</p>
                        </div>
                    </div>
                    <div className={styles.phone}>
                        <a href="#" class={styles.facebook}><i class="fa-brands fa-youtube"></i></a>
                        <div className={styles.info}>
                            <p>Email Address</p>
                            <p>smrtstep@gmail.com</p>
                        </div>
                    </div>
                    <div className={styles.phone}>
                        <a href="#" className={styles.facebook}><i class="fa-solid fa-location-dot"></i></a>
                        <div className={styles.info}>
                            <p>Our adress</p>
                            <p>25 El-tahrir street, Cairo</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.midsection}>
                <div className={styles.about}>
                    <h1>About Us</h1>
                    <p>In smart Step we believ that Every child shines — and children with Down syndrome light up the world with love and joy.</p>
                    <button className={styles.btn}>About US</button>
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
                        <img src={Blog1} alt="blog text"/>
                        <div className={styles.bloginfo}>
                            <a href="https://preview.themeforest.net/item/parezy-child-therapy-wordpress-theme/full_screen_preview/28772350"><p>Helping Kids speak with confidence</p></a>
                            <p>June 28, 2020</p>
                        </div>
                    </div>
                    <div className={styles.blogdata}>
                        <img src={Blog2} alt="blog text"/>
                        <div className={styles.bloginfo}>
                            <a href="https://preview.themeforest.net/item/parezy-child-therapy-wordpress-theme/full_screen_preview/28772350"><p>Helping Kids speak with confidence</p></a>
                            <p>June 28, 2020</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.lower}>
                <div className={styles.right}>
                    <a href="#"><p>Privacy&Policy</p></a>
                    <a href="#"><p>Conditions</p></a>
                </div>
                <div className={styles.left}>
                    <h3>Copyright by Parezy. All rights reserved.</h3>
                </div>
            </section>
       </footer>
        </>
    );
}