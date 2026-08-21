import type { NextRequest } from "next/server";
import {
  ADMIN_COOKIE_NAME,
  adminCookieOptions,
  createAdminSession,
  verifyAdminCredentials,
} from "@/lib/admin-auth";
import { redirectTo } from "@/lib/admin-response";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  if (!verifyAdminCredentials(email, password)) {
    return redirectTo("/admin/login?error=1");
  }

  const token = createAdminSession(email);
  if (!token) return redirectTo("/admin/login?error=config");

  const response = redirectTo("/admin");
  response.cookies.set(ADMIN_COOKIE_NAME, token, adminCookieOptions);
  return response;
}
