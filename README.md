# headless-wp-portfolio

My personal portfolio site. WordPress runs as the CMS backend, Next.js handles the frontend, deployed on Vercel.

**Live site**: https://headless-wp-portfolio.vercel.app/

## Stack

- WordPress + WPGraphQL (backend / CMS)
- Next.js 16, TypeScript, App Router (frontend)
- Tailwind CSS
- Vercel (hosting)
- GitHub Actions (CI/CD)

## What's in here

- GraphQL queries for SSG data fetching
- `next/image` for image optimization
- OG tags and basic SEO setup
- GitHub Actions → Vercel auto-deploy

## Setup

```bash
git clone https://github.com/moriyama-dev/headless-wp-portfolio.git
cd headless-wp-portfolio
npm install
```

Create `.env.local`:

```env
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/graphql
```

```bash
npm run dev
```

## Project structure

```
app/
  page.tsx              # post list
  posts/[slug]/         # post detail (dynamic route)
components/
lib/
  graphql.ts            # GraphQL queries
.github/workflows/
  deploy.yml            # CI/CD pipeline
```

---

## 日本語

自分のポートフォリオサイトです。WordPressをヘッドレスCMSとして使い、Next.jsでフロントを構築しています。

WPGraphQLでコンテンツを公開し、Next.jsがビルド時にSSGで取得します。

### 技術構成

- WordPress + WPGraphQL（バックエンド / CMS）
- Next.js 16、TypeScript、App Router（フロントエンド）
- Tailwind CSS
- Vercel（ホスティング）
- GitHub Actions（CI/CD）

### セットアップ

```bash
git clone https://github.com/moriyama-dev/headless-wp-portfolio.git
cd headless-wp-portfolio
npm install
```

`.env.local` を作成：

```env
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/graphql
```

```bash
npm run dev
```
