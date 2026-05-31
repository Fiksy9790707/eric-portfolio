import type { VercelRequest, VercelResponse } from "./_types";

export default function handler(_request: VercelRequest, response: VercelResponse) {
  response.status(200).json({
    ok: true,
    service: "portfolio-api",
  });
}
