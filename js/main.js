// utility function to help with debouncing
const debounce = (func, wait) => {
  let timeout;
  return function(...args) {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(this, args);
    }
    , wait);
  }
}

// utility function to set the background image based on the screen width
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

// Set the debounce delay
const debounceDelay = 200;

// Create a debounced version of the setBackgroundImage function
const debouncedSetBackgroundImage = debounce(setBackgroundImage, debounceDelay);

// Initial call
setBackgroundImage();

// Call on resize
window.addEventListener('resize', debouncedSetBackgroundImage);