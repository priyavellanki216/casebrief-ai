# Casebrief AI — Design Directions

## 1. Archive Modernism

**Very Brief Intro:** A warm, archival editorial system that pairs legal-library restraint with contemporary data intelligence. It feels researched, tactile, and quietly authoritative.

**Probability:** 0.07

## 2. Tribunal Signal

**Very Brief Intro:** A high-contrast, evidence-first interface that treats legal research like a control room—composed, procedural, and precise rather than flashy.

**Probability:** 0.03

## 3. Public Record Studio

**Very Brief Intro:** An optimistic civic-tech direction using bright paper, institutional blue, and modular information panels. It makes complex legal research feel accessible without losing rigor.

**Probability:** 0.09

---

# Selected Direction: Archive Modernism

## Design Movement

**Contemporary editorial modernism** informed by legal case reporters, archival document layouts, and understated institutional identities. The product should feel like a trusted research instrument rather than an AI marketing page.

## Core Principles

1. **Evidence before assertion:** Source links, pin-point citations, and evaluation details are visible in the primary interface.
2. **Calm authority:** Spacious editorial rhythm and restrained color suggest deliberation, not acceleration.
3. **Structured density:** Information can be rich, but always separated into legible document-like blocks and marginal notes.
4. **Tactile intelligence:** Fine rules, paper grain, redaction-like highlights, and stamped metadata make the RAG workflow feel tangible.

## Color Philosophy

The site uses a **chalk-paper field** as its foundation to echo legal briefs, sharpened by an **ink-black** text color for dependable reading. **Deep indigo** carries interactive and technical emphasis, while a small, ownable **vermilion seal** accent marks citations, validation, and important research states. The palette communicates rigor and provenance without drifting into conventional corporate blue.

## Layout Paradigm

The experience is organized as a **research dossier** rather than a centered marketing funnel. The hero works as a split folio: a strong left editorial statement aligns to a vertically stacked evidence console on the right. Sections shift between wide annotation margins, horizontal metric tapes, and inset report cards; document lines carry the eye through the page.

## Signature Elements

1. **The Evidence Rail:** A thin vertical guide with numbered nodes, used in the hero, pipeline, and benchmark sections.
2. **Citation Chips:** Compact source pills with a vermilion index square and a document shorthand.
3. **Paper Field Texture:** A nearly imperceptible dot-and-fiber texture with fine ink rules, used across large neutral surfaces.

## Interaction Philosophy

Interactions should reward inspection. Hovering a citation reveals its source context; selecting an evaluation metric surfaces its definition. Controls feel like well-made reading tools: immediate, quiet, and specific. No interaction should imply legal advice or hide the source trail.

## Animation

Use small, deliberate transitions: document cards rise by 2–4px and gain shadow over 180ms; citation rails draw in on section entrance; query tokens step through the retrieval stages in short 120ms increments. Respect reduced-motion preferences and avoid large parallax, looping spectacle, or glowing effects.

## Typography System

**DM Serif Display** is reserved for decisive editorial headlines and case names, creating a legal-report character. **Manrope** handles UI, labels, body copy, and technical values with crisp, neutral legibility. Use a small all-caps Manrope label with tracked lettering for metadata; employ tabular numerals for benchmark metrics.

## Brand Essence

**Casebrief AI is a source-grounded legal research engine for teams that need faster answers they can verify.**

Personality adjectives: **deliberate, exacting, literate**.

## Brand Voice

Headlines are concise and declarative; CTAs invite a specific research action; microcopy names evidence and limits directly. Avoid futurist hype, empty automation claims, or casual slang.

Example lines:

> "Every answer is a starting point. Every source is one click away."

> "Trace the claim. Inspect the authority. Keep the work moving."

## Wordmark & Logo

The wordmark pairs a compact, high-contrast serif **Casebrief** with a spaced sans **AI**. The mark is an abstracted **case-tab and citation bracket**: a solid indigo tab interrupted by a vermilion verification notch. The symbol is used alone at small sizes and sits beside the wordmark in the header.

## Signature Brand Color

**Vermilion Seal — #D84A3A.** A precise, limited-use verification accent that makes citations and high-confidence evidence unmistakably Casebrief AI.

## Content & Metrics Note

The web experience uses a **sample benchmark dataset** in the visual demo: 12,480 legal documents, 96,300 pages, 520 hand-labelled evaluation queries, 91.8% Recall@5, 84.6% MRR, 786 ms to 184 ms median retrieval latency, 93.6% citation coverage, and 89.7% grounded-response rate across 1,200 reviewed responses. These are clearly marked as example/benchmark values and must be replaced with the user's independently measured results before being represented as production achievements.
