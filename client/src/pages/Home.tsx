/**
 * Archive Modernism: a source-first legal research dossier with calm authority,
 * ink/paper contrast, a vermilion evidence accent, and document-like information density.
 */
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Braces,
  Check,
  ChevronRight,
  CircleDot,
  Database,
  FileSearch,
  Gauge,
  GitBranch,
  Layers3,
  Quote,
  Search,
  ShieldCheck,
  Sparkles,
  Timer,
} from "lucide-react";
import { toast } from "sonner";

const SAMPLE_BENCHMARK = "Sample benchmark • replace with independently measured results";

const metrics = [
  { value: "12,480", label: "Legal documents indexed", detail: "96,300 source pages" },
  { value: "91.8%", label: "Recall@5", detail: "Across 520 labelled queries" },
  { value: "84.6%", label: "MRR", detail: "Mean reciprocal rank" },
  { value: "184 ms", label: "Median retrieval", detail: "Down from 786 ms" },
];

const pipeline = [
  { no: "01", title: "Ingest", text: "Normalize opinions, briefs, statutes, and docket records.", icon: Database },
  { no: "02", title: "Segment", text: "Chunk by legal structure, not arbitrary token count.", icon: Layers3 },
  { no: "03", title: "Retrieve", text: "Pair dense vector search with cached, filtered recall.", icon: Search },
  { no: "04", title: "Cite", text: "Return page-level authorities alongside every synthesis.", icon: Quote },
];

const queries = [
  {
    query: "When does a post-termination non-compete remain enforceable?",
    answer:
      "The restraint is most likely enforceable only when it protects a legitimate business interest and is narrowly tailored in duration, geography, and scope. Courts typically scrutinize restrictions that operate as a blanket bar on ordinary competition.",
    sources: [
      { id: "01", title: "Restatement (Second) of Contracts", pin: "§ 188, cmt. a" },
      { id: "02", title: "Boulanger v. Dunkin' Donuts", pin: "815 N.E.2d 572, 577" },
      { id: "03", title: "Marine Contractors Co. v. Hurley", pin: "365 Mass. 280, 287" },
    ],
  },
  {
    query: "What pleading standard applies to a complaint relying on circumstantial evidence?",
    answer:
      "A complaint must provide enough factual matter to state a plausible claim; it need not prove the claim or negate every alternative explanation at the pleading stage. Circumstantial allegations are assessed in context rather than in isolation.",
    sources: [
      { id: "01", title: "Ashcroft v. Iqbal", pin: "556 U.S. 662, 678" },
      { id: "02", title: "Bell Atl. Corp. v. Twombly", pin: "550 U.S. 544, 570" },
      { id: "03", title: "Swierkiewicz v. Sorema N. A.", pin: "534 U.S. 506, 512" },
    ],
  },
  {
    query: "How do courts assess fair use when the new work is commercial?",
    answer:
      "Commercial use is relevant but not dispositive. Courts give particular weight to whether the secondary work has a distinct purpose or character, including whether it adds new expression, meaning, or message rather than merely repackaging the original.",
    sources: [
      { id: "01", title: "Campbell v. Acuff-Rose Music", pin: "510 U.S. 569, 579" },
      { id: "02", title: "Google LLC v. Oracle America", pin: "593 U.S. 1, 25" },
      { id: "03", title: "Harper & Row v. Nation Enters.", pin: "471 U.S. 539, 562" },
    ],
  },
];

const resumeBullets = [
  "Built a legal RAG pipeline indexing 12,480 documents (96,300 pages), implementing structured ingestion, semantic chunking, embeddings, hybrid retrieval, and source-grounded answer generation.",
  "Evaluated retrieval on 520 hand-labelled legal research queries, achieving 91.8% Recall@5 and 84.6% MRR through relevance-tuned chunking and filtered vector retrieval.",
  "Reduced median retrieval latency 76.6%, from 786 ms to 184 ms, by optimizing the vector index and introducing Redis-backed retrieval caching.",
  "Implemented page-level citation-aware responses with 93.6% citation coverage; reviewed 1,200 LLM answers for relevance and unsupported claims, reaching an 89.7% grounded-response rate.",
];

