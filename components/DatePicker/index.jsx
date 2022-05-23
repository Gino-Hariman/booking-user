import { dateFormat } from '@/utils/dateTimeConfig';
import dayjs from 'dayjs';
import React, { useState, useEffect, useRef } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
// import 'pikaday/css/pikaday.css';
// import dynamic from 'next/dynamic';
// const Pikaday = dynamic(() => import('pikaday'));

// const disabledDate = () => {
//   if (new Date().getHours() >= 15)
//     return [{ from: new Date(2000, 1, 1), to: add(new Date(), { days: 1 }) }];
//   return [
//     {
//       from: new Date(2000, 1, 1),
//       to: new Date(),
//     },
//   ];
// };

const DatePicker = ({ onChange }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs().add(1, 'day'));
  const inputRef = useRef();
  const [focused, setFocused] = React.useState();
  useEffect(() => {
    // onChange(dayjs(selectedDate).format(dateFormat));
  }, [selectedDate]);

  const onValueChange = (val) => {
    setSelectedDate(val);
    // console.log('value', val);
    onChange(dayjs(val).format(dateFormat));
  };

  const disabledDate = () => {
    if (new Date().getHours() >= 15)
      return [
        {
          from: new Date('2000', '01', '01'),
          to: new Date(),
        },
      ];

    return [
      {
        from: new Date('2000', '01', '01'),
        to: dayjs().subtract(1, 'day').toDate(),
      },
    ];
  };
  // useEffect(() => {
  //   console.log(inputRef, window);
  //   if (inputRef.current) {
  //     const pikaday = new Pikaday({
  //       field: inputRef.current,
  //       container: document.getElementById('datePickerContainer'),
  //     });
  //     // pikaday.show();
  //   }
  // }, []);
  // console.log('date', dayjs(selectedDate).format(dateFormat));

  return (
    <DayPicker
      mode="single"
      disabled={disabledDate()}
      selected={selectedDate}
      onSelect={onValueChange}
      onChange={onValueChange}
    />
  );
};
export default DatePicker;
