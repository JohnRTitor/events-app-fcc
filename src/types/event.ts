export type EventCategory = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type EventItem = {
  id: string;
  title: string;
  city: string;
  description: string;
  image: string;
  emails_registered: string[];
};

export type EventsData = {
  events_categories: EventCategory[];
  allEvents: EventItem[];
};
