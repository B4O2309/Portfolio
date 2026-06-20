import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // ── Clean existing data ─────────────────────────────────
  await prisma.contactMessage.deleteMany();
  await prisma.education.deleteMany();
  await prisma.job.deleteMany();
  await prisma.blogPost.deleteMany();
  await prisma.project.deleteMany();

  // ── Projects ────────────────────────────────────────────
  await prisma.project.createMany({
    data: [
      {
        title: "Rift Protocol",
        slug: "rift-protocol",
        description:
          "A sci-fi puzzle-platformer where you manipulate spacetime rifts to navigate a collapsing research station. Built solo in Unreal Engine 5 with custom C++ gameplay systems and hand-authored HLSL shaders.",
        content:
          "A 12-level puzzle platformer exploring temporal mechanics as a core gameplay verb.",
        tags: ["Unreal Engine 5", "C++", "Puzzle", "Sci-Fi"],
        github: "https://github.com/cole-ashby/rift-protocol",
        liveUrl: "https://cole-ashby.itch.io/rift-protocol",
        featured: true,
        order: 1,
      },
      {
        title: "Signal Lost",
        slug: "signal-lost",
        description:
          "Psychological horror game built in Godot 4. Players piece together a fragmented narrative through corrupted audio logs and environmental storytelling. Featured in the itch.io horror jam top 10.",
        content:
          "A psychological horror experience built around audio-driven narrative design.",
        tags: ["Godot 4", "GDScript", "Horror", "Narrative"],
        github: "https://github.com/cole-ashby/signal-lost",
        liveUrl: "https://cole-ashby.itch.io/signal-lost",
        featured: true,
        order: 2,
      },
      {
        title: "Portfolio Site",
        slug: "portfolio-site",
        description:
          "This very site — a handcrafted portfolio built with Next.js, Express, and PostgreSQL. Designed from scratch with a dark industrial aesthetic.",
        content:
          "A full-stack portfolio with a separate frontend and backend API, built to human standards.",
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
        github: "https://github.com/B4O2309/PFLO",
        featured: true,
        order: 3,
      },
      {
        title: "Vector Storm",
        slug: "vector-storm",
        description:
          "A top-down twin-stick shooter with procedurally generated enemy wave formations. Unity, C#, and hand-crafted VFX using Unity's VFX Graph.",
        content:
          "Procedural wave system with handcrafted VFX and a tight gameplay loop.",
        tags: ["Unity", "C#", "Procedural", "VFX Graph"],
        order: 4,
      },
    ],
  });

  // ── Jobs ────────────────────────────────────────────────
  await prisma.job.createMany({
    data: [
      {
        jobTitle: "Lead Gameplay Developer",
        company: "Irongate Studios",
        location: "Remote",
        summary:
          "Led core gameplay systems development for an unannounced AAA-adjacent title. Architected the character ability framework in C++, mentored two junior developers, and drove weekly sprint planning with a cross-functional team of 14.",
        content: `- Designed and implemented a data-driven ability system supporting 60+ unique player and enemy abilities with zero code duplication
- Reduced per-frame physics query cost by 38% through custom broadphase optimisations
- Introduced structured code review processes that cut regression bugs by 55% over two quarters`,
        tags: [
          "Unreal Engine 5",
          "C++",
          "Blueprints",
          "Gameplay Framework",
          "Team Lead",
        ],
        startDate: "2023-03",
        endDate: null,
        order: 1,
      },
      {
        jobTitle: "Junior Game Developer",
        company: "Phosphor Games",
        location: "London, UK",
        summary:
          "Built and shipped two mobile titles and one PC indie release. Responsible for UI systems, procedural level generation, and shader development using Unity and HLSL.",
        content: `- Implemented a runtime mesh deformation system for destructible environments, reducing asset count by 40%
- Shipped two mobile titles (iOS & Android) achieving combined 80,000+ installs
- Co-authored the studio's internal shader library, now used across all active projects`,
        tags: ["Unity", "C#", "HLSL", "Mobile", "Procedural Generation"],
        startDate: "2021-06",
        endDate: "2023-02",
        order: 2,
      },
    ],
  });

  // ── Education ───────────────────────────────────────────
  await prisma.education.createMany({
    data: [
      {
        school: "SAE Institute — Game Programming",
        summary:
          "Bachelor of Science in Game Programming. Focused on engine architecture, real-time rendering pipelines, and AI behaviour systems. Graduated with Distinction.",
        content:
          "Final year project: a custom 3D game engine written from scratch in C++ and OpenGL, featuring a PBR rendering pipeline, entity-component system, and integrated physics.",
        tags: [
          "C++",
          "OpenGL",
          "Engine Architecture",
          "AI / Pathfinding",
          "Linear Algebra",
        ],
        startDate: "2018",
        endDate: "2021",
        order: 1,
      },
    ],
  });

  // ── Blog posts ──────────────────────────────────────────
  await prisma.blogPost.createMany({
    data: [
      {
        title: "Building a Data-Driven Ability System in UE5",
        slug: "building-data-driven-ability-system-ue5",
        summary:
          "How I architected a flexible ability framework using Data Assets and C++ templates — avoiding blueprint spaghetti while keeping the system designer-friendly.",
        content: `## The Problem With Hard-Coded Abilities

Early in *Rift Protocol*'s development I did the obvious thing: a giant \`ACharacter\` subclass with every ability baked in as virtual functions. By month two it was 4,000 lines and nobody wanted to touch it.

The fix was treating abilities as **data**, not code.

## Data Assets as Ability Definitions

\`\`\`cpp
UCLASS(BlueprintType)
class UAbilityDefinition : public UDataAsset
{
    GENERATED_BODY()
public:
    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly)
    float Cooldown = 1.0f;

    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly)
    TSubclassOf<UAbilityEffect> EffectClass;

    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly)
    FGameplayTagContainer RequiredTags;
};
\`\`\`

Each ability is now a \`.uasset\` file a designer can duplicate and tweak — no programmer required for balance passes.

## The Execution Layer

The \`UAbilityComponent\` holds a \`TArray<UAbilityDefinition*>\` and a runtime state map. Activation looks up the definition, validates tags, applies cooldown, and fires the effect instance. No virtual dispatch maze.

## What Changed

- Designers own the ability spreadsheet, not Jira tickets
- Adding a new ability is a 5-minute asset job, not a pull request
- Unit tests are trivial because execution logic is isolated from data

It took a week to refactor and saved far more than that in the months that followed.`,
        tags: ["Unreal Engine 5", "C++", "Gameplay Systems"],
        author: "Cole Ashby",
        date: new Date("2026-05-12"),
        published: true,
      },
      {
        title: "Getting Started with TanStack Router",
        slug: "getting-started-with-tanstack-router",
        summary:
          "A practical walkthrough of TanStack Router's file-based routing, type-safe navigation, and loader patterns for React applications.",
        content: `## Why TanStack Router?

Type-safe routing has been a long-standing gap in the React ecosystem. TanStack Router fills it with full TypeScript inference from route definitions down to param access.

## File-Based Routing

Drop a file in \`src/routes/\` and the router picks it up automatically. Nested layouts compose without boilerplate.

## Loaders

Loaders run before render, co-located with the route file. No waterfall, no useEffect data fetching, no loading spinners in every component.

## Worth the Switch?

If you're building a TypeScript-first React app, yes. The DX improvement is substantial once you're past the initial config.`,
        tags: ["React", "TypeScript", "Routing"],
        author: "Cole Ashby",
        date: new Date("2026-04-20"),
        published: true,
      },
      {
        title: "Tailwind CSS v4 — What Actually Changed",
        slug: "tailwind-css-v4-guide",
        summary:
          "A ground-level look at the breaking changes in Tailwind v4: the new Vite plugin, CSS-first config, and what to watch out for when upgrading.",
        content: `## The Vite Plugin Changes Everything

In v4, Tailwind ships as a Vite plugin. No more PostCSS config, no more \`tailwind.config.js\` in most cases.

## CSS-First Configuration

Customisation moves into your CSS file using \`@theme\` blocks. Design tokens are CSS custom properties.

## What Breaks

Arbitrary value syntax changes. The \`theme()\` function in CSS works differently. JIT is now the only mode.

## Should You Upgrade?

For greenfield projects, yes immediately. For existing codebases, audit your arbitrary values first.`,
        tags: ["CSS", "Tailwind", "Frontend"],
        author: "Cole Ashby",
        date: new Date("2026-03-15"),
        published: true,
      },
    ],
  });

  console.log("✅ Seed complete.");
  console.log("   Projects : 4");
  console.log("   Jobs     : 2");
  console.log("   Education: 1");
  console.log("   Blog     : 3");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
