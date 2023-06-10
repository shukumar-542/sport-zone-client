import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import './payment.css'
import { useLocation } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_stripe_publish_key);
const Payment = () => {
    let { state } = useLocation();
    // console.log(state);
    return (
        <div className='w-50 mx-auto'>
            <Elements stripe={stripePromise}>
                <CheckoutForm singleClass={state.singleClass} />
            </Elements>
        </div>
    );
};

export default Payment;