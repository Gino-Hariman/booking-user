import Image from 'next/image';
// import ProcessingImage from '@/public/images/processing.png';
import { Button } from '@/components/Buttons';
import PageLayout from '@/layout/PageLayout';
import { useRouter } from 'next/router';

const BookingProcessing = () => {
  const router = useRouter();

  const onClick = () => {
    return router.push('/my-seat');
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mt-20 w-[340px] h-[340px]">
        <img
          style={{ objectFit: 'cover' }}
          className="w-[340px] h-[340px] mt-20"
          src={'/images/processing.png'}
          alt="processing image"
          // width={340}
          // height={340}
          // objectFit="responsive"
        />
      </div>
      <div className="my-16 flex flex-col items-center justify-center text-black">
        <h1 className="mb-3  text-xxl-1 font-bold text-primary-500">
          Your Booking is on Processing
        </h1>
        <p className="text-lg-3 font-medium text-primary-300">
          Please kindly wait, we will notify
        </p>
        <p className="text-lg-3 font-medium text-primary-300">
          you as soon as possible
        </p>
      </div>
      <Button title="Continue" onClick={onClick} />
    </div>
  );
};

BookingProcessing.layout = PageLayout;

export default BookingProcessing;
