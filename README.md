# headless-wp-portfolio

My personal portfolio site. WordPress runs as the CMS backend, Next.js handles the frontend, deployed on Vercel.

I already had WordPress set up for client work, so using it as a headless CMS made more sense than spinning up a separate backend. WPGraphQL exposes the content, Next.js fetches it at build time via SSG.

**Live site**: coming soon

## Stack

- WordPress + WPGraphQL (backend / CMS)
- Next.js 14, TypeScript, App Router (frontend)
- Tailwind CSS
- Vercel (hosting)

## What's in here

- Custom post type `portfolio_item` for projects
- ACF fields for project metadata
- GraphQL queries for SSG data fetching
- `next/image` for image optimization
- OG tags and basic SEO setup
- GitHub Actions → Vercel auto-deploy

## Setup

You'll need a WordPress install with the WPGraphQL plugin activated.

```bash
git clone https://github.com/YOSHl/headless-wp-portfolio.git
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
  page.tsx              # portfolio list
  projects/[slug]/      # project detail (dynamic route)
components/
lib/
  graphql/              # GraphQL queries
```

---

## 日本語

自分のポートフォリオサイトです。WordPressをヘッドレスCMSとして使い、Next.jsでフロントを構築しています。

クライアント案件でWordPressはもともと使っていたので、ヘッドレス構成にするのが一番手っ取り早い選択でした。WPGraphQLでコンテンツを公開し、Next.jsがビルド時にSSGで取得します。

### 技術構成

- WordPress + WPGraphQL（バックエンド / CMS）
- Next.js 14、TypeScript、App Router（フロントエンド）
- Tailwind CSS
- Vercel（ホスティング）

### セットアップ

WPGraphQLプラグインを有効化したWordPress環境が必要です。

```bash
git clone https://github.com/YOSHl/headless-wp-portfolio.git
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
