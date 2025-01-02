import React from "react";
import check from "../assets/check-mark.png";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='flex flex-col items-center bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md'>
        {/* Modal Content */}
        {/* <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold'>Modal Title</h2>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-800 transition'
          >
            ✖
          </button>
        </div> */}
        <img src={check} width={100} alt='' />
        <p className='text-2xl text-gray-500 mt-1 font-semibold'>Successful!</p>
        <p className='mt-8 text-gray-500'>
          You have successfully submitted message!
        </p>
        {/* Footer */}
        <div className='mt-6 flex justify-end gap-2'>
          <button
            onClick={onClose}
            className='w-36 py-2 font-semibold bg-orange-400 text-white rounded-md hover:bg-orange-500 transition'
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
