import { Button } from '@/components/Buttons';
import Content from '@/components/Container/Content';
import { Field, Group } from '@/components/List';
import Modals from '@/components/Modals';
import EditProfile from '@/components/Modals/template/EditProfile';
import changeProfileLable from '@/helpers/changeProfileLabel';
import usePutQuery from '@/hooks/usePutQuery';
import PageLayout from '@/layout/PageLayout';

import axios from 'axios';
import { useState } from 'react';

export const getServerSideProps = async ({ req, query }) => {
  const email = req.cookies.email;
  const token = req.cookies.token;

  if (!email || !token) {
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
    .then((res) => {
      console.log('res', res.data[0]);
      return res.data[0];
    })
    .catch((err) => console.log('err123', err.response));

  // if(!Boolean(data)) {
  //   return {
  //     redirect: {
  //       destination: '/auth/login',
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: { data },
  };
};

const Profile = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    // setIsPresent(0);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const editMutation = usePutQuery('/students');

  const handleEditProfile = () => {
    editMutation.mutate();
  };
  console.log('data99', data);
  return (
    <>
      <Content title="Profile">
        <Group>
          {Object.entries(data).map((entry) => {
            const [key, value] = entry;
            if (key === 'id_program') return;
            return (
              <Field key={key} label={changeProfileLable(key)} value={value} />
            );
          })}
        </Group>
        <Button title="Edit Profile" onClick={handleOpenModal} />
      </Content>
      {showModal && (
        <Modals
          title="Edit Profile"
          setShowModal={setShowModal}
          handleCloseModal={handleCloseModal}
        >
          <EditProfile defaultValue={data} />
        </Modals>
      )}
    </>
  );
};

Profile.layout = PageLayout;

export default Profile;
