let currentImageIndex = 0;
let images = [];

document.addEventListener("DOMContentLoaded", () => {
  images = Array.from(document.querySelectorAll(".gallery-item"));
});

function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightbox.style.display = "flex";
  lightboxImg.src = img.src;
  currentImageIndex = images.indexOf(img);
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) currentImageIndex = images.length - 1;
  if (currentImageIndex >= images.length) currentImageIndex = 0;
  document.getElementById("lightbox-img").src = images[currentImageIndex].src;
}

function filterImages(category) {
  const allImages = document.querySelectorAll(".gallery-item");
  allImages.forEach(img => {
    img.style.display = (category === "all" || img.classList.contains(category)) ? "block" : "none";
  });
}
