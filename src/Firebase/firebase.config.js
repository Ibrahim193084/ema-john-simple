
const firebaseConfig = {
    // apiKey: "AIzaSyAUFQ_hefNwWEY7gv1yqp2ZVaqSSWCCQyI",
    // authDomain: "ema-john-simple-ffbc4.firebaseapp.com",
    // projectId: "ema-john-simple-ffbc4",
    // storageBucket: "ema-john-simple-ffbc4.appspot.com",
    // messagingSenderId: "636635445353",
    // appId: "1:636635445353:web:ff6da228af6a4cfd050af8"
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGEING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  };

  export default firebaseConfig;



  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGEING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID
  // export default firebaseConfig;

