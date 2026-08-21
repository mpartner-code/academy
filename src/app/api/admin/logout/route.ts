import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_COOKIE_NAME, adminCookieOptions } from "@/lib/admin-auth";
import { isSameOriginRequest } from "@/lib/admin-request";

export async function POST(request: NextRequest) {
  if (!isSameOriginRequest(request)) return new NextResponse("Forbidden", { status: 403 });

  const response = NextResponse.redirect(new URL("/admin/login", request.url), 303);
  response.cookies.set(ADMIN_COOKIE_NAME, "", { ...adminCookieOptions, maxAge: 0 });
  return response;
}
