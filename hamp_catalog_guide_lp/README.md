# hamp Catalog Guide LP

`lp.hamp.ai` 内の別ページに差し込む想定の、静的HTML/CSS/JSです。

## ファイル

- `index.html`：本文と構造
- `styles.css`：見た目
- `script.js`：スクロール進捗、目次ハイライト、FAQ開閉、スクショ読み込み
- `docs/screenshot_spec.md`：差し込むスクショの指定
- `images/`：スクショ配置用フォルダ

## スクショの入れ方

`docs/screenshot_spec.md` に沿ってスクショを撮り、`images/` に指定ファイル名で配置してください。

例：

```text
images/01-create-event.png
images/02-basic-settings.png
images/03-template-download.png
```

画像がまだない場合、LP上では破損画像ではなくプレースホルダーが表示されます。

## LPに組み込むとき

- 既存LPの共通ヘッダーを使う場合は、`index.html` の `<header class="site-header">` と `<footer class="site-footer">` を削除してください。
- CSS変数だけ調整すれば、既存LPのトーンに寄せられます。
- JSは依存ライブラリなしのVanilla JavaScriptです。
