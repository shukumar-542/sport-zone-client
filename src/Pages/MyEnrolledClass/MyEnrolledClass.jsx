import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const MyEnrolledClass = () => {
    // const [enrolledClasses, setEnrolledClassed] = useState([])

    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const {data : enrolledClasses =[],refetch } = useQuery({
        queryKey: ['users',user?.email],
        queryFn : async () =>{
            const result = await axiosSecure.get(`payment/${user?.email}`)
            return result.data
        }
    })
 // useEffect(() => {
    //     fetch(`http://localhost:5000/payment/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setEnrolledClassed(data))
    // }, [user])
   
    return (
        <div>
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
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolledClasses?.map((enrollClass, index) => <tr key={enrollClass._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={enrollClass.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{enrollClass.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {enrollClass.instructor}
                                </td>
                                <td>$ {enrollClass.price}</td>

                               

                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyEnrolledClass;