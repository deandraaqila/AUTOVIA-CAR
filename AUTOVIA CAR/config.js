// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBl8mgP6wsAaJoj_uUTNwwiSTKhUmy6UOo",
  authDomain: "autovia-car.firebaseapp.com",
  projectId: "autovia-car",
  storageBucket: "autovia-car.firebasestorage.app",
  messagingSenderId: "732006055142",
  appId: "1:732006055142:web:b8355eff80cfc355b70f27",
  measurementId: "G-V5P7RCBTR5"
};
// Ubah FIREBASE_CONFIG menjadi firebaseConfig di sini:
firebase.initializeApp(firebaseConfig);

// Global
window.db = firebase.firestore();
window.auth = firebase.auth();
window.firebase = firebase;

console.log('✓ Firebase OK');

// Cloudinary
window.CLOUDINARY_CONFIG = {
    cloudName:"vlgm2xnu",
    uploadPreset: "laporan-pkl"
};