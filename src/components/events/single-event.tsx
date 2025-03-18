import Image from "next/image";
import { EventProps } from "@/types/props";

export default function SingleEventTemplate({ eventData }: EventProps) {
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

      <label> Get registered for this event! </label>
      <br />
      <br />
      <input type="email" placeholder="Enter your email" />
      <button>I am in!</button>
    </div>
  );
}
