import React, { useRef } from 'react';

function CommentTextBox({ onChange, value, rows }:{value: string, rows: number, onChange: (value: string) => void}) {
  const { current: handleChange } = useRef((ev: React.FormEvent<HTMLTextAreaElement>) => {
    const { value } = ev.currentTarget;
    onChange(value);
  });

  return (
    <div>
      <textarea
        rows={rows}
        value={value}
        onChange={handleChange}
        className='p-2 border border-gray-300 w-full'
        placeholder='PLease, enter your note here'
      />
    </div>
  );
}

export default CommentTextBox;
