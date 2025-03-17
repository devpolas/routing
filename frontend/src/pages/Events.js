import { useLoaderData } from "react-router";
import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Error("Fail to event data!");
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
