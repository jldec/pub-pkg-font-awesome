# pub-pkg-font-awesome

[http://jldec.github.io/pub-pkg-font-awesome](http://jldec.github.io/pub-pkg-font-awesome/readme)

Use [Font Awesome](http://fontawesome.io/) v4.4.0 glyphs from [pub-server](https://github.com/jldec/pub-server) markdown


## Installation

1. install `pub-pkg-font-awesome` with `npm install --save pub-pkg-font-awesome`
2. add `pub-pkg-font-awesome` to your pub-config `pkgs`


## CSS

This package will inject `<link rel="stylesheet" href="/css/font-awesome.css">` into your main template.

Alternatively, if you set `inject:false` on the theme, you can use one of the mechanisms like the bootstrap CDN described [here](http://fontawesome.io/get-started/).

**Note**: Unlike the regular font-awesome.css, this package does not include a class for every icon. The Markdown renderer will insert the correct icon unicode character into the generated HTML without help from CSS.


## Usage from Markdown

This package includes a customized [marked](https://github.com/chjj/marked) renderer.

`_!{icon-name}_` in your markdown, will render `<span class="fa">{icon-glyph-code}</span>`

E.g. in link text:

```md
[Link to facebook _!facebook_](your-facebook-url)
```

> [Link to facebook _!facebook_](your-facebook-url)

Or in a heading:

```md
### _!warning_ Warning
```

> ### _!warning_ Warning

For a complete list of all the icon names see http://jldec.github.io/pub-pkg-font-awesome


##### Controlling icon size and other features

You can add css classnames (without the fa- prefix) after the icon name, separated with space. E.g.

```md
_!spinner 3x spin_
```

> _!spinner 3x spin_

Supported classnames include: `lg`, `2x`, `3x`, `4x`, `5x`, `spin`, `pulse`, `border`, `rotate-90`, `rotate-180`, `rotate-270`, `flip-horizontal`, and `flip-vertical`

`pull-left` and `pull-right` are not supported from markdown, but can be used from a template)


For examples of icons with the css classnames see http://fontawesome.io/examples/


## Usage from handlebars

For additional control of the rendered HTML, this package includes the following Handlebars Helpers

- `{{{faGlyph name}}}`
  produces the glyph unicode for insertion into HTML e.g. `{{{faGlyph yen}}}` generates `&#xf157`.

- `{{{faIcon name extra}}}`
  produces the same HTML as the markdown `_!name extra_`.

- `{{#eachFa}}{{/eachFa}}`
  Block helper for enumerating all the glyphs. The iterator produces {name: glyph:} for each icon.


E.g. The HTML for the Condensed icon-list page was generated using the following:

```html
{{#eachFa~}}
<div class="blox">{{{faIcon name}}}</div>
{{/eachFa}}
```


## Attribution
Font Awesome by Dave Gandy - http://fontawesome.io


#### Font License
The Font Awesome font is licensed under the SIL OFL 1.1 - http://scripts.sil.org/OFL

Font Awesome CSS are licensed under the MIT License:


#### Plugin code
(c) Jürgen Leschner -- github.com/jldec -- MIT License
