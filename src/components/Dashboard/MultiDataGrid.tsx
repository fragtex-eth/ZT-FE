import ThreeColumnData from "../Common/ThreeColumnData";
import TwoColumnData from "../Common/TwoColumnData";
import { leaderboardData, countryData, cityData, trafficData, behaviorData, deviceData } from "../../utils/MockData/randomUserData";
  
const MultiDataGrid: React.FC = () => {
    return (
      <div className="grid grid-cols-2 gap-14">
        <ThreeColumnData 
          data={leaderboardData}
          title="User Leaderboard" 
          buttonText="See leaderboard"
        />
        <TwoColumnData 
          data={countryData} 
          data2={cityData}
          title="Country Distribution" 
          toggleOptions={["Country", "City"]} 
          buttonText="See all countries" 
        />
        <TwoColumnData 
          data={trafficData} 
          data2={cityData}
          title="Traffic Sources" 
          toggleOptions={["Source", "City"]} 
          buttonText="See all traffic sources" 
        />
        <TwoColumnData 
          data={behaviorData} 
          data2={deviceData}
          title="Browser Behavior" 
          toggleOptions={["Browsers", "Devices"]} 
          buttonText="See all behaviors" 
        />
      </div>
    );
  };

export default MultiDataGrid;