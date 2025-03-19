import { EventCategory, EventItem } from "@/types/event";

export interface HomePageProps {
  events_categories: EventCategory[];
}

export interface EventsPageProps {
  events_categories: EventCategory[];
}

export interface EventsPerCityPageProps {
  city: string;
  events: EventItem[];
}

export interface EventProps {
  eventData: EventItem;
}

export interface EventsDataJson {
  events_categories: EventCategory[];
  all_events: EventItem[];
}
