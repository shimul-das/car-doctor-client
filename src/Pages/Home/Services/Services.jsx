import React, { useEffect, useState } from 'react'
import Servicescard from './Servicescard'
const Services = () => {
    const [services,setservices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setservices(data))
    },[])
  return (
    <div className='text-center'>
        <h3 className='text-2xl text-[#FF3811]'>Service</h3>
        <h2 className='text-4xl'>Our Service Area</h2>
        <p>the majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which don't look even slightly believable. </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        {
           services.map(service=><Servicescard key={service._id} service={service}></Servicescard>)
        }
        </div>
    </div>
  )
}

export default Services