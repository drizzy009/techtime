import { Carousel } from "antd";
import { useRef } from "react";
import { _Carousel } from "../../constants";
import style from "./Carousel.module.css";


function Carousl() {
  
  
  return (
    <>
      <Carousel
        style={{width: '100%'}}
        pauseOnHover={true}
        draggable
        
        slidesToShow={3}
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
