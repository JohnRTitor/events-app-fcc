import SingleEventTemplate from "@/components/events/single-event";
import { EventItem } from "@/types/event";
import { GetStaticPropsContext } from "next";
import { EventProps } from "@/types/props";

function SingleEventPage({ eventData }: EventProps) {
  return <SingleEventTemplate eventData={eventData} />;
}

export default SingleEventPage;

export async function getStaticPaths() {
  // get the list of events
  const { all_events } = await import("../../../data/events.json");
  // get the list of ids and use it to generate paths
  const allPaths = all_events.map((event: EventItem) => {
    return {
      params: {
        category: event.city,
        eventId: event.id,
      },
    };
  });

  return {
    // return the list of paths
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const eventId = context.params!.eventId!.toString();
  const { all_events } = await import("../../../data/events.json");
  const eventData = all_events.find((event: EventItem) => event.id === eventId);
  return {
    props: {
      eventData,
    },
  };
}
