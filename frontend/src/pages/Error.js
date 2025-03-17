import { useRouteError } from "react-router";

function Error() {
  const routerError = useRouteError();
  return (
    <div>
      <h3>
        {routerError.status} {routerError.statusText || "An Error Occurred 😓"}
      </h3>
      <p>{routerError.data || routerError.message}</p>
    </div>
  );
}

export default Error;
