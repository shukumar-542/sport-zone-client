import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const Modal = ({ isOpen, closeModal,handleModal }) => {
   

    return (
        <>
            {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg  font-medium leading-6 text-gray-900"
                                    >
                                        Send Your Feedback
                                    </Dialog.Title>
                                    <form onSubmit={handleModal}>
                                        <div className="mt-2 text-center">
                                            <p className="text-sm text-gray-500">
                                                <textarea name='modal' className="textarea textarea-bordered w-full" placeholder="Text 20 characther"></textarea>
                                            </p>
                                        </div>
                                        <div className="mt-4 text-right">
                                            <button
                                                type="submit"
                                                className="inline-flex  justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                  onClick={closeModal}
                                            >
                                                Send FeedBack
                                            </button>
                                        </div>
                                    </form>



                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default Modal;