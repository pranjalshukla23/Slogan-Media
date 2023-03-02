// import React, { useEffect, useState } from 'react'
// import "./Admin.css"
// import AdminLogin from './AdminLogin';

// const Admin = () => {
//     useEffect(() => {
//         fetch("/notes").then((response) => {
//             if (response.ok) {
//                 return response.json()
//             }
//         }).then(jsonResponse => setNotes(jsonResponse))
//     })
//     const [notes, setNotes] = useState([{
//         Name: '',
//         Email: '',
//         Contact: '',
//         Description: ''
//     }])

//     var count = 1;
//     return (
//         <div className="flex flex-col justify-center items-center h-screen">
//             <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
//                 <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
//                     <div className="overflow-x-auto">
//                         <table className="min-w-full">
//                             <thead className="table-header border-b ">
//                                 <tr>
//                                     <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
//                                         Sl No
//                                     </th>
//                                     <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
//                                         Date
//                                     </th>
//                                     <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
//                                         Name
//                                     </th>
//                                     <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
//                                         Email
//                                     </th>
//                                     <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
//                                         Contact Number
//                                     </th>
//                                     <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
//                                         Description
//                                     </th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                             {notes.map(note =>
//                                 <tr className="border-b">
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                                         {note.sl}
//                                     </td>
//                                     <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
//                                         {note.Date}
//                                     </td>
//                                     <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
//                                         {note.Name}
//                                     </td>
//                                     <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
//                                         {note.Email}
//                                     </td>
//                                     <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
//                                         {note.Contact}
//                                     </td>
//                                     <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
//                                         {note.Description}
//                                     </td>
//                                 </tr>
//                             )}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         // <div classNameName='admin-slogan'>
//         //         <div classNameName='admin-slogan-body'>
//         //             <table className="responstable">
//         //                 <tr className="table-heading">
//         //                     <th>Sl No</th>
//         //                     <th>Date</th>
//         //                     <th classNameName="name">Name</th>
//         //                     <th>Email</th>
//         //                     <th>Contact Number</th>
//         //                     <th classNameName='description'>Description</th>
//         //                 </tr>
//         //                 {notes.map(note =>
//         //                 <tr classNameName="table-content">
//         //                     <td>{note.sl}</td>
//         //                     <td>{note.Date}</td>
//         //                     <td classNameName="name">{note.Name}</td>
//         //                     <td>{note.Email}</td>
//         //                     <td>{note.Contact}</td>
//         //                     <td classNameName='description'>{note.Description}</td>
//         //                 </tr>
//         //                 )}
//         //             </table>
//         //         </div>

//         // </div>
//     )
// }

// export default Admin
