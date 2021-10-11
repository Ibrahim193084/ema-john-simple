import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from 'react';


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = ()=>{
       return signInWithPopup(auth, googleProvider)
//   .then((result) => {
//     const user = result.user;
//     setUser(user)
//   }).catch((error) => {
//     const errorMessage = error.message;
//     setError(errorMessage)
  
//   });
    }
useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user);
        } 
      });
      
    
},[])

const logOut = () =>{
    signOut(auth).then(() => {
        setUser({})
      }).catch((error) => {
        // An error happened.
      });
      
}
return{user,error,signInWithGoogle,logOut,setUser}
}
export default useFirebase;