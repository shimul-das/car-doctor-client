import React, { useContext } from 'react'
import { authcontext } from './AuthProvider'

const Privateroute = ({children}) => {
    const {user,loading}=useContext(authcontext)
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children
    }

  return (
    <div>

    </div>
  )
}

export default Privateroute