import Link from "next/link";

const notes = [
  {
    title: "The Safest Admin Portal Is the One I Did Not Deploy",
    category: "Security Note",
    description:
      "Why an unfinished login and API were removed from a public portfolio in favor of a smaller, safer static publishing surface.",
    href: "/notes/static-publishing",
  },
];

export default function NotesPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-12">
      <header className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#9C7730]">
          From the Notebook
        </p>

        <h1 className="mb-4 text-4xl font-bold text-[#E0C26B]">
          Reviews, plans & useful warnings
        </h1>

        <p className="max-w-3xl leading-7 text-[#A1A1AA]">
          Short observations from the shop and terminal—tool reviews,
          build plans, lessons learned, and occasional reminders not to
          eat yellow snow.
        </p>
      </header>

      <section className="grid gap-6">
        {notes.map((note) => (
          <article
            key={note.href}
            className="rounded-2xl border border-[#2A2F35] bg-[#111417] p-6"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#9C7730]">
              {note.category}
            </p>

            <h2 className="mb-3 text-2xl font-bold text-[#E0C26B]">
              {note.title}
            </h2>

            <p className="mb-6 leading-7 text-[#A1A1AA]">
              {note.description}
            </p>

            <Link
              href={note.href}
              className="inline-flex rounded-full border border-[#9C7730] px-5 py-2 font-semibold text-[#E0C26B] transition hover:bg-[#9C7730] hover:text-black"
            >
              Read Note →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}