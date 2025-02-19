import roomsData from '../data/data';
import GaugeChart from "@/components/gauge"
import SpotlightCard from "@/components/bits/SpotlightCard/SpotlightCard";

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-grid justify-center items-center place-items-center">
      {roomsData.map((room) => (
        <SpotlightCard
          key={room.roomNumber} // Add key prop here
          className="custom-spotlight-card"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <GaugeChart
            roomNumber={room.roomNumber}
            temperature={room.data[0].temperature}
            humidity={room.data[0].humidity}
          />
        </SpotlightCard>
      ))}
    </div>
  );
}
