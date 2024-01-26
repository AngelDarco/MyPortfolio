import { useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";

const GoUp = ({ reference, container }) => {
  const [show, setShow] = useState(true);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  const observer = new IntersectionObserver((e) => {
    setShow(e[0].isIntersecting);
  }, options);
  reference && observer.observe(reference);

  const scrollToTop = () => {
    if (container) container.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={styles.container}>
      <div style={styles.body}>
        {!show && (
          <BsArrowUpCircle onClick={scrollToTop} style={styles.arrow} />
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "10vh",
    position: "fixed",
    top: "90%",
    zIndex: "200",
  },
  body: {
    borderRadius: "50%",
    color: "var(--text-color)",
    fontSize: "2.5rem",
    padding: "0 5%",
  },
};

export default GoUp;
