//test
// import { NextResponse } from "next/server";

// export function middleware(request) {
//   console.log(request);

//   return NextResponse.redirect(new URL("/about", request.url));
// }

// auth() internally checks if a session exists
// then it passes that session + request to authorized
// Based on authorized's return (true/false), it decides whether to:
// Allow the request → continue to /account.
// Redirect to /login.
import { auth } from "@/app/_lib/auth";
export const middleware = auth;
export const config = {
  matcher: ["/account"],
};
