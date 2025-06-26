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
        document.getElementById("successMessage").style.display = "grid";

        // Reset form after a short delay
        setTimeout(() => {
          document.getElementById("bookingForm").reset();
          successMessage.style.display ="none";
        }, 1000);
      }
    });

    const modal = document.getElementById("imageModal");
    const slider = document.getElementById("slider");

  const imageSets = {
    1: ["/fur/Living 3.jpeg", "/fur/Living 2.jpeg", "/fur/Living 1.jpeg", "/fur/Living 4.jpeg"],
    2: ["/fur/Kitchen 7.jpeg", "/fur/Kitchen 2.jpeg", "/fur/Kitchen 5.jpeg", "/fur/Kitchen 6.jpeg"],
    3: ["/fur/bed 4.jpeg", "/fur/bedroom 1.jpeg", "/fur/bed 5.jpeg", "/fur/Bedroom 3.jpeg"],
    4: ["/fur/Outdoor 1.jpeg", "/fur/Outdoor 2.jpeg", "/fur/Outdoor 3.jpeg", "/fur/Outdoor 4.jpeg"],
    5: ["/fur/House 1.jpeg", "/fur/House 2.jpeg", "/fur/House 3.jpeg", "/fur/House 6.jpeg"],
  };

  let currentIndex = 0;
  let interval;

  document.querySelectorAll(".category[data-set]").forEach(cat => {
    cat.addEventListener("click", () => {
      const setId = cat.dataset.set;
      openModal(setId);
    });
  });

  function openModal(setId) {
    const images = imageSets[setId];
    slider.innerHTML = ""; // clear previous
    images.forEach(src => {
      const div = document.createElement("div");
      div.className = "slide";
      div.innerHTML = `<img src="${src}" alt="Slide">`;
      slider.appendChild(div);
    });

    modal.style.display = "block";
    currentIndex = 0;
    showSlide(currentIndex);

    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      showSlide(currentIndex);
    }, 3000);
  }

  function closeModal() {
    modal.style.display = "none";
    clearInterval(interval);
  }

  function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  // Optional: Close modal on outside click
  window.addEventListener("click", e => {
    if (e.target === modal) closeModal();
  });