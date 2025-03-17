import EventsPerCityTemplate from "@/components/events/event-per-city";
import { EventCategory, EventItem } from "@/types/event";
import { EventsPerCityPageProps } from "@/types/props";
import { GetStaticPropsContext } from "next";

// common template for /events/bercelona, /events/london, pages
// returned props are passed to this function
function EventsPerCityPage({ city, events }: EventsPerCityPageProps) {
  return <EventsPerCityTemplate city={city} events={events} />;
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
