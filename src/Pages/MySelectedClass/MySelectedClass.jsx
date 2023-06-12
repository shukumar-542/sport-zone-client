import React from 'react';
import useClass from '../../hooks/useClass';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MySelectedClass = () => {
    const [addedClass, refetch] = useClass()
    // console.log(addedClass);
    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sport-zone-server.vercel.app/booking/${item._id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your class has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <div>
            <div className="h-[60px] uppercase flex justify-evenly items-center font-semibold">

            </div>
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
                            <th>Action</th>

                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addedClass?.map((singleClass, index) => <tr key={singleClass._id}>
                                <th>
                                    <label>
                                        {index + 1}
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

                                <th>
                                    <button onClick={() => handleDelete(singleClass)} className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                                <th>
                                    <Link to="/dashboard/payment" state={{singleClass}}><button className="btn btn-warning btn-sm">Pay</button></Link>

                                </th>

                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;