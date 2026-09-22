// Configurazione Firebase per Music Ranking Live

export const firebaseConfig = {
  apiKey: "AIzaSyAq2P19whGw1galLT_fdsl8SzOTjkX5p0A",
  authDomain: "music-ranking-live.firebaseapp.com",
  databaseURL: "https://music-ranking-live-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "music-ranking-live",
  storageBucket: "music-ranking-live.firebasestorage.app",
  messagingSenderId: "939431014706",
  appId: "1:939431014706:web:3457459ebe0b0a9c66a72b"
};

export const isFirebaseConfigured =
  firebaseConfig.apiKey &&
  !firebaseConfig.apiKey.startsWith("INCOLLA_") &&
  firebaseConfig.databaseURL &&
  !firebaseConfig.databaseURL.startsWith("INCOLLA_");
