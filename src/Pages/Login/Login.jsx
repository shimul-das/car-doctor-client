import React, { useContext } from 'react'
import login from '../../../src/assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authcontext } from '../../Providers/AuthProvider';
import { SocialLogin } from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const {signInUser,user}=useContext(authcontext)
    console.log(user)
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || '/'
    const handleLogin=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        signInUser(email,password)
        .then(result=>{
            const user=result.user;
            const loggeduser={
                email:user.email
            }
            console.log(loggeduser)
            navigate(from,{replace:true})
            fetch('http://localhost:5000/jwt',{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(loggeduser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log("JWT response",data)
                //warning : Local storage is not best place to store access token
                localStorage.setItem('car-access-token',data.token)
            })
            console.log(user);
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-3xl font-bold text-center pt-3">Login now!</h1>
                <form onSubmit={handleLogin}>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value='Login' />
                        </div>
                    </div>
                    </form>
                    <p className='text-center pb-4'>You are new in car doctor!! <Link className='text-orange-600 text-xl text-bold' to='/signup' >Sign Up</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    )
}

export default Login