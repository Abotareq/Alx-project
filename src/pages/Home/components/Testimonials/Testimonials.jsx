import styles from "./Testimonials.module.css";
import image1 from "../../../../assets/images/image1.png";
import image2 from "../../../../assets/images/image2.PNG";
import image3 from "../../../../assets/images/image3.PNG";
import HomeHeadings from "../../../../components/HomeHeadings";
export default function Testimonials(){
    const Testimonials = [
        {
            image: image1,
            name: "Emma Maria",
            role: "CEO - Consulting, USA",
            text: "I just want my child to have a normal and happy life value children Impact",
            buttonstyle: styles.div1btn
        },
        {
            image: image2,
            name: "Eleanor Anderson",
            role: "Leading Advisor",
            text: "I just want my child to have a normal and happy life value children Impact",
            buttonstyle: styles.div2btn
        },
        {
            image: image3,
            name: "Amelia Kerry",
            role: "Manager",
            text: "I just want my child to have a normal and happy life value children Impact",
            buttonstyle: styles.div1btn
        }
    ]
    return(
        <>
            <main className={styles.testmonials}>
            <section className={styles.data}>
                <p>Testimonials</p>
                <h1>What Parents Say</h1>
        </section>
                {Testimonials.map((item, index) => (
                    <section className={styles.div1} key={index}>
                    <img src={item.image} alt={`parent of ${item.name}`}/>
                    <button className={item.buttonstyle}>{item.name}</button>
                    <div className={styles.text}>
                        <h4>{item.role}</h4>
                        <p>{item.text}</p>    
                    </div>
                </section>
                ))}
            
      </main>
        </>

    );
}