// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout.js";
import HomePage from "./pages/HomePage.js";
import EventPage, { loader as eventLoader } from "./pages/Events.js";
import EventDetail, {
  loader as eventDetailLoader,
  action as eventDeleteAction,
} from "./pages/EventDetail.js";
import EditEvent from "./pages/EditEvent.js";
import NewEvent from "./pages/NewEvent.js";
import EventLayout from "./layout/EventLayout.js";
import Error from "./pages/Error.js";
import { action as multipleActions } from "./components/EventForm.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "events",
          element: <EventLayout />,

          children: [
            {
              index: true,
              element: <EventPage />,
              loader: eventLoader,
            },
            {
              path: "new",
              element: <NewEvent />,
              action: multipleActions,
            },
            {
              path: ":eventID",
              id: "event-details",
              loader: eventDetailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetail />,
                  action: eventDeleteAction,
                },
                {
                  path: "edit",
                  element: <EditEvent />,
                  action: multipleActions,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
