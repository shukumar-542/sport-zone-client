import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { userToAdmin, userToInstructor } from '../../../api/auth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageUser = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const {data : users =[],refetch } = useQuery({
        queryKey: ['users',user?.email],
        queryFn : async () =>{
            const result = await axiosSecure.get('/users')
            return result.data
        }
    })
    // console.log(users);

    const handleUserToAdmin =(id)=>{
        userToAdmin(id)
        refetch()
    }
    const handleUserToInstructor = (id)=>{
        userToInstructor(id)
        refetch()
    }
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Instructor Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    users?.map((user,i) => <tr key={user._id}>
                        <th>{i+1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={()=> handleUserToInstructor(user._id)} disabled={user?.role === 'instructor'} className='btn btn-ghost btn-xs'>Make Instructor</button>
                            <button onClick={()=>handleUserToAdmin(user._id)} disabled={user?.role === 'admin'} className='btn btn-ghost btn-xs'>Make Admin</button>
                        </td>
                    </tr>)
                   }

                </tbody>
            </table>
        </div>
    );
};

export default ManageUser;