document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mobileMenuContent = document.getElementById('mobileMenuContent');
    const navbarContainer = document.querySelector('.navbar');

    hamburgerMenu.addEventListener('click', function() {
        // Toggle 'active' class on hamburger icon for animation
        hamburgerMenu.classList.toggle('active');
        // Toggle 'menu-open' on container to control visibility of the mobile menu content
        navbarContainer.classList.toggle('menu-open');
    });

    // Close menu if a link is clicked (for better mobile UX)
    // Now querying links within the mobileMenuContent
    mobileMenuContent.querySelectorAll('.navbar-links-mobile a').forEach(link => {
        link.addEventListener('click', () => {
            if (navbarContainer.classList.contains('menu-open')) {
                hamburgerMenu.classList.remove('active');
                navbarContainer.classList.remove('menu-open');
            }
        });
    });
});

    document.getElementById("bookingForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent actual form submission

      // Basic validation (already handled by "required" but here’s for control)
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
      const service = document.getElementById("service").value;

      if (name && email && date && time && service) {
        // Simulate form submission (you could store locally or call an API)
        document.getElementById("successMessage").style.display = "block";

        // Reset form after a short delay
        setTimeout(() => {
          document.getElementById("bookingForm").reset();
          successMessage.style.display ="none";
        }, 1000);
      }
    });