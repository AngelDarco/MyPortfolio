class resizeObeserver {
  observer(container, fn) {
    if (container)
      container.addEventListener("resize", (e) => {
        const { innerWidth } = e.target;
        fn(innerWidth);
      });
  }
  unmount(container, fn) {
    if (container) container.removeEventListener("resize", fn);
  }
}

export default resizeObeserver;
