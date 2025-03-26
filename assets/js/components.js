document.addEventListener('DOMContentLoaded', function() {
  // Load header component
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    const headerType = headerContainer.dataset.headerType || 'header';
    fetch(`/components/${headerType}.html`)
      .then(response => response.text())
      .then(html => {
        headerContainer.innerHTML = html;
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