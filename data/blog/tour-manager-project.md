---
title: "Web & Mobile Tour Manager SaaS Platform & App"
author: "James Aspinall"
minutes: 2
date: "28th Dec 2025"
avatar: "/me.jpeg"
image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags:
  - supabase
  - prisma
  - nextjs
  - react
  - typescript
  - vercel
  - tailwindcss
  - shadcn/ui
  - expo
  - react-native
  - expo-router
  - expo-image
  - expo-auth-session
  - expo-application-services
  - expo-test-flight
---

Tour Managers need to coordinate dozens of team members across multiple cities, manage budgets in real-time, and keep everyone synchronized. Spreadsheets and group chats quickly become chaos. That's the problem I set out to solve with **flamingo tm**, a full-stack SaaS platform & mobile app that transforms tour management from a coordination nightmare into a streamlined workflow.

## The Technical Foundation

I built Flamingo using **NextJS v15** with the App Router, **React 19**, and **TypeScript 5**, deployed on **Vercel**. The backend leverages **Supabase's PostgreSQL** database with **Prisma ORM**, implementing a sophisticated permission system that handles both tour ownership and multi-role team membership. Every API endpoint went through rigorous optimization and I eliminated **N+1 query problems**, implemented **composite database indexes**, and introduced **cursor-based pagination** that reduced response times by **50-70% and memory usage by 60-80%**.

The authentication system alone demonstrates architectural depth: I migrated from Auth.js to Supabase Auth to ensure consistency across future web and mobile platforms, implementing a database sync pattern that handles edge cases like pre-created users from team invitations. The challenge? Maintaining foreign key integrity while linking Supabase's UUID-based auth to our legacy CUID user records—solved through a smart ID-mapping layer that automatically syncs users and falls back gracefully.

## Standout Features

**Smart Venue Database:** I developed a **fuzzy-matching algorithm using Levenshtein distance** that prevents duplicate venues while automatically enriching data from **Google Places API** and user submissions. The system weighs name and address similarity, calculates data quality scores, and applies a "most recent wins" conflict resolution strategy.

**Complex Data Modeling:** Tour day itineraries use a flexible step-based system with JSONB storage for type-specific data (performances, travel, promo events), supporting drag-and-drop reordering and file attachments via Supabase Storage.

**Budget System:** Complete expense and income tracking with per diems, venue settlements, merchandise sales, and multi-currency support—all with real-time calculations and filtering.

**Stripe Integration:** Subscription management with webhook synchronization, automatic customer creation with fallback handling, and zero-friction checkout flows that work even with data inconsistencies.

## Companion Mobile App

Building the mobile companion required solving distinct challenges beyond the web platform. I architected the iOS/Android app using **Expo SDK 54**, **React 19**, and **React Native 0.81**, implementing **Expo Router's file-based navigation system** for type-safe routing across the entire app structure.

The authentication layer proved particularly complex. I migrated from basic email/password to Google OAuth using expo-auth-session, implementing a custom deep linking scheme that handles both authorization code and implicit token flows from Supabase. The critical challenge was maintaining foreign key integrity between Supabase's UUID-based auth system and our CUID user records, solved through an automatic synchronization service with timeout protection that prevents hanging database operations.

I replicated the web app's service layer architecture in TypeScript, creating dedicated modules that mirror the Prisma schema with complete type safety. This shared data model ensures consistency across platforms while the `{ data, error }` tuple pattern provides uniform error handling throughout the mobile codebase.

Deployment presented unexpected hurdles. Builds 1.0.2-1.0.7 worked flawlessly in local development and Release builds but crashed on TestFlight. The root cause? EAS builds don't automatically inherit local `.env` files. I had to configure all environment variables separately using `eas env:create` for the production environment. This debugging process taught me the nuances of Expo Application Services and Apple's build pipeline.

Mobile-specific features include **OCR-powered receipt scanning** using the device camera, native image optimization with `expo-image`, and platform-adaptive UI components that leverage iOS blur effects and Android's edge-to-edge display. The streamlined TestFlight deployment now uses a single command (`npm run testflight`) that handles version bumping, validation, building, and automatic submission.

## What's Next in V2

The roadmap includes real-time collaboration with WebSocket synchronization, mobile apps using React Native, advanced analytics dashboards, calendar integrations, and AI-powered budget forecasting. I'm also planning automated settlement generation, multi-currency exchange rate APIs, and granular role-based permissions.

This project taught me how to architect scalable systems, optimize database performance at scale, handle complex business logic, and ship production-grade features while maintaining code quality. Every decision was made with performance, security, and user experience in mind.
