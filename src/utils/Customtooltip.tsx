import React from 'react';

interface CustomTooltipProps {
 active?: boolean;
 payload?: { value: number }[];
 label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
 if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Price at ${label}`}</p>
        <p className="intro">{`$${payload[0].value}`}</p>
      </div>
    );
 }

 return null;
};

export default CustomTooltip;