import { useState } from 'react';

const useBookTime = () => {
  const [selected, setSelected] = useState();

  const handleSelectAllClick = (event, datas, item) => {
    if (event.target.checked) {
      const newSelecteds = datas.map((n) => n[item]);

      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleSelect = (event, item) => {
    if (selected === item) return setSelected(undefined);
    return setSelected(item);
  };

  return { selected, handleSelect, handleSelectAllClick };
};

export default useBookTime;
