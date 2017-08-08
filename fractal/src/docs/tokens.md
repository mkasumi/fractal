---
title: "Design tokens"
label: "Design tokens"
---

[Design tokens](https://medium.com/eightshapes-llc/25dd82d58421) は視覚的なデザインの情報を総称したもの。これらはUIの開発において拡張しやすくメンテナンスすることを目的として、ハードコーディングされた値（カラーコードや、ピクセル単位の空白など）で使用する。


## カラーパレット（Color Palettes）
{% for palette, values in colors %}
**{{ palette | capitalize }}** の値です。使い方：`map-get(${{ palette }}, <key>)`
{% include "@palette-sample" %}
{% endfor %}

## ボーダー
ボーダー幅や角丸の値を指定します。使い方：`$<key>`

Key         | Value
------------|------------
{% for key, value in borders -%}
`{{ key }}` | {{ value }}
{% endfor -%}

## ブレークポイント
ブレークポイントの値はメディアクエリーズと指定します。使い方：`@media min-width ($<key>) {...}`

Key         | Value
------------|------------
{% for key, value in breakpoints -%}
`{{ key }}` | {{ value }}
{% endfor -%}


## 書体
書体を指定します。使い方：`$<key>`

英字を指定するときは、変数名の最後を「-en」にしてください。
数字を指定するときは、変数名の最後を「-num」にしてください。

{% set lanEn = r/.*en/g %}
{% set lanNum = r/.*num/g %}

{% for key, value in fonts -%}
<div class="pallette-font">
    <div class="pallette-font__preview">
        <textarea style="font: 4em/1 {{ value }}" class="pallette-font__editable" rows="1">{% if lanEn.test( key ) %}Aa{% elif lanNum.test( key ) %}123{% else %}永あ{% endif %}</textarea>
    </div>
    <div class="pallette-font__info">
        <code>{{ key }}</code>
        <div>{{ value }}</div>
    </div>
</div>
{% endfor -%}

## レイヤー
レイヤーでは `z-index` の値を指定します。使い方：`$<key>`

Key         | Value
------------|------------
{% for key, value in layers -%}
`{{ key }}` | {{ value }}
{% endfor -%}


## Containers
コンテナーのサイズ一覧です。使い方：`$<key>`

Key         | Value
------------|------------
{% for key, value in containers -%}
`{{ key }}` | {{ value }}
{% endfor -%}