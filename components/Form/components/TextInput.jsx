import ErrorMessage from '@/components/ErrorMessage';
import classNames from '@/helpers/classNames';

const TextInput = ({
  name,
  inputType = 'text',
  placeholder,
  label,
  register = () => {},
  errors,
  getValues,
  isDisabled = false,
}) => {
  const isError = errors && errors[name];

  const r = register(name);

  return (
    <div key={name} className="mt-5 w-full">
      <label className="label" for={name}>
        {label}
      </label>

      <input
        readOnly={isDisabled}
        disabled={isDisabled}
        className={classNames(
          isError && 'error-input',
          'input disabled:text-gray-600'
        )}
        id={name}
        type={inputType}
        placeholder={placeholder}
        defaultValue={getValues(name)}
        // value={getValues(name)}
        name={r?.name}
        onBlur={r?.onBlur}
        onChange={r?.onChange}
        ref={r?.ref}
      />

      {isError && <ErrorMessage message={errors[name]?.message} />}
    </div>
  );
};

export default TextInput;
