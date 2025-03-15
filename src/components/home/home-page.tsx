import Link from "next/link";
import Image from "next/image";
import { EventCategory } from "@/types/event";
import { HomePageProps } from "@/types/props";

export function HomePageMain({ events_categories }: HomePageProps) {
  return (
    <main>
      {events_categories.map((event_category: EventCategory) => (
        <Link key={event_category.id} href={`/events/${event_category.id}`}>
          <Image
            alt={`Image for ${event_category.title}`}
            src={event_category.image}
            width={200}
            height={100}
          />
          <h2> {event_category.title}</h2>
          <p> {event_category.description}</p>
        </Link>
      ))}
    </main>
  );
}
