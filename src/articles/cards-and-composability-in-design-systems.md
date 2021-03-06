---
  category : UI Components
  title : Cards and Composability in Design Systems
  deck : Structure, Content, Style & Behavior of Composed Components
  title_abbreviation : Cards and Composability
  author_id : nathan
  date : 2018-04-20
  masthead : true
  layout : article.njk
  tags : [ui components]
---

{% import '../_includes/escom.njk' as escom with context %}

I’m a sucker for a `card` component. It takes me back nostalgically to my adolescence when baseball cards introduced me to information design. I collected and organized thousands, each exhibiting a hero’s photo, team as theme, positions as identity. My brain engaged with the design, data, and in-depth inquiry they fostered.

Today’s digital `card` serves the same purpose. More than just a generic container, a card is a scannable snapshot of an object’s vitals. It previews enough to identify. It invites us to learn more and interact, in that order.

{{ escom.bar_quote(
      quote = 'A card is a sheet of material that serves as an entry point to more detailed information. Cards may contain a photo, text, and a link about a single subject. — <a href="https://material.io/guidelines/components/cards.html" rel="nofollow noopener" target="_blank">Google Material Design’s Card</a>',
      class = 'escom-pull-quote--light'
  ) }}

Often, the `card` also signals a pivot in the growth of a component library. Unlike primitives like `button` and `input`, a `card` requires composition. It relates many elements (some already in our library) and as content flows into each. Also, `card`s are almost always shown as a set, siblings side by side. Composition triggers higher-order thinking critical to system design.

Hardening a composition like `card` forces a system to mature. Sometimes, a system solves the challenges, increasing library complexity. Other times, a system’s burgeoning maturity steers away from complexity, keeping things simple. These challenges take the form of **structure** , **content** , **style** and **behavior**. May the lessons here inspire your system compositions to come.

---

## Composing Structure

Libraries start with primitives—`input`, `heading`, `checkbox`, `radio-button`, `label`, `icon`—to serve as building blocks. A `button`’s composability is fairly mundane: an `icon` to the left or right of a label, maybe a split bar or animation. Then`button-group` combines `button`, forcing sibling relationships. These are low-level challenges. Things get more interesting when composing components like `card` with many elements.

### Identify Core Elements

A composable component starts with essential core of required elements, so you’ll want to ask: What elements are required of each and every display? What happens if a required element is missing?

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Illustration of a card component anatomy',
      caption = '',
      class = ''
  ) }}

`card` often requires:

- _image_, paired with a…
- _title_ (usually a styled `heading`), maybe supplemented with a…
- _description_ (or “_deck_” or other elaborating content).

---

### Identify All Possible Elements &amp; Cases

Cast the discovery net wide across many products. Inventory each example. Analysis should yield a growing diversity of cases and elements should inform a design and guidance useful for later documentation.

- What is a complete possible elements included?
- What element combinations discouraged or forbidden? For example, a <code>card</code> may include <code>button</code>s or <code>icon</code>s for actions, but never both.

  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Card annotation of content elements',
      caption = '',
      class = ''
  ) }}

`card`s serve varying needs across many moments of an experiences, and can include a range of other content types:

- _label_ or _type_, often signaling a group to which the object belongs and possibly displayed as a `tag` or an `icon`/label pair.
- _action(s)_ offered as `button`(s), `icon`(s), or both.
- _price_ and _ratings_ for products
- _metadata_, distinct from a description to highlight key properties
- _related list(s)_ as a set of items related to the object

---

### Solidify Element Relationships

A composable component’s many elements raise questions of order, combinations, groups, and more:

- Are there named zones, such as actions?
- Are there element subgroups? Can subgroups reordered or hidden?
- What logic is needed to sort, combine, or separate combinations?
- How many alternative arrangements should we test?
- How many variations should be revealed and described in doc?

For many `card`s, the stacked order is fixed: image then title then actions. In other systems, more flexible needs may suggest reordering elements. For example, [Morningstar Design System](https://designsystem.morningstar.com/components/cards.html)’s `card` enables users to place an image above or below a title.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Card displaying an image either on the top or bottom',
      caption = '',
      class = ''
  ) }}

Like a `modal` and `dialog`, `card` could identify zones for a _header_, _main_ and _footer_ or _media_, _copy_, and _actions_ to firmly identify content relationships.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Card stacking the media image, then copy, then actions',
      caption = '',
      class = ''
  ) }}

---

### Cope with Regions Allowing Flexible Input

The bigger the component, the more likely it offers a region that welcomes, well, whatever an system user wants to put there. The region’s content can be as innocuous as a paragraph or bulleted list.

