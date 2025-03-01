import React from 'react';

interface InputProps {
  type: string,
  placeholder: string,
  value?: string,
  className?: string
  disabled?: boolean
  isDatalist?: boolean
}

const Input = ({ type, placeholder, value = '', className = 'w-full', disabled = false, isDatalist = false }: InputProps) => {
  return (
    value === ''
    ? (isDatalist ? (
      <>
        <input
          type={type}
          placeholder={placeholder}
          // value={value}
          disabled={disabled}
          className={`${className} disabled:bg-gray-400/40 px-5 py-2 rounded-xl border text-[20px] bg-gray-200/40 text-black placeholder:text-gray-500 focus:outline-none focus:outline-[var(--galanta-red)]`}
          list="locations"
        />
        <datalist id="locations">
          <option value="Mestské kultúrne stredisko (MsKS)" />
          <option value="Galantská knižnica" />
          <option value="Dom Matice slovenskej" />
          <option value="Neogotický kaštieľ" />
        </datalist>
      </>) :
      <input
        type={type}
        placeholder={placeholder}
        // value={value}
        disabled={disabled}
        className={`${className} disabled:bg-gray-400/40 px-5 py-2 rounded-xl border text-[20px] bg-gray-200/40 text-black placeholder:text-gray-500 focus:outline-none focus:outline-[var(--galanta-red)]`}
      />
    ) : <input
      type={type}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      className={`${className} disabled:bg-gray-400/40 px-5 py-2 rounded-xl border text-[20px] bg-gray-200/40 text-black placeholder:text-gray-500 focus:outline-none focus:outline-[var(--galanta-red)]`}
    />
  );
}

export default Input;
