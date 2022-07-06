import React, { Fragment, useEffect } from 'react';

interface Props {
  name: string;
  label: string;
  register: any;
  errors: any;
  css: string;
  options: any;
  defaultValueOption: any;
  keyOption: any;
  valueOption: any;
}

function Select({
  name,
  label,
  css,
  register,
  errors,
  options,
  defaultValueOption,
  keyOption,
  valueOption,
}: Props) {
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
          <select
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            {...register(name)}
            defaultValue={defaultValueOption}
          >
            {options.map((option: any) => (
              <option key={option[keyOption]} value={option[keyOption]}>
                {option[valueOption]}
              </option>
            ))}
          </select>
          <p className="text-red-400 text-sm mt-1">{errors[name]?.message}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Select;
