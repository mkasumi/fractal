---
title: "Design tokens"
label: "Design tokens"
---
[Design tokens](https://medium.com/eightshapes-llc/25dd82d58421) are named entities that store visual design information. These are used in place of hard-coded values (such as hex values for color or pixels for spacing) in order to maintain a scalable, consistent system for UI development.


## Colour Palettes
{% for palette, values in colors %}
**{{ palette | capitalize }}** palette values. Accessed via `map(colors, {{ palette }}, <key>)`
{% include "@palette-sample" %}
{% endfor %}

## Borders
Width and radii tokens are used to style element borders. Accessed via `map(borders, <key>)`.

Key         | Value
------------|------------
{% for key, value in borders -%}
`{{ key }}` | {{ value }}
{% endfor -%}

## Breakpoints
Breakpoint tokens are used within `@media` queries. Accessed via `map(breakpoints, <key>)`.

Key         | Value
------------|------------
{% for key, value in breakpoints -%}
`{{ key }}` | {{ value }}
{% endfor -%}


## Font Families
Font family tokens are used for typographic styling. Accessed via `map(fonts, <key>)`.

英字を指定するときは、変数名の最後を「-en」にしてください。

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

## Layers
Layering tokens set the `z-index` layer value for elements. Accessed via `map(layers, <key>)`.

Key         | Value
------------|------------
{% for key, value in layers -%}
`{{ key }}` | {{ value }}
{% endfor -%}


## Containers
コンテナーのサイズ一覧 @_containers.scss

Key         | Value
------------|------------
{% for key, value in containers -%}
`{{ key }}` | {{ value }}
{% endfor -%}