import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import { imageUpload } from '../../api/uploadImage';
import { classapi } from '../../api/classapi';


const AddClass = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, } = useForm();


    const onSubmit = (data) => {
        // console.log(data);
        imageUpload(data.image[0])
            .then(res => {
                // console.log(data)
                if (res.success) {
                    const { name, instructor, email, price, seat,status } = data;
                    const classData = { name, instructor, email, price: parseFloat(price), seat: parseFloat(seat),status, image: res.data.display_url }
                    classapi(classData)
                        .then(data => console.log(data))
                        .catch(error => console.log(error.message))
                }
            })


    }
    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name</span>
                        </label>
                        <input type="text" {...register("instructor",)} className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email</span>
                        </label>
                        <input type="text" {...register("email",)} className="input input-bordered w-full " />
                    </div>
                </div>
                <div className='flex'>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seat</span>
                        </label>
                        <input type="number" {...register("seat", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>

                <div className='flex gap-5 items-center'>
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Item Image</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Status</span>
                        </label>
                        <select {...register("status", { required: true })}>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    )
}

export default AddClass