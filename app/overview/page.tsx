import SpotlightCard from "@/components/bits/SpotlightCard/SpotlightCard";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import BoostCard from "@/components/cards";
import roomsData from '../data/data';

export default function Page() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <div className="bg-white flex justify-items-start flex-1 flex-col gap-4 p-5 pt-0 space-x-6 bg-grid">
          <div className="grid justify-items-center auto-rows-min gap-4 md:grid-cols-3 mt-4 bg-grid">
            {roomsData.map((room) => (
              <SpotlightCard key={room.roomNumber} className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                <BoostCard
                  key={room.roomNumber}
                  roomNumber={room.roomNumber}
                  temperature={room.data[0].temperature}
                  humidity={room.data[0].humidity}
                />
              </SpotlightCard>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            {/* Add content for bottom divs if needed */}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

