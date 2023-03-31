import { formatTime } from "./format-time";
import { RawSchedule } from "./types";

export function remapSchedule(schedule: RawSchedule) {
  const updatedHours = Object.entries(schedule).reduce((acc, curr) => {
    const [day, hoursMap] = curr;

    const format = hoursMap.flatMap((obj, i, arr) => {
      const next = arr[i + 1];

      if (next) {
        const result = {
          [obj.type]: formatTime(obj.value),
          [next.type]: formatTime(next.value),
        };
        arr.splice(i + 1, 1);
        return result as unknown;
      }
    });

    return { ...acc, [day]: format };
  }, {}) as RawSchedule;

  return updatedHours;
}
