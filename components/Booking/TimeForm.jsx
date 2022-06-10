import useGetQuery from '@/hooks/useGetQuery';
import { LoadingModal } from '../Loading';
import { useEffect } from 'react';
import useBookTime from '@/hooks/useBookTime';
import times from '@/_mocks/times';
import dayjs from 'dayjs';

const { default: Checkbox } = require('../Checkbox');

const TimeForm = ({ values, onChange }) => {
  const { selected, handleSelect } = useBookTime();
  const { data, isFetching } = useGetQuery(
    ['booking', 'time', 'list'],
    `/location/time?id_location=${values.id_location}&date=${values.date}`
  );

  useEffect(() => {
    // const splitDate = selected[0].split(' - ');
    onChange(selected);
  }, [selected]);

  if (isFetching) return <LoadingModal />;

  return (
    <div class="w-full grid grid-rows-6 grid-cols-time-chip grid-flow-col gap-5 ">
      {data.map((item) => {
        // const isItemSelected = selected.indexOf(item.id_time) !== -1;

        console.log('');

        return (
          <Checkbox
            isChecked={item.id_time === selected}
            isDisabled={Boolean(item.is_disabled)}
            title={item.time}
            onClick={(event) => handleSelect(event, item.id_time)}
          />
        );
      })}
    </div>
  );
};

export default TimeForm;
