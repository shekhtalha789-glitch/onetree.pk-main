/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         OneTree Pakistan — CONTENT CONFIGURATION            ║
 * ║                                                              ║
 * ║  ✏️  THIS IS THE ONLY FILE YOU NEED TO EDIT                  ║
 * ║  Change text, numbers, links, colors — no coding needed!    ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const SITE = {

  // ─────────────────────────────────────────────
  // BRAND & META
  // ─────────────────────────────────────────────
  brand: {
    name:        "OneTree",
    tagline:     "Grow a Tree. Grow the Planet.",
    description: "Track real trees, contribute to climate action, and become part of Pakistan's growing reforestation movement.",
    email:       "hello@onetree.pk",
    phone:       "+92 300 0000000",
    address:     "Lahore, Pakistan",
    // Social links — replace # with your real URLs
    social: {
      twitter:   "#",
      instagram: "#",
      facebook:  "#",
      youtube:   "#",
      linkedin:  "#",
    }
  },

  // ─────────────────────────────────────────────
  // COLORS  (change these to restyle the whole site)
  // ─────────────────────────────────────────────
  colors: {
    primary:   "#2E7D32",
    light:     "#66BB6A",
    mid:       "#4CAF50",
    deep:      "#1a3d1f",
    pale:      "#A8D5A2",
    bgSoft:    "#F6FFF8",
  },

  // ─────────────────────────────────────────────
  // HERO SECTION
  // ─────────────────────────────────────────────
  hero: {
    badge:           "Based in Pakistan · Powered by Community",
    title:           "Grow a Tree.",
    titleHighlight:  "Grow the Planet.",
    subtitle:        "Track real trees, contribute to climate action, and become part of Pakistan's growing reforestation movement — one tree at a time.",
    stats: [
      { number: "140K+", label: "Trees Planted"   },
      { number: "28K+",  label: "Green Champions" },
      { number: "96%",   label: "Survival Rate"   },
    ],
    appStoreUrl:     "#",   // ← Your iOS App Store link
    playStoreUrl:    "#",   // ← Your Google Play link
  },

  // ─────────────────────────────────────────────
  // SPONSORS BAR
  // ─────────────────────────────────────────────
  sponsors: [
    { name: "Ministry of Climate", type: "Govt Partner"    },
    { name: "WWF Pakistan",        type: "NGO Partner"     },
    { name: "Engro Corp",          type: "Corporate"       },
    { name: "Jazz Pakistan",       type: "Tech Partner"    },
    { name: "IUCN Pakistan",       type: "Conservation"    },
    { name: "HBL Bank",            type: "Finance Partner" },
  ],

  // ─────────────────────────────────────────────
  // HOW IT WORKS
  // ─────────────────────────────────────────────
  howItWorks: {
    eyebrow:  "Simple & Meaningful",
    title:    "How It Works",
    subtitle: "From a simple gift to a verified climate contribution — four steps that make a real difference.",
    steps: [
      { title: "Receive Your Plantable Gift",   desc: "Customers receive an eco-friendly pack containing a sapling and a unique QR code linked to their digital tree profile."  },
      { title: "Register Your Tree",            desc: "Scan the QR code and register your tree with a photo, GPS location, and a brief story."                                  },
      { title: "Track Its Growth",              desc: "Upload photos every few months. Our AI verifies health and growth milestones automatically."                              },
      { title: "Become a Green Champion",       desc: "After verified survival, earn rewards, recognition badges, and join our community of Pakistani climate champions."       },
    ],
  },

  // ─────────────────────────────────────────────
  // SPONSOR A TREE
  // ─────────────────────────────────────────────
  sponsorTree: {
    pricePerTree:  350,   // PKR per tree — ALL cost calculations update from this number
    co2PerTree:    5,     // kg CO₂ saved per tree per year
    defaultTrees:  25,    // default count shown in estimator
    locations:     ["Punjab", "Sindh", "KPK", "Balochistan", "AJK", "GB"],
    paymentMethods: ["JazzCash", "EasyPaisa", "Bank Transfer", "Credit / Debit Card"],
  },

  // ─────────────────────────────────────────────
  // VOLUNTEER — UPCOMING DRIVES
  // ─────────────────────────────────────────────
  // Add, remove, or edit drives here. Set filled === slots to mark as Full.
  volunteer: {
    stats: [
      { number: "3,200+",  label: "Active Volunteers" },
      { number: "48",      label: "Cities Covered"    },
      { number: "12,400+", label: "Hours Logged"      },
      { number: "4.8★",    label: "Volunteer Rating"  },
    ],
    drives: [
      { city: "Lahore",    emoji: "🌳", location: "Jallo Park, Punjab",          date: "Mar 15, 2025", slots: 24, filled: 18 },
      { city: "Karachi",   emoji: "🌿", location: "Bagh Ibn Qasim, Sindh",       date: "Mar 22, 2025", slots: 30, filled: 12 },
      { city: "Islamabad", emoji: "🏔", location: "Margalla Hills Trail 5",      date: "Apr 5, 2025",  slots: 20, filled: 20 },
      { city: "Peshawar",  emoji: "🌲", location: "Hayatabad Forest, KPK",       date: "Apr 12, 2025", slots: 15, filled: 6  },
    ],
    roles: [
      { title: "Field Planter",       badge: "Most Popular",    badgeColor: "green",  commitment: "4–8 hrs/month",  desc: "Join weekend plantation drives in your city. No experience needed — just energy and love for nature." },
      { title: "Tree Verifier",       badge: "Remote Friendly", badgeColor: "blue",   commitment: "2–4 hrs/month",  desc: "Photo-verify registered trees in your neighbourhood and upload health updates to the platform." },
      { title: "Community Educator",  badge: "High Impact",     badgeColor: "orange", commitment: "Flexible",       desc: "Run awareness sessions in schools and communities about climate change and reforestation." },
      { title: "Event Coordinator",   badge: "Leadership",      badgeColor: "purple", commitment: "8–12 hrs/month", desc: "Organise local drives, manage teams, and coordinate with corporate sponsors in your city." },
    ],
  },

  // ─────────────────────────────────────────────
  // DOWNLOAD / CTA
  // ─────────────────────────────────────────────
  download: {
    title:     "Start Growing Your Impact Today",
    subtitle:  "Join 28,000+ green champions across Pakistan already planting, tracking, and making a real difference.",
    trustLine: "Used across all provinces of Pakistan",
    rating:    "4.9/5 · 6.2K ratings",
  },

  // ─────────────────────────────────────────────
  // FOOTER
  // ─────────────────────────────────────────────
  footer: {
    tagline:   "Turning personal gifts into planetary impact — one verified tree at a time, across every corner of Pakistan.",
    copyright: "© 2025 OneTree Pakistan. All rights reserved.",
  },

};
