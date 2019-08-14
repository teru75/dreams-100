100DREAMS
https://dreams100.herokuapp.com/
====
## 概要
「人生のやりたいこと100のリスト」を管理・共有できるアプリケーションです。

## 制作背景
- 『人生の100のリスト(著)ロバート・ハリス』を読み、自分も人生でやりたいことを書き出すことにしました。
- 実際に書いている人を探すと、大半の人がブログで書いており、進捗状況を都度ブログで書き直しているようでした。
  →リストとして管理できたら進捗確認・更新の手間が少なくなると考えました。
  →また、他の人のやりたいことを見たり応援したりできたら面白いのではないかと考えました。

## 機能
- 新規登録・ログイン・ログアウト
- google認証
- 「やりたいこと(dream)」投稿・編集・削除
- dreamをドラッグ&ドロップで並べ替え
- いいね
- 自分のdream一覧をCSVダウンロード
- ユーザー一覧(ページネーション)

## 今後実装したい機能
- 画像、目標日・達成日など、やりたいことの詳細を管理
- コメント機能
- 他の人のやりたいことからボタン一つで自分のリストに追加

## 使用技術
- Ruby
- Ruby on Rails
- jQuery
- Materialize
- MySQL(開発環境)
- PostgreSQL(本番環境)
- Heroku