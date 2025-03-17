import EventsPageMain from "@/components/events/events-page";
import { EventsPageProps } from "@/types/props";

function EventsPage({ events_categories }: EventsPageProps) {
  return <EventsPageMain events_categories={events_categories} />;
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
