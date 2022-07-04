import React, { useState } from 'react';
import ChevronUp from '@/icons/Outline/Chevron Up.svg';
import ChevronDown from '@/icons/Outline/Chevron Down.svg';

const SelectLoungeLocation = ({ data, placeholder, handleSelect }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="box-border w-full relative max-h-[56px] max-w-[468px]">
      <button
        onClick={handleClick}
        className={
          'rounded-full flex w-full justify-between items-center px-2 md:px-4 py-2 md:py-4 bg-white border-2  h-full bg-shade-FG border-shade-BD'
        }
      >
        <p className="ml-2 text-gray-700 text-md-3 md:text-sm">{placeholder}</p>
        <div className=" flex justify-center">
          {open ? (
            <ChevronDown width={20} height={20} />
          ) : (
            <ChevronUp width={20} height={20} />
          )}
        </div>
      </button>
      {open && (
        <ul
          // tabIndex="0"
          className="absolute z-40 shadow-md w-full overflow-hidden mt-2 menu text-gray-700 bg-shade-FG rounded-3 "
        >
          {data.map((item) => (
            <li
              className="hover:bg-gray-300 cursor-pointer py-4 px-6"
              onClick={() => handleSelect(item)}
              key={item.id_location}
            >
              <div className="w-full flex justify-between">
                <a>{item.name_location}</a>
                <p>{item.spot_name}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectLoungeLocation;
