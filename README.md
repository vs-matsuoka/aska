# aska

![ci](https://github.com/vs-matsuoka/aska/workflows/ci/badge.svg)

## Getting Started

### Prerequisites

- Node.js v18.10.0
  - どの手段で導入しても良いですが [nodenv](https://github.com/nodenv/nodenv) を使うことをおすすめします

### Run

```bash
yar
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `serve`: runs server application for static files
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `generate ComponentName`: to generate a component structure
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook
