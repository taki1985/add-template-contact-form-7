# stile-blocks

## 開発環境

npm-scripts を使用してください。

Node.js のバージョンは 10 系にしてください。最新のバージョンだと動かない可能性があります。

プロジェクトフォルダに WordPress フォルダを配置してください。

[WordPress.org](https://wordpress.org/)

WordPress のフォルダ名は`wp`にしてください。

`wp`フォルダと`src`フォルダは同じ階層にしてください。

## CSS（SCSS）の記述

CSS は BEM で記述をしてください。

入れ子にする必要がある場合は、入れ子にしても大丈夫です。

基本的には`common-style.scss`内に書いていきますが、エディターのみに CSS を適用したい場合は`editor.scss`内に記述してください。

class 名には`atcf7-`というプレフィックスを入れてください。
