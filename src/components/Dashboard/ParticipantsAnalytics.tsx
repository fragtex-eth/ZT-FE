import React, { useState } from 'react';
import {
  YAxis,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import DataToggle from '../Common/DataToggle';
import PeopleIcon from '../../assets/icons/users 1.svg';
import ParticipantsMockData from '../../utils/MockData/randomParticipantsData.json';
import { IBarGraphData, ICustomTooltipProps } from '../../types/Dashboard/ParticipantsAnalytics';

const ParticipantsAnalytics: React.FC = () => {
  const [barGraphData, setBarGraphData] = useState<IBarGraphData | null>(null);
  const [showTooltip, setShowTooltip] = useState<boolean>(true);
  const [timeFrame, setTimeFrame] = useState<string>('30d');
  const options: string[] = ['1h', '24h', '30d', '60d'];

  //@ts-ignore
  const selectedData = ParticipantsMockData[timeFrame].map(item => ({
    date: item.date,
    amount: item.amount,
  }));

  const CustomTooltip: React.FC<ICustomTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length && showTooltip) {
      return (
        <div className="custom-tooltip tooltipSet w-[220px]">
          <span className="font-bold text-black text-xl">{`${payload[0].value}`}</span>{" "}
          <span className="text-xl font-normal text-black">signups</span>
          <p className="text-neutral-400 text-lg font-bold">{`${payload[0].payload.date}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col gap-y-7">
      <div className="flex justify-between items-center">
        <h1 className="flex-grow text-left">Summer referral competition</h1>
        <DataToggle
          className={'bShadow'}
          options={options}
          onToggle={setTimeFrame}
          selectedValue={timeFrame}
        />
      </div>
      <div className="bg-white p-7 rounded-md bShadow2">
        <div className="flex flex-col text-left">
          <h2 className="flex items-center font-bold">
            100,000&nbsp;
            <img src={PeopleIcon} className="h-8" alt="People heading" />
          </h2>
          <h3 className="">Participants</h3>
        </div>
        <ResponsiveContainer width="100%" height={400} className=" -mt-20">
          <BarChart data={selectedData} >
            <CartesianGrid 
              stroke="#E6E6E6"
              strokeDasharray="1 1" 
              vertical={false}
            />
            <YAxis
              type="number"
              ticks={[2500,5000,7500,10000,12500]} 
              hide={true}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={false}
              position={{ x: barGraphData?.x ? barGraphData.x - 97 : 0, y: barGraphData?.y ? barGraphData.y - 110 : 0 }}
            />
            <Bar dataKey="amount" fill="#FED500" radius={[20, 20, 20, 20]} barSize={22.5} onMouseOver={(data) => {
              setBarGraphData(data);
              setShowTooltip(true);
            }}
            onMouseLeave={() => { 
              setShowTooltip(false); 
            }}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ParticipantsAnalytics;
