import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_COOKIE_NAME, adminCookieOptions } from "@/lib/admin-auth";
import { isSameOriginRequest } from "@/lib/admin-request";
import { redirectTo } from "@/lib/admin-response";

export async function POST(request: NextRequest) {
  if (!isSameOriginRequest(request)) return new NextResponse("Forbidden", { status: 403 });

  const response = redirectTo("/admin/login");
  response.cookies.set(ADMIN_COOKIE_NAME, "", { ...adminCookieOptions, maxAge: 0 });
  return response;
}
