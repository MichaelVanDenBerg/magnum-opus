Magnum Opus
Theme Version: 0.9.3
Author: Michael Van Den Berg 
Author URL: http://michaelvandenberg.com/

--------------------
=== Description ===
--------------------

A free portfolio theme powered by Isotope.


--------------------
=== Copyright ===
--------------------

Magnum Opus WordPress Theme, Copyright 2016 Michael Van Den Berg.
Magnum Opus is distributed under the terms of the GNU GPL license 2.0 or later.

Magnum Opus is based on Underscores http://underscores.me/, (C) 2012-2016 Automattic, Inc.


--------------------
=== Installation ===
--------------------

1. Sign into your WordPress dashboard, go to Appearance > Themes, and click Add New.
2. Click Add New.
3. Click Upload.
4. Click Choose File and select the theme zip file.
5. Click Install Now.
6. Click Add New, then click Upload, then click Choose File.
7. After WordPress installs the theme, click Activate.
8. You've successfully installed your new theme!

-- Front page setup.

This theme uses the featured content module and the portfolio custom content type of the Jetpack plugin
to setup the featured posts sections and the portfolio sections on the front page and the portfolio
page templates. Visit this page: http://jetpack.me/ to read more about Jetpack and how to install it.

After installing and activating the Jetpack plugin follow these steps:

1. Create a new page and select the front page template in Page Attributes section on the right.
2. Add a new post/page or modify an existing one and give this page a 'featured' tag and add a featured image.
3. Repeat step 2 for any additional featured posts.
4. Create a new portfolio item and make sure it has a featured image and a Project Type.
5. Repeat step 4 for any additional portfolio items.

The front page template will show both featured posts and portfolio items. The portfolio template will
only show the portfolio items. Additionally the maximum number of portfolio items to be shown on the
front page can be adjusted in the customizer while the maximum number of portfolio items to be shown
on the portfolio page can be adjusted under Settings > Writing (at the bottom).


--------------------
=== Licenses ===
--------------------

-- Fonts.
*
*  Roboto / by Christian Robertson.
*  URL: https://www.google.com/fonts/specimen/Roboto
*  License: Apache License 2.0 / https://www.apache.org/licenses/LICENSE-2.0
*
*  Roboto Slab / by Christian Robertson.
*  URL: https://www.google.com/fonts/specimen/Roboto+Slab
*  License: Apache License 2.0 / https://www.apache.org/licenses/LICENSE-2.0
*
*  Genericons / by Automattic.
*  URL: http://genericons.com/
*  License: GNU GPL License 2.0 / https://www.gnu.org/licenses/gpl-2.0.html
*

-- Images.
*
*  The images on the theme screenshot are based on pictures from Gemma Garner, Matthew Wiebe, Christian Joudrey, Daniela Roa, Toni Moeckel and Brooke Lark.
*  URL: https://unsplash.com/@gemmagarner
*  URL: https://unsplash.com/@matthewwiebe
*  URL: https://unsplash.com/@cjoudrey
*  URL: https://unsplash.com/@danielaroac
*  URL: https://unsplash.com/@tonimoeckel
*  URL: https://unsplash.com/@brookelark
*  All licensed: CC0 / http://creativecommons.org/publicdomain/zero/1.0/
*

-- Other.
*
*  Based on Underscores, Copyright (C) 2012-2016 Automattic, Inc.
*  URL: http://underscores.me/
*  License: GNU GPL License 2.0 [or later] / https://www.gnu.org/licenses/gpl-2.0.html
*
*  Normalize.css, Copyright (C) 2012-2016 Nicolas Gallagher and Jonathan Neal.
*  URL: http://necolas.github.io/normalize.css/
*  License: MIT License / http://opensource.org/licenses/MIT
*
*  Isotope, Copyright (C) 2012-2016 MetaFizzy.
*  URL: http://isotope.metafizzy.co/
*  License: GNU GPL License 3.0 [or later] / https://www.gnu.org/licenses/gpl-3.0.html
*


--------------------
=== ToDo ===
--------------------

1. The red hyperlinks on a black background are not accessibility-ready.
2. Might be better to hide the Isotope filters from screenreaders.
3. Not entirely happy with post meta and featured meta. Might need some tweaks.
4. Maybe empty defaults (instead of "No Projects") will be better on the front page.


--------------------
=== Changelog ===
--------------------

*
* 0.9.3 / 13.06.2016
* - Removed the use of $_SESSION variables in part-hero.php and template-front-page.php.
* - Added a second loop in template-front-page.php to replace the $_SESSION variable.
* - Missing box shadow added to the filter toggle.
* - Dutch language file added.
* - Fixed multiple translations that needed to be escaped.
* - Added add_editor_style() to functions.php.
*
* 0.9.2 / 12.06.2016
* - Fixed typo in magnumopus_full_width_page_content_width().
* - Escaped magnumopus_portfolio_url() and magnumopus_blog_url().
* - Fixed link post format title link on single pages.
* - New styles added for galleries.
* - Updated the language pot file.
* - Added support for editor styles.
* - Added support for custom header.
* - Added support for custom logo.
* - Some additional style tweaks.
* - Right-to-left language support added.
* - Isotope RTL support added in magnum-opus.js.
* - Removed second link to my website from the footer.
*
* 0.9.1 / 10.06.2016
* - Fixed attributes and content output that should have been escaped.
* - Removed unnecessary echo when using esc_attr_e().
* - Text strings in the customizer are now translatable.
* - Added "'capability' => 'edit_theme_options'," to customizer settings.
* - Added original un-minified script of Isotope in the js directory.
* - Genericons font is now packed with the theme.
* - Styles added for blockquotes on the front page.
* - Some additional style changes in SASS/CSS.
* - Improved default (empty) state of template-front-page.php.
* - Improved default (empty) state of template-portfolio.php.
* - Replaced esc_textarea() with wp_kses on line 28 in part-author-bio.php.
*
* 0.9.0 / 29.05.2016
* Initial (early) release.
*