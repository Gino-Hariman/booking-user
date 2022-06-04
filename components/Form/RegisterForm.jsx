import useToast from '@/hooks/useToast';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button } from '../Buttons';
import DataForm from './DataForm';
import * as Yup from 'yup';
import usePostQuery from '@/hooks/usePostQuery';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const RegisterForm = () => {
  const { notify } = useToast();
  const router = useRouter();

  const mutation = usePostQuery('/students');

  const {
    setValue,
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        nim: Yup.string().required('Student ID is Required!'),
        nama: Yup.string().required('Student Name is Required!'),
        kelas: Yup.string().required('Student Class is Required!'),
        id_program: Yup.number(),
      })
    ),
    defaultValues: {
      nim: null,
      nama: null,
      kelas: null,
      id_program: null,
    },
  });

  const onSubmit = (data) => {
    console.log('data regis', data);
    mutation.mutate(
      { ...data, email: Cookies.get('email') },
      {
        onSuccess: (res) => {
          // notify('success', 'Register Success!');

          if (res.type === 'error') return notify('error', res.message);

          if (res.type === 'success') {
            notify('success', 'Register Success!');
            Cookies.set('token', res.loginToken);
            return router.replace('/');
          }
        },
        onError: (err) => {
          console.log('err', err);
          notify('error', 'Register Error!');
        },
      }
    );
  };

  return (
    <div className="flex flex-col items-center w-3/5">
      <DataForm
        forms={[
          {
            label: 'Student ID',
            name: 'nim',
            placeholder: 'ex. 03082180005',
            type: 'TextInput',
          },
          {
            label: 'Name',
            name: 'nama',
            placeholder: 'ex. Farandi Sutanto',
            type: 'TextInput',
          },
          {
            label: 'Class',
            name: 'kelas',
            placeholder: 'ex. 18Ti2',
            type: 'TextInput',
          },
          {
            label: 'Program',
            itemId: 'id_program',
            itemLabel: 'program_name',
            name: 'id_program',
            placeholder: 'Select your study program',
            path: '/program',
            type: 'SelectInput',
          },
        ]}
        register={register}
        getValues={getValues}
        errors={errors}
        setValue={setValue}
      />
      <div className="mt-12 text-center">
        <Button title="Continue" onClick={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
};

export default RegisterForm;
