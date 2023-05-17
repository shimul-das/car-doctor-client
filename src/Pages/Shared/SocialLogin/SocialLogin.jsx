import React, { useContext } from 'react'
import { authcontext } from '../../../Providers/AuthProvider'

export const SocialLogin = () => {
    const {signinGoogle}=useContext(authcontext)
    const handlegooglesignin=()=>{
        signinGoogle()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center p-4'>
                <button onClick={handlegooglesignin} className="btn btn-circle">
                    G
                </button>
            </div>
        </div>
    )
}
