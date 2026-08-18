# Casebrief AI — Metrics & Refined Portfolio Bullets

## Important disclosure

The metric values used in the website are **illustrative benchmark values**, not verified claims about your own system. I cannot truthfully label a number as “real” without your evaluation outputs, retrieval logs, and response-review rubric. Before using these bullets in a résumé, portfolio, or application, replace every value with reproducible results from your own pipeline.

| Metric | Website sample | What to measure in your system |
| --- | ---: | --- |
| Corpus indexed | 12,480 documents / 96,300 pages | Document and page count after deduplication and successful indexing |
| Recall@5 | 91.8% | Fraction of queries with at least one relevant source in the top 5 results |
| MRR | 84.6% | Mean reciprocal rank of the first relevant result across labelled queries |
| Median retrieval latency | 786 ms → 184 ms | p50 server-side elapsed time, before and after the optimization |
| Citation coverage | 93.6% | Portion of answer claims or responses linked to a valid supporting source |
| Grounded-response rate | 89.7% | Portion of reviewed outputs judged fully supported by the retrieved evidence |

## Refined portfolio bullets

- Built a legal RAG pipeline indexing **12,480 documents (96,300 pages)**, implementing structured ingestion, semantic chunking, embeddings, hybrid retrieval, and source-grounded answer generation.

- Evaluated retrieval on **520 hand-labelled legal research queries**, achieving **91.8% Recall@5** and **84.6% MRR** through relevance-tuned chunking and filtered vector retrieval.

- Reduced median retrieval latency **76.6%**, from **786 ms to 184 ms**, by optimizing the vector index and introducing Redis-backed retrieval caching.

- Implemented page-level citation-aware responses with **93.6% citation coverage**; reviewed **1,200 LLM answers** for relevance and unsupported claims, reaching an **89.7% grounded-response rate**.

## Fast replacement template

Replace bracketed values with your measured values while retaining the strong, outcome-oriented structure.

- Built a legal RAG pipeline indexing **[documents] documents / [pages] pages**, implementing [ingestion approach], [chunking approach], embeddings, [retrieval approach], and source-grounded generation.

- Evaluated retrieval on **[queries] labelled queries**, achieving **[recall]% Recall@5** and **[mrr]% MRR** after [specific optimization or evaluation approach].

- Reduced median retrieval latency **[reduction]%**, from **[before] ms to [after] ms**, through [vector index optimization] and [cache / infrastructure change].

- Implemented citation-aware responses with **[coverage]% citation coverage**; reviewed **[responses] LLM outputs**, reaching a **[grounded]% grounded-response rate** under [review rubric].
