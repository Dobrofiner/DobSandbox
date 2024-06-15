  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAnioOqLGtzPxxC-FonzpE5GPeorBiGHL4",
    authDomain: "dobsandbox-database.firebaseapp.com",
    projectId: "dobsandbox-database",
    storageBucket: "dobsandbox-database.appspot.com",
    messagingSenderId: "950626940943",
    appId: "1:950626940943:web:e6b2ee468514759a704b7a",
    measurementId: "G-LS8ZJBLJ48"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);