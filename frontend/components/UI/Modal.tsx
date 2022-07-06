import { XIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';

interface Props {
  children: any;
  openModal: boolean;
  closeModal: any;
  titleModal: string;
}
function Modal({ children, openModal, titleModal, closeModal }: Props) {
  const [showModal, setShowModal] = useState(openModal);
  useEffect(() => {
    setShowModal(openModal);
  }, [openModal]);

  return (
    <>
      {showModal ? (
        <>
          <div
            className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            /*onClick={closingModal}*/
          >
            <div className="relative my-6 mx-auto w-1/2">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-900 dark:text-gray-100 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{titleModal}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold"
                    onClick={() => {
                      setShowModal(false);
                      closeModal();
                    }}
                  >
                    <XIcon className="icon" />
                  </button>
                </div>
                {/*body*/}
                <div className="flex-auto px-4 lg:px-10 py-10 pt-5 ">
                  {children}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Modal;
