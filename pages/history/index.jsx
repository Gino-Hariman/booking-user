import Content from '@/components/Container/Content';
import EmptyStatePage from '@/components/EmptyStatePage';
import { Field, Group } from '@/components/List';

import PageLayout from '@/layout/PageLayout';
import axios from 'axios';

export const getServerSideProps = async ({ req, query }) => {
  const token = req.cookies.token;

  const data = await axios
    .get(`${process.env.NEXT_PUBLIC_MAIN_HOST}/book/history`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data)
    .catch((err) => console.log('err123', err.response));

  return {
    props: { data },
  };
};

const History = ({ data }) => {
  if (!Boolean(data.length))
    return (
      <EmptyStatePage
        title="History"
        btnTitle="Find New"
        contentTitle="History is still empty"
      />
    );

  return (
    <Content title="History">
      <Group>
        {data.map((item) => (
          <Field
            key={item.order_id}
            label={`ID: ${item.order_id}`}
            value={`${item.name_location} - ${item.spot_name}`}
            status={item.order_status}
            dateTime={{ date: item.date, time: item.time }}
            note={{ acceptBy: item.handle_by, note: item.note }}
          />
        ))}
      </Group>
    </Content>
  );
};

History.layout = PageLayout;

export default History;
