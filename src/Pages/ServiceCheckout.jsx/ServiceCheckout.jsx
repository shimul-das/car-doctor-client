import React, { useContext } from 'react'
import { authcontext } from '../../Providers/AuthProvider'
import { useLoaderData } from 'react-router-dom'

const ServiceCheckout = () => {
    const { signInUser, user } = useContext(authcontext)
    const service = useLoaderData()
    const { title, _id, price, img } = service

    const handlecheckout = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const price = form.price.value;
        const service = _id
        const message = form.message.value;

        console.log(name, date, email, price, message, user.email, service)
        const booking = {
            customerName: name,
            date,
            img,
            price,
            email,
            service: title,
            service_id: _id

        }
        console.log(booking)
        fetch('http://localhost:5000/booking',{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    alert("Booking placed Successfully")
                }
            })

    }
    return (
        <div className="container mx-auto mt-10">
            <h1 className='text-3xl font-bold text-center'>Book Service: {title}</h1>
            <form onSubmit={handlecheckout} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first_name">
                                Name
                            </label>
                            <input name='name' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first_name" type="text" placeholder="John" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last_name">
                                Date
                            </label>
                            <input name='date' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last_name" type="date" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input name='email' defaultValue={user?.email} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="johndoe@example.com" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                                Price
                            </label>
                            <input name='price' defaultValue={`${price}`} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" type="tel" placeholder="Price" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea name='message' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" rows="8" placeholder="Enter your message here..."></textarea>
                    </div>
                    <div className="flex items-center justify-center">
                        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full" type="submit" value="Order Confirm" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ServiceCheckout