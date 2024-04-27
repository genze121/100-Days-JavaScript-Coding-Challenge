const tab = document.querySelector(".tabs");

const gallery = document.querySelectorAll(".images");

tab.addEventListener("click", e => {
  if (e.target.dataset.category !== undefined) {
    filterSearch(e.target.dataset.category);
  }
});

function filterSearch(category) {
  gallery.forEach(image => {
    if (image.dataset.category === category) {
      image.style.display = "block";
    } else if (category === "all") {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}
