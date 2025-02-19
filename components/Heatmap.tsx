"use client";

import React from "react";
import Chart from "react-apexcharts";

interface RoomData {
  roomNumber: number;
  temperature: number;
}

interface HeatmapProps {
  rooms: RoomData[];
}

const Heatmap: React.FC<HeatmapProps> = ({ rooms }) => {
  const formattedData = [
    {
      name: "",
      data: rooms.map((room) => ({
        x: `Unit ${room.roomNumber}`,
        y: room.temperature,
      })),
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "heatmap",
      toolbar: { show: false },
    },
    grid: {
      padding: { top: 10, right: 10, bottom: 10, left: 10 },
    },
    colors: ["#00274D", "#005B99", "#00A8E8", "#A7E8F6", "#F4E8DA", "#F28C8C"],
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.8,
        radius: 8,
        useFillColorAsStroke: true,
        colorScale: {
          ranges: [
            { from: -10, to: -5, color: "#00274D", name: "Extreme Cold ❄️" },
            { from: -4, to: 0, color: "#005B99", name: "Cold 🧊" },
            { from: 1, to: 5, color: "#00A8E8", name: "Chilled 💧" },
            { from: 6, to: 10, color: "#A7E8F6", name: "Cool 🌬️" },
            { from: 11, to: 15, color: "#F4E8DA", name: "Mild Warm 🌡️" },
            { from: 16, to: 20, color: "#F28C8C", name: "Heat ⚠️" },
          ],
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: { colors: ["#fff"], fontSize: "12px", fontWeight: "bold" },
    },
    xaxis: {
      type: "category",
      labels: {
        style: { colors: "#d1d5db", fontSize: "14px", fontWeight: "500" },
      },
    },
    yaxis: {
      labels: {
        style: { colors: "#d1d5db", fontSize: "14px", fontWeight: "500" },
      },
    },
    tooltip: {
      theme: "dark",
      style: {
        fontSize: "14px",
      },
      custom: ({ series, seriesIndex, dataPointIndex, w }) => {
        const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
        return `
          <div style="background:#1a1a1a; padding:8px 12px; border-radius:6px; color:#fff; font-size:14px; text-align:center;">
            <strong>${data.x}</strong>
            <div style="margin-top:4px;">Temperature: <span style="color:#4ade80;">${data.y}°C</span></div>
          </div>
        `;
      },
    },
  };

  return (
    <div className="w-full bg-[#0a0a0a] p-5 rounded-xl shadow-lg border border-gray-800">
      <h3 className="text-xl font-semibold text-center text-gray-300 mb-4">
        Cold Storage Heatmap ❄️
      </h3>
      <Chart options={options} series={formattedData} type="heatmap" height={200} width={400} />
    </div>
  );
};

export default Heatmap;
