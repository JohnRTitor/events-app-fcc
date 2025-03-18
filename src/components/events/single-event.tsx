import Image from "next/image";
import { EventProps } from "@/types/props";

export default function SingleEventTemplate({ eventData }: EventProps) {
  function doThis() {}

  return (
    <div className="event_single_page">
      <Image
        src={eventData.image}
        alt={eventData.title}
        width={600}
        height={300}
      />
      <h1> {eventData.title} </h1>
      <p> {eventData.description} </p>

      <form onSubmit={doThis} className="email_registration">
        <label> Get registered for this event! </label>
        <input type="email" placeholder="Enter your email" />
        <button>I am in!</button>
      </form>
    </div>
  );
}
