import { FC } from 'react';
import ButtonSA from "./ButtonSA";
import { IThreeColumnData } from '../../types/Common/ThreeColumnData';

const ThreeColumnData: FC<IThreeColumnData> = ({ data, title, buttonText }) => {
  return (
    <div className="container mx-auto p-7 bg-white text-left bShadow2">
      <h4 className="text-3xl font-bold">{title}</h4>
      <table className="min-w-full divide-y divide-transparent my-5 text-xl mb-8">
        <thead className="">
          <tr className="text-black text-left ">
            <th className="font-normal py-3">Email</th>
            <th className="font-normal py-3">Friends Invited</th>
            <th className="font-normal py-3">Country</th>
          </tr>
        </thead>
        <tbody className="">
          {data.map((row, index) => (
            <tr key={index} className=''>
              <td className="py-3">{row.email}</td>
              <td className="py-3">{row.friendsInvited}</td>
              <td className="py-3">{row.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ButtonSA name={buttonText} onClick={() => console.log("expand")} />
    </div>
  );
};

export default ThreeColumnData;
