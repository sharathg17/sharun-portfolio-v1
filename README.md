# Sharun Shetty · Marketing Director Portfolio

A modern, responsive portfolio website built with Next.js 16, TypeScript, TailwindCSS, and shadcn/ui.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes (dark mode support)
- **Fonts**: Geist Sans & Geist Mono (Vercel fonts)

## Features

- Fully responsive design (mobile-first)
- Dark/light mode toggle with system preference detection
- Smooth scroll animations with Framer Motion
- Sticky navigation with backdrop blur
- Modern card-based layouts
- Accessible components (ARIA compliant)
- SEO optimized metadata

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── Navigation.tsx      # Navigation with dark mode toggle
│   ├── Hero.tsx            # Hero section with animations
│   ├── Projects.tsx        # Project showcase
│   ├── Experience.tsx      # Career timeline
│   ├── Approach.tsx        # Methodology section
│   ├── About.tsx           # Education & skills
│   ├── Contact.tsx         # Contact footer
│   └── theme-provider.tsx  # Theme context provider
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- Render
- Cloudflare Pages

## Customization

- **Colors**: Modify `src/app/globals.css` CSS variables
- **Content**: Edit component files in `src/components/`
- **Fonts**: Change fonts in `src/app/layout.tsx`
- **Theme**: Adjust theme in `src/app/globals.css` :root and .dark sections
