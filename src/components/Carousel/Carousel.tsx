import { useState, useEffect } from "react";
import { Carousel } from "antd";
import { _Carousel } from "../../constants";
import style from "./Carousel.module.css";

function Carousl() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.outerWidth > 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Carousel
        style={{ width: "100%" }}
        pauseOnHover={true}
        draggable
        slidesToShow={slidesToShow}
        dots
      >
        {_Carousel.map((carousel) => (
          <div key={carousel.key}>
            <div className={style.carousel_row}>
              <p>{carousel.testimonial}</p>
              <div className={style.carousel_flexbox}>
                <img src={carousel.img} alt={carousel.name} />
                <div className={style.carousel_user}>
                  <h4 aria-label={`${carousel.name}'s Testimonial`}>
                    {carousel.name}
                  </h4>
                  <span aria-label={`${carousel.name}'s Job Role`}>
                    {carousel.job}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default Carousl;
