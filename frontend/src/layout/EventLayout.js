import { Outlet } from "react-router";
import EventsNavigation from "./../components/EventsNavigation.js";

function EventLayout() {
  return (
    <>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default EventLayout;
