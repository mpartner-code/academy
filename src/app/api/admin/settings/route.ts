import { NextResponse, type NextRequest } from "next/server";
import { db } from "@/lib/db";
import { isAuthorizedAdminRequest, isSameOriginRequest } from "@/lib/admin-request";

export async function POST(request: NextRequest) {
  if (!isAuthorizedAdminRequest(request)) return NextResponse.redirect(new URL("/admin/login", request.url), 303);
  if (!isSameOriginRequest(request)) return new NextResponse("Forbidden", { status: 403 });

  const formData = await request.formData();
  const message = String(formData.get("message") ?? "").trim();
  const enabled = formData.get("enabled") === "on";

  if (message.length > 180) return NextResponse.redirect(new URL("/admin?error=message", request.url), 303);

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

  return NextResponse.redirect(new URL("/admin?saved=1", request.url), 303);
}
