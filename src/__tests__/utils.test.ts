import { expect, test, describe } from "vitest";
import {
  formatTime,
  pairSchedule,
  remapSchedule,
  RawSchedule,
  FormattedSchedule,
} from "src/utils";

const json = {
  monday: [],
  tuesday: [
    { type: "open", value: 36000 },
    { type: "close", value: 64800 },
  ],
  wednesday: [],
  thursday: [
    { type: "open", value: 36000 },
    { type: "close", value: 64800 },
  ],
  friday: [{ type: "open", value: 36000 }],
  saturday: [
    { type: "close", value: 3600 },
    { type: "open", value: 36000 },
  ],
  sunday: [
    { type: "close", value: 3600 },
    { type: "open", value: 43200 },
    { type: "close", value: 75600 },
  ],
} as RawSchedule;

const expectedPairedSchedule = {
  monday: [],
  tuesday: [
    { type: "open", value: 36000 },
    { type: "close", value: 64800 },
  ],
  wednesday: [],
  thursday: [
    { type: "open", value: 36000 },
    { type: "close", value: 64800 },
  ],
  friday: [
    { type: "open", value: 36000 },

    { type: "close", value: 3600 },
  ],
  saturday: [
    { type: "open", value: 36000 },
    { type: "close", value: 3600 },
  ],
  sunday: [
    { type: "open", value: 43200 },
    { type: "close", value: 75600 },
  ],
} as RawSchedule;

const expectedRemappedJson = {
  monday: [],
  tuesday: [
    {
      open: "10 AM",
      close: "6 PM",
    },
  ],
  wednesday: [],
  thursday: [
    {
      open: "10 AM",
      close: "6 PM",
    },
  ],
  friday: [
    {
      open: "10 AM",
      close: "1 AM",
    },
  ],
  saturday: [
    {
      open: "10 AM",
      close: "1 AM",
    },
  ],
  sunday: [
    {
      open: "12 PM",
      close: "9 PM",
    },
  ],
} as FormattedSchedule;

describe("utility functions", () => {
  test("should pair up opening and closing hours", () => {
    const schedule = pairSchedule(json);
    expect(schedule).toStrictEqual(expectedPairedSchedule);
  });

  test("should format time - seconds to hours", () => {
    const timeInSeconds = 3600;
    const expectedTimeInHours = "1 AM";

    expect(formatTime(timeInSeconds)).toBe(expectedTimeInHours);
  });

  test("should remap paired schedule to only contain open: <number> and close: <number> in json", () => {
    expect(remapSchedule(expectedPairedSchedule)).toStrictEqual(
      expectedRemappedJson
    );
  });
});
