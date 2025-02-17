
const balloon = document.getElementById('balloon');

// Event listener for mouse movement
document.addEventListener('mousemove', function (e) {
  // Update balloon position to track the cursor
  balloon.style.left = e.pageX + 'px';
  balloon.style.top = e.pageY + 'px';
  
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

      document.addEventListener("DOMContentLoaded", function() {
        const boxes = document.querySelectorAll('.box');
        const content = document.querySelector('.content');
    
        // Function to check if two boxes overlap
        function isOverlapping(box1, box2) {
            const rect1 = box1.getBoundingClientRect();
            const rect2 = box2.getBoundingClientRect();
    
            return !(
                rect1.right < rect2.left ||
                rect1.left > rect2.right ||
                rect1.bottom < rect2.top ||
                rect1.top > rect2.bottom
            );
        }
    
        // Function to place boxes without overlapping
        function placeBoxes() {
            const placedBoxes = [];
    
            boxes.forEach(box => {
                let randomX, randomY;
                let overlap;
                const contentWidth = content.offsetWidth;
                const contentHeight = content.offsetHeight;
                const boxWidth = box.offsetWidth;
                const boxHeight = box.offsetHeight;
    
                do {
                    randomX = Math.floor(Math.random() * (contentWidth - boxWidth));
                    randomY = Math.floor(Math.random() * (contentHeight - boxHeight));
                    box.style.left = `${randomX}px`;
                    box.style.top = `${randomY}px`;
    
                    overlap = placedBoxes.some(placedBox => isOverlapping(box, placedBox));
                } while (overlap);
    
                placedBoxes.push(box);
            });
        }
    
        placeBoxes();
    });