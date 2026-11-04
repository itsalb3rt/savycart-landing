# SavyCart Landing Page Template

## <a href="https://react-landing-page-template-2021.vercel.app/"> LIVE DEMO</a>

<img src="public/assets/gifs/demo.gif" width="100%" height="auto" />

### Description

This is a React.js/Next.js based landing page plug-n-play template, ideal for startups/companies/service providers wanting to showcase their vision in a single page sleek and modern landing page.

### Features

- 📱  Responsive design
- 🔥 [Next.js](https://nextjs.org) for Static Site Generator

- 🎨 Integrate with [Tailwind CSS](https://tailwindcss.com)

- 💅 PostCSS for processing Tailwind CSS

- 🎉 Type checking [TypeScript](https://www.typescriptlang.org)

- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript

- 🤖 SEO page titles with `next/head`

- 🖱️ One click deployment with Vercel or Netlify (or manual deployment to any hosting services)

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Make it your own

#### 1. Clone repo

```
git clone https://github.com/issaafalkattan/react-landing-page-template-2021.git
cd react-landing-page-template-2021
npm install
```

Requires Node.js 20.9 or newer.

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open <http://localhost:3000> with your favorite browser to see your project.

#### 2. Add your own content

 1. **Content**: change the configuration in the ```src/config/index.json``` file to change the content of the landing page to match your use ```src/config/index.json```  folder and .
 2. **Images**:  add any images/icons..etc to the ```public/assets/images```  folder and update their reference source in ```src/config/index.json```.
  3. **Theme**:  to change the theme, update the `@theme` block in ```src/styles/main.css``` to match the theme of your branding. [Tutorial](https://tailwindcss.com/docs/theme).

#### 3. Deploy to production

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fissaafalkattan%2Freact-landing-page-template-2021)

##### Deploy manually

Create an optimised production build (static site export):

```
npm run build-prod
```

The generated HTML and CSS files are minified (built-in feature of Next.js) and unused [Tailwind CSS](https://tailwindcss.com) classes are removed. The deployable site is written to the `out/` folder — preview it locally with any static file server, e.g.:

```
npx serve out
```

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2021
  

## Liked this template? <a href="https://www.buymeacoffee.com/issaaf">Buy me a coffee ☕️</a>


---

### Looking for v1? <a href="https://github.com/issaafalkattan/React-Landing-Page-Template">V1</a>
