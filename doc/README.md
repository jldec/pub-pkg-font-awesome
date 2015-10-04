# pub-pkg-font-awesome doc

This is the source for the pub-pkg-font-awesome website.

### [index.md](https://raw.githubusercontent.com/jldec/pub-pkg-font-awesome/master/doc/index.md)

```
    ---- / ----
    title: Icons
    template: preview

    ## Icons

    ---- /preview.hbs ----

    {{{html}}}

    <div class="jstfy">
    {{#eachFa~}}
    <div class="blox">{{{faIcon name 'lg'}}}<span class="lbl">{{name}}</span></div>
    {{/eachFa}}
    </div>


    ---- /Condensed ----
    template: condensed

    ## Condensed

    ---- /condensed.hbs ----

    {{{html}}}

    {{#eachFa~}}
    <div class="blox">{{{faIcon name}}}</div>
    {{/eachFa}}


    ---- /css/pub-pkg-font-awesome-doc.css ----
    nocrawl:1
    notemplate:1

    .jstfy { text-align:justify; }
    .blox  { display:inline-block; text-align:center; cursor:pointer; }
    .blox .lbl { display:block; width:100%; padding:0 0.5em 1em 0.5em; font-size:14px; color:#999; }
    .blox .fa  { color:#34a7d6; line-height:1.6em; width:1.6em; }
    .blox:hover .fa { color:#fff; background-color:#34a7d6; }
    .blox:hover .lbl { color:#000; }


    ---- /.nojekyll ----
    nocrawl:1
    notemplate:1
```

### [pub-config.js](https://github.com/jldec/pub-pkg-font-awesome/blob/master/doc/pub-config.js)

```
// pub-config for the pub-pkg-font-awesome doc site

var opts = module.exports = {
  docTitle:    'pub-pkg-font-awesome',
  appUrl:      'http://jldec.github.io/pub-pkg-font-awesome',
  github:      'http://github.com/jldec/pub-pkg-font-awesome',

  pkgs:        ['pub-theme-doc', 'pub-pkg-seo', '..'],
  sources:     [{ path:'../README.md', writable:true },
                { path:'./index.md', writable:true } ],
  staticPaths: ['../.gitignore'],
  injectCss:   ['/css/pub-pkg-font-awesome-doc.css'],
  outputs:     [{ path:'./gh-pages', relPaths:1 }],

  copyright:   'Copyright (c) 2015 Jürgen Leschner - github.com/jldec - MIT License'
}
```

### scripts
from package.json

```json
"scripts": {
  "readme":  "pub",
  "docedit": "pub doc",
  "docout":  "pub -O doc",
  "docview": "pub -S doc/gh-pages doc"
}
```

### gh-pages workflow

Instead of merge -s subtree which can be unreliable, we using the following
to read the tree in `doc/gh-pages/`

```sh
git checkout gh-pages
git read-tree -u -m master:doc/gh-pages
git commit -m 'publish gh-pages'
git push
```
