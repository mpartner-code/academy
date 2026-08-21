export type FallbackPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string | null;
  published: boolean;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

type FallbackState = {
  message: string;
  messageEnabled: boolean;
  posts: FallbackPost[];
  nextId: number;
};

const globalForFallback = globalThis as unknown as {
  academyAdminFallback?: FallbackState;
};

export function isFallbackStorageEnabled() {
  return process.env.ADMIN_STORAGE_MODE === "memory";
}

function getState() {
  globalForFallback.academyAdminFallback ??= {
    message: "",
    messageEnabled: false,
    posts: [],
    nextId: 1,
  };

  return globalForFallback.academyAdminFallback;
}

export function getFallbackSnapshot() {
  const state = getState();
  return {
    message: state.message,
    messageEnabled: state.messageEnabled,
    posts: [...state.posts],
  };
}

export function saveFallbackSettings(message: string, messageEnabled: boolean) {
  const state = getState();
  state.message = message;
  state.messageEnabled = messageEnabled;
}

export function createFallbackPost(input: {
  slug: string;
  title: string;
  excerpt: string | null;
  published: boolean;
}) {
  const state = getState();
  const now = new Date();
  const post: FallbackPost = {
    id: state.nextId++,
    ...input,
    publishedAt: input.published ? now : null,
    createdAt: now,
    updatedAt: now,
  };

  state.posts.unshift(post);
  return post;
}

export function toggleFallbackPost(id: number) {
  const post = getState().posts.find((candidate) => candidate.id === id);
  if (!post) return false;

  post.published = !post.published;
  post.publishedAt = post.published ? new Date() : null;
  post.updatedAt = new Date();
  return true;
}