- Are there generic regions into which you can place flexible markup?
- How do regions zones impact fluid and/or fixed displays?
- Do you expect or recommend certain content types for such containers?

But that region opens a dangerous door. Maybe an adopter adds a legend… under a chart… with an adjoining four column data table… in the content portion of a card. Hint: that’s not what a `card` is for.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Card offering flexible slots to inject custom content',
      caption = 'Flexible regions for a system user to inject their own content.',
      class = ''
  ) }}

Regions offer flexibility but invite abuse. Nobody argues opening up a `modal`’s main content area to uncertain markup. For a `card`, an _action bar_ zone could include `button`, `icon`, and `menu.` However, it’s not up to `card` to hard wire every case. Some components may need to offer regions and relinquish control of and responsibility for what’s goes inside.

_Takeaway:_ With [great container power comes great responsibility](https://youtu.be/_5d6rTQcU2U?t=1m28s) of adopting teams. Don’t fool yourself to believe you can predict, build, test, or doc every possible case. If a region is intended for a few expected variants, do adopters a favor and create examples exhibiting each one.

---

## Composing Content

Titles, prose, metadata, pricing. An image that packs a powerful punch. No matter the elements you include, a `card` requires thoughtful consideration of media and copy. Unlike primitives you handled yourself, composable components require collaboration with those that know content best.

### Content Varies. Form Conventions Based on Real Content.

An image above text. It’s simple, right? Not always. The _image_’s aspect ratio is pivotal not just for visual harmony, but content production too.

At one client, we analyzed existing inconsistent cards across products. It was a treasure trove of real content. Except: yikes, the aspect ratios of images varied wildly! Some products rocked a 16x9 or 3x2 ratio. Others only squared images. Search presented the gamut, including exceedingly tall portraits.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Illustration of card images of varying aspect ratios',
      caption = 'Variety of aspect ratios encountered in real images spread across existing products',
      class = 'escom-article-figure--break-bleed'
  ) }}

Content experts were understandably fatigued by years of design flip flop. To them, the system was an opportunity to end image size conversation. A standard aspect ratio would not just improve display consistency, but also vastly simplify their vendor requirements and image delivery.

As a result, `card` settled on a 16x9 landscape ratio, augmented by a square alternative. This process also yielded code to solve ratio-specific display on the front-end. As a result, composability led to a `thumbnail`[component](https://comet.discoveryeducation.com/components/thumbnails.html) useful for other components too.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = 'Illustration of a fixed aspect ratio image with contain or cover properties',
      caption = '',
      class = ''
  ) }}

To address legacy content, `card` offered a prop to _contain_ images (using the background-size CSS property) within the 16x9 space. Designers achieved visual grid harmony in search results, while producers adjusted displays per card to address undesirable photograph crops.

_Takeaway_: The more composable a component, the more vital that you incorporate content considerations. Stress test design and builds with real content. Engage those that cope with the content that flows into your components every day. You may become their new best friend.

---

### Too Much Content? Address Wrapping &amp; Truncation

While images dominate a display, copy also plays a critical role in headings, descriptions, and metadata. But it’s a card, not an opus, so copy can’t go wild.

Longer titles and descriptions are bound to wrap once or — if you can stomach it — twice. So design for margins _and_ line height. But if copy lengthens, `card` effectiveness diminishes fast.

- What’s the max length of each copy element?
- What’s the max and min character count we’re comfortable width?

  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '8',
      image_alt = 'Illustration of a card with too much descriptive content',
      caption = '',
      class = ''
  ) }}

Truncation provides an escape hatch, protecting against copy length that we can’t predict. Truncation divides opinion: some clients loathe truncation, while others release a `truncate` utility in a first component batch. Truncate a `card` _title_ or even _subtitle_ or _description_, and you risk damaging context and understanding. In composable components, defer to priorities: truncate a _description_ before _title_, or after three lines instead of two, amid an appearance that sufficiently flexes.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '9',
      image_alt = 'Illustration of a truncated card description',
      caption = 'Truncation results in a shorter, but potentially not preferable, description.',
      class = ''
  ) }}

It’s not just copy wrapping, either. Consider rows of actions like a horizontal button and icon list that could collide when settings get narrow.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '10',
      image_alt = 'Illustration of a wrapping set of card icon actions',
      caption = 'Narrow card width causes a left-aligned button to collide with a right-aligned icon list.',
      class = ''
  ) }}

_Takeaway_: Copy length maximums and truncation appeal to our sense of control over flowed content. As components complexity grows, strengthen editorial opinion and code control on copy length, line measure, and impacts of fluid card width. If you offer utilities, do so as moderation not a crutch.

---

