import React from 'react'
import imgone from './../../../assets/images/banner/1.jpg';
import imgtwo from './../../../assets/images/banner/2.jpg';
import imgthree from './../../../assets/images/banner/3.jpg';
import imgfour from './../../../assets/images/banner/4.jpg';

const Banner = () => {
  return (
    <div className="carousel relative w-full h-96 rounded-xl">
      <div id="slide1" className="carousel-item relative w-full h-full">
        <img src={imgone} alt="banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#444343] opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Affordable Price For Car Servicing</h2>
          <p className="text-lg md:text-xl mb-6">There are many variations of passages of available, but the majority have suffered alteration in some form</p>
          <div className="space-x-4 right-0">
            <button className="px-6 py-3 rounded-full bg-white text-blue-500 font-bold hover:bg-blue-500 hover:text-white transition duration-300">DISCOVER MORE</button>
            <button className="px-6 py-3 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-blue-500 transition duration-300">LATEST PROJECT</button>
          </div>
        </div>
        <div className="absolute  w-full bottom-3 ml-4">
          <a href="#slide4" className="btn btn-circle mr-4 hover:bg-[#FF3811]">❮</a> 
          <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811]">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full h-full">
        <img src={imgtwo} alt="banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#444343] opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Affordable Price For Car Servicing</h2>
          <p className="text-lg md:text-xl mb-6">There are many variations of passages of available, but the majority have suffered alteration in some form</p>
          <div className="space-x-4">
            <button className="px-6 py-3 rounded-full bg-white text-blue-500 font-bold hover:bg-blue-500 hover:text-white transition duration-300">DISCOVER MORE</button>
            <button className="px-6 py-3 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-blue-500 transition duration-300">LATEST PROJECT</button>
          </div>
        </div>
        <div className="absolute  w-full bottom-3 ml-4">
          <a href="#slide1" className="btn btn-circle mr-4 hover:bg-[#FF3811]">❮</a> 
          <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811]">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full h-full">
        <img src={imgthree} alt="banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#444343] opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Affordable Price For Car Servicing</h2>
          <p className="text-lg md:text-xl mb-6">There are many variations of passages of available, but the majority have suffered alteration in some form</p>
          <div className="space-x-4">
            <button className="px-6 py-3 rounded-full bg-white text-blue-500 font-bold hover:bg-blue-500 hover:text-white transition duration-300">DISCOVER MORE</button>
            <button className="px-6 py-3 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-blue-500 transition duration-300">LATEST PROJECT</button>
          </div>
        </div>
        <div className="absolute  w-full bottom-3 ml-4">
          <a href="#slide2" className="btn btn-circle mr-4 hover:bg-[#FF3811]">❮</a> 
          <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811]">❯</a>
        </div>
      </div> 
      <div id="slide4" className="carousel-item relative w-full h-full">
        <img src={imgfour} alt="banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#444343] opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Affordable Price For Car Servicing</h2>
          <p className="text-lg md:text-xl mb-6">There are many variations of passages of available, but the majority have suffered alteration in some form</p>
          <div className="space-x-4">
            <button className="px-6 py-3 rounded-full bg-white text-blue-500 font-bold hover:bg-blue-500 hover:text-white transition duration-300">DISCOVER MORE</button>
            <button className="px-6 py-3 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-blue-500 transition duration-300">LATEST PROJECT</button>
          </div>
        </div>
        <div className="absolute  w-full bottom-3 ml-4">
          <a href="#slide3" className="btn btn-circle mr-4 hover:bg-[#FF3811]">❮</a> 
          <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811]">❯</a>
        </div>
      </div>
    </div>
  )
}

export default Banner
