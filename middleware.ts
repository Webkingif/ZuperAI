import { auth } from "./components/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isOnHomepage = req.nextUrl.pathname === "/";

  if (isOnHomepage && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if ((req.nextUrl.pathname.startsWith("/login") || req.nextUrl.pathname.startsWith("/register")) && isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};