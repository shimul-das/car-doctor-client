import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const authcontext = createContext();
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)
    const googleprovider = new GoogleAuthProvider();

    const signUpUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signinGoogle = () => {
        setloading(true)
        return signInWithPopup(auth, googleprovider)

    }
    const signout = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser);
            console.log('current user', currentUser);
            setloading(false)
            if(currentUser.email){
                const loggeduser = {
                    email: currentUser.email
                }
                fetch('https://car-doctor-server-omega-gilt.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(loggeduser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("JWT response", data)
                        //warning : Local storage is not best place to store access token
                        localStorage.setItem('car-access-token', data.token)
                    })
            }
            else{
                localStorage.removeItem('car-access-token')
            }
        })
        return () => {
            return unsubscribe();
        }
    }, [])
    const authinfo = {
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