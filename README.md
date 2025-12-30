# Brazil States Flags Demo

An interactive map application showcasing Brazil's states and their flags.

##  Live Demo

**[View Live Demo →](https://br-state-flags-demo.arthurreira.dev/#/)**

### Quick Links
-  [Home](https://br-state-flags-demo.arthurreira.dev/#/) - Main landing page
-  [Demo](https://br-state-flags-demo.arthurreira.dev/#/demo) - Interactive state explorer
-  [Business Examples](https://br-state-flags-demo.arthurreira.dev/#/business-examples) - Use cases and implementations
-  [Documentation](https://br-state-flags-demo.arthurreira.dev/#/docs) - API docs and guides

## Features

- **Interactive Map**: A dotted map visualization of Brazil.
- **State Details**: Hover over states to see flags and details.
- **Region Highlighting**: States are color-coded by region.
- **Responsive Design**: Works on desktop and mobile devices.

## Tech Stack

- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Map Visualization**: dotted-map
- **Data Source**: br-state-flags

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` and add your Beam Analytics token:
   ```env
   VITE_BEAM_TOKEN=your-beam-token-here
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Security & Analytics

### Content Security Policy (CSP)
The application includes strict CSP headers to protect against XSS attacks while allowing necessary resources:
- Analytics scripts from `beamanalytics.b-cdn.net`
- Fonts from Google Fonts
- Images and media from trusted sources

### Analytics Integration
- **Beam Analytics**: Tracks page views and user interactions
- **SEO Integration**: Analytics automatically tracks route changes and updates SEO meta tags
- **Privacy**: Analytics token is stored in environment variables and never committed to git

### Environment Variables
- `.env` files are gitignored for security
- Use `.env.example` as a template
- All sensitive tokens use the `VITE_` prefix for Vite compatibility

### GitHub Actions Deployment
The project uses GitHub Actions to automatically deploy to GitHub Pages. To set up the analytics token for CI/CD:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `VITE_BEAM_TOKEN`
5. Value: Your Beam Analytics token (e.g., `e142b120-6144-4ffc-8e59-918682779058`)
6. Click **Add secret**

The workflow will automatically use this secret during the build process. The token will be available to Vite during the build step, and the analytics script will be included in the production build.
