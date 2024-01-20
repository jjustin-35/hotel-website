## 快速開始

第一次啟動專案，請先安裝套件:
```bash
yarn
```

啟動 development server
```bash
yarn dev
```

在瀏覽器上打開[http://localhost:3000](http://localhost:3000)。

若需要 build 專案，請執行:
```bash
yarn build
```

實際執行 build 好的專案:
```bash
yarn start
```

也請打開[http://localhost:3000](http://localhost:3000)。

## 技術選型
- next.js
- typescript

## 專案架構
```
.
├── app/
│   ├── page.tsx (首頁)
│   ├── layout.tsx
│   ├── auth/
│   │   ├── signin (登入)
│   │   └── signup (註冊)
│   ├── all-rooms (客房旅宿)
│   ├── room (房型詳細)
│   ├── reserve (房型預約)
│   └── member (會員)
├── components/
│   ├── Button
│   ├── Fields
│   ├── Form
│   └── ...
├── public/
│   └── images
├── helpers
└── hooks
```

`app` folder 下放網站的 route，如 home page、登入註冊頁等，next 會根據資料夾結構處理 route，例如 ./app/auth/signin 在網站上就會是 `<domain>.com/auth/signin`
`app` folder 內的 `page.tsx` 是 home page，layout 則是會套用到全部頁面的 base layout ，每一層的 route 都需要有 `page.tsx` 當作進入點，且可以使用 `layout.tsx` 來當作該 route 的模板。
example: 
```
auth/
└── signin/
    ├── page.tsx
    └── layout.tsx
```
更詳細的內容可以參閱 [next 官方說明](https://nextjs.org/docs/getting-started/project-structure)

## 開發
next.js v13.4 之後，引入 react 18 的 server component 概念，next.js 會預設所有 component 是 server component (可以操作後端/無法使用 hooks 等僅能使用在瀏覽器上的功能)，若要使用 client components (一般的 component) 需在檔案上方加註 `'use client'`。

詳細可以參閱 [next 官方](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
