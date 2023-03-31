import { RawSchedule } from "./types";

export function pairSchedule(schedule: RawSchedule) {
  const newSchedule = Object.entries(schedule).reduce(
    (acc, curr, index, arr) => {
      const [day, hours] = curr;

      const firstInstanceOfOpen = hours.findIndex(
        (hour) => hour.type === "open"
      );
      const firstInstanceOfClose = hours.findIndex(
        (hour) => hour.type === "close"
      );

      const hasOnlyOpeningTime =
        firstInstanceOfOpen > firstInstanceOfClose &&
        firstInstanceOfClose === -1 &&
        hours.length % 2 !== 0;

      if (hasOnlyOpeningTime) {
        const [, nextDayOpeningHours] = arr[index + 1];
        const [firstHour] = nextDayOpeningHours;
        const newDayOpeningHours = [...hours, firstHour];
        nextDayOpeningHours.splice(0, 1);

        return { ...acc, [day]: newDayOpeningHours };
      }

      return { ...acc, [day]: hours };
    },
    {} as RawSchedule
  );

  return newSchedule;
}
