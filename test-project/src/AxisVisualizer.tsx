import React, { useEffect, useState } from 'react';
// import './AxisVisualizer.css'; // Add your CSS file for styling

interface AxisVisualizerProps {
    axisValue: number;
    label: string;
}

const AxisVisualizer: React.FC<AxisVisualizerProps> = ({ axisValue, label }) => {
    const [barWidth, setBarWidth] = useState(0);

    useEffect(() => {
        // Normalize the axis value to fit within a reasonable range (e.g., 0 to 100)
        const normalizedValue = Math.max(0, Math.min((axisValue + 1) * 50, 100));

        // Update the bar height based on the normalized axis value
        setBarWidth(normalizedValue);
    }, [axisValue]);

    return (
        <div className="flex items-center m-4">
            <p className="mr-4 whitespace-nowrap">{label}</p>
            <div className="bg-green-500 h-4 transition-width duration-300" style={{ width: `${barWidth}%` }}></div>
        </div>
    );
};

export default AxisVisualizer;
