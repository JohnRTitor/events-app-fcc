// endpoint is site/api/email-registration
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";
import { EventsDataJson } from "@/types/props";
import { EventItem } from "@/types/event";

type Data = {
  message: string;
};

function getJSONPath(): string {
  return path.join(process.cwd(), "src", "data", "events.json");
}
function extractData(filePath: string): EventsDataJson {
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { method } = req;
  if (method !== "POST") {
    // send an invalid response
    return res.status(405).end();
  }

  const filePath = getJSONPath();
  const { events_categories, all_events } = extractData(filePath);
  if (!all_events) {
    res.status(404).json({ message: "No events found" });
    return;
  }

  // get the email and eventId from the request body
  const { email, eventId } = req.body;

  // find the event with the given eventId
  const new_all_events: EventItem[] = all_events.map((event: EventItem) => {
    if (event.id === eventId) {
      if (event.emails_registered.includes(email)) {
        res.status(409).json({ message: "Email already registered" });
        // return unmodified event
        return event;
      }
      // append the email to the list of registered emails
      return {
        ...event,
        emails_registered: [...event.emails_registered, email],
      };
    }
    // we didn't find the event, but still return
    return event;
  });

  fs.writeFileSync(
    filePath,
    JSON.stringify({
      events_categories,
      all_events: new_all_events,
    }),
  );

  res.status(200).json({
    message: `You successfully registered for ${eventId} with your email: ${email}`,
  });
}
