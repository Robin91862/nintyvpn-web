let imageNumber = 1;
slider();
function slider() {
  const images = document.getElementsByClassName("auto-image");
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  imageNumber++;
  if (imageNumber > images.length) {
    imageNumber = 1;
  }
  images[imageNumber - 1].style.display = "block";
  setTimeout(slider, 2500);
}
