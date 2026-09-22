// INCOLLA QUI la configurazione della tua Web App Firebase.
// La configurazione Firebase lato client NON è una password.
// La sicurezza vera viene gestita dalle regole del Realtime Database.

export const firebaseConfig = {
  apiKey: "INCOLLA_API_KEY",
  authDomain: "INCOLLA_AUTH_DOMAIN",
  databaseURL: "INCOLLA_DATABASE_URL",
  projectId: "INCOLLA_PROJECT_ID",
  storageBucket: "INCOLLA_STORAGE_BUCKET",
  messagingSenderId: "INCOLLA_MESSAGING_SENDER_ID",
  appId: "INCOLLA_APP_ID"
};

export const isFirebaseConfigured =
  firebaseConfig.apiKey &&
  !firebaseConfig.apiKey.startsWith("INCOLLA_") &&
  firebaseConfig.databaseURL &&
  !firebaseConfig.databaseURL.startsWith("INCOLLA_");
