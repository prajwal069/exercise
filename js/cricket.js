// Smooth Scroll Effect for Navigation Links
document.querySelectorAll('.main-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop - 60, // Adjust for navbar height
        behavior: 'smooth'
      });
    });
  });
  
  // Animation on Page Load for one Section
  window.addEventListener('load', () => {
    const heroOverlay = document.querySelector('.hero-overlay');
    heroOverlay.classList.add('fade-in');
  });
  
  // Add fade-in class to the one overlay after page load
  // This ensures the one section text is animated when the page loads
  setTimeout(() => {
    const heroOverlay = document.querySelector('.hero-overlay');
    heroOverlay.style.transition = 'opacity 2s ease-in-out';
    heroOverlay.style.opacity = 1;
  }, 1000);  // Delay to make sure the page is fully loaded
  