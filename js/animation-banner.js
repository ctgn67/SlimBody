document.addEventListener("DOMContentLoaded", () => {

  const images = [
    "assets/1.png",
    "assets/2.png",
    "assets/3.png"
  ];

  let index = 0;
  const banner = document.querySelector(".banner");

  if (!banner) {
    console.error("Banner element not found.");
    return;
  }

  // Change background image with a smooth fade
  function changeImage() {
    banner.style.opacity = "0";
    setTimeout(() => {
      banner.style.backgroundImage = `url('${images[index]}')`;
      banner.style.backgroundSize = "cover";
      banner.style.backgroundPosition = "center";
      index = (index + 1) % images.length;
      banner.style.opacity = "1";
    }, 400);
  }

  // Initialize and change every 5 seconds
  changeImage();
  setInterval(changeImage, 5000);
});

