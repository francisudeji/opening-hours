import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FormattedSchedule, possibleDaysOfTheWeek } from "src/utils";
import { Schedule } from "src/components/Schedule";

const expectedResponse = {
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

describe("Schedule.tsx", () => {
  test("should render schedule correctly", async () => {
    render(<Schedule schedule={expectedResponse} />);
    const listItems = screen.getAllByRole<HTMLLIElement>("listitem");
    expect(listItems.length).toEqual(possibleDaysOfTheWeek.length);

    listItems.map((_, index) => {
      const isToday = index + 1 === new Date().getDay();
      if (isToday) {
        const today = screen.getByText("TODAY");
        expect(today).toBeDefined();
      }
    });
  });
});
