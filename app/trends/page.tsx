import roomsData from '../data/data';
import { Chart } from "@/components/lineChart";

export default function Page() {
  return (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-4 p-4 bg-grid">
      {roomsData.map((room) => (
        <Chart key={room.roomNumber} room={room} />
      ))}
    </div>
  );
}
