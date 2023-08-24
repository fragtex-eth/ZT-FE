import { useState, FC } from 'react';
import DataToggle from './DataToggle';
import ButtonSA from "./ButtonSA";
import { ITwoColumnData } from '../../types/Common/TwoColumnData';

const TwoColumnData: FC<ITwoColumnData> = ({ data, data2, title, toggleOptions, buttonText }) => {
  const [input, setInput] = useState<string>(toggleOptions[0]);
  const [activeData, setActiveData] = useState(data);
  
  const handleToggle = (value: string) => {
    setInput(value);
    setActiveData(value === toggleOptions[0] ? data : data2);
  };

  const maxNumber = Math.max(...activeData.map(item => item.number));

  return (
    <div className="container mx-auto p-7 bg-white text-left bShadow2">
      <div className="flex justify-between">
        <h4 className="text-3xl font-bold">{title}</h4>
        <DataToggle onToggle={handleToggle} options={toggleOptions} selectedValue={input} />
      </div>
      <table className="min-w-full divide-y divide-transparent mt-5 mb-5">
        <tbody className="">
          {activeData.map((row, index) => (
            <tr key={index} className="flex justify-between text-left text-xl">
              <td className="py-2 w-4/5 relative">
              <span className="relative z-10 inline-block w-full">
                <span className="relative z-20 pl-3 ">{row.country}</span>
                <div
                  className="bg-yellow-100 absolute bottom-0 left-0 z-10 h-full rounded"
                  style={{
                    width: `${(row.number / maxNumber) * 100 * 0.7}%`
                  }}
                ></div>
                </span>
              </td>
              <td className="py-0 w-1/5">{row.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ButtonSA name={buttonText} onClick={() => console.log("expand")} />
    </div>
  );
};

export default TwoColumnData;
