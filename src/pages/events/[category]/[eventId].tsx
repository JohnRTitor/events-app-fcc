import { EventItem } from "@/types/event";
import { GetStaticPropsContext } from "next";
import Image from "next/image";

interface EventProps {
  eventData: EventItem;
}

function Page({ eventData }: EventProps) {
  return (
    <div>
      <Image
        src={eventData.image}
        alt={eventData.title}
        width={600}
        height={300}
      />
      <h1> {eventData.title} </h1>
      <p> {eventData.description} </p>
    </div>
  );
}

export default Page;

export async function getStaticPaths() {
  // get the list of events
  const { allEvents } = await import("../../../data/events.json");
  // get the list of ids and use it to generate paths
  const allPaths = allEvents.map((event: EventItem) => {
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
  const { allEvents } = await import("../../../data/events.json");
  const eventData = allEvents.find((event: EventItem) => event.id === eventId);
  return {
    props: {
      eventData,
    },
  };
}
