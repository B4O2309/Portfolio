// ── API response wrapper ──────────────────────────────────
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

// ── Media item ────────────────────────────────────────────
export interface MediaItem {
  type: "image" | "video";
  url: string;
  thumbnail?: string; // for video thumbnails
  caption?: string;
}

// ── Project ───────────────────────────────────────────────
export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  tags: string[];
  github: string | null;
  liveUrl: string | null;
  image: string | null;
  featured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
  // Extended fields for rich display (populated by mock data)
  category?: 'web' | 'game';
  year?: string;
  role?: string;
  team?: string;
  duration?: string;
  media?: MediaItem[];
}

// ── Blog ──────────────────────────────────────────────────
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  tags: string[];
  author: string;
  published: boolean;
  date: string;
  createdAt: string;
  updatedAt: string;
}

// Blog list item — no content field (excluded in list endpoint)
export type BlogPostListItem = Omit<BlogPost, "content">;

// ── Job ───────────────────────────────────────────────────
export interface Job {
  id: number;
  jobTitle: string;
  company: string;
  location: string;
  summary: string;
  content: string;
  tags: string[];
  startDate: string;
  endDate: string | null;
  order: number;
  createdAt: string;
  updatedAt: string;
}

// ── Education ─────────────────────────────────────────────
export interface Education {
  id: number;
  school: string;
  summary: string;
  content: string;
  tags: string[];
  startDate: string;
  endDate: string | null;
  order: number;
  createdAt: string;
  updatedAt: string;
}

// ── Contact form ──────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
