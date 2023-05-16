import React from 'react'
import person from './../../../assets/images/about_us/person.jpg';
import parts from './../../../assets/images/about_us/parts.jpg';



const About = () => {
return (
<div className="hero min-h-screen bg-base-200 mt-5">
    <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
        <img src={person} className=" w-3/5  rounded-lg shadow-2xl"/>
        <img src={parts} className=" border-8 border-white absolute left-1/3 top-1/2  w-2/4 rounded-lg shadow-2xl" />
        </div>
        <div className='lg:w-1/2'>
            <div className='w-3/4'>
            <p className='text-2xl text-[#FF3811]'>About Us</p>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className="py-6 text-md">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <p className='text-md pb-2'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <button className="btn btn-outline btn-warning">Get More Info</button>
            </div>
        </div>
    </div>
</div>
)
}

export default About