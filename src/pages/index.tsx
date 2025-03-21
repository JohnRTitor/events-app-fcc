import { EventCategory } from "@/types/event";
import { HomePageProps } from "@/types/props";
import { HomePageTemplate } from "@/components/home/home-page";

export default function Home({ events_categories }: HomePageProps) {
  return (
    <div>
      <HomePageTemplate events_categories={events_categories} />
    </div>
  );
}

// this is ran first before our Home/Page function
// this is never run on the client side, only on the server side
export async function getServerSideProps() {
  // we can have secrets here but if we don't return it
  // only the returned values will be exposed to the client
  const { events_categories }: { events_categories: EventCategory[] } =
    await import("../data/events.json");
  // console.log(events_categories);
  return {
    props: { events_categories },
  };
}
