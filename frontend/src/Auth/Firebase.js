import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAsjNu7uLmUAYC5hoGQT_dHHH0O3JgyX2A",
    authDomain: "whatsapp-web-15921.firebaseapp.com",
    projectId: "whatsapp-web-15921",
    storageBucket: "whatsapp-web-15921.appspot.com",
    messagingSenderId: "962936878918",
    appId: "1:962936878918:web:b21c55dd4b1fa72da35747"
};
  
firebase.initializeApp(firebaseConfig);

export { firebase };