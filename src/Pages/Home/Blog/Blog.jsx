import React from 'react';

const Blog = () => {
    return (
        <div className=" relative items-center justify-center w-full h-full overflow-auto">
            <div className="inset-0 h-screen bg-cover bg-center" 
               
            >
            </div>
            <div className="absolute inset-0  flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
            <div className="absolute inset-0    flex flex-col items-center justify-center">
                <div className="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center"
                   >
        
                    <div className="grid grid-cols-12 gap-1">
                        <div className="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                            <div className="border-l-4 border-gray-400 py-20 px-5 mx-2 absolute left-0">
                                <p className="italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold ">
                                    The Mysteries Of The Forest
                                </p>
                            </div>
                            <div className="text-gray-400 font-semibold text-xl mb-4">07</div>
                            <div className="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
                        </div>
                        <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                            <div className="relative bg-pink-900 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                                <div className="p-8">
                                    <p className="text-white text-xs md:text-sm lg:text-xl mb-4">
                                        Forests are truly amazing places. 
                                        Combining impressive biodiversity with natural beauty, 
                                        the woods of the world can be both captivating and perplexing. 
                                        A hike through a forest can be a relaxing way to pass an afternoon or, 
                                        sometimes, a glimpse into the unknown.
                                    </p>
                                    <div className="bottom-0 absolute p-2 right-0">
                                        <button className="opacity-75 bg-gray-100 hover:bg-pink-900 hover:text-white text-sm font-bold py-2 px-4 rounded inline-flex items-center">
                                            
                                            <span>LEARN MORE</span>
                                        </button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;