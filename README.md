# vue-shopping-list-app

This project is a proof of learning from the [Vue.js 3 Fundamentals with the Composition API](https://vueschool.io/courses/vue-js-fundamentals-with-the-composition-api) course.

## Key Learnings

- Vue.js 3 offers powerful built-in features for handling application state.
- `v-for` directive supports looping through both Array and Object keys.
- Efficient use of `v-for` on component loops, improving code cleanliness. See [v-for gotchas](https://vueschool.io/articles/vuejs-tutorials/tips-and-gotchas-for-using-key-with-v-for-in-vue-js-3/).
- Two-way data binding works seamlessly with various form inputs (Select, Radio, Checkbox).
- Useful Vue.js shortcuts:
  - `@submit.prevent`
  - `v-model.trim`
  - `v-model.number`
  - `@keydown.enter`
  - `@click`
- Multiple options for implementing dynamic CSS classes (Array, Object, or combined).
- Computed properties are similar to React's `useMemo`. Best used for representation, avoiding direct mutations.
- `reactive` vs `ref`:
  - `reactive` doesn't require `.value` for changes but doesn't work with primitives.
  - `ref` is more versatile and recommended for most use cases.
  - Refs are ideal for DOM element manipulation, while reactive objects suit reactive state management.

## Coding Standards Learned

- Use arrow functions for methods in `<script setup>`.
- Wrap API interactions in `<form>` tags with `@submit.prevent`.
- Prefer `@` over `v-on` for cleaner event handling (e.g., `@click`).
- Use `:` as shorthand for `v-bind` (e.g., `:disabled="newItem.length < 5"`).
- Combine static and dynamic classes: `class="static-class" :class="[dynamicClass]"`.
- Prefer Array of Object approach for dynamic CSS classes:
  `:class="[{strikeout: purchased}, {priority: highPriority}]"`

## Internationalization

This project utilizes [Vue I18n](https://vue-i18n.intlify.dev/) for internationalization, allowing users to toggle between Japanese and English languages. Vue I18n is a powerful and easy-to-use internationalization plugin for Vue.js applications.

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

---

# vue-ショッピングリストアプリ

このプロジェクトは、[Vue.js 3 Fundamentals with the Composition API](https://vueschool.io/courses/vue-js-fundamentals-with-the-composition-api)コースからの学習の証明です。

## 主な学び

- Vue.js 3はアプリケーションの状態を扱うための強力な組み込み機能を提供しています。
- `v-for`ディレクティブは配列とオブジェクトのキーの両方をループ処理できます。
- コンポーネントループでの`v-for`の効率的な使用により、コードの可読性が向上します。[v-forの注意点](https://vueschool.io/articles/vuejs-tutorials/tips-and-gotchas-for-using-key-with-v-for-in-vue-js-3/)をご覧ください。
- 双方向データバインディングは、様々なフォーム入力（Select、Radio、Checkbox）とシームレスに連携します。
- 便利なVue.jsのショートカット：
  - `@submit.prevent`
  - `v-model.trim`
  - `v-model.number`
  - `@keydown.enter`
  - `@click`
- 動的CSSクラスの実装には複数のオプションがあります（配列、オブジェクト、または組み合わせ）。
- 算出プロパティはReactの`useMemo`に似ています。表現に最適で、直接の変更を避けるべきです。
- `reactive` vs `ref`：
  - `reactive`は変更に`.value`を必要としませんが、プリミティブでは動作しません。
  - `ref`はより汎用性が高く、ほとんどのケースで推奨されます。
  - refはDOM要素の操作に最適で、reactiveオブジェクトはリアクティブな状態管理に適しています。

## 学んだコーディング規約

- `<script setup>`内のメソッドにはアロー関数を使用します。
- API操作は`<form>`タグで`@submit.prevent`を使用してラップします。
- イベントハンドリングには`v-on`よりも`@`を優先します（例：`@click`）。
- `v-bind`の省略形として`:`を使用します（例：`:disabled="newItem.length < 5"`）。
- 静的クラスと動的クラスを組み合わせます：`class="static-class" :class="[dynamicClass]"`。
- 動的CSSクラスにはオブジェクトの配列アプローチを優先します：
  `:class="[{strikeout: purchased}, {priority: highPriority}]"`

## 国際化

このプロジェクトでは、[Vue I18n](https://vue-i18n.intlify.dev/)を使用して国際化を実現し、ユーザーが日本語と英語を切り替えられるようにしています。Vue I18nは、Vue.jsアプリケーション用の強力で使いやすい国際化プラグインです。

## プロジェクトのセットアップ

```sh
pnpm install
```

### 開発用のコンパイルとホットリロード

```sh
pnpm dev
```

### 本番用のタイプチェック、コンパイル、ミニファイ

```sh
pnpm build
```

### [ESLint](https://eslint.org/)によるLint

```sh
pnpm lint
```

## 推奨のIDE設定

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（Veturは無効にしてください）。

## TSでの`.vue`インポートのタイプサポート

TypeScriptはデフォルトで`.vue`インポートの型情報を処理できないため、タイプチェックに`tsc` CLIの代わりに`vue-tsc`を使用します。エディタでは、[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)を使用して、TypeScript言語サービスが`.vue`型を認識できるようにする必要があります。

## 設定のカスタマイズ

[Vite設定リファレンス](https://vite.dev/config/)をご覧ください。
