// pub-config for the pub-pkg-font-awesome doc site

var opts = module.exports = {
  appUrl:      'http://jldec.github.io/pub-pkg-font-awesome',
  pkgs:        ['pub-theme-doc', 'pub-pkg-seo', '..'],
  sources:     ['../README.md', { path:'./index.md', fragmentDelim:1 }],
  outputs:     ['./gh-pages'],
  staticPaths: ['../.gitignore'],
  injectCss:   ['/css/pub-pkg-font-awesome-doc.css'],
  copyright:   'Copyright (c) 2015 Jürgen Leschner - github.com/jldec',
  relPaths:    1
}
