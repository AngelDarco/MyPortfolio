export default function CarouselSlider(main) {
  const $ = (div) => main.querySelectorAll(div);
  const id = (id) => main.querySelector(id);

  const container = $(".carousel-item");
  if (container.length < 1) return;

  reset();
  container[0].classList.add("active");

  let current = 0;

  const rigth = id("#moveRight");

  if (rigth)
    rigth.addEventListener("click", function () {
      const next = current;
      current++;
      setSlide(next, current);
    });

  const left = id("#moveLeft");
  if (left)
    left.addEventListener("click", function () {
      const prev = current;
      current--;
      setSlide(prev, current);
    });

  function setSlide(prev, next) {
    const total = container.length - 1;
    let slide = current;

    if (next > total) {
      slide = 0;
      current = 0;
    }
    if (next < 0) {
      slide = total;
      current = total;
    }
    reset();
    container[slide].classList.add("active");
  }

  function reset() {
    container.forEach((slide) => {
      if (slide.classList.contains("active")) slide.classList.remove("active");
    });
  }
}
