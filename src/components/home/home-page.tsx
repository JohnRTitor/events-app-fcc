import Link from "next/link";
import Image from "next/image";
import { EventCategory } from "@/types/event";
import { HomePageProps } from "@/types/props";

export function HomePageMain({ events_categories }: HomePageProps) {
  return (
    <div className="home_body">
      {events_categories.map((event_category: EventCategory) => (
        <Link
          className="card"
          key={event_category.id}
          href={`/events/${event_category.id}`}
        >
          <div className="image">
            <Image
              alt={`Image for ${event_category.title}`}
              src={event_category.image}
              width={500}
              height={300}
            />
          </div>
          <div className="content">
            <h2> {event_category.title}</h2>
            <p> {event_category.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
