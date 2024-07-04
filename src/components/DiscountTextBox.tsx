import React, { useRef } from 'react';

function DiscountTextBox({ onChange, value, errorMessage }:{value: string, errorMessage: string, onChange: (value: string) => void}) {
  const { current: handleChange } = useRef((ev: React.FormEvent<HTMLInputElement>) => {
    const { value } = ev.currentTarget;
    onChange(value);
  });

  return (
    <div className='flex flex-col items-start h-20'>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={`p-2 border ${errorMessage !== '' ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errorMessage && <span className="text-red-500">{errorMessage}</span>}
    </div>
  );
}

export default DiscountTextBox;
