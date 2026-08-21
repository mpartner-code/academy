import { NextResponse, type NextRequest } from "next/server";
import { db } from "@/lib/db";
import { isAuthorizedAdminRequest, isSameOriginRequest } from "@/lib/admin-request";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!isAuthorizedAdminRequest(request)) return NextResponse.redirect(new URL("/admin/login", request.url), 303);
  if (!isSameOriginRequest(request)) return new NextResponse("Forbidden", { status: 403 });

  const { id } = await params;
  const postId = Number(id);
  if (!Number.isInteger(postId) || postId <= 0) return new NextResponse("Not found", { status: 404 });

  const post = await db.post.findUnique({ where: { id: postId }, select: { published: true } });
  if (!post) return new NextResponse("Not found", { status: 404 });

  const published = !post.published;
  await db.post.update({
    where: { id: postId },
    data: { published, publishedAt: published ? new Date() : null },
  });

  return NextResponse.redirect(new URL("/admin", request.url), 303);
}
