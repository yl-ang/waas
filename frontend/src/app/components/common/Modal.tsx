import React, { ReactNode } from 'react';
import { AiOutlineClose } from 'react-icons/ai';


type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  footer: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, footer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex text-center items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white flex flex-col justify-between shadow-lg rounded-lg pb-3 px-3 pt-0 md:w-[500px] md:h-[700px] w-[90%] h-[55%]">
        <div>
            <div className='flex justify-end pt-2'>
                <AiOutlineClose onClick={onClose} className="cursor-pointer w-11 h-11 bg-gray-200 rounded-full p-3"></AiOutlineClose>
            </div>
            <div className='flex flex-col space-y-4 px-7'>
                {children}
            </div>
        </div>
        <div className="">
          {footer}
        </div>
      </div>
    </div>
  );
};

export default Modal;
