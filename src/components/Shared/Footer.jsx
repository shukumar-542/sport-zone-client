import footer from '../../assets/footer.svg'
import { AiFillFacebook } from 'react-icons/ai';
import { FaGooglePlusG } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
const Footer = () => {
    return (
        <div className='bg-[#2D2D2D] my-container'>
            <footer className=" grid grid-cols-1 md:grid-cols-3 py-10 gap-10 justify-between  ">

                <div className=''>
                    <span className="text-4xl text-white font-bold ">Sport <span className='text-blue-600'>Z</span>one</span>
                    <p className='text-white'>Frequently updated and covers sports ranging from football,
                        basketball, baseball, and more. Fantasy and betting also included.
                        Offers sports news for four other countries too, such as Canada and China.</p>
                    <div className='mt-5 flex gap-5'>
                        <div className='bg-[#3C3C3C] p-4 hover:bg-blue-600 cursor-pointer'>
                            <AiFillFacebook className='text-white text-xl'></AiFillFacebook>
                        </div>
                        <div className='bg-[#3C3C3C] p-4 hover:bg-red-400 cursor-pointer'>
                            <FaGooglePlusG className='text-white text-xl'></FaGooglePlusG>
                        </div>
                        <div className='bg-[#3C3C3C] p-4 hover:bg-blue-600 cursor-pointer'>
                            <AiOutlineTwitter className='text-white text-xl'></AiOutlineTwitter>
                        </div>
                    </div>
                </div>

                <div className='text-white space-y-4'>
                    <h1 className='text-white text-2xl'>About SportZone</h1>
                    <div className='flex  gap-5'>
                        <p>Monday - Friday</p>
                        <p>04:00 - 12:00</p>
                    </div>
                    <div className='flex  gap-5'>
                        <p>Saturday</p>
                        <p>14:00 - 21:00</p>
                    </div>
                    <div className='flex  gap-5'>
                        <p>Sunday</p>
                        <p>Holiday</p>
                    </div>
                </div>

                <div className='  '>
                    <h1 className='text-2xl text-white'>UseFull Links</h1>
                    <div className='space-y-4 mt-4 cursor-pointer text-white'>
                        <p className='hover:text-blue-600'>Membership Offer</p>
                        <p className='hover:text-blue-600'>Training Scheduled</p>
                        <p className='hover:text-blue-600'>Intern  Offer</p>
                    </div>
                    <div className="form-control mt-5">
                        <div className="input-group">
                            <input type="text" placeholder="Email....." className="input input-bordered bg-gray-100" />
                            <button className="btn ">
                                Send
                            </button>
                        </div>
                    </div>
                </div>


            </footer>
            <div className='text-white text-center pb-4'>
                <p>&copy; All Copyright reserved by SportZone</p>
            </div>
        </div>
    );
};

export default Footer;