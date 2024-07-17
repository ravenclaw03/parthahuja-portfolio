// Experience.js
import ResponsibilityItem from "./ResposnibilityItem";
import {data} from "../constants/responsibility.js"

const Responsibility = () => {
  return (
    <div id="Responsibility" className="bg-black text-white min-h-screen">
      <div className="w-full max-w-screen-lg mx-auto md:pl-20 p-4 py-16">
        <h1 className="text-center text-4xl font-bold mb-10">Positions of Responsibility and Achievements</h1>
        {data.map((item, idx) => (
          <ResponsibilityItem
            key={idx}
            year={item.year}
            title={item.title}
            company={item.company}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Responsibility;
