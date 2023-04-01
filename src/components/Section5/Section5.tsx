import { Categories, CategoryMenu } from "../../constants";
import style from "./Section5.module.css";

function Section5() {
  return (
    <section className={style.section5_container}>
      <div>
        <div className={style.section5_row1}>
          <h2>Browse our Popular Courses</h2>
          <p>
            High-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
        </div>
        <div className={style.section5_cat}>
          <ul className={style.section5_catList}>
            {CategoryMenu.map((catmenu) => (
              <li key={catmenu.id}>
                <a href={`#${catmenu.id}`}>{catmenu.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.section5_content}>
          <div className={style.section5_cards}>
            {Categories.map((cat) => (
              <div key={cat.banner} className={style.section5_singlecard}>
                <img src={cat.banner} alt={cat.h2} width="100%" />
                <div className={style.section5_miniflex}>
                  <a href="/" role={"button"}>
                    {cat.button}
                  </a>
                  <span className={style.section5_span1}>
                    {cat.rateno}
                    &nbsp;
                    <img src={cat.rateicon} alt={"rating icon"} />
                    &nbsp;
                    {cat.rating}
                  </span>
                </div>
                <h3>{cat.h2}</h3>
                <div className={style.section5_miniflex}>
                  <span className={style.section5_span2}>
                    <img src={cat.timeicon} alt="clock" />
                    {cat.time}
                  </span>
                  <span className={style.section5_span2}>
                    <img src={cat.bookicon} alt="clock" />
                    {cat.lessons}
                  </span>
                </div>
                <div className={style.section5_miniflex}>
                  <div className={style.section5_authorinfo}>
                    <img src={cat.authorimage} alt={cat.author} />
                    <h4>{cat.author}</h4>
                  </div>
                  <div className={style.section5_authorinfo}>
                    <span>{cat.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={style.section5_lastbtn}>
            <a href="/" role={'button'}>
              Explore all courses
            </a>
          </div>
      </div>
    </section>
  );
}

export default Section5;
