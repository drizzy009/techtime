import {
  unsplash_1,
  unsplash_6,
} from "../../assets";
import style from "../Section3/Section3.module.css";

function Section3() {
  return (
    <section className={style.section3_container}>
      <div className={style.section3_flexbox}>
        <div className={style.section3_col1}>
          <h2>High quality video, audio & live classes</h2>
          <p>
            High-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
          <a href="/courses" role={"button"} className={style.section3_btn}>
            View Courses
          </a>
          <div className={style.section3_mini}>
            <div className={style.section3_griditem}>
              <a href="/" role={"button"}>
                Audio Classes
              </a>
            </div>
            <div className={style.section3_griditem}>
              <a href="/" role={"button"}>
                Live Classes
              </a>
            </div>
            <div className={style.section3_griditem}>
              <a href="/" role={"button"}>
                Recorded Classes
              </a>
            </div>
            <div className={style.section3_griditem}>
              <a href="/" role={"button"}>
                50+ Notes
              </a>
            </div>
          </div>
        </div>
        <div className={style.section3_col2}>
          <div className={style.section3_img1}>
            <img src={unsplash_1} alt="Subscriber Learning" />
          </div>
          <div className={style.section3_img2}>
            <img src={unsplash_6} alt="Subscriber  Learning" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
