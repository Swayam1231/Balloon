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