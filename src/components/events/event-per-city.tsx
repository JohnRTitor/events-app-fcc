import { EventsPerCityPageProps } from "@/types/props";
import Link from "next/link";
import Image from "next/image";

export default function EventsPerCityTemplate({
  city,
  events,
}: EventsPerCityPageProps) {
  return (
    <div className="cat_events">
      <h1> Events in {city} </h1>

      <div className="content">
        {events.map((event) => (
          <Link
            className="card"
            id={event.id}
            href={`/events/${event.city}/${event.id}`}
            key={event.id}
          >
            <Image
              width={300}
              height={200}
              src={event.image}
              alt={event.title}
            />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
