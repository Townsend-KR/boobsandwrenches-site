import Link from "next/link";

type BenchPost = {
  title: string;
  category: string;
  description: string;
  href: string;
  buttonText: string;
  affiliate?: boolean;
};

const benchPosts: BenchPost[] = [
  {
  title: "Hardening the Garage",
  category: "Cybersecurity Case Study",
  description:
    "A risk-based security review of this Next.js portfolio using NIST RMF, vulnerability management, and practical remediation.",
  href: "/the-bench/hardening-the-garage",
  buttonText: "Read Case Study",
},
  {
    title: "Tools Worth Keeping on the Bench",
    category: "Shop Favorites",
    description:
      "Tools, blades, batteries, supplies, and assorted shop equipment that have earned a recommendation through actual use.",
    href: "#",
    buttonText: "Coming Soon",
    affiliate: true,
  },
  {
    title: "What the Project Taught Me",
    category: "Build Notes",
    description:
      "Short reviews, basic plans, words of wisdom, and simple solutions for complex problems.",
    href: "#",
    buttonText: "Coming Soon",
  },
  {
    title: "Tool Reviews Without the Packaging Speech",
    category: "Reviews",
    description:
      "Straightforward reviews based on how tools perform in the shop, including what worked, what did not, and what I would buy again.",
    href: "#",
    buttonText: "Coming Soon",
    affiliate: true,
  },
];

export default function TheBenchPage() {
  return (
    <main className="min-h-screen bg-[#050607] px-5 py-12 text-[#E5E7EB] sm:px-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-14 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#9C7730]">
            Torque | Talk | Test | Build
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-[#C9A24A] sm:text-6xl md:text-7xl">
            The Bench
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#A1A1AA]">
            Shop stories, complex builds, technical projects, and a few lessons learned along the way."
          </p>
        </header>

        <section className="mb-12 rounded-2xl border border-[#2A2F35] bg-[#111417] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9C7730]">
            From the Shop
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#E0C26B]">
            Torque, Talk & Useful Information
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-[#A1A1AA]">
            This is where projects get explained, tools get judged, mistakes
            become instructions, and useful shop discoveries are recorded
            before they disappear beneath a pile of clamps.
          </p>
        </section>

        <section>
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9C7730]">
              Latest From the Bench
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#E0C26B]">
              Reviews, Builds & Shop Picks
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benchPosts.map((post) => (
              <article
                key={post.title}
                className="flex flex-col rounded-2xl border border-[#2A2F35] bg-[#181C20] p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9C7730]">
                  {post.category}
                </p>

                <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#E5E7EB]">
                  {post.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-[#A1A1AA]">
                  {post.description}
                </p>

                {post.affiliate && (
                  <p className="mt-5 text-xs leading-5 text-[#71717A]">
                    This post may contain affiliate links. Boobs & Wrenches may
                    earn a commission at no additional cost to you.
                  </p>
                )}

                <Link
                  href={post.href}
                  className="mt-6 inline-flex w-fit rounded-full border border-[#9C7730] px-5 py-2.5 text-sm font-semibold text-[#E0C26B] transition hover:bg-[#9C7730] hover:text-[#050607]"
                >
                  {post.buttonText}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-[#2A2F35] bg-[#111417] p-6 text-center sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9C7730]">
            Affiliate Disclosure
          </p>

          <p className="mx-auto mt-4 max-w-3xl leading-7 text-[#A1A1AA]">
            Some links on this page may be affiliate links. When a purchase is
            made through one of those links, Boobs & Wrenches may receive a
            commission at no additional cost to the buyer. Recommendations are
            based on usefulness, experience, research, or a reasonable belief
            that the product is worth discussing.
          </p>
        </section>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9C7730] hover:text-[#E0C26B]"
          >
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}