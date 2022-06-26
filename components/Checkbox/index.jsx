import classNames from '@/helpers/classNames';
import { CheckIcon } from '@heroicons/react/solid';

const Checkbox = ({ title, isChecked, onClick, isDisabled }) => {
  console.log('isDisabled', isDisabled);
  return (
    <div
      onClick={onClick}
      className={classNames(
        isDisabled &&
          'disabled-checkbox pointer-events-none cursor-not-allowed',
        isChecked ? 'checked-input' : 'unchecked-input',
        'flex relative items-center p-3 cursor-pointer'
      )}
    >
      <input
        disabled={isDisabled}
        checked={isChecked}
        className="absolute opacity-0 w-6 h-6 border rounded-sm focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left"
        type="checkbox"
        // onClick={onClick}
      />
      <div
        className={classNames(
          isDisabled && 'disabled-checkbox',
          isChecked ? 'checked-input' : 'unchecked-input',
          'checkbox rounded-1 border-2 rounded-md  w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2'
        )}
      >
        <CheckIcon className="icon hidden fill-current  w-4 h-4 text-info-600 pointer-events-none " />
      </div>
      <p
        className={classNames(
          isDisabled ? 'text-gray-300' : 'text-gray-700',
          'form-check-label text-md-3 font-medium text-center'
        )}
      >
        {title}
      </p>
    </div>
  );
};

export default Checkbox;
