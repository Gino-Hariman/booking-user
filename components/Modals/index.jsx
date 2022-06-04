import { XIcon } from '@heroicons/react/solid';
import { Button } from '../Buttons';

const Modals = ({ title, handleCloseModal, children }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className=" rounded-5 shadow-lg relative flex flex-col w-[869px] bg-shade-FG">
            {/*header*/}
            <div className="flex items-start justify-between pt-8 px-12">
              <h3 className="text-lg-3 text-gray-800 font-semibold">{title}</h3>
              <div
                className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold cursor-pointer"
                onClick={handleCloseModal}
              >
                <XIcon width={24} className="text-gray-500" />
              </div>
            </div>
            {/*body*/}
            <div className="py-8 px-12">
              {children}
              {/* <div className="flex items-center justify-center mt-12">
                <Button title="Continue" onClick={handleCloseModal} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className="opacity-25 fixed inset-0 z-40 bg-shade-40"
        onClick={handleCloseModal}
      ></div>
    </>
  );
};

export default Modals;