function EvidenceChip({ id, title, pin }: { id: string; title: string; pin: string }) {
  return (
    <button
      className="evidence-chip group"
      onClick={() => toast.info(`${title} — ${pin}`, { description: "Source preview is an interface demonstration." })}
      type="button"
    >
      <span className="evidence-index">{id}</span>
      <span className="min-w-0 text-left">
        <span className="block truncate font-semibold text-[#18213b]">{title}</span>
        <span className="block text-[10px] text-[#6f726f]">{pin}</span>
      </span>
      <ArrowUpRight className="ml-auto size-3 shrink-0 text-[#a3a096] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d84a3a]" />
    </button>
  );
}

export default function Home() {
  const [activeQuery, setActiveQuery] = useState(0);
  const [activeMetric, setActiveMetric] = useState(1);
  const currentQuery = queries[activeQuery];

  const scrollToDemo = () => document.getElementById("research-demo")?.scrollIntoView({ behavior: "smooth" });
  const showComingSoon = () => toast.info("Product walkthrough", { description: "This is a portfolio prototype; no production workspace is connected." });

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f3f0e9] text-[#18213b] selection:bg-[#d84a3a] selection:text-white">
      <header className="sticky top-0 z-50 border-b border-[#18213b]/10 bg-[#f3f0e9]/92 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a className="flex items-center gap-3" href="#top" aria-label="Casebrief AI home">
            <img src="/manus-storage/casebrief-mark_13df9d89.png" alt="" className="size-9 object-contain" />
            <span className="leading-none">
              <span className="block font-serif text-[22px] tracking-[-0.045em] text-[#18213b]">Casebrief</span>
              <span className="block pt-0.5 text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#66708b]">AI / Research desk</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-[11px] font-bold uppercase tracking-[0.13em] text-[#596071] md:flex">
            <a className="nav-link" href="#method">Method</a>
            <a className="nav-link" href="#benchmarks">Benchmarks</a>
            <a className="nav-link" href="#resume">Portfolio notes</a>
          </nav>
          <button onClick={scrollToDemo} className="cta-button text-[11px]" type="button">
            Inspect evidence <ArrowDownRight className="size-4" />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="relative border-b border-[#18213b]/15">
          <div className="paper-noise pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative mx-auto grid max-w-[1440px] overflow-hidden lg:grid-cols-[1.04fr_.96fr]">
            <div className="relative flex min-h-[610px] flex-col justify-between border-r border-[#18213b]/15 px-5 py-10 sm:px-8 sm:py-12 lg:min-h-[680px] lg:px-12 lg:py-16">
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#66708b]">
                <CircleDot className="size-3 text-[#d84a3a]" /> Legal intelligence / RAG system
              </div>
              <div className="max-w-[700px] py-12 lg:py-16">
                <p className="mb-6 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#d84a3a]">
                  <span className="h-px w-8 bg-[#d84a3a]" /> Source-grounded research
                </p>
                <h1 className="max-w-[700px] font-serif text-[clamp(3.5rem,7.3vw,7.2rem)] leading-[0.87] tracking-[-0.06em] text-[#18213b]">
                  Answer the issue.<br />
                  <em className="font-normal text-[#536186]">Show the authority.</em>
                </h1>
                <p className="mt-8 max-w-[540px] text-[16px] leading-7 text-[#565b65] sm:text-[18px]">
                  A case intelligence RAG platform built to retrieve legal authority, synthesize the record, and keep every conclusion traceable to its source.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <button onClick={scrollToDemo} className="cta-button" type="button">Run a research trace <ArrowDownRight className="size-4" /></button>
                  <a href="#benchmarks" className="quiet-button">View the evaluation <ChevronRight className="size-4" /></a>
                </div>
              </div>
              <div className="flex max-w-[540px] items-center gap-4 border-t border-[#18213b]/12 pt-5 text-[11px] leading-5 text-[#6e706f]">
                <ShieldCheck className="size-5 shrink-0 text-[#d84a3a]" />
                <span>Built for research support, not legal advice. Sources remain visible at the point of use.</span>
              </div>
            </div>

            <div className="relative min-h-[560px] overflow-hidden bg-[#dedbd3] lg:min-h-[680px]">
              <img src="/manus-storage/casebrief-hero_0b295548.png" alt="Editorial arrangement of legal research documents and citation markers" className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18213b]/45 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8">
                <div className="max-w-[420px] border border-white/45 bg-[#f7f4ed]/90 p-4 shadow-[0_12px_35px_rgba(24,33,59,.16)] backdrop-blur-md sm:p-5">
                  <div className="mb-3 flex items-center justify-between text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#66708b]">
                    <span>Research chain</span><span className="text-[#d84a3a]">Verified</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {['Opinion', 'Chunk', 'Vector', 'Authority'].map((item, index) => (
                      <div key={item} className="flex min-w-0 items-center gap-1.5">
                        <span className="rounded-sm bg-[#18213b] px-2 py-1.5 text-[9px] font-bold tracking-wide text-[#f7f4ed]">{item}</span>
                        {index < 3 && <span className="h-px w-3 bg-[#d84a3a] sm:w-5" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute right-5 top-5 bg-[#18213b] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white sm:right-8 sm:top-8">Casebrief / 01</div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#18213b]/15 bg-[#18213b] text-[#f7f4ed]">
          <div className="mx-auto grid max-w-[1440px] divide-y divide-white/15 md:grid-cols-4 md:divide-x md:divide-y-0">
            {metrics.map((metric, index) => (
              <button
                type="button"
                key={metric.label}
                onClick={() => setActiveMetric(index)}
                className={`group relative px-5 py-7 text-left transition-colors sm:px-8 lg:px-12 ${activeMetric === index ? "bg-white/10" : "hover:bg-white/[.06]"}`}
              >
                {activeMetric === index && <span className="absolute left-0 top-0 h-full w-1 bg-[#d84a3a]" />}
                <span className="block font-serif text-4xl tracking-[-0.05em] text-white">{metric.value}</span>
                <span className="mt-3 block text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#c2c6d1]">{metric.label}</span>
                <span className="mt-1 block text-[11px] text-[#8f98ad]">{metric.detail}</span>
              </button>
            ))}
          </div>
        </section>

        <section id="research-demo" className="relative border-b border-[#18213b]/15 bg-[#ece9e1] py-20 lg:py-28">
          <div className="paper-noise pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#18213b]/15 pb-8 md:flex-row md:items-end">
              <div>
                <p className="section-kicker">01 — Research trace</p>
                <h2 className="section-heading max-w-[720px]">A visible chain from question to authority.</h2>
              </div>
              <p className="max-w-[320px] text-sm leading-6 text-[#62656b]">Select an issue to inspect a source-grounded answer and the supporting authorities returned with it.</p>
            </div>

            <div className="grid overflow-hidden border border-[#18213b]/15 bg-[#f7f4ed] shadow-[0_18px_60px_rgba(36,41,57,.09)] lg:grid-cols-[.72fr_1.28fr]">
              <aside className="border-b border-[#18213b]/15 bg-[#e3e0d8] p-4 lg:border-b-0 lg:border-r lg:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#6d7180]">Issue queue</span>
                  <span className="rounded-full border border-[#18213b]/15 px-2 py-0.5 text-[9px] font-bold text-[#66708b]">3 saved</span>
                </div>
                <div className="space-y-2">
                  {queries.map((item, index) => (
                    <button key={item.query} type="button" onClick={() => setActiveQuery(index)} className={`issue-card ${activeQuery === index ? "issue-card-active" : ""}`}>
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-current text-[9px] font-bold">{String(index + 1).padStart(2, "0")}</span>
                      <span className="text-left text-[12px] font-semibold leading-5">{item.query}</span>
                    </button>
                  ))}
                </div>
                <button type="button" onClick={showComingSoon} className="mt-6 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#66708b] hover:text-[#d84a3a]">
                  <span className="flex size-5 items-center justify-center border border-current text-base font-normal">+</span> New research thread
                </button>
              </aside>

              <div className="p-5 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#18213b]/12 pb-5">
                  <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#63708d]"><Sparkles className="size-3.5 text-[#d84a3a]" /> Answer draft</div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-[#6d7180]"><ShieldCheck className="size-3.5 text-[#d84a3a]" /> Citations attached</div>
                </div>
                <p className="mt-6 max-w-[760px] font-serif text-[clamp(1.55rem,2.5vw,2.3rem)] leading-[1.16] tracking-[-0.035em] text-[#18213b]">{currentQuery.answer}</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {currentQuery.sources.map((source) => <EvidenceChip key={source.title} {...source} />)}
                </div>
                <div className="mt-9 flex flex-wrap gap-4 border-t border-[#18213b]/12 pt-5 text-[11px] text-[#69707a]">
                  <span className="flex items-center gap-1.5"><FileSearch className="size-3.5 text-[#66708b]" /> 8 candidate passages reviewed</span>
                  <span className="flex items-center gap-1.5"><Timer className="size-3.5 text-[#66708b]" /> 184 ms median retrieval</span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.1em] text-[#858680]">Interface demonstration with illustrative sources. No legal advice provided.</p>
          </div>
        </section>

        <section id="method" className="border-b border-[#18213b]/15 bg-[#f7f4ed] py-20 lg:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-20 lg:px-12">
            <div>
              <p className="section-kicker">02 — Method</p>
              <h2 className="section-heading">Designed around the work of verifying.</h2>
              <p className="mt-7 max-w-[450px] text-[16px] leading-7 text-[#5b5f67]">The retrieval path preserves legal structure from initial ingestion through final citation. The system optimizes for useful recall and quickly inspectable authority—not merely fluent prose.</p>
              <img src="/manus-storage/casebrief-architecture_5b8e9256.png" alt="Abstract paper-card representation of the legal research pipeline" className="mt-10 aspect-[16/9] w-full border border-[#18213b]/10 object-cover shadow-[0_12px_30px_rgba(36,41,57,.08)]" />
            </div>
            <div className="divide-y divide-[#18213b]/13 border-y border-[#18213b]/13">
              {pipeline.map((step) => {
                const Icon = step.icon;
                return <div className="group grid grid-cols-[48px_1fr_auto] items-center gap-4 py-7 sm:grid-cols-[72px_1fr_auto] sm:gap-6" key={step.no}>
                  <span className="font-serif text-3xl tracking-[-0.05em] text-[#d84a3a]">{step.no}</span>
                  <div>
                    <h3 className="font-serif text-2xl tracking-[-0.035em] text-[#18213b]">{step.title}</h3>
                    <p className="mt-2 max-w-[420px] text-sm leading-6 text-[#666b73]">{step.text}</p>
                  </div>
                  <Icon className="size-6 text-[#536186] transition-transform duration-200 group-hover:scale-110" />
                </div>;
              })}
              <div className="grid grid-cols-[48px_1fr_auto] items-center gap-4 py-7 sm:grid-cols-[72px_1fr_auto] sm:gap-6">
                <span className="font-serif text-3xl tracking-[-0.05em] text-[#d84a3a]">05</span>
                <div><h3 className="font-serif text-2xl tracking-[-0.035em] text-[#18213b]">Evaluate</h3><p className="mt-2 max-w-[420px] text-sm leading-6 text-[#666b73]">Measure relevance, rank, coverage, and groundedness on a labelled evaluation set.</p></div>
                <Gauge className="size-6 text-[#536186]" />
              </div>
            </div>
          </div>
        </section>

        <section id="benchmarks" className="relative overflow-hidden border-b border-[#18213b]/15 bg-[#18213b] py-20 text-[#f7f4ed] lg:py-28">
          <div className="absolute -right-28 top-0 size-[460px] rounded-full border border-white/10" />
          <div className="absolute -right-4 top-20 size-[300px] rounded-full border border-white/10" />
          <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
              <div>
                <p className="section-kicker text-[#c5cada]">03 — Evaluation record</p>
                <h2 className="section-heading text-white">Measure the retrieval. Review the answer.</h2>
                <p className="mt-7 max-w-[460px] text-[16px] leading-7 text-[#c5cada]">Performance should be legible at every stage: whether the authority is found, where it ranks, how quickly it arrives, and whether the generated answer remains grounded in the evidence.</p>
                <div className="mt-10 inline-flex items-center gap-2 border border-[#d84a3a]/70 bg-[#d84a3a]/10 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#f3b2ab]"><Braces className="size-3.5" /> {SAMPLE_BENCHMARK}</div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <article className="benchmark-card sm:col-span-2">
                  <div><span className="bench-label">Retrieval quality</span><p className="mt-3 font-serif text-4xl tracking-[-0.05em] text-white">91.8% <span className="text-xl text-[#b9c1d4]">Recall@5</span></p></div>
                  <div className="ml-auto flex items-end gap-1.5 pt-5" aria-hidden="true">{[28, 43, 38, 57, 54, 75, 82, 91].map((height, index) => <span key={index} className="w-3 bg-[#7180a2]" style={{ height: `${height}px`, opacity: 0.45 + index * 0.07 }} />)}</div>
                </article>
                <article className="benchmark-card"><span className="bench-label">Rank quality</span><p className="mt-3 font-serif text-4xl tracking-[-0.05em] text-white">84.6%</p><p className="mt-2 text-xs text-[#aeb7ca]">MRR across 520 labelled queries</p></article>
                <article className="benchmark-card"><span className="bench-label">Latency</span><p className="mt-3 font-serif text-4xl tracking-[-0.05em] text-white">−76.6%</p><p className="mt-2 text-xs text-[#aeb7ca]">786 ms → 184 ms median retrieval</p></article>
                <article className="benchmark-card"><span className="bench-label">Citation coverage</span><p className="mt-3 font-serif text-4xl tracking-[-0.05em] text-white">93.6%</p><p className="mt-2 text-xs text-[#aeb7ca]">Answers with a retrievable source</p></article>
                <article className="benchmark-card"><span className="bench-label">Grounded answers</span><p className="mt-3 font-serif text-4xl tracking-[-0.05em] text-white">89.7%</p><p className="mt-2 text-xs text-[#aeb7ca]">1,200 reviewed model responses</p></article>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="relative border-b border-[#18213b]/15 bg-[#e8e4da] py-20 lg:py-28">
          <div className="paper-noise pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:px-12">
            <div>
              <p className="section-kicker">04 — Portfolio notes</p>
              <h2 className="section-heading">The refined story, ready to tailor.</h2>
              <p className="mt-7 max-w-[410px] text-[16px] leading-7 text-[#5b5f67]">Use these bullets as a high-quality draft only if the values are independently reproducible. Replace the sample evaluation set and metrics with your documented results before use.</p>
              <button onClick={() => navigator.clipboard?.writeText(resumeBullets.map((b) => `• ${b}`).join("\n\n")).then(() => toast.success("Sample bullets copied", { description: "Remember to replace the benchmark values with your own measured results." }))} type="button" className="quiet-button mt-8">Copy sample bullets <ArrowUpRight className="size-4" /></button>
            </div>
            <div className="border-y border-[#18213b]/15">
              {resumeBullets.map((bullet, index) => <article key={bullet} className="group flex gap-5 border-b border-[#18213b]/15 py-6 last:border-b-0 sm:gap-7 sm:py-7"><span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#18213b] text-[10px] font-bold text-white">{String(index + 1).padStart(2, "0")}</span><p className="max-w-[780px] text-[15px] leading-7 text-[#353d50] sm:text-[16px]">{bullet}</p><Check className="ml-auto mt-1 size-4 shrink-0 text-[#d84a3a] opacity-0 transition-opacity group-hover:opacity-100" /></article>)}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f4ed] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto flex max-w-[1140px] flex-col justify-between gap-10 border-x border-[#18213b]/15 px-6 py-10 sm:px-10 md:flex-row md:items-end lg:px-14 lg:py-14">
            <div className="max-w-[630px]"><p className="section-kicker">Casebrief AI</p><h2 className="font-serif text-[clamp(2.6rem,5vw,5.5rem)] leading-[.9] tracking-[-0.06em] text-[#18213b]">Trace the claim.<br /><em className="font-normal text-[#536186]">Inspect the authority.</em></h2></div>
            <button type="button" onClick={showComingSoon} className="cta-button shrink-0">Request walkthrough <ArrowUpRight className="size-4" /></button>
          </div>
        </section>
      </main>

      <footer className="bg-[#18213b] px-5 py-8 text-[#c0c5d2] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.13em] sm:flex-row sm:items-center">
          <div className="flex items-center gap-2"><img src="/manus-storage/casebrief-mark_13df9d89.png" alt="" className="size-6 object-contain" /><span>Casebrief AI / Legal research desk</span></div>
          <span>Source-grounded research interface · Portfolio concept</span>
        </div>
      </footer>
    </div>
  );
}
