console.clear();

gsap.registerPlugin(Draggable, InertiaPlugin);

const cardsContainer = document.querySelector(".cards");
const cards = gsap.utils.toArray(".card");
const snapPoints = cards.map((card, i) => -(card.clientWidth + 50) * i);
const mySnap = gsap.utils.snap(snapPoints);

window.addEventListener("load", () => {
  Draggable.create(cardsContainer, {
    type: "x",
    bounds: {
      maxX: 0,
      minX: window.innerWidth - cardsContainer.scrollWidth - 50
    },
    onDrag: function () {
      direction = this.deltaX;
    },
    inertia: true,
    snap: {
      x: function (v) {
        return mySnap(v);
      }
    }
  });
});
