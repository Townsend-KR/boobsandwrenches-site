import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { sitePages } from "./projectData";
const bodyFont = Inter({
  subsets: ["latin"],
});
const quoteEmailHref =
  "mailto:kara@boobsandwrenches.com?subject=Custom%20Quote%20Request";
const featuredPages = sitePages.filter((page) =>
  ["woodworking", "3d-printing", "design", "writing", "tools-for-sale"].includes(
    page.slug
  )
);
export default function Home() {
  return (
    <main
      className={`${bodyFont.className} min-h-screen bg-[#050607] px-6 py-8 text-[#E5E7EB]`}
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-20 text-center">
          <div className="mb-10 flex justify-center">
            <Image
              src="/images/logo.png"
              alt="Boobs & Wrenches logo"
              width={900}
              height={900}
              priority
              className="mx-auto h-auto w-64 sm:w-72 md:w-80"
            />
          </div>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.4em] text-[#9C7730]">
            Sass | Class | Brass
          </p>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-[#A1A1AA]">
            Custom woodworking, 3D printed pieces, resin displays, design work,
            writing services, and useful shop things built with skill,
            stubbornness, and very limited patience for ugly nonsense.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={quoteEmailHref}
              className="rounded-full bg-[#991B1B] px-6 py-3 font-semibold text-white transition hover:bg-[#B91C1C]"
            >
              Email for a Quote
            </a>
            <Link
              href="/tools-for-sale"
              className="rounded-full border border-[#9C7730] px-6 py-3 font-semibold text-[#E0C26B] transition hover:border-[#E0C26B] hover:text-white"
            >
              View Tools for Sale
            </Link>
          </div>
        </header>
        <section
          id="tech"
          className="scroll-mt-8 my-8 rounded-2xl border border-[#2A2F35] bg-[#111417] p-6"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#9C7730]">
            Under the Hood
          </p>

          <h2 className="mb-8 text-3xl font-bold text-[#E0C26B]">
            Security, forensics, systems, and code.
          </h2>

          <div className="grid gap-4 text-left md:grid-cols-2">
            <article className="rounded-xl border border-[#2A2F35] p-5">
              <h3 className="mb-3 text-xl font-bold text-[#E0C26B]">
                Cybersecurity &amp; GRC
              </h3>
              <p className="leading-7 text-[#A1A1AA]">
                NIST RMF and SP 800-53 foundations • ATO lifecycle • FISMA
                concepts • security documentation
              </p>
            </article>

            <article className="rounded-xl border border-[#2A2F35] p-5">
              <h3 className="mb-3 text-xl font-bold text-[#E0C26B]">
                Digital Forensics
              </h3>
              <p className="leading-7 text-[#A1A1AA]">
                SQLite/WAL/SHM analysis • file recovery • timeline and metadata
                review • SHA-256 validation
              </p>
            </article>

            <article className="rounded-xl border border-[#2A2F35] p-5">
              <h3 className="mb-3 text-xl font-bold text-[#E0C26B]">
                Development
              </h3>
              <p className="leading-7 text-[#A1A1AA]">
                Python • SQL • HTML/CSS • Git/GitHub • C/C++ fundamentals
              </p>
            </article>

            <article className="rounded-xl border border-[#2A2F35] p-5">
              <h3 className="mb-3 text-xl font-bold text-[#E0C26B]">
                Systems &amp; Analysis
              </h3>
              <p className="leading-7 text-[#A1A1AA]">
                macOS and Linux command line • SSH • packet-capture and log
                review • network and device inventory
              </p>
            </article>
          </div>

          <p className="mt-6 text-sm text-[#A1A1AA]">
            <span className="font-semibold text-[#E0C26B]">
              Currently pursuing:
            </span>{" "}
            CompTIA Security+
          </p>
        </section>
        <section
          id="studio"
          className="mb-14 scroll-mt-8 rounded-2xl border border-[#2A2F35] bg-[#111417] p-6 md:p-8"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#9C7730]">
            The Studio
          </p>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="mb-5 text-3xl font-bold text-[#E0C26B] md:text-4xl">
                Built by hand, sharpened by design, and finished with brass.
              </h2>
              <div className="space-y-5 leading-8 text-[#A1A1AA]">
                <p>
                  Boobs &amp; Wrenches is a custom creative studio for handmade
                  objects, small-batch shop work, visual design, document
                  cleanup, and one-off pieces that need more personality than a
                  mass-produced rectangle from a warehouse.
                </p>
                <p>
                  The work moves between wood, resin, 3D printing, illustration,
                  layout, writing, and the occasional tool that needs to leave
                  the shop before it starts multiplying in a drawer. Each piece
                  is handled with practical skill, visual judgment, and a strong
                  belief that useful things do not have to be boring.
                </p>
                <p>
                  Custom projects are quoted before work begins. Send the idea,
                  size, deadline, materials if known, and reference photos if
                  you have them. Vague chaos is accepted, but priced
                  accordingly.
                </p>
              </div>
            </div>
            <aside className="rounded-2xl border border-[#2A2F35] bg-[#181C20] p-6">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#9C7730]">
                Contact
              </p>
              <h3 className="mb-4 text-2xl font-bold text-[#E0C26B]">
                Quotes, custom work, and tool questions
              </h3>
              <p className="mb-6 leading-7 text-[#A1A1AA]">
                For custom woodworking, 3D prints, resin display pieces,
                graphic design, writing services, or tools for sale, send a
                clear note with what you need.
              </p>
              <a
                href={quoteEmailHref}
                className="inline-flex w-full justify-center rounded-full bg-[#991B1B] px-6 py-3 font-semibold text-white transition hover:bg-[#B91C1C]"
              >
                kara@boobsandwrenches.com
              </a>
            </aside>
          </div>
        </section>
        <section
          id="work"
          className="mb-14 scroll-mt-8 rounded-2xl border border-[#2A2F35] bg-[#111417] p-6 md:p-8"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#9C7730]">
            What I Make
          </p>
          <h2 className="mb-8 text-3xl font-bold text-[#E0C26B]">
            Services, custom work, and shop-built chaos
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredPages.map((page) => (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
                className="group rounded-xl border border-[#2A2F35] bg-[#181C20] p-5 transition hover:border-[#9C7730]"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#9C7730]">
                  {page.eyebrow}
                </p>
                <h3 className="mb-3 text-2xl font-bold text-[#E5E7EB] group-hover:text-[#E0C26B]">
                  {page.title}
                </h3>
                <p className="leading-7 text-[#A1A1AA]">{page.intro}</p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A24A]">
                  View Page
                </p>
              </Link>
            ))}
          </div>
        </section>
        <section className="mb-14 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-[#2A2F35] bg-[#111417] p-6 md:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#9C7730]">
              Custom Orders
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[#E0C26B]">
              Have an idea?
            </h2>
            <p className="leading-7 text-[#A1A1AA]">
              Send the idea, size, deadline, materials if known, and reference
              photos if you have them. Custom work is quoted before work begins,
              because pretending mystery projects have mystery budgets is how
              civilization declines.
            </p>
          </article>
          <article className="rounded-2xl border border-[#2A2F35] bg-[#111417] p-6 md:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#9C7730]">
              Shop Notes
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[#E0C26B]">
              Tools, pieces, and availability
            </h2>
            <p className="leading-7 text-[#A1A1AA]">
              Tools for sale are listed as available, sold, or pending. Custom
              pieces and handmade items may change as photos are added, projects
              are finished, and the shop continues its noble war against
              clutter.
            </p>
          </article>
        </section>
        <section
          id="contact"

          className="scroll-mt-8 rounded-2xl border border-[#2A2F35] bg-[#111417] p-6 text-center md:p-8"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#9C7730]">
            Start the Conversation
          </p>
          <h2 className="mb-4 text-3xl font-bold text-[#E0C26B]">
            Commission something useful, strange, sharp, or beautifully
            unreasonable.
          </h2>
          <p className="mx-auto mb-8 max-w-2xl leading-7 text-[#A1A1AA]">
            For quotes, custom requests, writing services, design projects, or
            tool listings, email the studio with the details. Measurements,
            photos, deadlines, and budget ranges help keep everyone from
            wandering into the fog like doomed Victorian children.
          </p>
          <a
            href={quoteEmailHref}
            className="inline-flex rounded-full bg-[#991B1B] px-6 py-3 font-semibold text-white transition hover:bg-[#B91C1C]"
          >
            Email the Studio
          </a>
          <a
            href={quoteEmailHref}
            className="mt-5 block text-sm text-[#71717A] transition hover:text-[#E0C26B]"
          >
            kara@boobsandwrenches.com
          </a>
          <div className="mt-10 border-t border-[#2A2F35] pt-8">
  <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#9C7730]">
    Professional Links
  </p>

  <div className="flex flex-wrap justify-center gap-3">
    <a
      href="https://github.com/Townsend-KR"
      target="_blank"
      rel="noreferrer"
      className="rounded-full border border-[#9C7730] px-5 py-3 font-semibold text-[#E0C26B] transition hover:border-[#E0C26B] hover:bg-[#1A1E22]"
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/kara-townsend-boobs-and-wrenches"
      target="_blank"
      rel="noreferrer"
      className="rounded-full border border-[#9C7730] px-5 py-3 font-semibold text-[#E0C26B] transition hover:border-[#E0C26B] hover:bg-[#1A1E22]"
    >
      LinkedIn
    </a>

    <a
      href="mailto:kara@minicommand.org?subject=Professional%20Inquiry"
      className="rounded-full border border-[#9C7730] px-5 py-3 font-semibold text-[#E0C26B] transition hover:border-[#E0C26B] hover:bg-[#1A1E22]"
    >
      Professional Email
    </a>

    <a
      href="/Kara_Townsend_Cybersecurity_Resume.pdf"
      target="_blank"
      rel="noreferrer"
      className="rounded-full border border-[#9C7730] px-5 py-3 font-semibold text-[#E0C26B] transition hover:border-[#E0C26B] hover:bg-[#1A1E22]"
    >
      Cybersecurity Résumé
    </a>
  </div>

  <p className="mt-5 text-sm text-[#A1A1AA]">
    kara@minicommand.org
  </p>
</div>
        </section>
      </div>
    </main>
  );
}