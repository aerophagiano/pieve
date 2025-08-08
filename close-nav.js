  
  console.log("✅ close-nav.js loaded");
debugger;
  
  document.addEventListener("DOMContentLoaded", function () {

    var navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        // Only collapse if navbar is currently shown
        if (navbarCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navbarCollapse).toggle();
        }
      });
    });
  });