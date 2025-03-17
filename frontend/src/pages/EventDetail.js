import { redirect, useRouteLoaderData } from "react-router";
import EventItem from "../components/EventItem";

function EventDetail() {
  const event = useRouteLoaderData("event-details");
  return (
    <>
      <EventItem event={event} />
    </>
  );
}

export default EventDetail;

export async function loader({ request, params }) {
  const id = params.eventID;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw new Error("Fail to fetch event details!");
  } else {
    const resData = await response.json();

    return resData.event;
  }
}

export async function action({ params, request }) {
  const method = request.method;
  const id = params.eventID;
  const res = await fetch("http://localhost:8080/events/" + id, {
    method: method,
  });

  if (!res.ok) {
    throw new Error(`Cant't ${method}`);
  }
  return redirect("/events");
}
