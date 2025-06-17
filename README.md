# Water Ratio Calculator PWA

A progressive web app that helps you calculate the perfect water-to-coffee ratio for brewing different types of coffee.

## Features

- Mobile-first design
- PWA support for offline usage
- Water-to-coffee ratio calculator
- Material Design UI

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## PWA Icons

The app includes a base SVG icon for the PWA in `public/icons/icon-base.svg`. To generate all the required icon sizes, run:

```bash
./generate-icons.sh
```

This requires ImageMagick to be installed on your system. If you don't have it, install it with:

```bash
# macOS
brew install imagemagick

# Ubuntu/Debian
sudo apt-get install imagemagick
```

## Versioning

The app version is displayed in the UI and is managed through the `version` field in `package.json`. When releasing updates, bump the version according to semantic versioning principles.

## Built With

- [Next.js](https://nextjs.org/) - The React framework
- [Material-UI](https://mui.com/) - UI component library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
