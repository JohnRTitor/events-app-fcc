// endpoint is site/api/email-registration
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { method } = req;
  if (method !== "POST") {
    // send an invalid response
    res.status(405).end();
  }

  // get the email and eventId from the request body
  const { email, eventId } = req.body;
  // send an ok response
  res.status(200).json({
    message: `You successfully registered for ${eventId} with your email: ${email}`,
  });
}
