# EduPro — Educational Institute Demo

A responsive React + Vite + Tailwind CSS demo template for outreach to schools, colleges, academies, and coaching centres.

## Requirements
- Node.js 18+ (Node 20+ recommended)
- npm

## Run locally
1. Extract the ZIP.
2. Open the `edupro-demo` folder in VS Code.
3. Open Terminal in that folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build for deployment
```bash
npm run build
npm run preview
```
Deploy the project folder/repository to Vercel or Netlify. Build command: `npm run build`; output directory: `dist`.

## Before sending to a real client
Search and replace the demo details in `src/App.jsx`:
- `EduPro` institute name and tagline
- `+923001234567` sample phone number (including WhatsApp URL)
- `admissions@example.com`
- sample campus address and opening hours
- course names, descriptions, and durations
- sample faculty names/initials
- Unsplash images, replacing them with client-approved images if possible

## Important
- The enquiry form only validates input in the browser and displays a demo confirmation. It does not send or save form data.
- Contact details are placeholders. Do not publish them as real institute details.
- Sample faculty, courses and any future testimonials/results must be verified or clearly labelled as demo content.
- The floating WhatsApp link currently uses a placeholder number. Change it to the client's WhatsApp number in international format, digits only, without `+` or spaces in the `wa.me` URL.
- External images need an internet connection. For a production site, use approved optimized image assets.
