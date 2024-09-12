// Select the balloon and town elements
const balloon = document.getElementById('balloon');

// Event listener for mouse movement
document.addEventListener('mousemove', function (e) {
  // Update balloon position to track the cursor
  balloon.style.left = e.pageX + 'px';
  balloon.style.top = e.pageY + 'px';

  // Change background based on cursor position
  // Example: switch to night if the cursor moves to the right half of the screen
  // if (e.pageX > window.innerWidth / 2) {
  //   town.classList.add('night');
  // } else {
  //   town.classList.remove('night');
  // }
});

let lastScrollX = 0;
      const navbar = document.querySelector("nav");
      window.addEventListener("scroll", () => {
        const curScrollX = window.scrollX;
        if (curScrollX > lastScrollX) {
          console.log("right scroll");
          navbar.classList.add("hidden");
        } else {
          console.log("scroll left");
          navbar.classList.remove("hidden");
        }
        lastScrollX = curScrollX;
      });