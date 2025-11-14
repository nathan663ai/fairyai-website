# FairyAI Website

Modern, responsive marketing website for FairyAI - AI-powered bedtime stories for children.

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **GitHub Pages** - Hosting

## Project Structure

```
src/
├── components/
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Features.tsx
│   │   ├── ExampleStories.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FounderSection.tsx
│   │   ├── SafetySection.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── DownloadButtons.tsx
│   │   └── ImagePlaceholder.tsx
│   └── Navigation.tsx    # Main navigation
├── App.tsx              # Main app component
├── main.tsx            # App entry point
└── index.css          # Global styles & Tailwind imports
```

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment to GitHub Pages

### Option 1: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Push the `dist` folder to the `gh-pages` branch of your repository.

### Option 2: Using the Deploy Script

1. Update the deploy script in `package.json` with your GitHub repository details:
   ```json
   "deploy": "npm run build && cd dist && git init && git add -A && git commit -m 'Deploy to GitHub Pages' && git push -f git@github.com:YOUR_USERNAME/YOUR_REPO.git main:gh-pages"
   ```

2. Run deployment:
   ```bash
   npm run deploy
   ```

### Option 3: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

Then enable GitHub Pages in your repository settings and select "GitHub Actions" as the source.

## Design System

### Colors

- **Soft Blue**: Primary brand color (#3B82F6 and variants)
- **Soft Green**: Secondary accent (#22C55E and variants)
- **Neutral**: Grays for text and backgrounds

### Typography

- **Display Font**: Poppins (headings)
- **Body Font**: Inter (body text)

### Key Features

- Mobile-first responsive design
- Smooth scroll navigation
- Accessible markup
- Image placeholders for future content
- SEO-optimized meta tags

## Customization

### Updating Colors

Edit `tailwind.config.js` to customize the color palette.

### Adding Content

Replace image placeholders in components with actual images by:
1. Adding images to `public/images/`
2. Updating the `ImagePlaceholder` components with `<img>` tags

### Updating Text

All text content is in the component files under `src/components/sections/`.

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

Private - All rights reserved

## Contact

For questions or support, contact: hello@fairyai.co.uk
