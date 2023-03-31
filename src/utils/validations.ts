import { NextApiRequest, NextApiResponse } from "next";
import { Day, possibleDaysOfTheWeek, ResponseData, RawSchedule } from "./types";
import fs from "fs";
import path from "path";

export function handleValidation(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "GET")
    return res
      .status(405)
      .json({ ok: false, message: "Method not allowed", data: undefined });

  let parsedJSON: RawSchedule;

  try {
    const jsonFile = fs.readFileSync(
      path.join("src", "data", "opening-hours.json"),
      "utf-8"
    );

    parsedJSON = JSON.parse(jsonFile);
  } catch (error) {
    return res
      .status(400)
      .json({ ok: false, message: "Something went wrong!", data: undefined });
  }

  const hasValidDaysOfTheWeek = Object.keys(parsedJSON).every((day) =>
    possibleDaysOfTheWeek.includes(day.toLowerCase() as Day)
  );

  const hasEqualNumberOfOpensAndCloses =
    Object.values(parsedJSON).map((_, __, arr) => arr.flat())[0].length % 2 ===
    0;

  const hasMaxNumberOfSeconds = Object.values(parsedJSON)
    .map((_, __, arr) => arr.flat())[0]
    .every((schedule) => schedule.value < 86400);

  if (
    !hasValidDaysOfTheWeek ||
    !hasEqualNumberOfOpensAndCloses ||
    !hasMaxNumberOfSeconds
  )
    return res
      .status(400)
      .json({ ok: false, message: "Invalid JSON file", data: undefined });

  return parsedJSON;
}
