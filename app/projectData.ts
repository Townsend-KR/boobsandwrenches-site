export type SitePage = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  note: string;
  imageFolder: string;
  prices: PriceItem[];
};

export type PriceItem = {
  name: string;
  price: string;
  description: string;
  images?: { src: string; alt: string }[];
};

export const sitePages: SitePage[] = [
  {
    slug: "woodworking",
    title: "Woodworking",
    eyebrow: "CUT | CLAMP | CURSE | FINISH",
    intro:
      "Custom woodworking including cutting boards, hair sticks, custom furniture, shelves, utility builds, and handmade pieces built with sawdust, stubbornness, and a deep suspicion of warped lumber.",
    note:
      "Pricing depends on size, material, finish, hardware, complexity, and whether the wood decides to behave like a civilized object.",
    imageFolder: "/images/projects/woodworking",
    prices: [
      {
        name: "Cutting boards",
        price: "Starting at $75",
        description:
          "Handmade cutting boards built with clean lines, durable finishes, and enough weight to feel like a proper kitchen tool instead of decoration.",
      },
      {
        name: "Hair sticks",
        price: "$25",
        description:
          "Hand-shaped wooden hair sticks, finished smooth and made for everyday use or dramatic forest-witch effectiveness.",
      },
      {
        name: "Custom furniture",
        price: "Quoted individually",
        description:
          "Small tables, benches, shelves, utility pieces, shop furniture, and custom builds based on size, material, finish, and complexity.",
      },
    ],
  },
  {
    slug: "3d-printing",
    title: "3D Printing",
    eyebrow: "PRINT | PAINT | POUR | DISPLAY",
    intro:
      "Custom 3D prints, hand-painted figures, resin display pieces, and tiny worlds built for gifts, shelves, fandoms, and people with very specific ideas.",
    note:
      "Custom pieces are quoted before work begins. Pricing depends on print time, size, detail, paint work, resin work, materials, and overall tiny-chaos intensity.",
    imageFolder: "/images/projects/3d-printing",
    prices: [
      {
        name: "Small raw 3D prints",
        price: "Starting at $15",
        description:
          "Unpainted small prints, simple objects, and basic custom pieces.",
      },
      {
        name: "Painted small figures",
        price: "Starting at $35",
        description:
          "Small printed figures with hand-painted detail work.",
      },
      {
        name: "Custom display pieces",
        price: "Starting at $45",
        description:
          "Themed pieces built around a character, gift idea, color palette, or concept.",
      },
      {
        name: "3D print + resin pieces",
        price: "$45–$125",
        description:
          "Layered resin effects, display bases, bioluminescent-style pours, and finished scenes.",
      },
      {
        name: "Large or highly detailed builds",
        price: "Quoted individually",
        description:
          "Large, complex, multi-part, or high-detail projects.",
      },
    ],
  },
  {
    slug: "design",
    title: "Design",
    eyebrow: "LAYOUT | TYPE | COLOR | IMPACT",
    intro:
      "Graphic design for people who need their idea turned into something clean, usable, and less visually tragic.",
    note:
      "Design pricing depends on revision count, file needs, complexity, deadline, and whether the original idea arrives as a sentence or a fever dream.",
    imageFolder: "/images/projects/design",
    prices: [
      {
        name: "Simple social graphic",
        price: "Starting at $25",
        description:
          "Single graphic for announcements, posts, promos, or small campaigns.",
      },
      {
        name: "Flyer / announcement graphic",
        price: "Starting at $45",
        description:
          "Event, sale, service, or informational flyer design.",
      },
      {
        name: "Product card / listing graphic",
        price: "Starting at $35",
        description:
          "Clean product visuals for online listings, portfolios, or shop use.",
      },
      {
        name: "Logo cleanup / simple mark",
        price: "Starting at $75",
        description:
          "Basic logo cleanup, simplified mark, or usable file refresh.",
      },
      {
        name: "Basic brand kit",
        price: "Starting at $150",
        description:
          "Logo direction, colors, type suggestions, and starter brand visuals.",
      },
    ],
  },
  {
    slug: "writing",
    title: "Writing Services",
    eyebrow: "CLEAR | SHARP | ADEPT | EFFICIENT",
    intro:
      "Clear writing, editing, formatting, and document cleanup for products, websites, artists, small businesses, and self-represented people who need their words organized into something readable.",
    note:
      "I am not a lawyer and do not provide legal advice. My only legal advice is: do not break the law. Legal-related services are limited to drafting support, formatting, organization, proofreading, editing, and clarity based on client-provided facts and instructions.",
    imageFolder: "/images/projects/writing",
    prices: [
      {
        name: "Product descriptions",
        price: "Starting at $20",
        description:
          "Short product copy for listings, handmade items, shop pages, and online sales.",
      },
      {
        name: "About page / bio copy",
        price: "Starting at $45",
        description:
          "Readable, polished copy for personal brands, artists, makers, and small businesses.",
      },
      {
        name: "Website page copy",
        price: "Starting at $65",
        description:
          "Focused copy for service pages, landing pages, portfolio pages, and small business websites.",
      },
      {
        name: "Artist statement",
        price: "Starting at $45",
        description:
          "Polished creative statements that explain the work without sounding like an art goblin swallowed a thesaurus.",
      },
      {
        name: "Editing / cleanup",
        price: "Starting at $25",
        description:
          "Grammar, structure, tone, clarity, formatting, and general word-herding.",
      },
         {
      name: "Federal and state legal document formatting",
      price: "Quoted individually",
      description:
        "Formatting, cleanup, organization, proofreading, and draft preparation support for federal or state documents based on client-provided facts, arguments, and instructions. No legal advice, no representation, no attorney-client relationship.",
    },
    {
      name: "Self-represented filing support",
      price: "Quoted individually",
      description:
        "Document organization, structure review, exhibit lists, formatting consistency, captions, certificates of service, and readability cleanup for pro se filings.",
    },
  ],
},
{
  slug: "tools-for-sale",
  title: "Tools for Sale",
  eyebrow: "USED | USEFUL | AS-IS | AVAILABLE",
  intro:
    "Most tools have a tool-only option or a tool, battery, and charger set. Used tools, shop extras, supplies, and equipment are available for local pickup or agreed shipping. No cart. No checkout. Just tools that need a new bench.",
  note:
    "All items are sold as-is. Availability may change. Contact for questions and purchase. Shipping depends on the tool and destination.",
  imageFolder: "/images/tools-for-sale",
  prices: [
    {
      name: "Kobalt Reciprocating Saw RS 1824B-03",
      price:
        "Tool only: $90 | Battery and charger available for an additional $40–$85",
      description: `Lightly used Kobalt RS 1824B-03 24V reciprocating saw. It has only been used about twice, so the motor and blade are in excellent condition.

Built for demolition, trimming, remodeling, and quick jobsite fixes. It cuts through wood, nails, and the mystery materials older projects tend to hide.

Clean, well-kept, and ready to work. A solid option for homeowners, DIYers, or anyone who wants a dependable saw without the wear of a heavily used tool.`,
      images: [
        {
          src: "/images/projects/tools-for-sale/kobalt_deals/recip_saw/left-brand-side.jpg",
          alt: "Left side of the Kobalt RS 1824B-03 reciprocating saw",
        },
        {
          src: "/images/projects/tools-for-sale/kobalt_deals/recip_saw/right-side.jpg",
          alt: "Right side of the Kobalt reciprocating saw",
        },
        {
          src: "/images/projects/tools-for-sale/kobalt_deals/recip_saw/serial-number.jpg",
          alt: "Serial number label on the Kobalt reciprocating saw",
        },
      ],
    },
    {
      name: "Hercules 7 1/4 in. Circular Saw",
      price: "$50.00",
      description:
        "Selling a Hercules 20V Brushless 7-1/4 Circular Saw. Only used a few times, in great condition. Comes with the original blade and case. Local pickup preferred; shipping available at buyer's expense.",
    },
    {
      name: "kobalt KXRS 7 1/4 inch Circular Saw",
      price: "$70.00 for tool only, $100.00 with 4ah battery and charger",
      description:
        "INSERT TOOL DESCRIPTION HERE. Include brand, model, condition, size, included accessories, pickup or shipping note, and any flaws.",
    },
    {
      name: "TOOL NAME HERE",
      price: "PRICE HERE",
      description:
        "INSERT TOOL DESCRIPTION HERE. Include brand, model, condition, size, included accessories, pickup or shipping note, and any flaws.",
    },
    {
      name: "TOOL NAME HERE",
      price: "PRICE HERE",
      description:
        "INSERT TOOL DESCRIPTION HERE. Include brand, model, condition, size, included accessories, pickup or shipping note, and any flaws.",
    },
  ],
},
];
  

export function getPageBySlug(slug: string) {
  return sitePages.find((page) => page.slug === slug);
}