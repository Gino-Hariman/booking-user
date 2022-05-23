import Breadcrumbs from '@/components/Breadcrumbs';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';

const DualLayout = ({ children }) => {
  const router = useRouter();
  console.log('router 12', router.query);
  return (
    <div className="h-screen relative">
      <Navbar />
      <div className="px-8 flex pt-nav items-center justify-center h-full bg-success-BG">
        <div className="space-y-8 hidden lg:inline-block w-6/12">
          <Breadcrumbs />
          <div className="relative h-[calc(100vh_-_56px_-_56px_-_32px_-_32px)]">
            <img
              style={{ objectFit: 'cover' }}
              className="relative rounded-r-4 overflow-hidden"
              src={router.query.image}
              alt="Picture of the author"
            />
          </div>
        </div>

        <div className="flex w-6/12 items-center">{children}</div>
      </div>
    </div>
  );
};

export default DualLayout;
