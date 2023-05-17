// import React from 'react'

// const Bookingrow = ({ book }) => {
//     const { _id, customerName, email, price, date, img } = book;
//     const handledelete = (id) => {
//         const processed = confirm("Are you sure you want to delete it");
//         if (processed) {
//             fetch(`http://localhost:5000/booked/${id}`, {
//                 method: "DELETE"
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data)
//                     if (data.deletedCount) {
//                         alert("deleted successfully")
//                     }

//                 })
//         }
//     }
//     const handleupdate = (id) => {
//         fetch(`http://localhost:5000/booked/${id}`, {
//             method: "PATCH"
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 if (data.modifiedCount >0) {
//                    alert("updated successfully")
//                 }

//             })

//     }
//     return (
//         <tr>
//             <th>
//                 <button onClick={() => handledelete(_id)} className="btn btn-sm btn-circle">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
//                 </button>
//             </th>
//             <td>
//                 <div className="flex items-center space-x-3">
//                     <div className="avatar">
//                         <div className="mask mask-squircle w-12 h-12">
//                             <img src={img} alt="Avatar Tailwind CSS Component" />
//                         </div>
//                     </div>
//                 </div>
//             </td>
//             <td>
//                 {customerName}
//             </td>
//             <td>{date}</td>
//             <td>{price}</td>
//             <th>
//                 {
//                     <button onClick={() => handleupdate(_id)} className="btn btn-ghost btn-xs">Confirm</button>
//                 }
//             </th>
//         </tr>
//     )
// }

// export default Bookingrow

// import React, { useState } from 'react';

// const Bookingrow = ({ book }) => {
//   const { _id, customerName, email, price, date, img } = book;
//   const [isUpdated, setIsUpdated] = useState(false);

//   const handleDelete = (id) => {
//     const processed = confirm("Are you sure you want to delete it");
//     if (processed) {
//       fetch(`http://localhost:5000/booked/${id}`, {
//         method: "DELETE"
//       })
//         .then(res => res.json())
//         .then(data => {
//           console.log(data);
//           if (data.deletedCount) {
//             alert("Deleted successfully");
//           }
//         });
//     }
//   };

//   const handleUpdate = (id) => {
//     fetch(`http://localhost:5000/booked/${id}`, {
//       method: "PATCH",
//       headers:{
//         "content-type":"application/json"
//       },
//       body:JSON.stringify({status:"confirmed"})
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         if (data.modifiedCount > 0) {
//           setIsUpdated(true);
//           alert("Updated successfully");
//         }
//       });
//   };

//   return (
//     <tr>
//       <th>
//         <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//       </th>
//       <td>
//         <div className="flex items-center space-x-3">
//           <div className="avatar">
//             <div className="mask mask-squircle w-12 h-12">
//               <img src={img} alt="Avatar Tailwind CSS Component" />
//             </div>
//           </div>
//         </div>
//       </td>
//       <td>{customerName}</td>
//       <td>{date}</td>
//       <td>{price}</td>
//       <th>
//         {isUpdated ? (
//           <button className="btn btn-primary btn-xs">Confirmed</button>
//         ) : (
//           <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">Confirm</button>
//         )}
//       </th>
//     </tr>
//   );
// };

// export default Bookingrow;
import React, { useState,} from 'react';

const Bookingrow = ({ book,handleUpdate }) => {
  const { _id, customerName, email, price, date, img ,status} = book;
  // const [isConfirmed, setIsConfirmed] = useState(false);

//   useEffect(() => {
//     // Fetch the booking status from the database
//     fetch(`http://localhost:5000/booked/${_id}`)
//       .then(res => res.json())
//       .then(data => {
//         setIsConfirmed(data.status === 'confirmed');
//       });
//   }, [_id]);

  const handleDelete = (id) => {
    const processed = confirm("Are you sure you want to delete it");
    if (processed) {
      fetch(`http://localhost:5000/booked/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount) {
            alert("Deleted successfully");
          }
        });
    }
  };



  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{customerName}</td>
      <td>{date}</td>
      <td>{price}</td>
      <th>
        {status==="confirm" ? (
          <button className="btn btn-primary btn-xs">Confirmed</button>
        ) : (
          <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">Confirm</button>
        )}
      </th>
    </tr>
  );
};

export default Bookingrow;

