import { NextResponse, type NextRequest } from "next/server";
import { db } from "@/lib/db";
import { saveFallbackSettings } from "@/lib/admin-fallback";
import { isAuthorizedAdminRequest, isSameOriginRequest } from "@/lib/admin-request";
import { redirectTo } from "@/lib/admin-response";

export async function POST(request: NextRequest) {
  if (!isAuthorizedAdminRequest(request)) return redirectTo("/admin/login");
  if (!isSameOriginRequest(request)) return new NextResponse("Forbidden", { status: 403 });

  const formData = await request.formData();
  const message = String(formData.get("message") ?? "").trim();
  const enabled = formData.get("enabled") === "on";

  if (message.length > 180) return redirectTo("/admin?error=message");

  try {
    await db.$transaction([
      db.setting.upsert({
        where: { key: "home_message" },
        update: { value: message },
        create: { key: "home_message", value: message },
      }),
      db.setting.upsert({
        where: { key: "home_message_enabled" },
        update: { value: enabled },
        create: { key: "home_message_enabled", value: enabled },
      }),
    ]);
  } catch {
    saveFallbackSettings(message, enabled);
  }

  return redirectTo("/admin?saved=1");
}

