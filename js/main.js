const setBackgroundImage = () => {
  const bgContainer = document.querySelector('.root');
  const width = window.innerWidth;

  if (width <= 600) {
    bgContainer.style.backgroundImage = `url('../images/home/background-home-mobile.jpg')`;
  } else if (width > 600 && width <= 1200) {
    bgContainer.style.backgroundImage = `url('../images/home/background-home-tablet.jpg')`;
  } else {
    bgContainer.style.backgroundImage = `url('../images/home/background-home-desktop.jpg')`;
  }
}

// Initial call
setBackgroundImage();

// Call on resize
window.addEventListener('resize', setBackgroundImage);