import { useState } from "react";


const IconWithTooltip = ({ icon, tooltipText }) => {
  const [isHovered, setIsHovered] = useState(false);
 let hoverTimeout;

 const handleMouseEnter = () => {
   hoverTimeout = setTimeout(() => {
     setIsHovered(true);
   }, 250);
 };

 const handleMouseLeave = () => {
   clearTimeout(hoverTimeout);
   setIsHovered(false);
 };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      
        {icon}
     

      {isHovered && (
        <div className="absolute bg-gray-800 text-white p-2 text-sm rounded-xl shadow-md text-nowrap">
          {tooltipText}
        </div>
      )}
    </div>
  );
};


export default IconWithTooltip;
