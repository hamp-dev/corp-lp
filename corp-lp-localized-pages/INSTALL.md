# hamp catalog guide: English and Korean pages

## Files to add

- `faq_catalog_nonform_en.html` — English guide
- `faq_catalog_nonform_ko.html` — Korean guide

## Existing files to replace

- `faq_catalog_nonform.html` — adds alternate-language metadata and the language selector
- `styles.css` — adds Korean font handling, inquiry-link styling, and the language selector
- `script.js` — localizes screenshot link text according to the page language

Copy these files and the included `image/` and `images/` folders to the repository root while preserving the directory structure. The image files are unchanged and are included only so this bundle can be previewed by itself.

## Localization convention

The hamp app and screenshots are currently in Japanese. Instructions therefore show the exact Japanese UI label first and the English or Korean meaning second. For example:

- English: `「イベント作成・管理」 (Create / Manage Events)`
- Korean: `「イベント作成・管理」(이벤트 생성·관리)`

The guide also clarifies the screenshot-specific steps for uploading a circle list, uploading circle cuts, completing both live-site publishing controls, and requesting activation URLs.

## Verification completed

- Desktop: 1440 × 900
- Mobile: 390 × 844
- All 10 guide screenshots load
- All local anchors and asset paths resolve
- FAQ accordion opens correctly
- No horizontal page overflow
- Japanese, English, and Korean language links identify the current page

No commit, push, deployment, or pull request has been performed.
