import { Outlet, useSubmit } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { getAuthToken, getTokenExpiration } from "../utils/auth";
import { useEffect } from "react";

function RootLayout() {
  const submit = useSubmit();
  const token = getAuthToken();
  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === "EXPIRED") {
      submit(null, { method: "POST", action: "/logout" });
    }

    const tokenDuration = getTokenExpiration();
    setTimeout(() => {
      submit(null, { method: "POST", action: "/logout" });
    }, tokenDuration);
  }, [token, submit]);
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
