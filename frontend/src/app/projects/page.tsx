import { Suspense } from "react";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { mockProjects } from "@/lib/mockData";

export const metadata = {
  title: "Projects — Nguyen Hoang Gia Bao",
  description: "Web applications and indie games by Nguyen Hoang Gia Bao.",
};

interface Props {
  searchParams: { tab?: string };
}

export default function ProjectsPage({ searchParams }: Props) {
  const tab = searchParams.tab === "game" ? "game" : "web";

  return (
    <main className="min-h-screen pt-[60px]">
      <SectionHeader
        eyebrow="PORTFOLIO"
        title="Projects"
        description="A curated selection of web applications and indie games — each one a distinct design challenge and technical exploration."
      />

      <Suspense>
        <ProjectsGrid projects={mockProjects} initialTab={tab} />
      </Suspense>

      <Footer />
    </main>
  );
}
