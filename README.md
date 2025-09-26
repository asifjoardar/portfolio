# Portfolio Website

A modern, responsive portfolio website built with React and TypeScript, showcasing skills, projects, and professional experience as a software engineer.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Components**: Dynamic project filtering, contact form, and navigation
- **TypeScript**: Type-safe development with full TypeScript support
- **Performance Optimized**: Fast loading with optimized assets and code splitting
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with custom properties (CSS variables)
- **Icons**: Custom SVG icons
- **Deployment Ready**: Optimized build for production deployment

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero/landing section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills and technologies
│   ├── Projects.tsx     # Projects showcase
│   ├── Experience.tsx   # Work experience and education
│   ├── Contact.tsx      # Contact form and info
│   ├── Footer.tsx       # Footer component
│   └── *.css           # Component styles
├── styles/             # Global styles
│   ├── index.css       # Global styles and CSS variables
│   └── App.css         # App component styles
├── App.tsx             # Main app component
└── main.tsx           # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (or download the files)
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Customization

### Personal Information

1. **Update personal details** in the following components:
   - `src/components/Hero.tsx` - Name, title, description
   - `src/components/About.tsx` - About text, stats, photo
   - `src/components/Contact.tsx` - Contact information
   - `src/components/Footer.tsx` - Footer details

2. **Update skills** in `src/components/Skills.tsx`:
   - Modify the `skills` array to reflect your technologies
   - Adjust skill levels and categories

3. **Add your projects** in `src/components/Projects.tsx`:
   - Update the `projects` array with your actual projects
   - Add project images, descriptions, and links

4. **Update experience** in `src/components/Experience.tsx`:
   - Modify work experience and education details
   - Update company names, positions, and descriptions

### Styling

- **Colors**: Update CSS variables in `src/styles/index.css`
- **Typography**: Modify font families and sizes in the same file
- **Layout**: Adjust component-specific styles in individual `.css` files

### Social Links

Update social media links in:
- `src/components/Hero.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

## Deployment

### Build for Production

```bash
npm run build
```

The `dist` folder contains the production-ready files.

### Deployment Options

- **Netlify**: Drag and drop the `dist` folder or connect your Git repository
- **Vercel**: Connect your Git repository for automatic deployments
- **GitHub Pages**: Use GitHub Actions to deploy the `dist` folder
- **Traditional Hosting**: Upload the `dist` folder contents to your web server

### Environment Variables

For production deployment, you may want to add:
- Contact form backend API endpoints
- Analytics tracking IDs
- Social media URLs

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse score: 90+ across all categories
- Fast loading with optimized assets
- Responsive images and lazy loading
- Efficient CSS and JavaScript bundles

## Contributing

This is a personal portfolio template. Feel free to:
- Fork and customize for your own use
- Submit issues for bugs or improvements
- Create pull requests for enhancements

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub Profile](https://github.com/yourusername)

---

**Note**: Remember to replace placeholder content with your actual information, add your real projects, update social links, and customize the design to match your personal brand.