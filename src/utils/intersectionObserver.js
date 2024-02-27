const intersectionObserver = {
  /**
   * @param container: HTMLElement
   * @param fn: (isIntersecting: boolean) => void
   */
  observer: (container, fn) => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3
    };
    const obv = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        fn(entry.isIntersecting);
      });
    }, options);
    obv.observe(container);
    return obv;
  },

  unmount: (container, observer) => {
    observer.unobserve(container);
  }
};
export default intersectionObserver;
