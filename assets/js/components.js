document.addEventListener('DOMContentLoaded', function() {
  // Load header component
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    const headerType = headerContainer.dataset.headerType || 'header';
    fetch(`/components/${headerType}.html`)
      .then(response => response.text())
      .then(html => {
        headerContainer.innerHTML = html;
        
        // Initialize mobile navigation after header is loaded
        initializeMobileNav();
      })
      .catch(error => {
        console.error('Error loading header:', error);
      });
  }
  
  // Load footer component
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    fetch('/components/footer.html')
      .then(response => response.text())
      .then(html => {
        footerContainer.innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading footer:', error);
      });
  }
});

// Function to initialize mobile navigation
function initializeMobileNav() {
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navbar = document.getElementById('navbar');
  
  if (mobileNavToggle && navbar) {
    mobileNavToggle.addEventListener('click', function() {
      navbar.classList.toggle('navbar-mobile');
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });
  }
} 