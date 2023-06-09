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

  function handleMenuClick() {
    setToggle(!toggle);
  }

  function handleLinkClick() {
    setToggle(false);
  }

  return (
    <nav style={navStyles}>
      <img src={techtime} alt={"techtime logo"} />
      {/*Desktop Menu */}
      <ul className={style.main_nav}>
        {navList.map((navLists, index) => (
          <li
            key={navLists.id}
            className={`${
              index === navList.length - 1 ? style.main_mr_0 : style.main_mr_10
            }`}
          >
            <a
              href={`#${navLists.id}`}
              className={`${
                active === navLists.title ? style.textWhite : style.dimWhite
              }`}
            >
              {navLists.title}
            </a>
          </li>
        ))}
      </ul>

      {/*Mobile Harmbuger Menu */}
      <div className={style.main_navmobile}>
        <img
          src={toggle ? close : menu}
          alt="menu"
          onClick={handleMenuClick}
        />

        <div
          className={`${
            !toggle ? style.main_navmobile_hidden : style.main_navmobile_flex
          } ${style.main_navmobile_1} ${style.sidebar}`}
        >
          <ul>
            {navList.map((navLists, index) => (
              <li
                key={navLists.id}
                className={` ${
                  index === navList.length - 1 ? style.mb_0 : style.mb_4
                }`}
                onClick={() => {
                  setActive(navLists.title);
                  handleLinkClick();
                }}
              >
                <a
                  href={`#${navLists.id}`}
                  className={`${
                    active === navLists.title ? style.textWhite : style.dimWhite
                  }`}
                >
                  {navLists.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
