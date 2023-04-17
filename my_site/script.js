document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");
    const navList = document.getElementById("nav-list");
  
    navList.addEventListener("click", function (event) {
      if (event.target.classList.contains("nav-item")) {
        navItems.forEach(function (item) {
          item.classList.remove("active");
        });
        event.target.classList.add("active");
      }
    });
  });
  