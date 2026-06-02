import type {
  ApiResponse,
  Project,
  BlogPost,
  BlogPostListItem,
  Job,
  Education,
  ContactFormData,
} from "@/types";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

async function apiFetch<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  const json: ApiResponse<T> = await res.json();

  if (!res.ok || !json.success) {
    throw new Error(json.error || `HTTP ${res.status}`);
  }

  return json.data;
}

// ── Projects ──────────────────────────────────────────────
export async function getProjects(): Promise<Project[]> {
  return apiFetch<Project[]>("/api/projects", {
    next: { revalidate: 60 }, // ISR — re-fetch every 60s
  });
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return apiFetch<Project[]>("/api/projects/featured", {
    next: { revalidate: 60 },
  });
}

export async function getProject(slug: string): Promise<Project> {
  return apiFetch<Project>(`/api/projects/${slug}`, {
    next: { revalidate: 60 },
  });
}

// ── Blog ──────────────────────────────────────────────────
export async function getBlogPosts(): Promise<BlogPostListItem[]> {
  return apiFetch<BlogPostListItem[]>("/api/blog", {
    next: { revalidate: 60 },
  });
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  return apiFetch<BlogPost>(`/api/blog/${slug}`, {
    next: { revalidate: 60 },
  });
}

// ── Resume ────────────────────────────────────────────────
export async function getJobs(): Promise<Job[]> {
  return apiFetch<Job[]>("/api/resume/jobs", {
    next: { revalidate: 300 },
  });
}

export async function getEducation(): Promise<Education[]> {
  return apiFetch<Education[]>("/api/resume/education", {
    next: { revalidate: 300 },
  });
}

// ── Contact ───────────────────────────────────────────────
export async function submitContact(
  data: ContactFormData
): Promise<{ message: string }> {
  const res = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok || !json.success) {
    throw new Error(json.error || "Failed to send message");
  }

  return { message: json.message };
}
