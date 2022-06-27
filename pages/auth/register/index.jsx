import { useEffect } from 'react';
import Content from '@/components/Container/Content';
import RegisterForm from '@/components/Form/RegisterForm';
import AuthLayout from '@/layout/AuthLayout';
import axios from 'axios';

export const getServerSideProps = async ({ req }) => {
  const email = req.cookies.email;
  const token = req.cookies.token;

  if (!Boolean(email) && !Boolean(token)) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
  const data = await axios
    .get(
      `${process.env.NEXT_PUBLIC_MAIN_HOST}/students/byEmail?email=${email}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response) => {
      return response.data[0];
    });

  if (Boolean(data)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const Register = () => {
  return (
    <Content title="Input Your Data">
      <RegisterForm />
    </Content>
  );
};

Register.layout = AuthLayout;

export default Register;
