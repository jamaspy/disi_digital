---
title: "Talent Intelligence Dashboard for Enterprise Recruitment with Static IP Gateway"
author: "James Aspinall"
minutes: 2
date: "30th Dec 2025"
avatar: "/me.jpeg"
image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags:
  - recruitment
  - dashboard
  - nextjs
  - react
  - typescript
  - vercel
  - aws
  - ec2
  - tailwindcss
  - shadcn/ui
  - xata
  - expressjs
  - nextauthjs
  - tanstackquery
  - zustand
  - openai
  - resend
  - react-email
  - react-hook-form
---

In the recruitment industry, data-driven decision-making is everything. When I set out to tackle this project, my goal was clear: create a real-time talent intelligence platform that could handle enterprise-scale data while maintaining the speed and user experience of modern web applications. What emerged was a full-stack solution that solved some genuinely interesting technical challenges.

## Bridging the Firewall Gap: Building a Static IP Gateway for Data Warehouse Access

When building modern dashboards on platforms like Vercel, one significant challenge emerges: dynamic IP addresses. Enterprise data warehouses typically sit behind strict firewalls that require IP whitelisting, a requirement fundamentally incompatible with Vercel's ever-changing IP pool.

My solution? A lightweight **Express.js API hosted on AWS EC2**.

### The Architecture

This Node.js/TypeScript server acts as a secure proxy between our NextJS dashboard and the client's **Azure SQL Server** data warehouse. The implementation is refreshingly straightforward:

`Routes → Controllers → Queries → Database`

Each endpoint follows a clean pattern: routes define the HTTP interface, controllers handle business logic and validation, and raw SQL queries retrieve data from the [ods] schema. I created a simple `connectAndQuery()` function that manages connection pooling and parameterized queries to **prevent SQL injection**.

### Why EC2?

The answer is simple: static IP addresses. By deploying to an EC2 instance in ap-southeast-2, I maintain a consistent IP that the client's IT team can whitelist once and forget. This single-instance approach trades horizontal scalability for predictable network identity which I feel was an acceptable compromise for this use case.

### Security Layers

Authentication happens through a custom middleware that validates the `x-api-key` header against an environment variable. While simple, it's effective for our controlled deployment environment where the dashboard is the sole consumer.

### The Trade-off

Yes, I am managing infrastructure instead of relying on serverless. But when your client's firewall policy is non-negotiable, sometimes the "old-fashioned" approach of a single server with a static IP is the pragmatic path forward. The API remains lean, maintainable, and serves its purpose perfectly: giving our dashboard secure, reliable access to enterprise data.

## The Dashboard: Modern Stack Meets Enterprise Requirements

With data access solved, I built the dashboard on NextJS 15's App Router, leveraging **React Server Components** and **Server Actions** for optimal performance. The architecture demonstrates several enterprise-grade patterns:

**Multi-Tenancy from Day One**: Every user belongs to a company, and data isolation happens at the session level. I extended **NextAuth.js JWT** callbacks to inject `companyId`, `role`, and `clientCategories` into every session, ensuring database queries automatically filter by company. This wasn't just about security it was about making multi-tenancy impossible to forget.

**Hybrid State Management**: I paired **Zustand** for client-side UI state (filters, selections) with **TanStack Query** for server state. This separation keeps the mental model clean: Zustand handles what the user is viewing, React Query handles what data is cached. The result? Instant UI updates with smart background refetching.

**Authentication Without Passwords**: I implemented **magic link authentication via Resend**, creating a frictionless login experience. The challenge was handling new user provisioning—solved by hooking into NextAuth's `createUser` event to automatically generate user profiles and notify admins.

**AI-Powered Insights**: Integrating **OpenAI's API** with streaming responses added conversational analytics. Users can ask questions about their recruitment funnel in natural language, and the AI has tool-based access to real dashboard data.

## Technical Decisions That Mattered

Choosing Xata as our database proved valuable—its serverless PostgreSQL offering eliminated operational overhead while providing full SQL capabilities. The auto-generated TypeScript client caught schema mismatches at compile time, not runtime.

The Server Actions pattern deserves mention. By colocating data fetching with components and marking operations with `"use server"`, we eliminated the traditional API layer entirely for internal operations. This reduced boilerplate and improved type safety across the client-server boundary.

## Lessons from Production

This project taught me that **modern doesn't mean serverless-only**. When faced with enterprise constraints (firewall rules, compliance requirements), pragmatic solutions win. The EC2 proxy proves that sometimes a $10/month server solves problems that serverless architectures can't.

The result is a production application serving real recruitment teams, processing thousands of candidate records, and providing actionable insights that drive hiring decisions. It's fast, secure, and maintainable—exactly what enterprise software should be.

---

**Tech Stack**: Next.js 15, TypeScript, Xata, NextAuth.js, TanStack Query, Zustand, OpenAI API, Tailwind CSS, shadcn/ui, AWS EC2

**Live at**: [preacta.ai](https://preacta.ai)
