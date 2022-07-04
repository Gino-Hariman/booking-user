import Navbar from '@/components/Navbar';

const HomeLayout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <div className="mt-nav bg-img relative w-full h-full bg-no-repeat bg-cover bg-fixed  flex items-center justify-center min-h-[calc(100vh_-_76px)]">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default HomeLayout;
