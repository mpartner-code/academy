import { NextResponse, type NextRequest } from "next/server";
import { db } from "@/lib/db";
import { isAuthorizedAdminRequest, isSameOriginRequest } from "@/lib/admin-request";
import { redirectTo } from "@/lib/admin-response";

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60) || "post";
}

export async function POST(request: NextRequest) {
  if (!isAuthorizedAdminRequest(request)) return redirectTo("/admin/login");
  if (!isSameOriginRequest(request)) return new NextResponse("Forbidden", { status: 403 });

  const formData = await request.formData();
  const title = String(formData.get("title") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const published = formData.get("published") === "on";

  if (!title || title.length > 100 || excerpt.length > 300) {
    return redirectTo("/admin?error=post");
  }

  await db.post.create({
    data: {
      slug: `${slugify(title)}-${Date.now().toString(36)}`,
      title,
      excerpt: excerpt || null,
      published,
      publishedAt: published ? new Date() : null,
    },
  });

  return redirectTo("/admin?created=1");
}
