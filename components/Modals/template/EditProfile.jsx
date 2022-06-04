import DataForm from '@/components/Form/DataForm';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import usePostQuery from '@/hooks/usePostQuery';
import useToast from '@/hooks/useToast';
import { useRouter } from 'next/router';
import { Button } from '@/components/Buttons';
import usePutQuery from '@/hooks/usePutQuery';

const EditProfile = ({ defaultValue }) => {
  const router = useRouter();
  const { notify } = useToast();
  const {
    register,
    getValues,

    setValue,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(
      yup
        .object()
        .shape({
          nim: yup.string(),
          nama: yup.string().min(3).max(30).required('Name is required'),
          kelas: yup.string().min(3).max(10).required('Class is required'),
          id_program: yup.number(),
        })
        .required()
    ),
    defaultValues: {
      nim: defaultValue?.nim,
      nama: defaultValue?.nama,
      kelas: defaultValue?.kelas,
      id_program: defaultValue?.id_program,
    },
    mode: 'onBlur',
  });

  const editProfile = usePutQuery('/students');

  const onSubmit = (data) => {
    console.log('data edit', data);
    editProfile.mutate(data, {
      onSuccess: (res) => {
        if (res.type === 'error') return notify('error', res.message);
        if (res.type === 'success') {
          notify('success', 'Successfully add admin');
          reset();
          return router.reload();
        }
      },
      onError: (err) => {
        notify('error', 'Sorry, something went wrong!');
      },
    });
  };

  return (
    <div className="w-full relative flex-auto mb-4">
      <DataForm
        forms={[
          {
            label: 'Student ID',
            name: 'nim',
            type: 'TextInput',
            isDisabled: true,
          },
          {
            label: 'Name',
            name: 'nama',
            type: 'TextInput',
          },
          {
            label: 'Class',
            name: 'kelas',
            type: 'TextInput',
          },
          {
            label: 'Program',
            name: 'id_program',
            path: '/program',
            itemId: 'id_program',
            itemLabel: 'program_name',
            defaultValue: defaultValue?.program_name,
            type: 'SelectInput',
          },
        ]}
        getValues={getValues}
        setValue={setValue}
        register={register}
        errors={errors}
      />
      <div className="flex items-center justify-center mt-12">
        <Button
          isDisabled={!isValid}
          title="Save"
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  );
};

export default EditProfile;
