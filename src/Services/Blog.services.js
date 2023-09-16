import { db } from "../Firebase-config";


import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";



const blogCollectionRef = collection(db,  "Blogs");
class BlogDataService {
  addBlogs = (newBlog) => {
    return addDoc(blogCollectionRef, newBlog);
  };

  updateBlog = (id, updatedBlog) => {
    const blogDoc = doc(db,  "Blogs", id)
   return updateDoc(blogDoc,updatedBlog) 
  }

  deleteBlog = (id) => {
    const blogDoc = doc(db ,   "Blogs", id) 
    return deleteDoc(blogDoc)
  }

  getAllBlogs = () => {
    return getDocs(blogCollectionRef)
  }

  getBlog = (id) => {
    const blogDoc = doc(db,   "Blogs", id) 
    return getDoc(blogDoc)
  }
}

export default new BlogDataService();
