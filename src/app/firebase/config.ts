// Importar las funciones necesarias de los SDKs de Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Configuración de Firebase para tu aplicación web
const firebaseConfig = {
  apiKey: "AIzaSyDDCz7UkbNf7BJYF8BvEsDubqzp9SIYH6Q",
  authDomain: "blogorious.firebaseapp.com",
  projectId: "blogorious",
  storageBucket: "blogorious.appspot.com",
  messagingSenderId: "504468922795",
  appId: "1:504468922795:web:173d01cbf5b168ec75b2ee",
  measurementId: "G-SS9QH0SY36"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig)

// Inicializar Analytics (solo en el lado del cliente)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Obtener la instancia de autenticación
const auth = getAuth(app);

export { app, auth, analytics };