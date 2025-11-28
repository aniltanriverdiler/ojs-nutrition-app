import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Get the token from the cookies
  const token = req.cookies.get("access_token")?.value;

  // protect the routes
  const protectedPaths = ["/account", "/orders", "/checkout"];

  // Auth pages (if user is logged in, they should not be able to access)
  const authPaths = ["/auth/login", "/auth/register"];

  const isProtected = protectedPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  // If the user is logged in and tries to access the auth pages, redirect to home
  const isAuthPage = authPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  // If the protected page and token is not present, redirect to login
  if (isProtected && !token) {
    const loginUrl = new URL("/auth/login", req.url);

    // Save the user's intended destination (for redirect)
    loginUrl.searchParams.set("redirect", req.nextUrl.pathname);

    return NextResponse.redirect(loginUrl);
  }

  // If the user is logged in and tries to access the auth pages, redirect to home
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // For all other cases, continue
  return NextResponse.next();
}

// Define which pages to run the middleware on
export const config = {
  matcher: [
    "/account/:path*",
    "/orders/:path*",
    "/checkout/:path*",
    "/auth/:path*",
  ],
};
