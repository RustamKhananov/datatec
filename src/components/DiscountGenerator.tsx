import React, { useRef, useState } from 'react';

function DiscountGenerator() {
  const [code, setCode] = useState<string>('No code yet')
  const { current: generateCode } = useRef(() => {
    const random = Math.trunc(Math.random() * 10000)
    setCode(`DISCOUNT${random}`)
  });

  return (
    <div className='flex flex-col items-center justify-center space-y-4 border-solid border-2 border-indigo-600 w-40 p-2'>
      <button
        className='bg-blue-500 text-white px-4 py-2 rounded'
        type="button"
        onClick={generateCode}
      >
        Generate
      </button>
      <span>{code}</span>
    </div>
  );
}

export default DiscountGenerator;
