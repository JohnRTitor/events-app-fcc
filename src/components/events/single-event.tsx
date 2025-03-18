import React, { useRef } from "react";
import Image from "next/image";
import { EventProps } from "@/types/props";
import { NextRouter, useRouter } from "next/router";

export default function SingleEventTemplate({ eventData }: EventProps) {
  // inputEmail reference will point to a input element
  // when it renders it has null value at first
  const inputEmailComponent = useRef<HTMLInputElement>(null);
  const router: NextRouter = useRouter();

  async function DoThis(e: React.FormEvent<HTMLFormElement>) {
    let emailValue: string = "";
    let eventId: string = "";
    e.preventDefault();

    // if we entered an email (current method accesses the current value)
    if (inputEmailComponent.current) {
      emailValue = inputEmailComponent.current.value;
      eventId = router.query.eventId as string;
    }

    try {
      // Send emailValue, and eventId to the email-registration API endpoint
      // via POST fetch request
      const response: Response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId: eventId }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("POST", data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="event_single_page">
      <Image
        src={eventData.image}
        alt={eventData.title}
        width={600}
        height={300}
        priority
      />
      <h1> {eventData.title} </h1>
      <p> {eventData.description} </p>

      <form onSubmit={DoThis} className="email_registration">
        <label> Get registered for this event! </label>
        <input
          ref={inputEmailComponent}
          type="email"
          placeholder="Enter your email"
        />
        <button type="submit">I am in!</button>
      </form>
    </div>
  );
}
