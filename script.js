let numerObrazka = 1;
slajder();
function slajder() {
  const images = document.getElementsByClassName("auto-image");
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  numerObrazka++;
  if (numerObrazka > images.length) {
    numerObrazka = 1;
  }
  images[numerObrazka - 1].style.display = "block";
  setTimeout(slajder, 2500);
}
