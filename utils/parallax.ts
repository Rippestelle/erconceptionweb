import gsap from 'gsap';

type Parallax = {
    container: string
}

export const moveElements = (options: Parallax) => {
  let container = document.querySelector(options.container);
  let rect = container.getBoundingClientRect();

  // Initialize mouse object with initial values
  let mouse = { x: 0, y: 0, moved: false, leave: false };

  // Add mousemove event listener to the container
  container.addEventListener("mousemove", function (e) {
    mouse.moved = true;
    mouse.leave = false;
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  container.addEventListener("mouseleave", function (e) {
    mouse.moved = true;
    mouse.leave = true;
  });

  // Ticker event will be called on every frame
  gsap.ticker.add(function () {
    if (mouse.moved) {
      const parallaxEl = container.querySelectorAll("[data-parallax]");
      parallaxEl.forEach((element) => {
        const paraValue = mouse.leave ? 0 : element.dataset.parallax;
        const easing = mouse.leave ? "elastic.out" : "power2";
        const speed = mouse.leave ? 1 : 0.5;
        parallaxIt(element, paraValue, speed, easing);
      });
    }
    mouse.moved = false;
  });

  // Function to apply parallax effect to target elements
  function parallaxIt(target, movement, speed, easing) {
    gsap.to(target, {
      duration: speed,
      ease: easing,
      x: ((mouse.x - rect.width / 2) / rect.width) * movement,
      y: ((mouse.y - rect.height / 2) / rect.height) * movement,
    });
  }

  // Add resize and scroll event listeners to the window
  window.addEventListener("resize", updateRect);
  window.addEventListener("scroll", updateRect);

  // Function to update the container's bounding rectangle on resize and scroll
  function updateRect() {
    rect = container.getBoundingClientRect();
  }
};
