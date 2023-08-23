import "./Circle.css";

export const Circle = ({ percentaje, color, children }) => {
//   const circunference = (percentaje * 360) / 100;
//   const radius = (circunference / 2) * Math.pi;
//   const diameter = radius * 2;
  return (
      <div className="single-chart">
        <svg viewBox="0 0 36 36" className="circular-chart primary-color">
          <path
            className="circle-bg"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray={percentaje + ", 100"}
            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                stroke={color}
          />
          <path
            className="circle2"
            strokeDasharray={percentaje + ", 100"}
            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          
          <text x="18" y="20.35" className="percentage">
            {percentaje}%
          </text>
        </svg>
        <h5></h5>
        {children}
      </div>
  );
};
