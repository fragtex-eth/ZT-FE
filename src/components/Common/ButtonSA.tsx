import { FC } from 'react';
import { IButtonSAProps } from '../../types/Common/ButtonSA';

const ButtonSA: FC<IButtonSAProps> = ({ name, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="text-black text-md font-medium px-6 py-2 bg-zinc-100 rounded-xl">
      {name}
    </button>
  );
};

export default ButtonSA;
