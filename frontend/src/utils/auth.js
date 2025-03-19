import { redirect } from "react-router-dom";

export function getTokenExpiration() {
  const tokenCreate = localStorage.getItem("expiration");
  const tokenCrateTime = new Date(tokenCreate);
  const now = new Date();
  const duration = tokenCrateTime.getTime() - now.getTime();
  return duration;
}
export function getAuthToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const tokenDuration = getTokenExpiration();
  console.log(tokenDuration);
  if (tokenDuration < 0) {
    return "EXPIRED";
  }
  return token;
}

export function authTokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  } else {
    return null;
  }
}
