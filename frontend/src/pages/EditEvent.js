import { useRouteLoaderData } from "react-router";
import EventForm from "../components/EventForm";

function EditEvent() {
  const event = useRouteLoaderData("event-details");
  return <EventForm event={event} method="patch" />;
}

export default EditEvent;
