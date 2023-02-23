# Getting Started

## Branding

[![Alt text](public/logo192.png)](https://redbet-au.web.app/)

- Name: **REDBET**
- Slogan: _Bet with Luck!_
- Meaning: Red is a popular color in many asian countries, symbolizing luck, joy, and happiness.
- Font used: `Goldman Bold`
- Color used: `#DC1A21`

## Tech Stack

- Frontend: `React`, `TypeScript`, `Bootstrap 5.2`, `SASS`
- Backend: `Firebase Services` (Hosting, Authentication, Google Analytics, reCAPTCHA v3), the Odds API (Sports betting API covering odds from bookmakers around the world)

## Initialisation

- Create React App with TypeScript

  - `npx create-react-app redbet --template typescript`

- Install Bootstrap 5.2 and SASS

  - `npm install bootstrap@5.2.3`
  - `npm install -g sass`

- Initialise a Firebase project, add to React app in the file `src/config/firebaseConfig.js`
  - `npm install firebase`
  - `npm install -g firebase-tools` (See more: https://firebaseopensource.com/projects/firebase/firebase-tools/)
  - `firebase login`
  - `firebase init`

## VSCode

- Live Sass Compiler

```
// In settings.json

  "liveSassCompile.settings.watchOnLaunch": true,
  "liveSassCompile.settings.formats": [
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "./src/css"
    }
  ]
```

## Project Structure

- Guidelines: https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md

```sh
src
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- providers         # all of the application providers
|
+-- routes            # routes configuration
|
+-- stores            # global state stores
|
+-- test              # test utilities and mock server
|
+-- types             # base types used across the application
|
+-- utils             # shared utility functions
```

```sh
// Everything from a feature should be exported from the index.ts file which behaves as the public API of the feature.

src/features/awesome-feature
|
+-- api         # exported API request declarations and api hooks related to a specific feature
|
+-- assets      # assets folder can contain all the static files for a specific feature
|
+-- components  # components scoped to a specific feature
|
+-- hooks       # hooks scoped to a specific feature
|
+-- routes      # route components for a specific feature pages
|
+-- stores      # state stores for a specific feature
|
+-- types       # typescript types for TS specific feature domain
|
+-- utils       # utility functions for a specific feature
|
+-- index.ts    # entry point for the feature, it should serve as the public API of the given feature and exports everything that should be used outside the feature
```
