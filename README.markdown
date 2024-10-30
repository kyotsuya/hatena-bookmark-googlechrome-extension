# はてなブックマーク Google Chrome 拡張

本文書は, はてなブックマーク Google Chrome 拡張の開発者向けです。
利用者向け情報は下記ページなどをご覧ください。

* http://b.hatena.ne.jp/help/entry/chrome_extensions

## テストについて

src/tests にテストがあります。
テストは, はてなブックマーク Google Chrome 拡張をインストールしている Chrome で
chrome-extension://{extension-id}/tests/test.html にアクセスすると実行されます。

## ソースファイルの配置

Chrome 拡張と Opera 拡張を同じブランチで管理できるように、ソースファイルの配置は少し複雑になっています。

* src/main ディレクトリ: どの製品向けのパッケージにも含まれる基本的なソースファイル
* src/chrome ディレクトリ: Chrome 用のパッケージに含まれるファイル
* src/opera ディレクトリ: Opera 用のパッケージに含まれるファイル
