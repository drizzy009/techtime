import Carousl from "../Carousel/Carousel";
import style from "./Section6.module.css";

function Section6() {

    
  return (
    <section className={style.section6_container}>
      <div className={style.section6_row1}>
        <h2>What our clients are saying</h2>
        <p>High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
      </div>
      <div className={style.testimonial_carousel}>
        <Carousl/>
      </div>
    </section>
  );
}

export default Section6;
