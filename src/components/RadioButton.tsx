import React, { useRef } from 'react';

function RadioButton({ title, selectedItem, items, onSelect }:{title: string, selectedItem: string, items: string[], onSelect: (value: string) => void}) {
  const { current: handleItemSelect } = useRef((ev: React.FormEvent<HTMLInputElement>) => {
    const { value } = ev.currentTarget
    onSelect(value)
  }) 

  return (
    <fieldset className="border border-gray-300 p-4 rounded-md max-w-max">
      <legend className="text-lg font-semibold mb-2">{title}</legend>
      {items.map((item: string) => (
        <div key={item} className="flex items-center mb-2">
          <input
            type="radio"
            id={item}
            name={item}
            value={item}
            checked={item === selectedItem}
            onChange={handleItemSelect}
            className="mr-2 text-indigo-600 border-gray-300 focus:ring-indigo-500 cursor-pointer"
          />
          <label htmlFor={item} className="text-sm cursor-pointer">{item}</label>
        </div>
      ))}
    </fieldset>
  );
}

export default RadioButton;
