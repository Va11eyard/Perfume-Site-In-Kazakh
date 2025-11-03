# Парфюмерия - Perfume Website

A modern, responsive perfume website built with HTML, CSS, and JavaScript, featuring Kazakh language content.

## Features

- 🌐 Fully responsive design (mobile, tablet, desktop)
- 🎨 Modern UI with smooth animations
- 📱 Mobile-friendly navigation with hamburger menu
- 🛍️ Product showcase with hover effects
- 📧 Contact form with validation
- ♿ Semantic HTML5 structure
- 🚀 Optimized for GitHub Pages
- 🔐 **Admin Panel** - Add, edit, and delete products with photos
- 💾 LocalStorage - Products persist in browser

## Live Demo

Visit the live site: [Your GitHub Pages URL]

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript
- Unsplash API for product images

## Project Structure

```
├── index.html          # Main HTML file
├── admin.html          # Admin panel for managing products
├── css/
│   ├── styles.css      # Main styles
│   └── admin.css       # Admin panel styles
├── js/
│   ├── main.js         # Main JavaScript functionality
│   └── admin.js        # Admin panel functionality
└── README.md           # This file
```

## Features Implemented

### Navigation
- Sticky navigation bar
- Smooth scroll to sections
- Active link highlighting
- Mobile hamburger menu

### Sections
- **Hero**: Eye-catching landing section with CTA
- **About**: Information about the perfume collection
- **Products**: Grid layout showcasing 6 perfumes
- **Contact**: Form with validation
- **Footer**: Copyright information

### Responsive Design
- Desktop: 1024px and above (3-column product grid)
- Tablet: 768px - 1023px (2-column product grid)
- Mobile: 320px - 767px (1-column product grid)

### Animations
- Fade-in animations on scroll
- Hover effects on products and buttons
- Smooth transitions throughout

## Deployment to GitHub Pages

1. Push this repository to GitHub
2. Go to repository Settings
3. Navigate to Pages section
4. Select main branch as source
5. Save and wait for deployment

## Admin Panel

Access the admin panel at `admin.html` to manage products:

### Features:
- ➕ **Add Products** - Create new perfume listings with name, description, price, and image URL
- ✏️ **Edit Products** - Update existing product information
- 🗑️ **Delete Products** - Remove products from the catalog
- 🔄 **Reset** - Restore default products
- 💾 **Auto-save** - All changes are saved to browser localStorage

### How to Use:
1. Open `admin.html` in your browser
2. Fill in the product form:
   - Product name (in Kazakh)
   - Description
   - Price in Tenge (₸)
   - Image URL (use Unsplash or any image hosting)
3. Click "Қосу" (Add) to create a new product
4. Use Edit/Delete buttons on existing products to manage them
5. Changes appear immediately on the main site

### Image URLs:
You can use free images from:
- **Unsplash**: `https://images.unsplash.com/photo-[ID]?w=400&h=400&fit=crop`
- **Pexels**: `https://images.pexels.com/photos/[ID]/...`
- Any direct image URL

## Local Development

Simply open `index.html` in your browser. No build process required!

To manage products, open `admin.html` in your browser.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Парфюмерия. All rights reserved.
