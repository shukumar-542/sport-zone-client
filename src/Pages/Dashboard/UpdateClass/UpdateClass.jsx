import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateClass = () => {
    const updateClass = useLoaderData()
  


    const handleUpdate = (e) => {
        // console.log(data);
        e.preventDefault();
        const form = e.target;
        const name =form.updateClassName.value;
        const price = parseInt(form.price.value);
        const seat = form.seat.value;
        const newUpdatedClass = {name,seat,price};
        console.log(newUpdatedClass);
        fetch(`https://sport-zone-server.vercel.app/update/${updateClass._id}`,{
            method :"PATCH",
            headers : {"content-type" : "application/json"},
            body : JSON.stringify(newUpdatedClass)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Class update successfully!',
                  })
            }
        })
           
        }
    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl shadow-lg bg-gray-50'>
        <h1 className='my-4 text-2xl font-bold text-blue-600'>Update Your Class</h1>
        <form onSubmit={handleUpdate}>
            <div className='flex my-4'>
                <div className="form-control w-full ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name</span>
                    </label>
                    <input type="text" name='updateClassName' defaultValue={updateClass.name} placeholder="Class Name"
                       
                        className="input input-bordered w-full " />
                </div>
            </div>
            
            
            <div className='flex'>
                <div className="form-control w-full ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">Price</span>
                    </label>
                    <input type="number" name='price' defaultValue={updateClass.price} placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">Available Seat</span>
                    </label>
                    <input type="number" name='seat' defaultValue={updateClass.seat}  placeholder="Type here" className="input input-bordered w-full " />
                </div>
            </div>

            
            <input className="btn my-4 w-full border-none text-white  bg-blue-500 py-1 hover:bg-blue-600 rounded" type="submit" value="Add Item" />
        </form>
    </div>
    );
};

export default UpdateClass;