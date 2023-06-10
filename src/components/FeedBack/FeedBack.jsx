import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
// import { feedback } from '../../api/classapi';

const FeedBack = () => {
    const {state} = useLocation();
    // const id =state.id
    // console.log(id);
    const handleFeedback=(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        // feedback(id,name)
        // .then(data =>{
        //     console.log(data);
        // })
    }

    return (
        <div className='w-1/2 mx-auto'>
            <h1>Send Your Feedback</h1>
            <form onSubmit={handleFeedback} className=''>
                    <div className="mt-2 text-center">
                        <p className="text-sm text-gray-500">
                            <textarea name='name' className="textarea textarea-bordered w-full" placeholder="Text 20 characther"></textarea>
                        </p>
                    </div>
                    <div className="mt-4 text-right">
                        <button
                            type="submit"
                            className="inline-flex  justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                            Send FeedBack
                        </button>
                    </div>
            </form>
        </div>
    );
};

export default FeedBack;