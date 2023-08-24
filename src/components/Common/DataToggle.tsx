import React from 'react';
import { IDataToggleProps } from '../../types/Common/DataToggle';

const DataToggle: React.FC<IDataToggleProps> = ({ options, onToggle, selectedValue, className }) => {
  return (
    <div className={`bg-white px-4 py-2 rounded-md flex justify-evenly space-x-2 px-1.5 text-xl ${className || ''}`}>
      {options.map((option) => (
        <button className={`px-2 py-0.5 min-w-15 bg-gray-50  ${option === selectedValue ? ' bg-zinc-200' : ''}`} key={option} onClick={() => onToggle(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default DataToggle;