### Not Enough Content? When Image(s) and/or Copy Go Missing

On the other hand, sometimes content is unavailable. Card content often reaches into the depths, plucking this related article or that legacy profile for display. Is your card ready for the absence of a _description_, _metadata_ or even _image_? No _image_, oh, the scandal! What do you do?

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '11',
      image_alt = 'Illustration of a card with no image',
      caption = '',
      class = ''
  ) }}

The most opinionated of us say: Never! Want to use a `card`? Include required elements or don’t bother. Yet, that’s harsh. Often unrealistic. Elegant composable components should bend but not break as the content flows.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '12',
      image_alt = 'Illustration of three cards, one without a description',
      caption = 'Instances with wrapping titles and missing descriptions.',
      class = ''
  ) }}

In the absence of copy, `card` composition relies upon solid stackable space, considerate of the many combinations you may or may not expect.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '13',
      image_alt = 'Illustration of cards, some with an icon and color display rather than an image',
      caption = 'Instances with missing images replaced by background fill &amp; icon to indicate asset type.',
      class = ''
  ) }}

In the absence of image, we’ve got options. You could attractively distinguish types via a flat color, a site’s overlaid identity mark, or even an icon/color combo for type (asset format? activity type? content channel?).

---

## Composing Style

Styling atomic elements is easier (elements require fewer decisions) and harder (those decisions carry foundational impact). However, `card` raises challenges and expands our style choices as elements interact in tight spaces.

### Expand a System’s Visual Language

My experience suggests that components like `card` trigger incremental conversation about system conventions of modular shape and layering. Conversations can steer towards _border-radius_, _shadow_, and subtleties of _background-color_ contrast between the object and canvas below.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '14',
      image_alt = 'Annotation of a card drop shadow and border radius',
      caption = '',
      class = ''
  ) }}

_Takeaway_: A composed component sets a tone for the shape of many designs to come, both in a library and for those working projects. Such decisions bleed into the experience in unimaginable ways both dangerous and delightful.

---

### Style Within and Across Components

A `card` evokes color relationships, beginning with contrast against the canvas below. Some opt for simplicity: only white `card` on a white canvas, no alternative backgrounds, and use other properties like `shadow` for contrast.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '15',
      image_alt = 'Different colored cards on different color backgrounds',
      caption = '',
      class = ''
  ) }}

Richer visual environments solve for [foreground/background combos in light and dark settings](/articles/light-dark). [Discovery Education’s Comet](https://comet.discoveryeducation.com/components/cards.html) system offers many backgrounds, often displayed in concert in a single page. Therefore, the system offered light and dark cards across each by way of mixins and tokens. Such cards create another level of hierarchy: text on component background on canvas background.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '16',
      image_alt = 'A card description on top of a dark background, annotated',
      caption = '',
      class = ''
  ) }}

_Takeaway_: Composability challenges your tolerance for visual complexity. Powerful, opinionated components tempt a system team to solve every combination in hopes of saving collaborator time. But complex, well modeled solutions invoke a higher cost of creation and maintenance. “Just enough” complexity is not always clear cut.

---

### Arranging in Layouts

Separation, often via _margin_, also plays a role. A `card` layout can leverage a `layout_grid` or define its own to arrange many cards in a row or grid. While grid mechanics are straightforward, `card` layout raises more questions:

- How many cards can we have in a single row?
- Do cards rearrange based on responsive considerations?
- Does card width flex fluidly within a fluid grid? If so, how wide or narrow can a card be? Are there responsive rules that adjust elements inside a card?
- Should all cards in a row, or in an entire grid, always be the same height?

  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '17',
      image_alt = 'Cards in a row with an overlaid columnar grid',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

---

## Composing Behavior

The `card`’s primary purpose is as gateway to deeper detail somewhere else. A `card` also elevate subtle interactions, too. The former isn’t up for debate. The latter can lead to contentious discussions about “What’s clickable?”

As an entryway, a `card`’s navigation is simplest when the entire `card` is clickable. In that case, the whole `card` can respond to cursor events like _:hover_ and _:focus_ to trigger an _image_ or block to zoom, _title_ to recolor, and shadow to darken. If a `card` won’t contain more specific interactions, making the entire block afford a single interaction simplifies these concerns.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '18',
      image_alt = 'Cards annotated with a dashed border connoting the HTML box model',
      caption = 'Many elements that can potentially respond to events like click and hover',
      class = ''
  ) }}

On the other hand, a composed component like `card` can include many interactive zones—_title_, _image_, `button`, `icon`, `link`— that impact both markup, style, and behavior. Do your engineer a favor and discuss these during design iteration and handoff, before changing the implementation becomes painful.
