import React, { useContext, useState } from 'react'
import { authcontext } from '../../Providers/AuthProvider'
import Bookingrow from './Bookingrow';

const Booking = () => {
    const { user } = useContext(authcontext)
    const [booked, setbooked] = useState([]);
    const url = `http://localhost:5000/booked?email=${user?.email}`
    fetch(url)
        .then(res => res.json())
        .then(data => setbooked(data))

    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/booked/${id}`, {
            method: "PATCH",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({status:'confirm'})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert("Updated successfully");
                    const remaining=booked.filter(book=>book._id!==id);
                    const updated=booked.find(book=>book._id==id)
                    updated.status='confirm'
                    const newbooked=[updated, ...remaining]
                    setbooked(newbooked)
                }
            });
    };
    return (
        <div>
            <h2>Total Booking service :{booked.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booked.map(book => <Bookingrow key={book._id} book={book} handleUpdate={handleUpdate}></Bookingrow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Booking