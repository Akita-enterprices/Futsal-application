export interface TimeSlot {
  time: string;
  available: boolean;
}

export const timeSlots: TimeSlot[] = [
  { time: "08:00 AM - 09:00 AM", available: true },
  { time: "09:00 AM - 10:00 AM", available: false },
  { time: "10:00 AM - 11:00 AM", available: true },
  { time: "11:00 AM - 12:00 PM", available: true },
  { time: "12:00 PM - 01:00 PM", available: false },
];
