// proxy.js

import arcjet, { createMiddleware, detectBot, shield } from "@arcjet/next";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
]);

// Arcjet configuration
const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    // Protect against common web attacks
    shield({
      mode: "LIVE",
    }),

    // Detect and block unwanted bots
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc.
        "GO_HTTP",                // Required for Inngest
      ],
    }),
  ],
});

// Clerk middleware
const clerk = clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }

  return NextResponse.next();
});

// Run Arcjet first, then Clerk
export default createMiddleware(aj, clerk);

export const config = {
  matcher: [
    // Skip Next.js internals and static assets
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|jpeg|png|gif|svg|webp|ico|ttf|woff2?|csv|docx?|xlsx?|zip|webmanifest)).*)",

    // Always run for API routes
    "/(api|trpc)(.*)",

    // Clerk routes
    "/__clerk/(.*)",
  ],
};