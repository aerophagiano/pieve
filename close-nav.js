document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
  var navbarCollapse = document.querySelector('.navbar-collapse');
  
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      
      // Only handle anchor links that start with #
      if (href && href.startsWith('#') && navbarCollapse.classList.contains('show')) {
        e.preventDefault(); // Prevent default scroll behavior
        
        var targetId = href.substring(1);
        var targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // First collapse the navbar
          var bsCollapse = new bootstrap.Collapse(navbarCollapse);
          
          // Listen for when the collapse animation is complete
          navbarCollapse.addEventListener('hidden.bs.collapse', function scrollToTarget() {
            // Remove the event listener to avoid multiple triggers
            navbarCollapse.removeEventListener('hidden.bs.collapse', scrollToTarget);
            
            // Now scroll to the target element
            targetElement.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          });
          
          // Start the collapse
          bsCollapse.hide();
        }
      }
    });
  });
});