import { useState, useCallback } from "react";

const Switch = ({
  onLabel = "",
  offLabel = "",
  onColor = "bg-green-500",
  offColor = "bg-gray-300",
  thumbColor = "bg-white",
  width = "w-22",
  height = "h-8",
  thumbSize = "w-5 h-5",
}) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = useCallback(() => {
    setIsOn((prev) => !prev);
  }, []);

  return (
    <div
      role="switch"
      aria-checked={isOn}
      tabIndex={0}
      className={`${width} ${height} flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 relative ${
        isOn ? onColor : offColor
      }`}
      onClick={toggleSwitch}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          toggleSwitch();
        }
      }}
    >
      {/* Text with opacity effect */}
      <span
        className={`absolute w-full text-center text-xs font-semibold transition-all duration-300 p-3 ${
          isOn ? "opacity-0 text-[11px] text-right" : "opacity-100 text-right"
        }`}
      >
        {offLabel}
      </span>
      <span
        className={`absolute w-full text-xs font-semibold transition-all duration-300 ${
          isOn ? "opacity-100 text-left ml-2" : "opacity-0"
        }`}
      >
        {onLabel}
      </span>

      {/* Circle with sliding effect */}
      <div
        className={`${thumbSize} ${thumbColor} rounded-full shadow-md transform transition-transform duration-300 absolute z-10 ${
          isOn ? "translate-x-14" : "translate-x-1"
        }`}
      ></div>
    </div>
  );
};

export default Switch;