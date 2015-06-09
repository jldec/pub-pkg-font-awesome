// pub-config for the pub-pkg-font-awesome doc site

var opts = module.exports = {
  docTitle:    'pub-pkg-font-awesome',
  appUrl:      'http://jldec.github.io/pub-pkg-font-awesome',
  github:      'http://github.com/jldec/pub-pkg-font-awesome',

  pkgs:        ['pub-theme-doc', 'pub-pkg-seo', '..'],
  sources:     ['../README.md', './index.md'],
  staticPaths: ['../.gitignore'],
  injectCss:   ['/css/pub-pkg-font-awesome-doc.css'],
  outputs:     [{ path:'./gh-pages', relPaths:1 }],

  copyright:   'Copyright (c) 2015 Jürgen Leschner - github.com/jldec - MIT License'
}
