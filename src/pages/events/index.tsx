import Link from "next/link";
import Image from "next/image";
import { EventCategory } from "@/types/event";
import { EventsPageProps } from "@/types/props";

function EventsPage({ events_categories }: EventsPageProps) {
  return (
    <div>
      <h1> Events Page </h1>
      <div>
        {events_categories.map((event_category: EventCategory) => (
          <Link key={event_category.id} href={`/events/${event_category.id}`}>
            <Image
              alt={`Image for ${event_category.title}`}
              src={event_category.image}
              width={200}
              height={100}
            />
            <h2>{event_category.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("../../data/events.json");
  return {
    props: {
      events_categories,
    },
  };
}
