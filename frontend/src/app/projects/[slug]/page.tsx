import { notFound } from "next/navigation";
import { ProjectDetailClient } from "@/components/ProjectDetailClient";
import { mockProjects } from "@/lib/mockData";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return mockProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const project = mockProjects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Nguyen Hoang Gia Bao`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = mockProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return <ProjectDetailClient project={project} />;
}
