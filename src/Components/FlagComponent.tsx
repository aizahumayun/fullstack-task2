import type { Flag } from "../types";

type FlagProps = {
  flag: Flag;
};
const FlagComponent = ({ flag }: FlagProps) => {
  return (
    <div>      
      <div
        className={`flex ${flag.directionHorizontal ? "flex-row" : "flex-col"} w-80 h-50 border border-gray-300`}>
        <div className={`flex-1 ${flag.color1}`}></div>
        <div className={`flex-1 ${flag.color2}`}></div>
        <div className={`flex-1 ${flag.color3}`}></div>
      </div>
      <p className="font-bold mt-3">{flag.countryName}</p>
    </div>
  );
};

export default FlagComponent;
