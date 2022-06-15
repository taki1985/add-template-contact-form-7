# Add Template for Contact Form 7

## CSS（SCSS）の記述

CSS は BEM で記述をしてください。

入れ子にする必要がある場合は、入れ子にしても大丈夫です。

基本的には`common-style.scss`内に書いていきますが、エディターのみに CSS を適用したい場合は`editor.scss`内に記述してください。

class 名には`atcf7-`というプレフィックスを入れてください。

CF7 から提供されている hook は
includes/contact-from.php > construct_properties >　 wpcf7_contact_form_property\*{$name}
