import { addMinutes, format, setHours, setMinutes } from "date-fns";

export function generateDayTimeList(date: Date): string[] {
    const startTime = setMinutes(setHours(date, 9), 0); // Set start at 09:00
    const endTime = setMinutes(setHours(date, 21), 0); // Set end at 21:00
    const interval = 45; // interval of 45 minutes
    const timeList: string[] = [];

    let currentTime = startTime;

    while (currentTime <= endTime) {
        timeList.push(format(currentTime, "HH:mm"));
        currentTime = addMinutes(currentTime, interval);
    }

    return timeList;
}