export const ArrowButtonLeft = ({
  fillColor = "#C2D1E0",
  strokeColor = "#C2D1E0",
  arrowColor = "#FBFBFB",
}) => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Квадрат з фоном */}
      <rect x="1" y="0.5" width="31" height="31" rx="15.5" fill={fillColor} />
      {/* Квадрат з обводкою */}
      <rect
        x="1"
        y="0.5"
        width="31"
        height="31"
        rx="15.5"
        stroke={strokeColor}
      />
      {/* Стрілка */}
      <path d="M19 11L14 16L19 21" stroke={arrowColor} />
    </svg>
  );
};
