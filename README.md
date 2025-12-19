# Library of Useless

A website showcasing facts taught in school that have been proven wrong or updated since they were first announced.

## Project Overview

This is a Next.js application built with TypeScript and Tailwind CSS. The website allows users to:

- Browse all disproven facts on the homepage
- Search for facts that have been updated since their high school graduation year
- Learn more about the project on the About page
- Submit new disproven facts through the submission form

## Getting Started

### Prerequisites

1. Install dependencies:
```bash
npm install
```

2. Set up email functionality (required for submission form):
   - Sign up for a free account at [Resend](https://resend.com)
   - Get your API key from [https://resend.com/api-keys](https://resend.com/api-keys)
   - Create a `.env.local` file in the root directory:
   ```bash
   cp .env.local.example .env.local
   ```
   - Add your Resend API key to `.env.local`:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page with fact listings and search
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── submit/
│   │   └── page.tsx        # Submission form page
│   ├── api/
│   │   └── submit-fact/
│   │       └── route.ts    # API endpoint for form submissions
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Header.tsx          # Site header component
│   ├── Navigation.tsx      # Navigation menu component
│   ├── Footer.tsx          # Footer component
│   ├── PageLayout.tsx      # Shared page layout wrapper
│   └── FactsDisplay.tsx    # Facts listing with search functionality
├── data/
│   └── facts.json          # JSON database of disproven facts (67 facts)
├── types/
│   └── fact.ts             # TypeScript type definitions
└── public/                 # Static assets
```

## Features

### Completed
- ✅ Homepage with dynamic fact listings from JSON data
- ✅ Search by graduation year functionality
- ✅ Functional submission form with email delivery
- ✅ About page with project information
- ✅ Responsive design with improved text contrast
- ✅ 67 disproven facts loaded from JSON

### How to Add New Facts

Simply edit `data/facts.json` and add a new fact object following this structure:

```json
{
  "id": 68,
  "title": "Fact Title",
  "originalTeaching": "What was originally taught",
  "yearTaught": "1950-2020",
  "yearDisproven": 2020,
  "explanation": "How it was disproven",
  "category": "Category Name"
}
```

### Email Submissions

When users submit facts through the form, an email is automatically sent to **libraryofuselessfacts@gmail.com** with all the submission details.
