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

