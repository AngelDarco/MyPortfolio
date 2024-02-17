const intersectionObserver = {
  /**
   * @param container: HTMLElement
   * @param fn: (isIntersecting: boolean) => void
   */
  observer: (container, fn) => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    };
    const obv = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        fn(entry.isIntersecting);
      });
    }, options);
    obv.observe(container);
    return obv;
  },

  unmount: (observer, obv) => {
    obv.unobserve(observer);
  }
};
export default intersectionObserver;