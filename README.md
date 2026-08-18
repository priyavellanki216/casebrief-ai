# Casebrief AI

An AI-powered legal research and case intelligence platform that uses Retrieval-Augmented Generation (RAG) to retrieve relevant legal information and generate source-grounded responses.

## Live Demo

https://casebriefai-4phx7g6e.manus.space/

## Overview

Casebrief AI is designed to simplify legal research by combining document ingestion, semantic search, vector retrieval, and Large Language Models.

The system processes legal documents, retrieves relevant passages for a query, and generates responses grounded in the retrieved sources.

The primary engineering focus is on retrieval quality, data processing, citation-aware generation, and efficient AI inference.

## Key Features

* Legal document ingestion
* Document preprocessing
* Semantic chunking
* Embedding generation
* Vector search
* Hybrid retrieval
* Source-grounded LLM responses
* Page-level citation support
* Legal query processing
* Retrieval evaluation
* Redis-backed retrieval caching
* REST APIs
* React-based interface

## RAG Architecture

```text
                 DOCUMENT INGESTION
                        |
                        v
              Document Preprocessing
                        |
                        v
                 Semantic Chunking
                        |
                        v
                 Embedding Generation
                        |
                        v
                Vector Index / Store
                        |
                        |
User Query ------------+
        |
        v
 Query Processing
        |
        v
 Hybrid / Semantic Retrieval
        |
        v
 Relevant Legal Passages
        |
        v
      LLM
        |
        v
Source-Grounded Response
        |
        v
 Page-Level Citations
```

## Technology Stack

### Backend

* Python
* FastAPI
* REST APIs

### Generative AI

* LangChain
* OpenAI API
* LLMs
* Retrieval-Augmented Generation (RAG)
* Embeddings
* Prompt Engineering

### Retrieval

* FAISS
* Vector Search
* Semantic Search
* Hybrid Retrieval

### Database & Caching

* PostgreSQL
* Redis

### Frontend

* React
* JavaScript
* HTML5
* CSS3

### Cloud

* AWS

## Engineering Highlights

* Built an end-to-end RAG pipeline for legal document research.
* Implemented structured document ingestion and semantic chunking.
* Generated embeddings and indexed document representations for semantic retrieval.
* Designed retrieval workflows using FastAPI, PostgreSQL, FAISS/vector search, and LangChain.
* Implemented relevance filtering to improve retrieved context quality.
* Added Redis-backed caching to optimize repeated retrieval operations.
* Implemented citation-aware generation to connect generated responses with source pages.
* Evaluated retrieval quality using Recall@5 and Mean Reciprocal Rank (MRR).
* Evaluated generated responses for grounding and citation coverage.

## Evaluation

The retrieval pipeline was evaluated using a hand-labelled legal research query set.

Key evaluation metrics include:

* Recall@5
* Mean Reciprocal Rank (MRR)
* Citation Coverage
* Grounded Response Rate
* Retrieval Latency

Example evaluation workflow:

```text
Legal Query
    |
    v
Retrieve Top-K Documents
    |
    v
Measure Recall@K
    |
    v
Rank Retrieved Results
    |
    v
Calculate MRR
    |
    v
Generate Grounded Answer
    |
    v
Evaluate Citations & Grounding
```

## Project Structure

```text
casebrief-ai/
│
├── backend/
│   ├── api/
│   ├── services/
│   ├── ingestion/
│   ├── retrieval/
│   ├── generation/
│   └── models/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── evaluation/
│
├── tests/
│
├── requirements.txt
├── README.md
└── .gitignore
```

## Running Locally

### Clone

```bash
git clone https://github.com/priyavellanki216/casebrief-ai.git
cd casebrief-ai
```

### Install dependencies

```bash
pip install -r requirements.txt
```

### Environment Variables

Create a `.env` file:

```env
OPENAI_API_KEY=your_openai_api_key
DATABASE_URL=your_postgresql_connection_string
REDIS_URL=your_redis_connection_string
```

Never commit credentials or API keys.

### Run the API

```bash
uvicorn main:app --reload
```

### Run the frontend

```bash
npm install
npm run dev
```

## Example Query Flow

```text
User:
"What precedents are relevant to this legal issue?"

              |
              v

        Query Processing
              |
              v

       Semantic Retrieval
              |
              v

       Relevant Passages
              |
              v

       Context Filtering
              |
              v

       LLM Generation
              |
              v

   Grounded Legal Response
              |
              v

       Source Citations
```

## Design Considerations

### Retrieval Quality

The system prioritizes retrieval relevance before generation because poor retrieved context can directly affect the quality of an LLM response.

### Grounding

Responses are generated using retrieved source material rather than relying exclusively on the model's pretrained knowledge.

### Citation Support

Retrieved document metadata is retained throughout the pipeline so that generated responses can reference the relevant source pages.

### Performance

Redis caching is used to reduce repeated retrieval operations and improve response latency for recurring queries.

## Future Improvements

* Improved hybrid retrieval strategies
* Reranking models
* Multi-document reasoning
* Conversation memory
* Legal knowledge graph integration
* Better citation verification
* Agentic legal research workflows
* Authentication and user workspaces
* Background document ingestion

## Disclaimer

Casebrief AI is an experimental AI research and software project. It is not a substitute for professional legal advice, and generated content should be independently verified against authoritative legal sources.

## Author

Vellanki Lakshmi Priya

Software Development Engineer | Python | FastAPI | LLMs | RAG | PostgreSQL | Redis | AWS

GitHub: https://github.com/priyavellanki216
