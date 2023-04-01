import { unsplash_2 } from "../../assets";
import style from "../Section4/Section4.module.css";
import { Cards } from "../../constants/index";

function Section4() {
  return (
    <section className={style.section4_container}>
      <div className={style.section4_flexbox}>
        <div className={style.section4_col1}>
          <h2>This is why we are best from others</h2>
          <p>
            High-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
          <img src={unsplash_2} alt="" />
        </div>
        <div className={style.section4_col2}>
          {Cards.map((card) => (
            <div key={card.key} className={style.section4_card}>
                <img src={card.cardimg} alt={card.h3} />
                <h3>{card.h3}</h3>
                <p>{card.cardtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section4;
