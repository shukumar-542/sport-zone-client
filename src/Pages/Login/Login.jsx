import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";


const Login = () => {
    const { createUserWithGoogle, createUserWithGithub, loggedInUser } = useContext(AuthContext);
    const [error, setError] = useState('')

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate()

    // console.log(from);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('');
        if (!email) {
            return setError('Enter Your Email')
        }
        if (!password) {
            return setError('Enter Password')
        }

        loggedInUser(email, password)
            .then(result => {
                const user = result.user;
                navigate(from)
                // setSuccess('user Logged in successfully')
                console.log(user);
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage)
            })

        // console.log(email,password);

    }

    // handle google Login
    const handleGoogleLogin = () => {
        createUserWithGoogle()
            .then(result => {
                const user = result.user;
                navigate(from)
                console.log(user);
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage)
            })
    }

    // handle github login
    const handelGithubLogin = () => {
        createUserWithGithub()
            .then(result => {
                const user = result.user;
                navigate(from)
                console.log(user);
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage)
            })

    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className=' mt-4 border w-1/2 mx-auto py-12 mb-10 rounded-md shadow-lg bg-gray-100'>
            <h1 className='text-center my-4 text-3xl text-blue-500 font-bold'>Login</h1>

            {/* <form onSubmit={handleLogin} className='flex justify-center items-center flex-col space-y-2'>
                <div className="form-control w-1/2 ">   
                 <input type="email" name='email' placeholder="Enter Email" className="input input-bordered " />   
                </div>
                <div className="form-control w-1/2">   
                 <input type="password" name='password' placeholder="Enter Password" className="input input-bordered w-full" />   
                </div>
                <button className='btn-primary w-1/2' type='submit'>Login</button>
                <p>Don't Have an Account? <Link to="/register" state={{from : {pathname : from}}} className='text-blue-600 underline'>Register</Link></p>
            </form> */}

            <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center items-center flex-col space-y-2'>

                <div className="form-control w-1/2 ">
                    <input placeholder="Enter Email" {...register("email", { required: true })} className="input input-bordered " />
                    {errors.email && <span className="text-red-500">Email is required</span>}
                </div>
                <div className="form-control w-1/2">
                    <input placeholder="Enter Password" type="password" {...register("password", { required: true })} className="input input-bordered " />
                    {errors.password && <span className="text-red-500">Password is required</span>}

                </div>
                {errors.exampleRequired && <span>This field is required</span>}

                <input className='btn-primary w-1/2' type="submit" />
                <p>Don't Have an Account? <Link to="/register" state={{from : {pathname : from}}} className='text-blue-600 underline'>Register</Link></p>
            </form>
            <div className='text-center my-2 text-red-500'>
                {error}
            </div>
            <div className='flex flex-col w-1/2 mx-auto space-y-2  mt-10'>
                <button onClick={handleGoogleLogin} className='border border-blue-600 px-8 py-2 rounded-lg hover:bg-blue-500 '>Login With Google</button>
                <button onClick={handelGithubLogin} className='border border-blue-500 px-8 py-2 rounded-lg hover:bg-blue-500 '>Login With Github</button>

            </div>
        </div>
    );
};

export default Login;