import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyPaymentHistory = () => {
    const { user } = useContext(AuthContext);
   
    const [axiosSecure] = useAxiosSecure()
    const {data : payments =[], refetch} = useQuery({
        queryKey : ['payment', user?.email],
        queryFn : async ()=>{
            const result = await axiosSecure.get(`/payment/${user?.email}`)
            return result.data
        }

    })
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Transaction Id</th>
                            <th>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments?.map((payment,i) =><tr key={payment._id}>
                                <th>{i+1}</th>
                                <td>{payment.name}</td>
                                <td>{payment.instructor}</td>
                                <td>{payment.transactionId}</td>
                                <td>{payment.data}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPaymentHistory;