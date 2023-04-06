import {
  hero_image,
  person0,
  person00,
  person_3,
  person_8,
  person_9,
} from "../../assets";
import style from "../Hero/Hero.module.css";
import Nav from "./../Navbar/Nav";

function Hero() {
  return (
    <div className={style.hero_background}>
      <Nav />
      <div className={style.hero_flex}>
        <div className={style.hero_content}>
          <h1>Grow your skills to advance your career path </h1>
          <p>
            Build your future with our quality education. the best and largest
            all-in-one online tutoring platform in the world
          </p>
          <div className={style.hero_btn}>
            <a href="/" role={"button"}>
              Get Started Now
            </a>
            <a href="/" role={"button"}>
              Enroll Now
            </a>
          </div>
          <div className={style.hero_users_container}>
            <div className={style.hero_users}>
              <img src={person_3} alt="User 1" />
              <img src={person00} alt="User 2" />
              <img src={person0} alt="User 3" />
              <img src={person_8} alt="User 4" />
              <img src={person_9} alt="User 5" />
            </div>
            <h2>
              255k+
              <br />
              <span>Previews</span>
            </h2>
          </div>
        </div>
        <div className={style.hero_banner}>
          <img src={hero_image} alt={"happy girl"} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
