import React, { useEffect, useState } from 'react';
import { getAllClasses } from '../../../api/classapi';

const ManageClass = () => {
    const [allClasses, setAllClasses] = useState([])
    useEffect(()=>{
        getAllClasses()
        .then(data => setAllClasses(data))
    },[])
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Course Name</th>
                        <th>Instructor</th>
                        <th>Price</th>
                        <th>Available seat</th>
                        <th>Instructor Email</th>
                        <th>Status</th>
                        <th>Action</th>

                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allClasses?.map((singleClass,index) =>  <tr key={singleClass._id}>
                        <th>
                            <label>
                                {index + 1 }
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={singleClass.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{singleClass.name}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                           {singleClass.instructor}
                        </td>
                        <td>$ {singleClass.price}</td>
                        <td>{singleClass.seat}</td>
                        <td>{singleClass.email}</td>
                        <td> {singleClass.status}</td>
                        
                        <th className=''>
                            <button className="btn btn-ghost btn-xs">Approved</button>
                            <button className="btn btn-ghost btn-xs">Deny</button>
                            <button className="btn btn-ghost btn-xs">FeedBack</button>
                        </th>
                    </tr>)
                    }
                </tbody>
                

            </table>
        </div>
    );
};

export default ManageClass;