# Opening Hours

## Description

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## How to run

- First unzip the file titled `opening-hours-main.zip`
- Open it up with your favorite code editor
- `cd` into the folder in your terminal
- Install the dependencies yarn:

```bash
yarn
```

This should take a few minutes

- Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- Additionally, run the test:

```bash
yarn test
```

## Scope

In this project, I've gone ahead to create an [API route](https://nextjs.org/docs/api-routes/introduction) that can be accessed on [http://localhost:3000/api/opening-hours](http://localhost:3000/api/opening-hours). This endpoint can be edited in `src/pages/api/opening-hours.ts`.

This endpoint serves as an entry point for the data displayed in the UI. You'll notice that by visiting that endpoint, the shape of the data changed from what was originally given. This was done in order to simplify the data structure and do the heavy lifting on the server. More info in the next section.

## Project structure

- The `src/pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

- The `src/utils/*` folder contains the files to handle transforming the json data from one form to another, validations and formatting the time.

- The `src/pages/*` directory is mapped to `http://localhost:3000/*` in the browser. Files in this directory are treated as React pages.

- The `src/components` directory is other React components are stored.

- The `src/styles` directory is where entry tailwindcss file file is stored.

- The `src/__tests__` directory is where test files are stored.

- The `public` directory is where static files are stored.

- Every other file is mostly a config file.
