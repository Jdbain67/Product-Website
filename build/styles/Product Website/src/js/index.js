// Nav Toggle Button Control
// Purpose: Hide and show mobile navigation menu
//
// 1. Assign the navigation toggle button to "navToggle" variable
// 2. Assign the navigation content div to "navContent" variable
// 3. "toggle" function to hide/show the navigation content
// 4. Add click listener to navToggle to call toggle() on navContent when navToggle is clicked

(function buttonControlInit() {
  const navToggle = document.querySelector("#nav_toggle");
  const navContent = document.querySelector("#nav_content");

  function toggleNav() {
    navContent.classList.toggle("hidden");
  }

  navToggle.addEventListener("click", toggleNav);


  const detailsArray = document.querySelectorAll("details");

  function toggleDetails(e) {
    e.target.classList.toggle("open");
  }
  detailsArray.forEach((el) => el.addEventListener("toggle", toggleDetails));
})();
