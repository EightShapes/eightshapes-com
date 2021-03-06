---
  category : Documentation
  title : Design System Doc Components
  deck : The Top 8 Reusable Components to Document a Library
  title_abbreviation : Doc Components
  author_id : nathan
  date : 2016-09-13
  masthead : true
  layout : article.njk
  tags : []
---

{% import '../_includes/escom.njk' as escom with context %}

Every time, we use our library’s toolkit to build web-based doc of the library. A bit meta, for sure. The documentation is just another product made and maintained with the kit, only made by the team that made the kit itself.

Building an experience, even doc, sensitizes that team to what it feels like to use the kit, reinforcing the setup and build that their users have. During the process, a simple truth reveals itself, predictably:

The system <em>never</em> provides all the parts for you.

The library gives you [_Colors_](/articles/color-in-design-systems) and [_Buttons_](/articles/buttons-in-design-systems). Maybe a _Nav Bar_. Certainly a _Footer_. However, a library serving online shopping doesn’t need a code viewer or color swatch. So some key components you need to document a library are in fact not in the library. So you build them, just for yourself, separate from and extending the library shared with everyone else.

What do you build? Get ready to tool up! Here’s my eight favorite documentation components, why to build each, and special ingredients you can add to make each even more useful.

---

## #8. Spec & Token Tables

Well documented libraries proliferate tabular spec tables throughout, whether a reference table of CSS modifiers, a [token set](/articles/tokens-in-design-systems), or something else. So make a component (or three) for those you repeat over and over.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Design token names and values in a table',
      caption = '<a href="/articles/tokens-in-design-systems" target="_blank">Token table</a>, with available variable and corresponding values, as displayed in a section describing the “squished inset” convention.',
      class = ''
  ) }}

Automating tabular displays helps authors use simpler syntax, promotes consistent table structure and headings, and eases maintenance for embedded data like tokens.

_Special Features_:

- Recursively cull through hierarchies to display objects with increasing levels of specificity, such as `$space-s`, `$space-inset-s` and `$space-inset-squish-s`.

---

## #7. Release Details

Let’s face it, you’re a product with users to reading release notes and keeping abreast of changes. While boringly administrative, release details summarize change and rout users to new additions.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Sophisticated release history with types of changes per release',
      caption = 'Netapp.com LUCI Library release details',
      class = ''
  ) }}

So design the content well and don’t skimp on details. Ease authoring, diminish drudgery, and publish a consistent summary per release.

_Special Features_:

- Highlight the type of change: markup, style, script or spec (guidelines, instructions, etc).
- Group by type: enhancements, new items, fixes, and other changes.

---

## #6. Page-Level Table of Contents

Each component page needs a local table of contents to to scan available variations, specs and guidelines, and then navigate to each quickly. Wikipedia does it. So does Salesforce. Why can’t you?

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Local navigation within a page',
      caption = 'Sticky local navigation, with variations (above line) and additional documentation (below line)',
      class = ''
  ) }}

System users need to know what’s there, and some components — even simple ones like *Buttons* — have many variants. Local navigation improves awareness of and navigation to what’s available below the fold.

_Special Features_:

- Make local nav sticky in wide displays where users typically use the doc.
- Embed subsections within each primary variant or guidelines section, revealing only the current subsection based on scroll position.

---

## #5. Tint Stack

A tint stack vertically arranges many colors in a group, such as a single color across brightness values or a relevant subsystem of colors like Feedback’s red, yellow and green.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Stack of colors',
      caption = '<a href="https://material.google.com/style/color.html" rel="nofollow noopener" target="_blank">Google Material Design Color</a> tint stack',
      class = ''
  ) }}

Tint stacks display many colors compactly, offering a playground to visualize additional properties of each color.

_Special Features_:

- Identify the proper type color used on each background.
- Overlay accessibility scores such as AA or AAA.
- Mark a color that should never have text overlaid due to contrast.
- Make the block clickable to copy a hex code or, better, a system variable like `$color-neutral-95`.

  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Stack of colors with values and accessibility scores',
      caption = 'Tint stack of neutrals with names (95), hex codes, and text/background accessibility contrast score',
      class = ''
  ) }}

---

## #4. Do &amp; Don’t

In libraries full of atomic bits, apply each in a full-page composition can take innumerable forms. So while systems must support a product’s autonomy, nothing beats sensitizing your users to intended and effective uses that comparative do’s and don’ts images.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = 'Do and don\'t contrasted side by side',
      caption = 'Gorgeous diagrams and well written content about <a href="https://material.google.com/components/cards.html#cards-usage" rel="nofollow noopener" target="_blank">Google Material Design’s Card</a> component.',
      class = ''
  ) }}

Pictures — especially comparative pictures — are far easier to scan, learn from, and recall than verbose textual guidelines. While more expensive to produce, having a do & don’t component memorably reinforces the value of this display to system authors digging in to compose doc.

_Special Features_:

- Underscore each image with green (Do) and red (Don’t) via a border color, but compose the image to avoid unintended conflicts of that border with the what’s in the image.
- Prepend the **DO** & **DON’T** systematically, separating the firm imperative from authored content.

---

## #3. Framed Page Gallery

All of your system’s customers — designers, devs, product managers, execs — must believe it’s easy to build things that look great. Nothing does that quicker than showing a diverse gallery of built _pages_, embedded (via iframes) and scaled down to shown in a single, scrolled view. They get it: we use this stuff to build things like this.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '8',
      image_alt = 'Page types built in html',
      caption = 'Page gallery of embedded, fully composed page layouts, each displayed in an iFrame.',
      class = ''
  ) }}

A scannable gallery of built things quickly sensitizes and builds belief in system validity. While a page rarely used, it’s powerful and easy to setup.

_Special Features_:

- Put users in control of page scaling (using the transform: `scale()` property, with a default of 0.2 or 0.25) and viewport width (to quickly toggle a gallery of page types across common device profiles).

---

## #2. Markdown Chunks

It’s gotta be simple to do the basics of long form content — headings, paragraphs, lists, images, the basics. We use Markdown, cleanly integrated into Nunjucks templating mixed with calls to other components like the Do/Don’t, spec tables, and TOCs described above.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '9',
      image_alt = 'Code snippet',
      caption = 'Markdown interspersed with other content to form a documentation page.',
      class = ''
  ) }}

Even if you don’t use a templating system like Nunjucks, is your long form content as cleanly input and stored? A clean approach for building doc can make or break easing in contributors and migrating copy from where it’s planned, composed & edited (for my teams, Google Docs).

_Special Features_: Nah, who needs ‘em? At this point, keep the tool — and your content — clean!

---

## #1. Example — Code Pair

Nothing beats the utility of a visible, rendered example paired with it’s coded counterpart. While bells and whistles abound, it’s here where _everyone_ can see it, and developers can take the thing and use it. Any self-respecting UI toolkit enables you to see the thing and use it effortlessly.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '10',
      image_alt = 'Example and code paired together',
      caption = 'Example for the <a href="https://www.lightningdesignsystem.com/components/feeds/" rel="nofollow noopener" target="_blank">Feed component in the Salesforce Lightning Design System</a>',
      class = ''
  ) }}

_Special Features_:

- Tabs for varying code concerns: markup, `@extend`s tooling, macro usage.
- Toggle across or simultaneously display responsive states across relevant device profiles, such as handset, tablet, desktop or small, medium, large.
- Click-to-copy, often via a button nestled into the code block’s upper right.
- Stack states (such as a Button’s default, active, hover, disabled, etc) so that you needn’t interact to see or guess what’s implemented.
