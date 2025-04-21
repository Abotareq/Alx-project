import styles from "./Hero.module.css"
import sumImages from "../../../../assets/sun-svgrepo-com.svg";
import imageOne from "../../../../assets/s3-img.png"
import imageTwo from "../../../../assets/s3-img1.png"
import { useEffect, useState } from "react";

export default function Hero(){
    const [setImage, setCurrentImage] = useState(imageOne);
    const [setContent, setShowContent] = useState(true);
    useEffect(() => {
        const iamges = [imageOne, imageTwo];
        let currentIndex = 0;

        const imagesInterval = setInterval(() => {
            currentIndex = (currentIndex + 1 )% iamges.length;
            setCurrentImage(iamges[currentIndex]);
        }, 2000);

        const toguleIntervals = setInterval(() => {
            setShowContent(prev => !prev);
        }, 4000);
        return () => {
            clearInterval(imagesInterval);
            clearInterval(toguleIntervals)
        }
    })
    return (
        <>
            <main className={styles.hero}>
            {/* text section */}
            <section className={styles.sectionone}>
            {/* svg image */}
            <img src={sumImages} alt="Dancing Sun" className={styles.image} />
            <div className={setContent ? styles.visible : styles.hidden}>
                <h1>Celebrating the strength, spirit, and smile of every child with Down syndrome</h1>
                <p>A supportive space for children with Down syndrome and their families to grow, connect, and thrive.</p>
                <button>About Us</button>
            </div>
            </section>
            {/* Images section */}
            <section class="section-two">
            <div id="photo-gallery">
                <img src={setImage} id="first-image" alt="images 1" />
            </div>
        </section>
        </main>
        </>
    );
}