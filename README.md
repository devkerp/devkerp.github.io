# StagerLabs Website

This is the repository for StagerLabs, a cybersecurity startup building AI-powered vulnerability research tools while providing expert Windows security consulting.

## About StagerLabs

StagerLabs is an innovative startup at the intersection of artificial intelligence and cybersecurity. Our flagship product, the AI Vulnerability Assistant, helps security researchers identify, analyze, and document software vulnerabilities with unprecedented efficiency.

## Website Structure

This website uses a simple component-based approach to reduce duplication:

### How It Works

1. **Shared Components**
   - `/components/header.html` - Transparent header for homepage
   - `/components/header-solid.html` - Solid header for other pages
   - `/components/footer.html` - Site footer

2. **Component Loading**
   - JavaScript loads components dynamically (`assets/js/components.js`)
   - Each page uses placeholder divs with IDs:
     ```html
     <div id="header-container" data-header-type="header"></div>
     <div id="footer-container"></div>
     ```

### Site Sections

1. **Home Page** - Overview of StagerLabs and our services
2. **AI Assistant** - Details about our flagship AI Vulnerability Assistant product
3. **About Us** - Information about our company and expertise
4. **Contact Us** - Get in touch with the StagerLabs team

### Modifying Components

To update site-wide elements:

1. **Change Header/Navigation**
   - Edit `/components/header.html` and `/components/header-solid.html`
   - Changes will appear on all pages

2. **Change Footer**
   - Edit `/components/footer.html`
   - Changes will appear on all pages

### Adding New Pages

When creating a new page:

1. Copy structure from an existing page
2. Include the component placeholders:
   ```html
   <div id="header-container" data-header-type="header-solid"></div>
   <!-- page content -->
   <div id="footer-container"></div>
   ```
3. Include the components.js script
4. Use absolute paths for assets (e.g., `/assets/css/style.css` not `../assets/css/style.css`)

## Asset Management

All assets (CSS, JavaScript, images) are stored in the central `/assets` directory in the root of the project. When referencing assets in HTML files, always use absolute paths starting with a forward slash:

```html
<!-- Correct -->
<link href="/assets/css/style.css" rel="stylesheet">
<script src="/assets/js/main.js"></script>

<!-- Incorrect -->
<link href="../assets/css/style.css" rel="stylesheet">
<script src="../assets/js/main.js"></script>
```

This ensures consistency across all pages regardless of their directory depth.

## Development

This site is designed to work with GitHub Pages. 