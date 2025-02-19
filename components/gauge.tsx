"use client";

import React from "react";
import ReactECharts from "echarts-for-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface GaugeChartProps {
  roomNumber: number;
  temperature: number;
  humidity: number;
}

const GaugeChart: React.FC<GaugeChartProps> = ({ roomNumber, temperature, humidity }) => {
  const chartOptions = {
    series: [
        {
          type: "gauge",
          startAngle: 180,
          endAngle: 0,
          min: -10,
          max: 10,
          splitNumber: 5,
          axisLine: {
            lineStyle: {
              width: 20,
              color: [
                [0.3, "#36A2EB"], // Cool zone (Blue)
                [0.7, "#FFA500"], // Normal zone (Orange)
                [1, "#FF5733"], // Hot zone (Red)
              ],
            },
          },
          pointer: {
            width: 6, // 🔹 Slightly thicker pointer
            length: "75%", // 🔹 Slightly longer pointer
            itemStyle: {
              color: "black",
            },
          },
          axisTick: {
            show: true,
            length: 8,
            lineStyle: {
              color: "white", // 🔹 Darker tick marks for visibility
              width: 2,
            },
          },
          splitLine: {
            length: 15,
            lineStyle: {
              color: "white", // 🔹 Darker split lines
              width: 3,
            },
          },
          axisLabel: {
            color: "#white", // 🔹 Darker text for readability
            fontSize: 16, // 🔹 Bigger font for numbers
            fontWeight: "bold",
            distance: 25, // 🔹 More spacing for clarity
          },
          detail: {
            formatter: `{value}°C`,
            fontSize: 20, // 🔹 Bigger font
            fontWeight: "bold",
            offsetCenter: [0, "70%"], // 🔹 Adjusted position
            color: "#fff", // 🔹 More readable text
          },
          data: [{ value: temperature }],
        },
      ],
      
  };

  return (
    <Card className="w-full max-w-[300px] bg-white/10 backdrop-blur-md text-black shadow-lg flex flex-col items-center">
  <CardHeader className="text-center">
    <CardTitle className="text-lg text-white font-semibold">Room {roomNumber}</CardTitle>
  </CardHeader>
  <CardContent className="p-4 flex flex-col items-center">
    <ReactECharts
      option={chartOptions}
      style={{ width: "20rem", height: "18rem" }}
      notMerge={true}
      lazyUpdate={true}
    />
    {/* Temperature Label */}
    <div className="mt-2 text-sm font-medium flex items-center justify-center gap-2">
      <span className="text-gray-400 font-semibold text-lg">Humidity:</span>
      <span className="text-white font-semibold text-lg">{humidity}%</span>
    </div>
  </CardContent>
</Card>

  );
};

export default GaugeChart;
