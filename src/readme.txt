=== Add Template for Contact Form 7 ===
Contributors: matorel
Tags: contact, form, contact form
Requires at least: 4.9
Tested up to: 6.0
Stable tag: 1.0.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: add-template-for-contact-form-7
Requires PHP: 7.0

== Description ==

This plugin adds a template function to "Contact Form 7" using a template file.
"Contact Form 7"にテンプレートファイルによるテンプレート機能を追加するプラグインです。

This is useful for theme developers to smoothly check the display of CF7 tags.
テーマ開発者が CF7 タグの表示確認をスムーズに行わせるのに便利です。

Create an atcf7 directory in the theme folder and place the template file (.php) in that directory.
テーマディレクトリ内に"atcf7"ディレクトリを作成し、そのディレクトリの中にテンプレートファイル(.php)を配置します。

#### Example [theme_path/atcf7/***.php]

```
<?php
if (!defined('ABSPATH')) {
  exit;
}
/*
 * Template Name: Distinguishing Name
 */
?>

<table>
  <tbody>
    <tr>
      <th><label for="your-name" onclick="">Name</label></th>
      <td>
        [text* your-name id:your-name]
      </td>
    </tr>
    <tr>
      <th><label for="your-email" onclick="">Mail Address</label></th>
      <td>
        <div>
          [email* your-email id:your-email ]
        </div>
      </td>
    </tr>
    <tr>
      <th><label for="your-content" onclick="">Contents</label></th>
      <td>
        [textarea* your-content x5 id:your-content ]
      </td>
    </tr>
  </tbody>
</table>
<div>[submit "Submit"]</div>
```

Open the "Template File" tab on the Edit screen of Contact Form 7 and select the template you want to use.
Contact Form 7 の編集画面の"テンプレートファイル"タブを開き、使用したいテンプレートを選択してください。

For the theme developer to make the confirmation smooth, create the atcf7 directory in the theme folder and place the template file (.php) in that directory.
このプラグインの作者は Contact Form 7 プラグイン開発元とは関係ありません、ご注意下さい。

== Installation ==

1. From the WP admin panel, click “Plugins” -> “Add new”.
2. In the browser input box, type “My Custom Style Css Manager”.
3. Select the “My Custom Style Css Manager” plugin and click “Install”.
4. Activate the plugin.

OR…

1. Download the plugin from this page.
2. Save the .zip file to a location on your computer.
3. Open the WP admin panel, and click “Plugins” -> “Add new”.
4. Click “upload”.. then browse to the .zip file downloaded from this page.
5. Click “Install”.. and then “Activate plugin”.

== Frequently asked questions ==

== Screenshots ==

== Changelog ==

== Upgrade notice ==

== Arbitrary section 1 ==
