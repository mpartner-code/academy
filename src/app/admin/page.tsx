import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE_NAME, verifyAdminSession } from "@/lib/admin-auth";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin panel",
  robots: { index: false, follow: false },
};

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; created?: string; error?: string }>;
}) {
  const cookieStore = await cookies();
  if (!verifyAdminSession(cookieStore.get(ADMIN_COOKIE_NAME)?.value)) redirect("/admin/login");

  const [{ saved, created, error }, messageSetting, enabledSetting, posts] = await Promise.all([
    searchParams,
    db.setting.findUnique({ where: { key: "home_message" } }),
    db.setting.findUnique({ where: { key: "home_message_enabled" } }),
    db.post.findMany({ orderBy: { createdAt: "desc" }, take: 8 }),
  ]);

  const message = typeof messageSetting?.value === "string" ? messageSetting.value : "";
  const messageEnabled = enabledSetting?.value === true;

  return (
    <main className="admin-shell">
      <nav className="admin-topbar" aria-label="Admin naviqasiyası">
        <a className="admin-brand" href="/admin">
          Academy <span className="admin-badge">Admin</span>
        </a>
        <div className="post-actions">
          <a className="button secondary small" href="/" target="_blank" rel="noreferrer">Sayta bax</a>
          <form action="/api/admin/logout" method="post">
            <button className="button secondary small" type="submit">Çıxış</button>
          </form>
        </div>
      </nav>

      <header className="admin-header">
        <div>
          <p className="eyebrow">TEST İDARƏETMƏ PANELİ</p>
          <h1>Dashboard</h1>
        </div>
        <p className="lead">Saytın görünən məzmununu iki sadə funksiya ilə idarə et.</p>
      </header>

      {saved ? <p className="flash" role="status">Ana səhifə bildirişi yeniləndi.</p> : null}
      {created ? <p className="flash" role="status">Yeni post əlavə edildi.</p> : null}
      {error ? <p className="error" role="alert">Məlumat saxlanmadı. Sahələri yoxlayıb yenidən sına.</p> : null}

      <div className="admin-grid">
        <section className="admin-card" aria-labelledby="message-title">
          <h2 id="message-title">1. Ana səhifə bildirişi</h2>
          <p className="admin-card-copy">Qısa mesaj yaz və saytda göstərilib-göstərilməyəcəyini seç.</p>
          <form className="admin-form" action="/api/admin/settings" method="post">
            <div className="field">
              <label htmlFor="message">Bildiriş mətni</label>
              <textarea id="message" name="message" maxLength={180} defaultValue={message} placeholder="Məsələn: Yeni xidmətimiz aktivdir." />
            </div>
            <label className="check-row">
              <input name="enabled" type="checkbox" defaultChecked={messageEnabled} />
              Ana səhifədə göstər
            </label>
            <button className="button" type="submit">Bildirişi saxla</button>
          </form>
        </section>

        <section className="admin-card" aria-labelledby="posts-title">
          <h2 id="posts-title">2. Test postları</h2>
          <p className="admin-card-copy">Yeni post əlavə et və mövcud postların görünməsini dəyiş.</p>
          <form className="admin-form" action="/api/admin/posts" method="post">
            <div className="field">
              <label htmlFor="title">Başlıq</label>
              <input id="title" name="title" maxLength={100} required placeholder="Yeni xidmət haqqında" />
            </div>
            <div className="field">
              <label htmlFor="excerpt">Qısa mətn</label>
              <textarea id="excerpt" name="excerpt" maxLength={300} placeholder="Postun qısa açıqlaması" />
            </div>
            <label className="check-row">
              <input name="published" type="checkbox" defaultChecked />
              Dərhal yayımla
            </label>
            <button className="button" type="submit">Post əlavə et</button>
          </form>

          <div className="admin-post-list">
            {posts.length ? posts.map((post) => (
              <article className="admin-post" key={post.id}>
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.createdAt.toLocaleDateString("az-AZ")}</p>
                </div>
                <div className="post-actions">
                  <span className={`state${post.published ? " published" : ""}`}>
                    {post.published ? "Yayımda" : "Qaralama"}
                  </span>
                  <form action={`/api/admin/posts/${post.id}/toggle`} method="post">
                    <button className="button secondary small" type="submit">
                      {post.published ? "Gizlət" : "Yayımla"}
                    </button>
                  </form>
                </div>
              </article>
            )) : <p className="empty">Hələ post əlavə edilməyib.</p>}
          </div>
        </section>
      </div>
    </main>
  );
}
