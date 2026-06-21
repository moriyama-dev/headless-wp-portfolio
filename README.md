# Headless WordPress + Next.js Portfolio Site

A portfolio website built with **WordPress as a headless CMS** backend and **Next.js + Vercel** on the front end. This project solves the "no portfolio URL" problem while simultaneously demonstrating skills in WordPress, React/Next.js, and GraphQL to employers.

## ✨ Features

- WordPress backend exposed via **WPGraphQL** (REST + GraphQL endpoints)
- Custom post type `portfolio_item` for managing projects
- Custom fields (ACF) for rich project metadata
- Next.js **App Router** with TypeScript
- **SSG (Static Site Generation)** — data fetched from WordPress at build time
- Modern UI with **Tailwind CSS / shadcn/ui**
- Image optimization with `next/image`
- SEO-ready (Open Graph tags, sitemap)
- Auto-deploy to **Vercel** via GitHub Actions
- Custom domain support

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| CMS / Backend | WordPress + WPGraphQL |
| Frontend | Next.js 14, React, TypeScript |
| Styling | Tailwind CSS |
| Data Fetching | GraphQL (SSG) |
| Deployment | Vercel |
| CI/CD | GitHub Actions |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A running WordPress installation with **WPGraphQL** plugin activated

### Installation

```bash
git clone https://github.com/YOSHl/headless-wp-portfolio.git
cd headless-wp-portfolio
npm install
```

Create a `.env.local` file:

```env
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/graphql
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

## 📁 Project Structure

```
headless-wp-portfolio/
├── app/                  # Next.js App Router
│   ├── page.tsx          # Home / portfolio list
│   └── projects/[slug]/  # Dynamic project detail pages
├── components/           # Reusable UI components
├── lib/
│   └── graphql/          # GraphQL queries
└── public/               # Static assets
```

## 🔑 Keywords

`WordPress` · `Next.js` · `React` · `TypeScript` · `WPGraphQL` · `GraphQL` · `Vercel` · `Headless CMS` · `SSG` · `ISR`

## 👨‍💻 Development

This project was developed with **Claude Code** (Anthropic). AI-assisted development was used throughout to accelerate scaffolding, GraphQL query design, and component implementation.

---

## 日本語

WordPressをヘッドレスCMS（バックエンド）として使い、Next.js + Vercelでフロントを構築したポートフォリオサイトです。

### このプロジェクトについて

「ポートフォリオURLが無い」問題を解決しながら、WordPress・React/Next.js・GraphQLのスキルを同時にアピールする一石三鳥のプロジェクトです。

### 技術構成

| レイヤー | 技術 |
|--------|------|
| CMS / バックエンド | WordPress + WPGraphQL |
| フロントエンド | Next.js 14、React、TypeScript |
| スタイリング | Tailwind CSS |
| データ取得 | GraphQL（SSG）|
| デプロイ | Vercel |
| CI/CD | GitHub Actions |

### セットアップ

```bash
git clone https://github.com/YOSHl/headless-wp-portfolio.git
cd headless-wp-portfolio
npm install
```

`.env.local` を作成：

```env
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/graphql
```

開発サーバーを起動：

```bash
npm run dev
```

### 開発について

このプロジェクトは **Claude Code**（Anthropic）を活用して開発しました。スキャフォールド・GraphQLクエリ設計・コンポーネント実装にAIアシスト開発を採用しています。
