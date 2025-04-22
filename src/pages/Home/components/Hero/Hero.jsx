import styles from "./Hero.module.css";
import sunImage from "../../../../assets/sun-svgrepo-com.svg";
import imageOne from "../../../../assets/s3-img.png";
import imageTwo from "../../../../assets/s3-img1.png";
import { useEffect, useState } from "react";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(imageOne);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const images = [imageOne, imageTwo];
    let currentIndex = 0;

    const imagesInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[currentIndex]);
    }, 2000);

    const toggleInterval = setInterval(() => {
      setShowContent((prev) => !prev);
    }, 4000);

    return () => {
      clearInterval(imagesInterval);
      clearInterval(toggleInterval);
    };
  }, []); // ✅ Only run once on mount

  return (
    <main className={styles.hero}>
      {/* Text section */}
      <section className={styles.sectionone}>
        {/* Sun SVG */}
        <img src={sunImage} alt="Dancing Sun" className={styles.image} />
        <div className={showContent ? styles.visible : styles.hidden}>
          <h1>
            Celebrating the strength, spirit, and smile of every child with Down
            syndrome
          </h1>
          <p>
            A supportive space for children with Down syndrome and their
            families to grow, connect, and thrive.
          </p>
          <button>About Us</button>
        </div>
      </section>

      {/* Images section */}
      <section className={styles.sectiontwo}>
        <div id="photo-gallery">
          <img src={currentImage} id="first-image" alt="Changing Slide" />
        </div>
      </section>
    </main>
  );
}
