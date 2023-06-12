import React, { useContext, useEffect, useState } from 'react';
import { getClassByEmail } from '../../api/classapi';
import { AuthContext } from '../../Provider/AuthProvider';
import SingleClass from '../../components/PopularClass/SingleClass';
import { Link } from 'react-router-dom';

const MyClasses = () => {
    const {user} = useContext(AuthContext)
    const [classData, setClassData] = useState([])
    useEffect(()=>{
        getClassByEmail(user?.email)
        .then(data => setClassData(data))
    },[user])
    // console.log(classData);
    const handleUpdate=(id)=>{
        console.log(id);
    }
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
                        <th>Instructor Email</th>
                        <th>Status</th>
                        <th>Total Student</th>
                        <th>Action</th>
                        <th>Feedback</th>

                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        classData?.map((singleClass,index) =>  <tr key={singleClass._id}>
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
                        <td>{singleClass.email}</td>
                        <td> {singleClass.status}</td>
                        <td>{singleClass.totalStudent}</td>
                        
                        <th>
                           <Link to={`/dashboard/update/${singleClass._id}`}> <button className="btn btn-ghost btn-xs" >update</button></Link>
                        </th>
                        <td>{singleClass?.feedback?.feedbackData}</td>
                    </tr>)
                    }
                </tbody>
                

            </table>
        </div>
    );
};

export default MyClasses;