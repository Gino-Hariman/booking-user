import Navbar from '@/components/Navbar';

const PageLayout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <div className="relative w-full mt-nav bg-no-repeat bg-cover bg-fixed  flex items-start justify-center min-h-[calc(100vh_-_76px)]">
        <div className="w-full h-full min-h-[calc(100vh_-_76px_-_80px)] m-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
