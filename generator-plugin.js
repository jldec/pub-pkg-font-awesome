module.exports = function(generator) {
  var u = generator.util;
  var hb = generator.handlebars;

  // map icon name -> glyph html hex
  // keys cannot contain regexp special chars
  var glyphMap = {
    'adjust':'&#xf042',
    'adn':'&#xf170',
    'align-center':'&#xf037',
    'align-justify':'&#xf039',
    'align-left':'&#xf036',
    'align-right':'&#xf038',
    'ambulance':'&#xf0f9',
    'anchor':'&#xf13d',
    'android':'&#xf17b',
    'angellist':'&#xf209',
    'angle-double-down':'&#xf103',
    'angle-double-left':'&#xf100',
    'angle-double-right':'&#xf101',
    'angle-double-up':'&#xf102',
    'angle-down':'&#xf107',
    'angle-left':'&#xf104',
    'angle-right':'&#xf105',
    'angle-up':'&#xf106',
    'apple':'&#xf179',
    'archive':'&#xf187',
    'area-chart':'&#xf1fe',
    'arrow-circle-down':'&#xf0ab',
    'arrow-circle-left':'&#xf0a8',
    'arrow-circle-o-down':'&#xf01a',
    'arrow-circle-o-left':'&#xf190',
    'arrow-circle-o-right':'&#xf18e',
    'arrow-circle-o-up':'&#xf01b',
    'arrow-circle-right':'&#xf0a9',
    'arrow-circle-up':'&#xf0aa',
    'arrow-down':'&#xf063',
    'arrow-left':'&#xf060',
    'arrow-right':'&#xf061',
    'arrow-up':'&#xf062',
    'arrows':'&#xf047',
    'arrows-alt':'&#xf0b2',
    'arrows-h':'&#xf07e',
    'arrows-v':'&#xf07d',
    'asterisk':'&#xf069',
    'at':'&#xf1fa',
    'automobile':'&#xf1b9',
    'backward':'&#xf04a',
    'ban':'&#xf05e',
    'bank':'&#xf19c',
    'bar-chart':'&#xf080',
    'bar-chart-o':'&#xf080',
    'barcode':'&#xf02a',
    'bars':'&#xf0c9',
    'bed':'&#xf236',
    'beer':'&#xf0fc',
    'behance':'&#xf1b4',
    'behance-square':'&#xf1b5',
    'bell':'&#xf0f3',
    'bell-o':'&#xf0a2',
    'bell-slash':'&#xf1f6',
    'bell-slash-o':'&#xf1f7',
    'bicycle':'&#xf206',
    'binoculars':'&#xf1e5',
    'birthday-cake':'&#xf1fd',
    'bitbucket':'&#xf171',
    'bitbucket-square':'&#xf172',
    'bitcoin':'&#xf15a',
    'bold':'&#xf032',
    'bolt':'&#xf0e7',
    'bomb':'&#xf1e2',
    'book':'&#xf02d',
    'bookmark':'&#xf02e',
    'bookmark-o':'&#xf097',
    'briefcase':'&#xf0b1',
    'btc':'&#xf15a',
    'bug':'&#xf188',
    'building':'&#xf1ad',
    'building-o':'&#xf0f7',
    'bullhorn':'&#xf0a1',
    'bullseye':'&#xf140',
    'bus':'&#xf207',
    'buysellads':'&#xf20d',
    'cab':'&#xf1ba',
    'calculator':'&#xf1ec',
    'calendar':'&#xf073',
    'calendar-o':'&#xf133',
    'camera':'&#xf030',
    'camera-retro':'&#xf083',
    'car':'&#xf1b9',
    'caret-down':'&#xf0d7',
    'caret-left':'&#xf0d9',
    'caret-right':'&#xf0da',
    'caret-square-o-down':'&#xf150',
    'caret-square-o-left':'&#xf191',
    'caret-square-o-right':'&#xf152',
    'caret-square-o-up':'&#xf151',
    'caret-up':'&#xf0d8',
    'cart-arrow-down':'&#xf218',
    'cart-plus':'&#xf217',
    'cc':'&#xf20a',
    'cc-amex':'&#xf1f3',
    'cc-discover':'&#xf1f2',
    'cc-mastercard':'&#xf1f1',
    'cc-paypal':'&#xf1f4',
    'cc-stripe':'&#xf1f5',
    'cc-visa':'&#xf1f0',
    'certificate':'&#xf0a3',
    'chain':'&#xf0c1',
    'chain-broken':'&#xf127',
    'check':'&#xf00c',
    'check-circle':'&#xf058',
    'check-circle-o':'&#xf05d',
    'check-square':'&#xf14a',
    'check-square-o':'&#xf046',
    'chevron-circle-down':'&#xf13a',
    'chevron-circle-left':'&#xf137',
    'chevron-circle-right':'&#xf138',
    'chevron-circle-up':'&#xf139',
    'chevron-down':'&#xf078',
    'chevron-left':'&#xf053',
    'chevron-right':'&#xf054',
    'chevron-up':'&#xf077',
    'child':'&#xf1ae',
    'circle':'&#xf111',
    'circle-o':'&#xf10c',
    'circle-o-notch':'&#xf1ce',
    'circle-thin':'&#xf1db',
    'clipboard':'&#xf0ea',
    'clock-o':'&#xf017',
    'close':'&#xf00d',
    'cloud':'&#xf0c2',
    'cloud-download':'&#xf0ed',
    'cloud-upload':'&#xf0ee',
    'cny':'&#xf157',
    'code':'&#xf121',
    'code-fork':'&#xf126',
    'codepen':'&#xf1cb',
    'coffee':'&#xf0f4',
    'cog':'&#xf013',
    'cogs':'&#xf085',
    'columns':'&#xf0db',
    'comment':'&#xf075',
    'comment-o':'&#xf0e5',
    'comments':'&#xf086',
    'comments-o':'&#xf0e6',
    'compass':'&#xf14e',
    'compress':'&#xf066',
    'connectdevelop':'&#xf20e',
    'copy':'&#xf0c5',
    'copyright':'&#xf1f9',
    'credit-card':'&#xf09d',
    'crop':'&#xf125',
    'crosshairs':'&#xf05b',
    'css3':'&#xf13c',
    'cube':'&#xf1b2',
    'cubes':'&#xf1b3',
    'cut':'&#xf0c4',
    'cutlery':'&#xf0f5',
    'dashboard':'&#xf0e4',
    'dashcube':'&#xf210',
    'database':'&#xf1c0',
    'dedent':'&#xf03b',
    'delicious':'&#xf1a5',
    'desktop':'&#xf108',
    'deviantart':'&#xf1bd',
    'diamond':'&#xf219',
    'digg':'&#xf1a6',
    'dollar':'&#xf155',
    'dot-circle-o':'&#xf192',
    'download':'&#xf019',
    'dribbble':'&#xf17d',
    'dropbox':'&#xf16b',
    'drupal':'&#xf1a9',
    'edit':'&#xf044',
    'eject':'&#xf052',
    'ellipsis-h':'&#xf141',
    'ellipsis-v':'&#xf142',
    'empire':'&#xf1d1',
    'envelope':'&#xf0e0',
    'envelope-o':'&#xf003',
    'envelope-square':'&#xf199',
    'eraser':'&#xf12d',
    'eur':'&#xf153',
    'euro':'&#xf153',
    'exchange':'&#xf0ec',
    'exclamation':'&#xf12a',
    'exclamation-circle':'&#xf06a',
    'exclamation-triangle':'&#xf071',
    'expand':'&#xf065',
    'external-link':'&#xf08e',
    'external-link-square':'&#xf14c',
    'eye':'&#xf06e',
    'eye-slash':'&#xf070',
    'eyedropper':'&#xf1fb',
    'facebook':'&#xf09a',
    'facebook-f':'&#xf09a',
    'facebook-official':'&#xf230',
    'facebook-square':'&#xf082',
    'fast-backward':'&#xf049',
    'fast-forward':'&#xf050',
    'fax':'&#xf1ac',
    'female':'&#xf182',
    'fighter-jet':'&#xf0fb',
    'file':'&#xf15b',
    'file-archive-o':'&#xf1c6',
    'file-audio-o':'&#xf1c7',
    'file-code-o':'&#xf1c9',
    'file-excel-o':'&#xf1c3',
    'file-image-o':'&#xf1c5',
    'file-movie-o':'&#xf1c8',
    'file-o':'&#xf016',
    'file-pdf-o':'&#xf1c1',
    'file-photo-o':'&#xf1c5',
    'file-picture-o':'&#xf1c5',
    'file-powerpoint-o':'&#xf1c4',
    'file-sound-o':'&#xf1c7',
    'file-text':'&#xf15c',
    'file-text-o':'&#xf0f6',
    'file-video-o':'&#xf1c8',
    'file-word-o':'&#xf1c2',
    'file-zip-o':'&#xf1c6',
    'files-o':'&#xf0c5',
    'film':'&#xf008',
    'filter':'&#xf0b0',
    'fire':'&#xf06d',
    'fire-extinguisher':'&#xf134',
    'flag':'&#xf024',
    'flag-checkered':'&#xf11e',
    'flag-o':'&#xf11d',
    'flash':'&#xf0e7',
    'flask':'&#xf0c3',
    'flickr':'&#xf16e',
    'floppy-o':'&#xf0c7',
    'folder':'&#xf07b',
    'folder-o':'&#xf114',
    'folder-open':'&#xf07c',
    'folder-open-o':'&#xf115',
    'font':'&#xf031',
    'forumbee':'&#xf211',
    'forward':'&#xf04e',
    'foursquare':'&#xf180',
    'frown-o':'&#xf119',
    'futbol-o':'&#xf1e3',
    'gamepad':'&#xf11b',
    'gavel':'&#xf0e3',
    'gbp':'&#xf154',
    'ge':'&#xf1d1',
    'gear':'&#xf013',
    'gears':'&#xf085',
    'genderless':'&#xf1db',
    'gift':'&#xf06b',
    'git':'&#xf1d3',
    'git-square':'&#xf1d2',
    'github':'&#xf09b',
    'github-alt':'&#xf113',
    'github-square':'&#xf092',
    'gittip':'&#xf184',
    'glass':'&#xf000',
    'globe':'&#xf0ac',
    'google':'&#xf1a0',
    'google-plus':'&#xf0d5',
    'google-plus-square':'&#xf0d4',
    'google-wallet':'&#xf1ee',
    'graduation-cap':'&#xf19d',
    'gratipay':'&#xf184',
    'group':'&#xf0c0',
    'h-square':'&#xf0fd',
    'hacker-news':'&#xf1d4',
    'hand-o-down':'&#xf0a7',
    'hand-o-left':'&#xf0a5',
    'hand-o-right':'&#xf0a4',
    'hand-o-up':'&#xf0a6',
    'hdd-o':'&#xf0a0',
    'header':'&#xf1dc',
    'headphones':'&#xf025',
    'heart':'&#xf004',
    'heart-o':'&#xf08a',
    'heartbeat':'&#xf21e',
    'history':'&#xf1da',
    'home':'&#xf015',
    'hospital-o':'&#xf0f8',
    'hotel':'&#xf236',
    'html5':'&#xf13b',
    'ils':'&#xf20b',
    'image':'&#xf03e',
    'inbox':'&#xf01c',
    'indent':'&#xf03c',
    'info':'&#xf129',
    'info-circle':'&#xf05a',
    'inr':'&#xf156',
    'instagram':'&#xf16d',
    'institution':'&#xf19c',
    'ioxhost':'&#xf208',
    'italic':'&#xf033',
    'joomla':'&#xf1aa',
    'jpy':'&#xf157',
    'jsfiddle':'&#xf1cc',
    'key':'&#xf084',
    'keyboard-o':'&#xf11c',
    'krw':'&#xf159',
    'language':'&#xf1ab',
    'laptop':'&#xf109',
    'lastfm':'&#xf202',
    'lastfm-square':'&#xf203',
    'leaf':'&#xf06c',
    'leanpub':'&#xf212',
    'legal':'&#xf0e3',
    'lemon-o':'&#xf094',
    'level-down':'&#xf149',
    'level-up':'&#xf148',
    'life-bouy':'&#xf1cd',
    'life-buoy':'&#xf1cd',
    'life-ring':'&#xf1cd',
    'life-saver':'&#xf1cd',
    'lightbulb-o':'&#xf0eb',
    'line-chart':'&#xf201',
    'link':'&#xf0c1',
    'linkedin':'&#xf0e1',
    'linkedin-square':'&#xf08c',
    'linux':'&#xf17c',
    'list':'&#xf03a',
    'list-alt':'&#xf022',
    'list-ol':'&#xf0cb',
    'list-ul':'&#xf0ca',
    'location-arrow':'&#xf124',
    'lock':'&#xf023',
    'long-arrow-down':'&#xf175',
    'long-arrow-left':'&#xf177',
    'long-arrow-right':'&#xf178',
    'long-arrow-up':'&#xf176',
    'magic':'&#xf0d0',
    'magnet':'&#xf076',
    'mail-forward':'&#xf064',
    'mail-reply':'&#xf112',
    'mail-reply-all':'&#xf122',
    'male':'&#xf183',
    'map-marker':'&#xf041',
    'mars':'&#xf222',
    'mars-double':'&#xf227',
    'mars-stroke':'&#xf229',
    'mars-stroke-h':'&#xf22b',
    'mars-stroke-v':'&#xf22a',
    'maxcdn':'&#xf136',
    'meanpath':'&#xf20c',
    'medium':'&#xf23a',
    'medkit':'&#xf0fa',
    'meh-o':'&#xf11a',
    'mercury':'&#xf223',
    'microphone':'&#xf130',
    'microphone-slash':'&#xf131',
    'minus':'&#xf068',
    'minus-circle':'&#xf056',
    'minus-square':'&#xf146',
    'minus-square-o':'&#xf147',
    'mobile':'&#xf10b',
    'mobile-phone':'&#xf10b',
    'money':'&#xf0d6',
    'moon-o':'&#xf186',
    'mortar-board':'&#xf19d',
    'motorcycle':'&#xf21c',
    'music':'&#xf001',
    'navicon':'&#xf0c9',
    'neuter':'&#xf22c',
    'newspaper-o':'&#xf1ea',
    'openid':'&#xf19b',
    'outdent':'&#xf03b',
    'pagelines':'&#xf18c',
    'paint-brush':'&#xf1fc',
    'paper-plane':'&#xf1d8',
    'paper-plane-o':'&#xf1d9',
    'paperclip':'&#xf0c6',
    'paragraph':'&#xf1dd',
    'paste':'&#xf0ea',
    'pause':'&#xf04c',
    'paw':'&#xf1b0',
    'paypal':'&#xf1ed',
    'pencil':'&#xf040',
    'pencil-square':'&#xf14b',
    'pencil-square-o':'&#xf044',
    'phone':'&#xf095',
    'phone-square':'&#xf098',
    'photo':'&#xf03e',
    'picture-o':'&#xf03e',
    'pie-chart':'&#xf200',
    'pied-piper':'&#xf1a7',
    'pied-piper-alt':'&#xf1a8',
    'pinterest':'&#xf0d2',
    'pinterest-p':'&#xf231',
    'pinterest-square':'&#xf0d3',
    'plane':'&#xf072',
    'play':'&#xf04b',
    'play-circle':'&#xf144',
    'play-circle-o':'&#xf01d',
    'plug':'&#xf1e6',
    'plus':'&#xf067',
    'plus-circle':'&#xf055',
    'plus-square':'&#xf0fe',
    'plus-square-o':'&#xf196',
    'power-off':'&#xf011',
    'print':'&#xf02f',
    'puzzle-piece':'&#xf12e',
    'qq':'&#xf1d6',
    'qrcode':'&#xf029',
    'question':'&#xf128',
    'question-circle':'&#xf059',
    'quote-left':'&#xf10d',
    'quote-right':'&#xf10e',
    'ra':'&#xf1d0',
    'random':'&#xf074',
    'rebel':'&#xf1d0',
    'recycle':'&#xf1b8',
    'reddit':'&#xf1a1',
    'reddit-square':'&#xf1a2',
    'refresh':'&#xf021',
    'remove':'&#xf00d',
    'renren':'&#xf18b',
    'reorder':'&#xf0c9',
    'repeat':'&#xf01e',
    'reply':'&#xf112',
    'reply-all':'&#xf122',
    'retweet':'&#xf079',
    'rmb':'&#xf157',
    'road':'&#xf018',
    'rocket':'&#xf135',
    'rotate-left':'&#xf0e2',
    'rotate-right':'&#xf01e',
    'rouble':'&#xf158',
    'rss':'&#xf09e',
    'rss-square':'&#xf143',
    'rub':'&#xf158',
    'ruble':'&#xf158',
    'rupee':'&#xf156',
    'save':'&#xf0c7',
    'scissors':'&#xf0c4',
    'search':'&#xf002',
    'search-minus':'&#xf010',
    'search-plus':'&#xf00e',
    'sellsy':'&#xf213',
    'send':'&#xf1d8',
    'send-o':'&#xf1d9',
    'server':'&#xf233',
    'share':'&#xf064',
    'share-alt':'&#xf1e0',
    'share-alt-square':'&#xf1e1',
    'share-square':'&#xf14d',
    'share-square-o':'&#xf045',
    'shekel':'&#xf20b',
    'sheqel':'&#xf20b',
    'shield':'&#xf132',
    'ship':'&#xf21a',
    'shirtsinbulk':'&#xf214',
    'shopping-cart':'&#xf07a',
    'sign-in':'&#xf090',
    'sign-out':'&#xf08b',
    'signal':'&#xf012',
    'simplybuilt':'&#xf215',
    'sitemap':'&#xf0e8',
    'skyatlas':'&#xf216',
    'skype':'&#xf17e',
    'slack':'&#xf198',
    'sliders':'&#xf1de',
    'slideshare':'&#xf1e7',
    'smile-o':'&#xf118',
    'soccer-ball-o':'&#xf1e3',
    'sort':'&#xf0dc',
    'sort-alpha-asc':'&#xf15d',
    'sort-alpha-desc':'&#xf15e',
    'sort-amount-asc':'&#xf160',
    'sort-amount-desc':'&#xf161',
    'sort-asc':'&#xf0de',
    'sort-desc':'&#xf0dd',
    'sort-down':'&#xf0dd',
    'sort-numeric-asc':'&#xf162',
    'sort-numeric-desc':'&#xf163',
    'sort-up':'&#xf0de',
    'soundcloud':'&#xf1be',
    'space-shuttle':'&#xf197',
    'spinner':'&#xf110',
    'spoon':'&#xf1b1',
    'spotify':'&#xf1bc',
    'square':'&#xf0c8',
    'square-o':'&#xf096',
    'stack-exchange':'&#xf18d',
    'stack-overflow':'&#xf16c',
    'star':'&#xf005',
    'star-half':'&#xf089',
    'star-half-empty':'&#xf123',
    'star-half-full':'&#xf123',
    'star-half-o':'&#xf123',
    'star-o':'&#xf006',
    'steam':'&#xf1b6',
    'steam-square':'&#xf1b7',
    'step-backward':'&#xf048',
    'step-forward':'&#xf051',
    'stethoscope':'&#xf0f1',
    'stop':'&#xf04d',
    'street-view':'&#xf21d',
    'strikethrough':'&#xf0cc',
    'stumbleupon':'&#xf1a4',
    'stumbleupon-circle':'&#xf1a3',
    'subscript':'&#xf12c',
    'subway':'&#xf239',
    'suitcase':'&#xf0f2',
    'sun-o':'&#xf185',
    'superscript':'&#xf12b',
    'support':'&#xf1cd',
    'table':'&#xf0ce',
    'tablet':'&#xf10a',
    'tachometer':'&#xf0e4',
    'tag':'&#xf02b',
    'tags':'&#xf02c',
    'tasks':'&#xf0ae',
    'taxi':'&#xf1ba',
    'tencent-weibo':'&#xf1d5',
    'terminal':'&#xf120',
    'text-height':'&#xf034',
    'text-width':'&#xf035',
    'th':'&#xf00a',
    'th-large':'&#xf009',
    'th-list':'&#xf00b',
    'thumb-tack':'&#xf08d',
    'thumbs-down':'&#xf165',
    'thumbs-o-down':'&#xf088',
    'thumbs-o-up':'&#xf087',
    'thumbs-up':'&#xf164',
    'ticket':'&#xf145',
    'times':'&#xf00d',
    'times-circle':'&#xf057',
    'times-circle-o':'&#xf05c',
    'tint':'&#xf043',
    'toggle-down':'&#xf150',
    'toggle-left':'&#xf191',
    'toggle-off':'&#xf204',
    'toggle-on':'&#xf205',
    'toggle-right':'&#xf152',
    'toggle-up':'&#xf151',
    'train':'&#xf238',
    'transgender':'&#xf224',
    'transgender-alt':'&#xf225',
    'trash':'&#xf1f8',
    'trash-o':'&#xf014',
    'tree':'&#xf1bb',
    'trello':'&#xf181',
    'trophy':'&#xf091',
    'truck':'&#xf0d1',
    'try':'&#xf195',
    'tty':'&#xf1e4',
    'tumblr':'&#xf173',
    'tumblr-square':'&#xf174',
    'turkish-lira':'&#xf195',
    'twitch':'&#xf1e8',
    'twitter':'&#xf099',
    'twitter-square':'&#xf081',
    'umbrella':'&#xf0e9',
    'underline':'&#xf0cd',
    'undo':'&#xf0e2',
    'university':'&#xf19c',
    'unlink':'&#xf127',
    'unlock':'&#xf09c',
    'unlock-alt':'&#xf13e',
    'unsorted':'&#xf0dc',
    'upload':'&#xf093',
    'usd':'&#xf155',
    'user':'&#xf007',
    'user-md':'&#xf0f0',
    'user-plus':'&#xf234',
    'user-secret':'&#xf21b',
    'user-times':'&#xf235',
    'users':'&#xf0c0',
    'venus':'&#xf221',
    'venus-double':'&#xf226',
    'venus-mars':'&#xf228',
    'viacoin':'&#xf237',
    'video-camera':'&#xf03d',
    'vimeo-square':'&#xf194',
    'vine':'&#xf1ca',
    'vk':'&#xf189',
    'volume-down':'&#xf027',
    'volume-off':'&#xf026',
    'volume-up':'&#xf028',
    'warning':'&#xf071',
    'wechat':'&#xf1d7',
    'weibo':'&#xf18a',
    'weixin':'&#xf1d7',
    'whatsapp':'&#xf232',
    'wheelchair':'&#xf193',
    'wifi':'&#xf1eb',
    'windows':'&#xf17a',
    'won':'&#xf159',
    'wordpress':'&#xf19a',
    'wrench':'&#xf0ad',
    'xing':'&#xf168',
    'xing-square':'&#xf169',
    'yahoo':'&#xf19e',
    'yelp':'&#xf1e9',
    'yen':'&#xf157',
    'youtube':'&#xf167',
    'youtube-play':'&#xf16a',
    'youtube-square':'&#xf166'
  };

  // lookup glyph given name
  hb.registerHelper('faGlyph', function(name, frame) {
    return glyphMap[name];
  });

  // get icon html for a name - xtra classes optional
  hb.registerHelper('faIcon', function(name, xtra, frame) {
    return iconHtml(name, hb.hbp(xtra));
  });

  // block helper over all {name: glyph:}
  hb.registerHelper('eachFa', function(frame) {
    return u.map(glyphMap, function(glyph, name) {
      return frame.fn({ name:name, glyph:glyph });
    }).join('');
  });

  // get html for name, with optional extra classes
  function iconHtml(name, xtra) {
    var xtra = xtra ? (' fa-' + xtra.split(/\s/).join(' fa-')) : '';
    return '<span class="fa' + xtra + '">' + glyphMap[name] + '</span>';
  }

  // test for !glyphMapkey class1 class2 class3 ...
  var re = new RegExp('^!(' + u.keys(glyphMap).join('|') + ')(?:\\s+(.+)|$)');

  // mutate marked renderer to customize .em html
  var renderer = generator.renderer;
  var renderEm = renderer.em;
  renderer.em = function em(text) {
    var match;
    if (match = u.str(text).match(re)) return iconHtml(match[1], match[2]);
    return renderEm.call(this, text);
  }

}
