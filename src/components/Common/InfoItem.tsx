import { IInfoItemProps } from "../../types/Common/InfoItem";

export const InfoItem: React.FC<IInfoItemProps> = ({ imgSrc, bgColor, heading, text, tip }) => {
    return (
        <div className="caruselItem max-w-1/2 rounded-md">
            <div className="flex items-center p-4 bg-white">
                <img src={imgSrc} className={`w-12 p-0.5 ${bgColor} rounded-[10px] justify-center`} alt={heading} />
                <span className="ml-5 text-black text-xl font-normal text-left">
                    <span className="font-bold">{heading}</span> {text}
                </span>
            </div>
            <article className="body p-4 text-left  leading-4 bg-zinc-100">
                <span className="text-neutral-950 text-base">{tip}</span>
            </article>
        </div>
    );
};