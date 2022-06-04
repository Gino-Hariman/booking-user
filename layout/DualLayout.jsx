import Breadcrumbs from '@/components/Breadcrumbs';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';

const DualLayout = ({ children }) => {
  const router = useRouter();
  console.log('router 12', router.query);
  return (
    <div className="h-screen relative">
      <Navbar />
      <div className="w-full m-auto max-w-[90%] px-8 pt-nav flex flex-col  h-full bg-success-BG">
        <div className="my-[32px]">
          <Breadcrumbs />
        </div>
        <div className="flex justify-center items-center gap-16">
          <div className="space-y-8 hidden lg:inline-block w-6/12">
            <div className="relative  h-[calc(100vh_-_56px_-_56px_-_32px_-_32px)]">
              <img
                className="relative rounded-r-4 h-full overflow-hidden"
                src={router.query.image}
                alt="Picture of the author"
              />
            </div>
          </div>

          <div className="flex w-6/12 ">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DualLayout;
