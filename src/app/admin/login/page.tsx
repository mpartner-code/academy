import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE_NAME, verifyAdminSession } from "@/lib/admin-auth";

export const metadata: Metadata = {
  title: "Admin girişi",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const cookieStore = await cookies();
  if (verifyAdminSession(cookieStore.get(ADMIN_COOKIE_NAME)?.value)) redirect("/admin");

  const { error } = await searchParams;

  return (
    <main className="login-shell">
      <section className="login-card" aria-labelledby="login-title">
        <p className="eyebrow">ACADEMY · ADMIN</p>
        <h1 id="login-title">Admin girişi</h1>
        <p className="lead">Test məzmununu və ana səhifə bildirişini buradan idarə et.</p>
        {error ? <p className="error" role="alert">E-poçt və ya şifrə yanlışdır.</p> : null}
        <form className="admin-form" action="/api/admin/login" method="post">
          <div className="field">
            <label htmlFor="email">E-poçt</label>
            <input id="email" name="email" type="email" autoComplete="username" required />
          </div>
          <div className="field">
            <label htmlFor="password">Şifrə</label>
            <input id="password" name="password" type="password" autoComplete="current-password" required />
          </div>
          <button className="button" type="submit">Daxil ol</button>
        </form>
      </section>
    </main>
  );
}
