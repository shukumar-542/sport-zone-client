import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { updateProfile, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from "react-hook-form";
import { savedUser } from '../../api/auth';
import Swal from 'sweetalert2';



const auth = getAuth(app)
const Register = () => {
    const { createUser, user, setUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const pass = data.password
        const rePass = data.confirmPassword
        if (pass !== rePass) {
            Swal.fire({
                title: 'Password does not match!!',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })

            return;
        }

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                updateUser(data.name, data.photo)
                setUser({ ...user, displayName: data.name, photoURL: data.photo })
                console.log(data.name);
                const useUserDb = {
                    email: user.email,
                    displayName: data.name,
                    image: data.photo
                }
                savedUser(useUserDb)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Create SuccessFully',
                    showConfirmButton: false,
                    timer: 1500
                })
                setError('')
                navigate(from)


            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage)
            })
    }
    // update users display name and photoURl
    const updateUser = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    return (
        <div className=' mt-10 shadow-lg border w-3/4 mx-auto py-12 mb-10 rounded-md bg-gray-100 '>
            <h1 className='text-center my-4 text-3xl text-blue-500 font-bold'>Please Register</h1>


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content ">

                    <div className="  w-full   shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control w-96">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered " />
                                {errors.name && <span className="text-red-500">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} name="photo" placeholder="Photo URl" className="input input-bordered" />
                                {errors.photo && <span className="text-red-500">Photo is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/

                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "maxLength" && <span className="text-red-500">Password less than 20 character </span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-500">Password must be 6 character</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-500">Password must have one uppercase  and  one special  character</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" {...register("confirmPassword", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/

                                })} name="confirmPassword" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "maxLength" && <span className="text-red-500">Password less than 20 character </span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-500">Password must be 6 character</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-500">Password must have one uppercase  and  one special  character</span>}

                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="SignUp" />
                            </div>
                        </form>
                        <div className='text-center mb-4'>
                            <p>Already  Have Account ? <Link to="/login" className='text-blue-500'>Login</Link></p>
                        </div>
                        {
                            error && <p className='text-rose-500'>{error}</p>
                        }
                    </div>
                </div>
            </div>







            <div className='text-center my-2 text-red-500'>
                {error}
            </div>
            <div className='text-center my-2 text-green-500'>
                {success}
            </div>


        </div>
    );
};

export default Register;