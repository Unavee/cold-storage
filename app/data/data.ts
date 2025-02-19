export interface RoomData {
  roomNumber: number;
  data: {
    time: string;
    temperature: number;
    humidity: number;
  }[];
}

const roomsData: RoomData[] = [
  {
    roomNumber: 1,
    data: [
      { time: "10:00 AM", temperature: 5, humidity: 60 },
      { time: "11:00 AM", temperature: -6, humidity: 61 },
      { time: "12:00 PM", temperature: 4, humidity: 62 },
      { time: "13:00 PM", temperature: -1, humidity: 70 },
      { time: "14:00 PM", temperature: -3, humidity: 80 },
      { time: "15:00 PM", temperature: 0, humidity: 90 },
      { time: "16:00 PM", temperature: 2, humidity: 85 },
      { time: "17:00 PM", temperature: 1, humidity: 55 },
    ],
  },
  {
    roomNumber: 2,
    data: [
      { time: "10:00 AM", temperature: -1, humidity: 76 },
      { time: "11:00 AM", temperature: -6, humidity: 61 },
      { time: "12:00 PM", temperature: 4, humidity: 62 },
      { time: "13:00 PM", temperature: -1, humidity: 70 },
      { time: "14:00 PM", temperature: -3, humidity: 80 },
      { time: "15:00 PM", temperature: 0, humidity: 90 },
      { time: "16:00 PM", temperature: 2, humidity: 85 },
      { time: "17:00 PM", temperature: 1, humidity: 55 },
    ],
  },
  {
    roomNumber: 3,
    data: [
      { time: "10:00 AM", temperature: -2, humidity: 88 },
      { time: "11:00 AM", temperature: -6, humidity: 61 },
      { time: "12:00 PM", temperature: 4, humidity: 62 },
      { time: "13:00 PM", temperature: -1, humidity: 70 },
      { time: "14:00 PM", temperature: -3, humidity: 80 },
      { time: "15:00 PM", temperature: 0, humidity: 90 },
      { time: "16:00 PM", temperature: 2, humidity: 85 },
      { time: "17:00 PM", temperature: 1, humidity: 55 },
    ],
  },
  {
    roomNumber: 4,
    data: [
      { time: "10:00 AM", temperature: 4, humidity: 32 },
      { time: "11:00 AM", temperature: -6, humidity: 61 },
      { time: "12:00 PM", temperature: 4, humidity: 62 },
      { time: "13:00 PM", temperature: -1, humidity: 70 },
      { time: "14:00 PM", temperature: -3, humidity: 80 },
      { time: "15:00 PM", temperature: 0, humidity: 90 },
      { time: "16:00 PM", temperature: 2, humidity: 85 },
      { time: "17:00 PM", temperature: 1, humidity: 55 },
    ],
  },
  {
    roomNumber: 5,
    data: [
      { time: "10:00 AM", temperature: 1, humidity: 45 },
      { time: "11:00 AM", temperature: -6, humidity: 61 },
      { time: "12:00 PM", temperature: 4, humidity: 62 },
      { time: "13:00 PM", temperature: -1, humidity: 70 },
      { time: "14:00 PM", temperature: -3, humidity: 80 },
      { time: "15:00 PM", temperature: 0, humidity: 90 },
      { time: "16:00 PM", temperature: 2, humidity: 85 },
      { time: "17:00 PM", temperature: 1, humidity: 55 },
    ],
  },
  {
    roomNumber: 6,
    data: [
      { time: "10:00 AM", temperature: 2, humidity: 91 },
      { time: "11:00 AM", temperature: -6, humidity: 61 },
      { time: "12:00 PM", temperature: 4, humidity: 62 },
      { time: "13:00 PM", temperature: -1, humidity: 70 },
      { time: "14:00 PM", temperature: -3, humidity: 80 },
      { time: "15:00 PM", temperature: 0, humidity: 90 },
      { time: "16:00 PM", temperature: 2, humidity: 85 },
      { time: "17:00 PM", temperature: 1, humidity: 55 },
    ],
  },
  {
    roomNumber: 7,
    data: [
      { time: "10:00 AM", temperature: -3, humidity: 80 },
      { time: "11:00 AM", temperature: -6, humidity: 61 },
      { time: "12:00 PM", temperature: 4, humidity: 62 },
      { time: "13:00 PM", temperature: -1, humidity: 70 },
      { time: "14:00 PM", temperature: -3, humidity: 80 },
      { time: "15:00 PM", temperature: 0, humidity: 90 },
      { time: "16:00 PM", temperature: 2, humidity: 85 },
      { time: "17:00 PM", temperature: 1, humidity: 55 },
    ],
  },
  {
    roomNumber: 8,
    data: [
      { time: "10:00 AM", temperature: -6, humidity: 70 },
      { time: "11:00 AM", temperature: -6, humidity: 61 },
      { time: "12:00 PM", temperature: 4, humidity: 62 },
      { time: "13:00 PM", temperature: -1, humidity: 70 },
      { time: "14:00 PM", temperature: -3, humidity: 80 },
      { time: "15:00 PM", temperature: 0, humidity: 90 },
      { time: "16:00 PM", temperature: 2, humidity: 85 },
      { time: "17:00 PM", temperature: 1, humidity: 55 },
    ],
  }
];

export default roomsData;











