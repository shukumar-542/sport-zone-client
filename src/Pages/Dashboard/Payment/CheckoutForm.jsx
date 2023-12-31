import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CheckoutForm = ({ singleClass }) => {
    const stripe = useStripe()
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const { user } = useContext(AuthContext)
    // console.log(singleClass);
    const navigate = useNavigate()

    useEffect(() => {
        if(singleClass?.price){
            axiosSecure.post("/create-payment-intent", { price : singleClass.price })
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })
        }
    }, [singleClass.price, axiosSecure])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            // console.log('error', error);
            setCardError(error.message)
        } else {
            // console.log('PaymentMethod', paymentMethod);
            setCardError('')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'unknown',
                        email: user?.email || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message)

        }
        if(paymentIntent.status === "succeeded"){
            const paymentInfo = {
                ...singleClass,
                 transactionId : paymentIntent.id,
                 data : new Date()
              }
            axiosSecure.post('/paymentBookings',paymentInfo)
            .then(res =>{
                // console.log(res.data);
                navigate('/dashboard/my-selected-class')
                Swal.fire({
                    title: 'Payment Successfully',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })

            })
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-warning' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-500">{cardError}</p>
            }
        </div>
    );
};

export default CheckoutForm;