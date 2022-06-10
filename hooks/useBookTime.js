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
    // const selectedIndex = selected.indexOf(item);
    // let newSelected = [];
    // if (selectedIndex === -1) {
    //   newSelected = newSelected.concat(selected, item);
    // } else if (selectedIndex === 0) {
    //   newSelected = newSelected.concat(selected.slice(1));
    // } else if (selectedIndex === selected.length - 1) {
    //   newSelected = newSelected.concat(selected.slice(0, -1));
    // } else if (selectedIndex > 0) {
    //   newSelected = newSelected.concat(
    //     selected.slice(0, selectedIndex),
    //     selected.slice(selectedIndex + 1)
    //   );
    // }
    // setSelected(newSelected);
    if (selected === item) return setSelected(undefined);
    return setSelected(item);
  };

  return { selected, handleSelect, handleSelectAllClick };
};

export default useBookTime;
