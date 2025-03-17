import { EventCategory } from "@/types/event";
import { EventsPageProps } from "@/types/props";
import Image from "next/image";
import Link from "next/link";

export default function EventsPageMain({ events_categories }: EventsPageProps) {
  return (
    <div className="events_page">
      {events_categories.map((event_category: EventCategory) => (
        <Link
          className="card"
          key={event_category.id}
          href={`/events/${event_category.id}`}
        >
          <Image
            alt={`Image for ${event_category.title}`}
            src={event_category.image}
            width={500}
            height={500}
          />
          <h2>{event_category.title}</h2>
        </Link>
      ))}
    </div>
  );
}
