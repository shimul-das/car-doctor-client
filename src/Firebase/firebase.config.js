// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
//Here we will use vite environment variable
console.log(import.meta.env.VITE_APIKEY,import.meta.env.VITE_AUTHDOMAIN,import.meta.env.VITE_PROJECTID,import.meta.env.VITE_MESSAGINGSENDERID,import.meta.env.VITE_APPID)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCCStpMBRpThl38D8E5Fz1QLTZXuSStGXI",
//   authDomain: "car-doctor-26773.firebaseapp.com",
//   projectId: "car-doctor-26773",
//   storageBucket: "car-doctor-26773.appspot.com",
//   messagingSenderId: "843647154392",
//   appId: "1:843647154392:web:7190d8360b385acb657fad"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;