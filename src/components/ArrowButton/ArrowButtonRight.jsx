export const ArrowButtonRight = ({
  fillColor = "#C2D1E0",
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
      {/* Коло з фоном */}
      <rect x="0.5" width="32" height="32" rx="16" fill={fillColor} />
      {/* Стрілка */}
      <path d="M14 11L19 16L14 21" stroke={arrowColor} />
    </svg>
  );
};
