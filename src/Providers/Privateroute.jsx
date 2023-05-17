import React, { useContext } from 'react'
import { authcontext } from './AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const Privateroute = ({children}) => {
    const {user,loading}=useContext(authcontext)
    const location=useLocation();
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children
    }

  return <Navigate to='/login' state={{from:location}} replace></Navigate>
}

export default Privateroute