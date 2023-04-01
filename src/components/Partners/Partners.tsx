import { partners } from "../../constants";

import style from "../Partners/Partners.module.css";

function Partners() {
  return (
    <section className={style.partners_section}>
      <div className={style.partners_container}>
        {partners.map((partner) => (
          <div key={partner.id}>
            <a href={partner.id}>
              <img src={partner.logo} alt={partner.alt} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Partners;
