import React, { useState, useRef, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import styles from "./Faq.module.css";

function Faq() {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const contentRef1 = useRef<HTMLDivElement | null>(null);
  const contentRef2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = active
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [contentRef, active]);

  useEffect(() => {
    if (contentRef1.current) {
      contentRef1.current.style.maxHeight = active1
        ? `${contentRef1.current.scrollHeight}px`
        : "0px";
    }
  }, [contentRef1, active1]);

  useEffect(() => {
    if (contentRef2.current) {
      contentRef2.current.style.maxHeight = active2
        ? `${contentRef2.current.scrollHeight}px`
        : "0px";
    }
  }, [contentRef2, active2]);

  const toggleAccordion = () => {
    setActive(!active);
    setActive1(false);
    setActive2(false);
  };

  const toggleAccordion1 = () => {
    setActive(false);
    setActive1(!active1);
    setActive2(false);
  };

  const toggleAccordion2 = () => {
    setActive(false);
    setActive1(false);
    setActive2(!active2);
  };

  return (
    <section className={styles.faq_container}>
      <div className={styles.faq_flexbox}>
        <button
          className={`${styles.question_section} ${active}`}
          onClick={toggleAccordion}
          type='button'
        >
          <div>
            <div className={styles.question_align}>
              <h4 className={styles.question_style}>
              Is there a free trial available?
              </h4>
              <FiPlus
                className={
                  active
                    ? `${styles.question_icon} ${styles.rotate}`
                    : `${styles.question_icon}`
                }
              />
            </div>
            <div
              ref={contentRef}
              className={
                active
                  ? `${styles.answer} ${styles.answer_divider}`
                  : `${styles.answer}`
              }
            >
              <p>High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. </p>
            </div>
          </div>
        </button>

        <button
          className={`${styles.question_section} ${active1}`}
          onClick={toggleAccordion1}
          type='button'
        >
          <div>
            <div className={styles.question_align}>
              <h4 className={styles.question_style}>
                What is your favorite programming language?
              </h4>
              <FiPlus
                className={
                  active1
                    ? `${styles.question_icon} ${styles.rotate}`
                    : `${styles.question_icon}`
                }
              />
            </div>
            <div
              ref={contentRef1}
              className={
                active1
                  ? `${styles.answer} ${styles.answer_divider}`
                  : `${styles.answer}`
              }
            >
              <p>My favorite programming language is JavaScript.</p>
            </div>
          </div>
        </button>

        <button
          className={`${styles.question_section} ${active2}`}
          onClick={toggleAccordion2}
          type='button'
        >
          <div>
            <div className={styles.question_align}>
              <h4 className={styles.question_style}>
                What is your favorite framework or library?
              </h4>
              <FiPlus
                className={
                  active2
                    ? `${styles.question_icon} ${styles.rotate}`
                    : `${styles.question_icon}`
                }
              />
            </div>
            <div
              ref={contentRef2}
              className={
                active2
                  ? `${styles.answer} ${styles.answer_divider}`
                  : `${styles.answer}`
              }
            >
              <p>My favorite programming language is JavaScript.</p>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}

export default Faq;
