import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
// import useClass from '../../hooks/useClass';

const SingleCourse = ({ item }) => {
    const { user,role } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // const [, refetch] = useClass()
    const { name, image, instructor, price, seat } = item;

    
    const handleAddClass = (item) => {
        if (user && user.email) {
            const classItem = { classId: item._id, name, image, instructor, price, seat, email: user.email }
            fetch('https://sport-zone-server.vercel.app/booking', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(classItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        // refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Course is added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className={`card  bg-base-100 shadow-xl ${item?.seat == 0 && 'bg-red-500'}`}>
            <figure><img src={item.image} alt="Shoes" className='w-full h-52' /></figure>
            <div className="card-body">
                <h2 className="card-title">{item.className}</h2>
                <p>Instructor Name : {item.instructor}</p>
                <div className='flex'>
                    <p>price :{item.price} </p>
                    <p>available Seta : {item.seat}</p>
                </div>
                <button disabled={item?.seat == 0 || role === 'admin' || role === 'instructor'} className="btn border-none text-white  bg-blue-500 py-1 hover:bg-blue-600 rounded" onClick={() => handleAddClass(item)}> Join Us</button>

            </div>
        </div>
    );
};

export default SingleCourse;