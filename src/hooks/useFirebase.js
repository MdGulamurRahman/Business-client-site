import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseInit from '../Pages/Login/Firebase/firebase.init';
firebaseInit();


const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    //login with google
    const loginWithGoogle = ()=>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setUser(user);
            setError("");
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            setError(errorMessage);
            // ...
        });

    }

    return {
        loginWithGoogle,
        user,
        error,
    }
};

export default useFirebase;