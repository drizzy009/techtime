import {
  claretta,
  map,
  person,
  person_1,
  person_10,
  person_11,
  person_12,
  person_2,
  person_3,
  person_8,
  person_9,
} from "../../assets";
import style from "./Community.module.css";

function Community() {
  return (
    <section className={style.community_container}>
      <div className={style.community_topic}>
        <span aria-hidden="true" aria-label="Join our community">
          Join our community
        </span>
        <h2>
          Are you ready to connect with the future talent of the tech world
        </h2>
        <p>Meet up with other techstars and grow together</p>
      </div>
      <div className={style.community_map}>
        <img src={map} alt="community user map" />
      </div>
      <div className={style.community_users}>
        <img src={person_3} alt="" />
        <img src={person_2} alt="" />
        <img src={person_10} alt="" />
        <img src={person_12} alt="" />
        <img src={person_9} alt="" />
        <img src={claretta} alt="" />
        <img src={person} alt="" />
        <img src={person_11} alt="" />
        <img src={person_8} alt="" />
        <img src={person_1} alt="" />
      </div>
      <div className={style.community_btn}>
      <a href="/" type="button">Join our community</a>
      </div>
    </section>
  );
}

export default Community;
