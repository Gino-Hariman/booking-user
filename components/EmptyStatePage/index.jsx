import Content from '../Container/Content';
// import ProcessingImage from '@/public/images/processing.png';
import { useRouter } from 'next/router';
import { Button } from '../Buttons';

const EmptyStatePage = ({ title, btnTitle, contentTitle }) => {
  const router = useRouter();
  const handleClick = () => {
    return router.push('/');
  };
  return (
    <Content title={title}>
      <div className="mt-20 w-[340px] h-[340px]">
        <img
          // className="mt-20"
          className="w-[340px] h-[340px]"
          style={{ objectFit: 'contain' }}
          src={'/images/processing.png'}
          alt="processing image"
        />
      </div>
      <div className="my-16 flex flex-col items-center justify-center text-black">
        <h1 className="mb-3  text-xl-1 font-semibold text-primary-500">
          {contentTitle}
        </h1>
        <p className="text-lg-3 font-medium text-primary-300">
          Please kindly wait, we will notify
        </p>
        <p className="text-lg-3 font-medium text-primary-300">
          you as soon as possible
        </p>
      </div>
      <Button title={btnTitle} onClick={handleClick} />
    </Content>
  );
};

export default EmptyStatePage;
