import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const authcontext=createContext();
const AuthProvider = ({children}) => {
const auth = getAuth(app);
const [user,setuser]=useState(null)
const [loading,setloading]=useState(true)

const signUpUser=(email,password)=>{
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}
const signInUser=(email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password)
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
signout
}

return (
<authcontext.Provider value={authinfo}>
    {children}
</authcontext.Provider>
)
}

export default AuthProvider