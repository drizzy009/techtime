import style from "./Footer.module.css";
import { discord, fb, insta, techtime, twitter, youtube } from "../../assets";
import { footerLinks } from "../../constants";

function Footer() {
  return (
    <footer className={style.footer_container}>
      <div className={style.footer_flexbox}>
        <div className={style.footer_col1}>
          <a href="/">
            <img src={techtime} alt="Techtime Logo" />
          </a>
          <p>Reach out to us on any of our social media networks</p>
          <div className={style.footer_miniflex}>
            <img src={fb} alt="Facebook Logo" />
            <img src={twitter} alt="Twitter Logo" />
            <img src={youtube} alt="Youtube Logo" />
            <img src={insta} alt="Instagram Logo" />
            <img src={discord} alt="Discord Logo" />
          </div>
        </div>
        <div className={style.footer_col2}>
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className={style.footer_col2_child}>
              <h4>{footerlink.title}</h4>
              <ul>
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`${
                      index !== footerlink.links.length - 1
                        ? style.mb_4
                        : style.mb_0
                    }`}
                  >
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={style.footer_col3}>
          <h3>Subscribe to us</h3>
          <form>
            <label htmlFor="email"></label>
            <input type="email" placeholder="idris.dev0x@gmail.com" name="email" id="email" required />
            <button type="button">Send Message</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
