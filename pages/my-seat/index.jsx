import Content from '@/components/Container/Content';
import EmptyStatePage from '@/components/EmptyStatePage';
import { Field, Group } from '@/components/List';

import PageLayout from '@/layout/PageLayout';
import axios from 'axios';

export const getServerSideProps = async ({ req, query }) => {
  // const email = req.cookies.email;
  const token = req.cookies.token;

  const data = await axios
    .get(
      `${process.env.NEXT_PUBLIC_MAIN_HOST}/book/filtered?status=pending&page=0`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => {
      console.log('res data', res.data);
      return res.data;
    })
    .catch((err) => console.log('err123', err.response));

  return {
    props: { data },
  };
};

const MySeat = ({ data }) => {
  if (!Boolean(data.length))
    return (
      <EmptyStatePage
        title="My Seat"
        btnTitle="Find New"
        contentTitle="Seat is still empty"
      />
    );
  return (
    <Content title="My Seat">
      <Group>
        {data.map((item) => (
          <Field
            key={item.order_id}
            label={`ID: ${item.order_id}`}
            value={`${item.name_location} - ${item.spot_name}`}
            status={item.order_status}
            dateTime={{ date: item.date, time: item.time }}
          />
        ))}
      </Group>
    </Content>
  );
};

MySeat.layout = PageLayout;

export default MySeat;
