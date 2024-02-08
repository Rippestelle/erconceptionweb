type Tilt = {
  card: string;
};

export const tiltElement = (options: Tilt) => {
  let counter = 0;
  document.querySelectorAll(".services__item").forEach((element) => {
    if (element == element) {
      counter += 1;
    }
  });

  let cards = document.querySelectorAll(options.card);

  for (const card of cards) {
    let mouseHover = false;
    let mousePosition = { x: 0, y: 0 };
    let cardSize = { width: 0, height: 0 };
    let SCALE_X = 4;
    let SCALE_Y = 8;

    card.onblur = function () {
      mouseHover = false;
    };

    card.onfocus = function () {
      mouseHover = true;
    };

    card.onmousemove = function (e) {
      if (!mouseHover) return;
      let rect = card.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      mousePosition = { x, y };
      cardSize = {
        width: card.offsetWidth || 0,
        height: card.offsetHeight || 0,
      };
      card.style.transform = `perspective(1000px) rotateX(${
        (mousePosition.y / cardSize.height) * -(SCALE_Y * 2) + SCALE_Y
      }deg) rotateY(${
        (mousePosition.x / cardSize.width) * (SCALE_X * 2) - SCALE_X
      }deg) translateZ(10px)`;
    };

    card.onmouseout = function () {
      mouseHover = false;
      card.style.transform =
        "perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    };

    card.onmouseover = function () {
      mouseHover = true;
    };
  }
};
