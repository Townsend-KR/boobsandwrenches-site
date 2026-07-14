import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPageBySlug, sitePages } from "../projectData";

export function generateStaticParams() {
  return sitePages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function SitePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050607] px-6 py-12 text-[#E5E7EB]">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#9C7730]">
            {page.eyebrow}
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-[#C9A24A] md:text-7xl">
            {page.title}
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-[#A1A1AA]">
            {page.intro}
          </p>
        </header>

        <section className="mb-12 rounded-2xl border border-[#2A2F35] bg-[#111417] p-6 md:p-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9C7730]">
              Services & Pricing
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#E0C26B]">
              What You Can Order
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {page.prices.map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className="rounded-xl border border-[#2A2F35] bg-[#181C20] p-5"
              >
                <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-xl font-semibold text-[#E5E7EB]">
                    {item.name}
                  </h3>

                  <p className="shrink-0 rounded-full border border-[#9C7730] px-3 py-1 text-sm font-semibold text-[#E0C26B]">
                    {item.price}
                  </p>
                </div>

                <p className="leading-7 text-[#A1A1AA]">{item.description}</p>
              </article>
            ))}
          </div>

          <p className="mt-8 rounded-xl border border-[#2A2F35] bg-[#050607] p-5 leading-7 text-[#A1A1AA]">
            {page.note}
          </p>
        </section>

        <section className="mb-12 rounded-2xl border border-[#2A2F35] bg-[#111417] p-6 md:p-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9C7730]">
              Gallery
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#E0C26B]">
              Photos Coming Soon
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-[#A1A1AA]">
              Project photos are being added as pieces are finished,
              photographed, and dragged into obedience.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-dashed border-[#2A2F35] bg-[#181C20] text-center text-sm uppercase tracking-[0.25em] text-[#71717A]">
              Image Coming Soon
            </div>

            <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-dashed border-[#2A2F35] bg-[#181C20] text-center text-sm uppercase tracking-[0.25em] text-[#71717A]">
              Project Sample
            </div>

            <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-dashed border-[#2A2F35] bg-[#181C20] text-center text-sm uppercase tracking-[0.25em] text-[#71717A]">
              Custom Work
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-[#2A2F35] bg-[#111417] p-6 text-center md:p-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#9C7730]">
            Custom Quotes
          </p>

          <h2 className="mb-4 text-3xl font-bold text-[#E0C26B]">
            Need Something Specific?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl leading-7 text-[#A1A1AA]">
            Custom work is quoted before work begins. Send the idea, size,
            deadline, materials if known, and any reference photos. I will tell
            you what is realistic before we all pretend wood, resin, plastic,
            and deadlines are naturally cooperative.
          </p>

          <a
            href="mailto:kara@boobsandwrenches.com"
            className="inline-flex rounded-full bg-[#991B1B] px-6 py-3 font-semibold text-white transition hover:bg-[#B91C1C]"
          >
            Email for a Quote
          </a>
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