import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/context/AuthenticationContext';
import { useRouter } from 'next/router';
import { Button } from '../Buttons';
import LoggedButton from './LoggedButton';

const Navbar = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  console.log('isAuthenticated123', isAuthenticated);
  const handleDirectToLogin = () => {
    router.push('/auth/login');
  };
  return (
    <div className="z-50 flex  justify-center items-center fixed top-0 h-nav w-full bg-shade-FG shadow-xl">
      {router.pathname.includes('/auth') ||
      router.pathname.includes('/lounge-location') ? (
        <div className="max-w-[90%] w-full self-center ml-8">
          <Link href="/" passHref>
            <a>
              <img src={'/logo.png'} style={{ objectFit: 'contain' }} />
            </a>
          </Link>
        </div>
      ) : (
        <>
          <div className="max-w-[80%] w-full self-center ml-8">
            <Link href="/" passHref>
              <a>
                <img src={'/logo.png'} style={{ objectFit: 'contain' }} />
              </a>
            </Link>
          </div>
          {isAuthenticated ? (
            <LoggedButton />
          ) : (
            <Button onClick={handleDirectToLogin} title="Login" outlined />
          )}
        </>
      )}
    </div>
  );
};

export default Navbar;
