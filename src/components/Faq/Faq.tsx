import React, { useState, useRef, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import styles from "./Faq.module.css";

function Faq() {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const contentRef1 = useRef<HTMLDivElement | null>(null);
  const contentRef2 = useRef<HTMLDivElement | null>(null);
  const contentRef3 = useRef<HTMLDivElement | null>(null);
  const contentRef4 = useRef<HTMLDivElement | null>(null);
  const contentRef5 = useRef<HTMLDivElement | null>(null);

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
  useEffect(() => {
    if (contentRef3.current) {
      contentRef3.current.style.maxHeight = active3
        ? `${contentRef3.current.scrollHeight}px`
        : "0px";
    }
  }, [contentRef3, active3]);
  useEffect(() => {
    if (contentRef4.current) {
      contentRef4.current.style.maxHeight = active4
        ? `${contentRef4.current.scrollHeight}px`
        : "0px";
    }
  }, [contentRef4, active4]);
  useEffect(() => {
    if (contentRef5.current) {
      contentRef5.current.style.maxHeight = active5
        ? `${contentRef5.current.scrollHeight}px`
        : "0px";
    }
  }, [contentRef5, active5]);

  const toggleAccordion = () => {
    setActive(!active);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
  };

  const toggleAccordion1 = () => {
    setActive(false);
    setActive1(!active1);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
  };

  const toggleAccordion2 = () => {
    setActive(false);
    setActive1(false);
    setActive2(!active2);
    setActive3(false);
    setActive4(false);
    setActive5(false);
  };
  const toggleAccordion3 = () => {
    setActive(false);
    setActive1(false);
    setActive2(false);
    setActive3(!active3);
    setActive4(false);
    setActive5(false);
  };
  const toggleAccordion4 = () => {
    setActive(false);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(!active4);
    setActive5(false);
  };
  const toggleAccordion5 = () => {
    setActive(false);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(!active5);
  };

  return (
    <section className={styles.faq_container}>
      <div className={styles.faq_flexbox}>
        <button
          className={`${styles.question_section} ${active}`}
          onClick={toggleAccordion}
          type="button"
        >
          <div>
            <div className={styles.question_align}>
              <h4
                className={
                  active
                    ? `${styles.question_styling}`
                    : `${styles.question_style}`
                }
              >
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
              <p>
                High-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition. hbuild
                your future with our quality education. the best and largest
                all-in-one online tutoring platform in the worldd definition.
              </p>
            </div>
          </div>
        </button>

        <button
          className={`${styles.question_section} ${active1}`}
          onClick={toggleAccordion1}
          type="button"
        >
          <div>
            <div className={styles.question_align}>
              <h4
                className={
                  active1
                    ? `${styles.question_styling}`
                    : `${styles.question_style}`
                }
              >
                Can i change my plan later?
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
              <p>
                High-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition. hbuild
                your future with our quality education. the best and largest
                all-in-one online tutoring platform in the worldd definition.
              </p>
            </div>
          </div>
        </button>

        <button
          className={`${styles.question_section} ${active2}`}
          onClick={toggleAccordion2}
          type="button"
        >
          <div>
            <div className={styles.question_align}>
              <h4
                className={
                  active2
                    ? `${styles.question_styling}`
                    : `${styles.question_style}`
                }
              >
                Are the courses lifetime?
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
              <p>
                High-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition. hbuild
                your future with our quality education. the best and largest
                all-in-one online tutoring platform in the worldd definition.
              </p>
            </div>
          </div>
        </button>
        <button
          className={`${styles.question_section} ${active3}`}
          onClick={toggleAccordion3}
          type="button"
        >
          <div>
            <div className={styles.question_align}>
              <h4
                className={
                  active3
                    ? `${styles.question_styling}`
                    : `${styles.question_style}`
                }
              >
                Do i get certified after taking courses?
              </h4>
              <FiPlus
                className={
                  active3
                    ? `${styles.question_icon} ${styles.rotate}`
                    : `${styles.question_icon}`
                }
              />
            </div>
            <div
              ref={contentRef3}
              className={
                active3
                  ? `${styles.answer} ${styles.answer_divider}`
                  : `${styles.answer}`
              }
            >
              <p>
                High-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition. hbuild
                your future with our quality education. the best and largest
                all-in-one online tutoring platform in the worldd definition.
              </p>
            </div>
          </div>
        </button>
        <button
          className={`${styles.question_section} ${active4}`}
          onClick={toggleAccordion4}
          type="button"
        >
          <div>
            <div className={styles.question_align}>
              <h4
                className={
                  active4
                    ? `${styles.question_styling}`
                    : `${styles.question_style}`
                }
              >
                How do I reach out to mentors?
              </h4>
              <FiPlus
                className={
                  active4
                    ? `${styles.question_icon} ${styles.rotate}`
                    : `${styles.question_icon}`
                }
              />
            </div>
            <div
              ref={contentRef4}
              className={
                active4
                  ? `${styles.answer} ${styles.answer_divider}`
                  : `${styles.answer}`
              }
            >
              <p>
                High-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition. hbuild
                your future with our quality education. the best and largest
                all-in-one online tutoring platform in the worldd definition.
              </p>
            </div>
          </div>
        </button>
        <button
          className={`${styles.question_section} ${active5}`}
          onClick={toggleAccordion5}
          type="button"
        >
          <div>
            <div className={styles.question_align}>
              <h4 className={active5
                    ? `${styles.question_styling}`
                    : `${styles.question_style}`}>
                Do we get job ready after taking courses?
              </h4>
              <FiPlus
                className={
                  active5
                    ? `${styles.question_icon} ${styles.rotate}`
                    : `${styles.question_icon}`
                }
              />
            </div>
            <div
              ref={contentRef5}
              className={
                active5
                  ? `${styles.answer} ${styles.answer_divider}`
                  : `${styles.answer}`
              }
            >
              <p>
                High-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition. hbuild
                your future with our quality education. the best and largest
                all-in-one online tutoring platform in the worldd definition.
              </p>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}

export default Faq;
