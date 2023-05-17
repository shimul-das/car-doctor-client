import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const authcontext=createContext();
const AuthProvider = ({children}) => {
const auth = getAuth(app);
const [user,setuser]=useState(null)
const [loading,setloading]=useState(true)
const googleprovider= new GoogleAuthProvider();

const signUpUser=(email,password)=>{
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}
const signInUser=(email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password)
}
const signinGoogle=()=>{
    setloading(true)
    return signInWithPopup(auth,googleprovider)

}
const signout=()=>{
    return signOut(auth)
}
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        setuser(currentUser);
        console.log('current user',currentUser);
        setloading(false)
    })
    return ()=>{
        return unsubscribe();
    }
},[])
const authinfo={
user,
loading,
signUpUser,
signInUser,
signout,
signinGoogle
}

return (
<authcontext.Provider value={authinfo}>
    {children}
</authcontext.Provider>
)
}

export default AuthProvider