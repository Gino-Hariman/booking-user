import classNames from '@/helpers/classNames';

const ModalButton = ({ title, outlined, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        outlined
          ? 'btn border text-primary-500 bg-primary-50 border-primary-200 '
          : 'btn',
        'rounded-1/2 self-center duration-300 text-white shadow'
      )}
    >
      {title}
    </button>
  );
};

export default ModalButton;
