import React, { useEffect, useState } from 'react';
import { getAllClasses, updateClassStatus, updateClassStatusDeny } from '../../../api/classapi';
import { useQuery } from '@tanstack/react-query';
import Modal from '../../Modal/Modal';

const ManageClass = () => {
    // const [allClasses, setAllClasses] = useState([])
    // useEffect(()=>{
    //     getAllClasses()
    //     .then(data => setAllClasses(data))
    // },[])

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

    const {data : allClasses =[], refetch} = useQuery({
        queryKey : ['classes'],
        queryFn : async ()=>{
            const result = await getAllClasses()
            return result
        }

    })
    const handleApprove =(id) =>{
        updateClassStatus(id)
        .then(data=>{
            // console.log(data);
            refetch()
        })
    }

    const handleDeny =(id)=>{
        updateClassStatusDeny(id)
        .then(data =>{
            refetch()
        })
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
                            <button onClick={()=>handleApprove(singleClass._id)}   disabled={singleClass?.status === 'deny' || singleClass?.status === 'approved'} className="btn btn-ghost btn-xs">Approved</button>
                            <button onClick={()=>handleDeny(singleClass._id)} className="btn btn-ghost btn-xs" disabled={singleClass?.status === 'approved' || singleClass?.status === 'deny'}>Deny</button>
          
                            <button className="btn btn-ghost btn-xs" onClick={()=>openModal()}>FeedBack</button>
                        </th>
                    </tr>)
                    }
                </tbody>
                

            </table>
            <Modal isOpen={isOpen} closeModal={closeModal}></Modal>
        </div>
    );
};

export default ManageClass;