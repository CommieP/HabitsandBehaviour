# Habit & Behaviour

A React website for the Habit & Behaviour transdisciplinary research lab.

## Local setup

Use Node.js 24 (or a supported version at least 22.12). `.nvmrc` selects Node 24.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. To check the production build:

```sh
npm run lint
npm test
npm run build
npm run preview
```

Tests cover navigation and browser history, unavailable documents, exact PDF filenames, responsive image paths, and accessibility markup. Check responsive layouts and color contrast in a browser as well; the test environment does not measure layout.

## Content

- `src/Data/AboutData.jsx`: About sections.
- `src/Data/GalleryData.jsx`: carousel text and image sources.
- `src/Data/CapstoneProjectsData.jsx`: project titles, authors, optional PDF URLs.
- `src/Data/ResearchProjectsData.jsx`: semesters and research papers.
- `src/Data/ExperimentsData.jsx`: experiments and explorations, imported with their thumbnails and demo links from [the live Experiments page](https://www.habitandbehaviour.com/experiments).
- `public/assets/`: original photos and documents.

Existing placeholder text and semester labels are intentionally preserved. People and Contact show a coming-soon message until content is supplied. Experiments is available at `/experiments`; the previous `/ExperimentsandExplorations` URL redirects there. Projects without a document display an availability message. Keep PDF URLs exactly matched to filenames, including case and spaces.

## Images

Original photos are retained. The site serves generated WebP versions with responsive widths. After replacing a source photo, regenerate the optimized files and manifest:

```sh
npm run images
```

Commit both `public/assets/images/optimized/` and `src/Data/ImageData.json` together. Below-the-fold images are lazy-loaded.

## Deployment

Deploy the `dist/` directory after `npm run build`. The site uses browser-history routes and currently expects deployment at the domain root. Configure the host to serve `index.html` for application routes such as `/Research` and `/About/`, while serving real assets and PDFs normally. Unknown application URLs show the site's recovery page. No hosting credentials or production deployment are included.

## Dependencies

Use `npm audit` to check the lockfile. The carousel is pinned to 2.8.5 because 2.8.6 introduces an unnecessary npm runtime dependency and its audit findings. Recheck this before upgrading it. ESLint uses the latest compatible v9 release because the React lint plugin's supported peer range currently ends at v9.
