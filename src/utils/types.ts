export const possibleDaysOfTheWeek = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

export type Day = typeof possibleDaysOfTheWeek[number];

export type Hours = Array<{
  type: "open" | "close";
  value: number;
  formattedValue?: number;
}>;

export type FormattedHours = Array<{
  open: string;
  close: string;
}>;

export type RawSchedule = Record<Day, Hours>;
export type FormattedSchedule = Record<Day, FormattedHours>;

export type ResponseData = {
  ok: boolean;
  message: string;
  data?: RawSchedule;
};

export type FormattedResponseData = {
  ok: boolean;
  message: string;
  data: FormattedSchedule;
};
