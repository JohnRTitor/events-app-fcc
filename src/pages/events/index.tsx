import Link from "next/link";
import Image from "next/image";
import { HomeProps } from "@/types/event";

function EventsPage({ data }: HomeProps) {
  return (
    <div>
      <h1> Events Page </h1>
      <div>
        {data.map((event) => (
          <Link key={event.id} href={`/events/${event.id}`}>
            <Image
              alt={`Image for ${event.title}`}
              src={event.image}
              width={200}
              height={100}
            />
            <h2>{event.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("../../data/data.json");
  console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
}
