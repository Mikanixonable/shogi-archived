# 将棋の囲い図鑑

先手の囲いを盤面で見比べるビューア。囲い・戦法・対局図・分類マップの4画面構成。

**公開ページ**: https://mikanixonable.github.io/shogi/

## 構成

- エントリ: `castles.html`（`index.html` は GitHub Pages 用のリダイレクト）
- スクリプトの読み込み順は `js/manifest.js` が一元管理（古典スクリプト構成。`file://` 直開きでも動く）
- データの出典は `js/data/sources.js` に集約

## 開発

```sh
npm test    # データ検証 + 単体テスト + UI チェック（playwright-core 使用）
npm run shots  # スクリーンショットのみ
```
