# Vue3 + TypeScript + Viteテンプレートプロジェクト
[![coverage](https://nashiusagi.github.io/vue3-template/coverage.svg)](https://nashiusagi.github.io/vue3-template/)

## 環境
* Vue3
* TypeScript
* Vite
* Element-Plus
* Node >= 18
* Vitest
* Playwright

```
├── app
│   ├── playwright
│   ├── public
│   ├── scripts
│   └── src
│       ├── assets
│       ├── components
│       │   ├── atoms
│       │   └── organisms
│       ├── composable
│       ├── layouts
│       ├── mocks
│       ├── pages
│       ├── router
│       └── types
├── docs
└── iac
```

## 実行方法
```bash
$ yarn dev
```
初回は
```bash
$ yarn install
```
が必要

## 単体テスト
```bash
$ yarn test:unit
```

## E2Eテスト
```bash
$ yarn playwright install
$ yarn playwright test
```

## ESLint
以下で設定の一覧を取得できる
```bash
$ yarn eslint --print-config src/App.vue > config.json
```