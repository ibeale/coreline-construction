# Coreline Construction Website

A modern, responsive Next.js website for Coreline Construction Company, featuring distinctive design that breaks away from generic AI aesthetics.

## Features

- **Modern Tech Stack**: Next.js 15 with App Router, React 19, TypeScript, and Tailwind CSS
- **Animated UI**: Framer Motion for smooth animations and micro-interactions
- **Responsive Design**: Mobile-first approach with beautiful layouts across all devices
- **SEO Optimized**: Meta tags, semantic HTML, and performance optimization
- **Service Pages**: Detailed pages for Waterproofing, Drywall Repair, Remodeling, and General Contracting
- **Portfolio Gallery**: Filterable project showcase with smooth transitions
- **Contact Form**: React Hook Form validation (ready for email integration)
- **Distinctive Design**:
  - Oswald & Outfit fonts (avoiding generic choices)
  - Forest green, terracotta, and charcoal color palette
  - Textured backgrounds and atmospheric depth
  - Orchestrated animations with staggered reveals

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm installed

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── contact/            # Contact form page
│   ├── portfolio/          # Portfolio gallery with filtering
│   ├── services/           # Services overview and detail pages
│   │   ├── waterproofing/
│   │   ├── drywall/
│   │   ├── remodeling/
│   │   └── general/
│   └── globals.css         # Global styles and utilities
├── components/
│   ├── Navigation.tsx      # Responsive navigation with mobile menu
│   ├── Footer.tsx          # Site footer
│   └── ServicePage.tsx     # Reusable service page template
├── content/                # Future MDX content location
├── public/
│   └── images/            # Image assets
└── tailwind.config.ts      # Tailwind configuration with custom colors
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:
- `charcoal`: Dark backgrounds
- `cream`: Light backgrounds
- `forest`: Primary brand color
- `terracotta`: Accent color for CTAs

### Fonts

Fonts are configured in `app/layout.tsx`. Current fonts:
- **Oswald**: Headings (bold, architectural feel)
- **Outfit**: Body text (clean, modern)

### Contact Form

The contact form in `app/contact/page.tsx` is set up with validation but needs backend integration. Options:
1. Add email service (Resend, SendGrid, etc.)
2. Integrate with form services (Formspree, Netlify Forms)
3. Connect to your own API endpoint

## Content Management

### Adding Project Photos

1. Add images to `public/images/projects/`
2. Update the `projects` array in `app/portfolio/page.tsx`
3. Replace emoji placeholders with actual images using Next/Image

### Updating Services

Service content can be edited in individual service page files:
- `app/services/waterproofing/page.tsx`
- `app/services/drywall/page.tsx`
- `app/services/remodeling/page.tsx`
- `app/services/general/page.tsx`

### Managing Testimonials

Testimonials are currently hardcoded in `app/portfolio/page.tsx`. For easy content management, consider:
1. Moving to MDX files in `content/testimonials/`
2. Using a CMS like Sanity or Contentful
3. Creating a simple JSON file for testimonials

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Vercel will auto-detect Next.js and deploy

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted with Node.js

## Contact Information

Update contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `app/layout.tsx` (metadata)

Current placeholder:
- Email: josh@corelineconstruction.com
- Phone: (503) 123-4567
- Service Area: San Diego & Surrounding Areas

## License

© 2025 Coreline Construction Company LLC. All rights reserved.

## Support

For questions or issues with the website, contact the developer or create an issue in the repository.
