Sample project/repro for Vercel 14.0 error when attempting to warn about RSC -> Client component prop-binding of complex objects

![error](https://i.imgur.com/Xvg6x7I.png)

```
Unhandled Runtime Error

Error: Cannot convert a Symbol value to a string
Call Stack
_
/home/jon/code/misc/url-client-prop/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js (35:255037)
Object.get
/home/jon/code/misc/url-client-prop/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js (35:255158)
Proxy.toString
<anonymous>
ec
/home/jon/code/misc/url-client-prop/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js (35:261039)
ep
/home/jon/code/misc/url-client-prop/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js (35:261308)
eh
/home/jon/code/misc/url-client-prop/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js (35:262505)
<unknown>
/home/jon/code/misc/url-client-prop/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js (35:276477)
Object.toJSON
/home/jon/code/misc/url-client-prop/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js (35:281723)
stringify
<anonymous>
<unknown>
/home/jon/code/misc/url-client-prop/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js (35:268079)
ez
/home/jon/code/misc/url-client-prop/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js (35:268158)
eH
/home/jon/code/misc/url-client-prop/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js (35:268559)
Timeout._onTimeout
/home/jon/code/misc/url-client-prop/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js (35:265057)
listOnTimeout
node:internal/timers (569:17)
process.processTimers
node:internal/timers (512:7)
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

