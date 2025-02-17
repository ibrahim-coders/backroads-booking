// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDTCywSFVqHoUXXYJYY2d82bzBHpDmU_KY',
  authDomain: 'travel-booking-2e3eb.firebaseapp.com',
  projectId: 'travel-booking-2e3eb',
  storageBucket: 'travel-booking-2e3eb.firebasestorage.app',
  messagingSenderId: '246935909703',
  appId: '1:246935909703:web:5fb085ef71782e4ae48862',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
