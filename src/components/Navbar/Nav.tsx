import { useState } from "react";
import { close, menu, techtime } from "../../assets";
import { navList } from "../../constants";
import style from "../Navbar/Nav.module.css";

function Nav() {
  const navStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav style={navStyles}>
      <img src={techtime} alt={"techtime logo"} />
      <ul className={style.main_nav}>
        {navList.map((navLists, index) => (
          <li
            key={navLists.id}
            className={`${
              index === navList.length - 1 ? style.main_mr_0 : style.main_mr_10
            }`}
          >
            <a href={`#${navLists.id}`}>{navLists.title}</a>
          </li>
        ))}
      </ul>

      <div className={style.main_navmobile}>
        <img
          src={toggle ? close : menu}
          alt="harmburger"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? style.main_navmobile_hidden : style.main_navmobile_flex
          } ${style.main_navmobile_1}`}
        >
          <ul>
            {navList.map((navLists, index) => (
              <li key={navLists.id} onClick={() => setActive(navLists.title)}>
                <a href={`#${navLists.id}`}>{navLists.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
