---
title: "Building a Recruitment Workflow Platform: Streamlining SOA Management with AI and Automation"
author: "James Aspinall"
minutes: 2
date: "28th Dec 2025"
avatar: "/me.jpeg"
image: "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags:
  - recruitment
  - automation
  - platform
  - nextjs
  - react
  - typescript
  - vercel
  - xata
  - openai
  - resend
  - jobadder
  - react-email
  - react-hook-form
  - zod
  - bcrypt
  - role-based-access-control
  - tailwindcss
  - shadcn/ui
---

When I set out to build the Portal, I wanted to solve a real problem in the recruitment industry: the tedious, manual process of **creating and managing Schedule of Assignment (SOA) documents** for contractor placements. What emerged was a full-stack NextJS v15 platform that showcases my ability to integrate complex systems, leverage AI, and build production-ready enterprise applications from scratch, solo.

## The Technical Challenge

The platform needed to bridge multiple systems: JobAdder's recruitment ATS, OpenAI's GPT-5, and Resend's email API, while maintaining a seamless user experience. I implemented a custom OAuth 2.0 provider for JobAdder integration, allowing consultants to authenticate and pull placement data directly into the portal. This wasn't just basic API consumption; I built a comprehensive REST proxy **with 60+ routes** that transformed JobAdder's API into a type-safe, application-specific interface.

## AI-Powered Content Generation

One of the standout features is the **AI-powered job specification generator**. Using OpenAI's GPT-5 via the **Vercel AI SDK**, the system automatically generates tailored job descriptions from placement titles. This removed for the consultant to manually create the job description, and instead allows them to focus on the more important aspects of the placement.

## Complex Email Orchestration

Perhaps the most technically challenging aspect was designing the email workflow system. I architected a multi-stage approval process with React Email templates, implementing proper **email authentication (SPF, DKIM, DMARC)** to ensure deliverability through corporate firewalls. The system tracks email state, handles approvals and rejections, and synchronizes status updates back to JobAdder all while maintaining data integrity across systems.

## Modern Full-Stack Architecture

The tech stack showcases my proficiency with cutting-edge technologies: **NextJS v15 App Router** with **Server Actions**, **NextAuth v5** for multi-provider authentication (credentials, LinkedIn, and custom JobAdder OAuth), **PostgreSQL** with **Prisma ORM** and **Accelerate caching**, **TypeScript** throughout for type safety, and **React Hook Form** with **Zod** for robust form validation.

## Production-Ready Mindset

Beyond the features, I focused on production concerns that matter to employers: comprehensive error handling patterns, secure authentication with bcrypt password hashing, role-based access control, proper database migration strategies, and extensive documentation for maintainability.

This project demonstrates my ability to build complete, production-grade applications that solve real business problems while working with modern technologies that companies actively use today.
