import { EventCategory, EventItem } from "@/types/event";
import { GetStaticPropsContext } from "next";
import Link from "next/link";
import Image from "next/image";

interface EventsPerCityPageProps {
  city: string;
  events: EventItem[];
}

// common template for /events/bercelona, /events/london, pages
// returned props are passed to this function
function EventsPerCityPage({ city, events }: EventsPerCityPageProps) {
  return (
    <div>
      <h1> Events in {city} </h1>

      {events.map((event) => (
        <Link
          id={event.id}
          href={`/events/${event.city}/${event.id}`}
          key={event.id}
        >
          <Image width={300} height={200} src={event.image} alt={event.title} />
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </Link>
      ))}
    </div>
  );
}

export default EventsPerCityPage;

// for dynamic paths we need both getStaticPaths and getStaticProps
// getStaticPaths is used to generate the paths for the dynamic pages
export async function getStaticPaths() {
  const { events_categories } = await import("../../../data/events.json");

  // make an array of paths
  // array of this { params: { category: 'london' } }
  const allPaths = events_categories.map((event: EventCategory) => {
    return {
      params: { category: event.id.toString() },
    };
  });

  return {
    paths: allPaths,
    // whether to create fallback pages for missing paths
    fallback: false,
  };
}

// then next.js will call this function to fetch the data
// and pass returned data to the page component, in this case, the EventsPerCityPage template
export async function getStaticProps(context: GetStaticPropsContext) {
  // get the city from the context/page name
  const city: string = context.params!.category!.toString();

  // import the events data
  const { allEvents }: { allEvents: EventItem[] } = await import(
    "../../../data/events.json"
  );

  // get events for this city
  const filteredEvents: EventItem[] = allEvents.filter(
    (event: EventItem) => event.city === city,
  );

  return {
    props: { city, events: filteredEvents },
  };
}
