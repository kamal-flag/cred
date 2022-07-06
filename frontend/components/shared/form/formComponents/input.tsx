import React, { Fragment, useEffect, useState } from 'react';

interface Props {
  name: string;
  label: string;
  register: any;
  errors: any;
  css: string;
  defaultValueInput: any;
}
function Input({
  name,
  label,
  register,
  errors,
  css,
  defaultValueInput,
}: Props) {
  const [valueReceived, setValueReceived] = useState(defaultValueInput);

  useEffect(() => {
    setValueReceived(defaultValueInput);
  }, [defaultValueInput]);
  return (
    <Fragment>
      <div className={css}>
        <div className="relative w-full mb-3">
          <label
            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor={name}
          >
            {label}
          </label>
          <input
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            {...register(name)}
            defaultValue={valueReceived}
          />
          <p className="text-red-400 text-sm mt-1">{errors[name]?.message}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Input;
