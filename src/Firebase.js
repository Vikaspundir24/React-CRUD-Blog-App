import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8z1LLmRJZA-J6EnhxzlMAaSmZgqKxJnM",
  authDomain: "crud-blog-auth.firebaseapp.com",
  projectId: "crud-blog-auth",
  storageBucket: "crud-blog-auth.appspot.com",
  messagingSenderId: "80380110294",
  appId: "1:80380110294:web:866d348cdf22da91faf077",
  measurementId: "G-6DRMKX2SPP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
