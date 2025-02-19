"use client";

import { TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";
import React from "react";

const chartConfig: ChartConfig = {
  temperature: { label: "Temperature (°C)", color: "hsl(var(--chart-1))" },
  humidity: { label: "Humidity (%)", color: "hsl(var(--chart-2))" },
};

interface RoomData {
  time: string;
  temperature: number;
  humidity: number;
}

interface Room {
  roomNumber: number;
  data: RoomData[];
}

const Chart = React.memo(function Chart({ room }: { room: Room }) {
  return (
    <Card className="w-full max-w-[700px] mx-auto">
      <CardHeader>
        <CardTitle>Room {room.roomNumber} - Temperature & Humidity</CardTitle>
        <CardDescription>Real-time Monitoring</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={room.data}
              margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
            >
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                tick={{ fill: "hsl(var(--foreground))" }}
                tickLine={false}
              />
              <YAxis tick={{ fill: "hsl(var(--foreground))" }} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="temperature"
                stroke="var(--color-temperature)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="humidity"
                stroke="var(--color-humidity)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Temperature & Humidity Trends <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              Monitoring real-time data for Room {room.roomNumber}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
});

export { Chart };
