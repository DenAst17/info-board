import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDJvRsJnou6HHln2jvo2tPHsK1h_Z6oAtw",
  authDomain: "info-board-f093e.firebaseapp.com",
  projectId: "info-board-f093e",
  storageBucket: "info-board-f093e.appspot.com",
  messagingSenderId: "20564543840",
  appId: "1:20564543840:web:16c010b6fc5e448ccbf605"
};

const app = initializeApp(firebaseConfig);

export{app};