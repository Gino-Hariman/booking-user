import { useAuth } from '@/context/AuthenticationContext';
import { useState } from 'react';
import Cookies from 'js-cookie';
import OTPInput from './components/OTPInput';
import { Button } from '../Buttons';

const VerifyOTPForm = ({ token, emailTitle }) => {
  const [inputData, setInputData] = useState('');
  const { login } = useAuth();
  const handleVerifyOTP = () => {
    console.log('inputData', inputData);
    login(
      {
        otp: inputData,
        token,
      },
      '/auth/register'
    );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="mb-8 text-black-40 break-words text-center text-primary-300">
        Enter the verification code that send to <br /> {emailTitle}
      </p>

      <OTPInput isNumberInput length={6} onChangeOTP={setInputData} />

      <div className="mt-8 mb-6">
        <Button
          disable={inputData?.length !== 6}
          onClick={handleVerifyOTP}
          title={'Continue'}
        />
      </div>
    </div>
  );
};

export default VerifyOTPForm;
