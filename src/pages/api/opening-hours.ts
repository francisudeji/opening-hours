import type { NextApiRequest, NextApiResponse } from "next";

import {
  pairSchedule,
  remapSchedule,
  handleValidation,
  ResponseData,
} from "src/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  let parsedJSON = handleValidation(req, res);

  if (parsedJSON) {
    const schedule = pairSchedule(parsedJSON);
    const data = remapSchedule(schedule);

    res.status(200).json({ ok: true, message: "success", data });
  }
}
