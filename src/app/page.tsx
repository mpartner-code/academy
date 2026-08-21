import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

async function getHomeContent() {
  try {
    const [messageSetting, enabledSetting, posts] = await Promise.all([
      db.setting.findUnique({ where: { key: "home_message" } }),
      db.setting.findUnique({ where: { key: "home_message_enabled" } }),
      db.post.findMany({
        where: { published: true },
        orderBy: { createdAt: "desc" },
        take: 3,
        select: { id: true, title: true, excerpt: true, publishedAt: true, createdAt: true },
      }),
    ]);

    return {
      message: typeof messageSetting?.value === "string" ? messageSetting.value : "",
      messageEnabled: enabledSetting?.value === true,
      posts,
    };
  } catch {
    return { message: "", messageEnabled: false, posts: [] };
  }
}

export default async function Home() {
  const { message, messageEnabled, posts } = await getHomeContent();

  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">MARKETING PARTNER · WEB PLATFORM</p>
        <h1>Agency Starter is ready.</h1>
        <p className="lead">
          A clean base for AI-assisted design, development, testing, SEO and deployment.
        </p>
        <div className="status"><span /> Starter environment healthy</div>
      </section>

      {messageEnabled && message ? (
        <aside className="announcement" aria-label="Sayt bildirişi">
          <strong>Yeni bildiriş</strong>
          <p>{message}</p>
        </aside>
      ) : null}

      {posts.length > 0 ? (
        <section className="public-posts" aria-labelledby="updates-title">
          <div className="section-heading">
            <p className="eyebrow">ADMİN PANELDƏN</p>
            <h2 id="updates-title">Son yeniliklər</h2>
          </div>
          <div className="post-grid">
            {posts.map((post) => (
              <article className="post-card" key={post.id}>
                <p className="post-date">
                  {(post.publishedAt ?? post.createdAt).toLocaleDateString("az-AZ")}
                </p>
                <h3>{post.title}</h3>
                {post.excerpt ? <p>{post.excerpt}</p> : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
