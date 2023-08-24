import { InfoItem } from "../Common/InfoItem";
import { insightsData } from "../../utils/MockData/insightsData";

function InsightCardsContainer() {
    return (
        <div className="flex bg-white p-7 rounded-md flex-col bShadow2">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <h2>ZooTools insights</h2>
                    <h3>Making analytics simple and actionable</h3>
                </div>
                <button className="text-black text-lg rounded-xl font-normal border-2 border-neutral-400 my-2 bg-white">Ask questions</button>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-10">
                {insightsData.map((item, index) => (
                    <InfoItem 
                        key={index}
                        imgSrc={item.imgSrc}
                        bgColor={item.bgColor}
                        heading={item.heading}
                        text={item.text}
                        tip={item.tip}
                    />
                ))}
            </div>
        </div>
    );
}

export default InsightCardsContainer;
