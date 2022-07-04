import Navbar from '@/components/Navbar';
import Image from 'next/image';

const AuthLayout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <div className="mt-nav flex items-center relative min-h-[calc(100vh_-_76px)] bg-shade-BG ">
        <div className="hidden sm:block relative min-h-[calc(100%_-_56px_-_56px)] w-2/5 sm:w-6/12">
          <img
            style={{ objectFit: 'cover' }}
            className="relative rounded-r-4 overflow-hidden"
            src={'/images/login.png'}
            alt="Picture of the author"
          />
        </div>
        <div className="flex w-full sm:w-3/5 md:w-6/12 items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
