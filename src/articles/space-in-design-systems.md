---
  category : Visual Style
  id : space-in-design-systems
  title : Space in Design Systems
  deck : From Basics to Expanded Concepts to Apply Space with Intent
  title_abbreviation : Space
  author_id : nathan
  date : 2016-09-25
  masthead : true
  layout: article.njk
  tags: ['space', 'design systems', 'visual style']
---
{% import '../_includes/escom.njk' as escom with context %}

I’ve long referred to [Color](/articles/color-in-design-systems), Type and Icons as the “Big 3” of a system’s visual language. All UI components — from [Buttons](/articles/buttons-in-design-systems) on up — are built with them. But I left something out. Space, our final frontier.

### Space Rivals Color

Space is everywhere. CSS uses properties like _padding_, _margin_, and absolute positioning’s _left_, _right_, _top_ and _bottom_ to separate objects. Across five libraries (Bootstrap, Salesforce Lightning, Foundation, a previous project, and a current project), I compared occurrence of these _space_ properties relative to property groups of _color_, _size_, _type_, _layout_ and more.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Bar chart of CSS properties by frequency of use',
      caption = 'Space rivals color in frequency of use within a library’s style rules',
      class = 'escom-article-figure--break-bleed'
  ) }}



After removing effects (“zeroed” values like _:0;_ and reserved terms like _transparent_ or _auto_) where CSS already offers us a system for decisions, _space_ rules appeared more than anything except _color_. Nothing else — not _type_, _size_, _layout_ — was even close. There’s so much spatial complexity built into our libraries, let alone our products!

### Space Divides Us

Space epitomizes the “I design this way, you build that way” gap between design and dev. We’ve long lamented the red-lined specs sprinkled over our designs. It never feels worth it. Yet they persist, uninformed by our product’s finished material: HTML’s box model.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Card annotated as a box model for spacing',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}



Costs are huge: annotating, translating, discussing, visually scrubbing during QA. All that work … for something still not good enough. Thus space exacts an emotional toll, too.

### Space Concepts Are Primitive

We could weave more intentional spatial concepts through design, code, and conversation. But we don’t. We just use T-shirt sizes and call it a day. We can do better. We can replace red-lined, red-faced rage to inset, squish, stretch, and stack our way towards a future of spatial clarity.

With that in mind, here’s fundamentals, an expanded vocabulary, and further experiences I’ve had when applying space to systems work.

* * *

## Space Fundamentals

### Grid ≠ Space. Grid is a Component, Using Space.

Grids are rich with spatial decisions for columns, gutters, outer margins, and responsive nuance.Teams tackle grids early so users can easily make a page. Unfortunately, that’s often when spatial conversations stop.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Grid of margins and gutters',
      caption = 'Grid conventions for margin (blue) and gutter (lime green)',
      class = 'escom-article-figure--break-bleed'
  ) }}



A grid isn’t a complete spatial system. A grid is a component that _uses_ space, just like every other component. A grid feels different. It’s invisible, comes early, and only does space. But there’s more to space than grid.

_Takeaway_: Introduce spatial convention with a grid, but don’t stop there. Align a grid’s margins, gutters, and column values with deeper spatial concepts woven through an entire component library.

* * *

### Set a Memorable Base Number & Expectations

Teams setup a memorable, even magical base number to ground all other spatial values. Some teams prefer base 10, because of how we count (due to our ten fingers, by the way). I’ve even seen a team use a base 6 — with helpful factors of 2 and 3 — to make way for an uber-flexible array of 3s, 4s, 6s, 8s, 9s, 12s, 15s, 16s, 18s, 21s, 24s, 32s, and more. Stop the madness!


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Spacing system, with base 6',
      caption = 'A set of spacing options, based on 6 but supplying any multiple of 3s &amp; 2s. Really? All these options?',
      class = 'escom-article-figure--break-bleed'
  ) }}



Most systems I’ve worked use 16. It’s a good default font size. It’s a factor of all screen resolutions (320, 768, 1024). And it provides memorable multiples greater (32, 64, …) and factors less (8, 4, 2) than where it starts.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Spacing system, with base 16',
      caption = 'A set of more limited spatial options, based on 16',
      class = 'escom-article-figure--break-bleed'
  ) }}



_Takeaway_: Ground your spatial system’s range with a memorable base number, and limit expectations on how it’s used.

* * *

### Scale Options Nonlinearly

With an established base, teams can still slip into random steps (12, 14, 18, 22, 24, 28, 30, 32, …). To prevent that, others use a linear scale (4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, …) where each step is a fixed increment. To me, either result is unpredictably used, offering too many choices too close together. When do I use 24 or 28? I dunno.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = 'Space chart of consistent steps every four pixels',
      caption = 'Linear progression from 4 to 32. Really, you need all these options?',
      class = ''
  ) }}



An alternative is non-linear. Options include the [golden ratio](https://en.wikipedia.org/wiki/Golden_ratio), [modular scale](http://zurb.com/word/modular-scale), or the similar [geometric progression](https://en.wikipedia.org/wiki/Geometric_progression) that could double each step. Starting from the base, we’ll go in both directions to stops smaller (16, 8, 4, 2) and larger (16, 32, 64, and… that’s about it) on the scale.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '8',
      image_alt = 'Space chart of stops increasing geometrically',
      caption = 'Geometric progression, doubling each step. %s represent proportional use in our library.',
      class = ''
  ) }}



_Takeaway_: Consider a geometric progression or something similarly nonlinear. You might experience occasional tensions to add a 24 between 16 and 32. However, in my experience, such moments are rare and rarely justify breaking the simple system.

* * *

### Name Each Step for Memorable, Accurate Reuse

I love Gmail’s Compact, Cozy, Comfortable space toggle. So when we built our space system, I suggested we use those labels in our work. Immediately, a teammate challenged me: “What do we call other steps?” My spartan, teeny, and luxurious options didn’t pass muster.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '9',
      image_alt = 'Space chart illustratign naming options per stop on the scale',
      caption = 'A descriptive label for each stop? Be careful.',
      class = ''
  ) }}



So we did what we always do: use a t-shirt size scale. Medium corresponds to default and S, XS, L, XL and — if necessary — XXS and XXL are other options. It’s what most libraries (Bootstrap, Lightning, etc) do.

_Takeaway_: Name space options simply, using a scale like t-shirt sizes to create a language people can remember and apply accurately. If you try more descriptive labels, be prepared for teammates to respond “Small, medium, large, please.”

* * *

I’ve reviewed many libraries and talked with many designers. Simple conventions of base numbers and a named scale are where conversations usually end. Even though these few options are simple, using space still felt so…random. I needed more.

* * *

## Extending a Vocabulary for Space

In reviewing our emerging work, there aren’t many distinct intents for applying space. For example, let’s inspect my favorite component: the card.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '10',
      image_alt = 'Card with image, title, description, tags and button',
      caption = '',
      class = ''
  ) }}



As a front-end developer, I envision all the boxes of elements that fit elements together.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '11',
      image_alt = 'Same card, with overlaid box model as dashed lines',
      caption = '',
      class = ''
  ) }}



The card provides a useful illustration of many spatial concept we use: insetting content from an edge, varying an inset’s shape, spacing items inline, and stacking items _within_ and _between_ a component.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '12',
      image_alt = 'Same card with annotated space concepts of inset, stack and more',
      caption = '',
      class = ''
  ) }}



These concepts — inset, inset squish, inset stretch, stack, inline, and grid — cover the vast majority of our library’s CSS rules for space: _padding_, _margin_, _left_, _right_, _top_, and _bottom_. These concepts also enhance how each atomic is self-contained, improving [composability](https://en.wikipedia.org/wiki/Composability).

* * *

### Concept 1: (Square) Inset

An inset offers indents content on all four sides like the matte of the framed photo on a wall. It’s use is widespread, across many components at varying sizes, whether our 3-Up module and block messages medium feel, extra compact pills, or spacious footers and mastheads.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '13',
      image_alt = 'Inset spacing overlaid on card, message, icon and tag',
      caption = '',
      class = ''
  ) }}



The default is also a useful starting point for mobile first design, expanding to large at a relevant viewport width like 768px.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '14',
      image_alt = 'Inset spacing overlaid on alerts',
      caption = '',
      class = ''
  ) }}


* * *

### Concept 2: Squish Inset

A squished inset reduces space top and bottom, in our case by 50%. While less common than its squared counterpart, a squish occurred frequently in elements (like a button) and cell-like containers like a data table or list item.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '15',
      image_alt = '',
      caption = 'Squished inset in buttons, data table cells, and list group items',
      class = ''
  ) }}


* * *

### Concept 3: Stretch Inset

Contrasted with a button or pill’s squish, we found ourselves vertically stretching the insets of textboxes, textareas, and other form elements.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '16',
      image_alt = 'Stretched inset applied to text input and textarea',
      caption = '',
      class = ''
  ) }}


* * *

### Concept 4: Stack

With all due respect to horizontally scrolled UI, the overwhelming majority scroll vertically. And that means one thing: we stack things. We stack message on heading on data table. We stack modules in rails. We stack copy, pills & toolbars, all in a card, each in a grid. Heck, infinite scroll means infinite stack! We stack, stack, stack.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '17',
      image_alt = 'Stacked spacing example, applied to a card and text inputs and their labels',
      caption = '',
      class = ''
  ) }}


* * *

### Concept 5: Inline

We also arrange objects inline, wrapping as they flow like text from the left or right. Such objects — pills, tags, breadcrumbs, and more — may stand alone or stack and mingle with other objects.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '18',
      image_alt = 'Inline spacing annotated to tags, breadcrumbs and footer links',
      caption = '',
      class = ''
  ) }}


* * *

### Concept 6: Grid

Ah, save the grid for last? As spacing stabilizes, we find ourselves revisiting grid margins and gutters, aligning these spaces with our magical starting point and other uses.

* * *

So, as applied to a Card component, your styled padding and margin may look something like:


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '19',
      image_alt = 'Notional application of insets, stacks, and inlines (or generic spacers — ack!) onto a Card',
      caption = 'Notional application of insets, stacks, and inlines (or generic spacers — ack!) onto a Card',
      class = 'escom-article-figure--break-bleed'
  ) }}


* * *

## What We Learned

Using space concepts requires us to adapt to something new. On my team, it took a day for light skepticism to give way to embracing the new model.

### Teach a System of Space Visually

Most collaborators can’t _see_ space, a primary reason it’s so arbitrarily applied. But now we’ve got a system: a limited number of concepts, each offering a limited range of options.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '20',
      image_alt = 'Space concepts in a dense diagram',
      caption = 'A visual reference, akin to a cheatsheet, of spatial concepts',
      class = ''
  ) }}



_Takeaway_: Teach your spatial concepts using a tight doc diagram or cheat sheet. Such references quicken how we grasp, apply, and sustain the concepts through design and code.

* * *

### Offer Simple Helpers, and Monitor Use

Don’t be foolish. These six models don’t solve everything. We still adjusted a _margin-bottom_ here and _left_ there from time to time. So, there’s justification for following more intentional space options with more generic alternatives (like _$space-m_).

_Takeaway_: Provide generic options, use them sparingly, and expect product teams to use them. When they arise in a critique or pull request, educate teammates on more specific concepts like _inset_ or _stack_.

* * *

### Avoid Variable Names with Padding or Margin

When you introduce something more complicated, others justifiably advocate for something familiar, like “Why can’t we use _padding_ and _margin_ in our variable names?” In this case, 2+ space concepts using padding, and those concepts can be applied via _left_ and _right_ properties too. _margin_ is used to stack, grid, and space inline. Plus, how about non-web platforms that don’t use HTML?

_Takeaway_: Tease apart concepts from property names. They are many to one and limit reuse to a single platform.

* * *

### Solve Collisions like Line Height Systematically

Simple inset _padding_ and stack _margin_ rules collided with a long-known spatial adversary: _line-height_. This interaction increments space unpredictably, adding a pixel above and below our simpler _inset-default_ of 16px.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '21',
      image_alt = 'Comparative example of a card design before and after applying a line height adjustment',
      caption = '',
      class = ''
  ) }}



However, we followed an idea’s spark (@kevinmpowell’s “Let’s negative margin space using pseudo elements! But how much?”) with some math (I can use my college degree!). The result was a [mixin formula combining type size and line-height to collapse space above and below colliding objects](/articles/cropping-away-negative-impacts-of-line-height).

_Takeaway_: Don’t give up on systematic clarity because of exceptions. Try to solve them. If you can overcome such nuances, even with a bit of CSS trickery, you can persist a simpler concept everyone can stick to.

* * *

### Use Spatial Concepts to Dial Density

With concepts like inset, stack, and grid, you can tune the dials of density with aplomb. Search a repository, find _inset_s and _stack_s of interest, and extend or override those rules to fine tune display density.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '22',
      image_alt = 'Comparative example of spacing with looser and denser spacing applied using the same model',
      caption = 'On the left, default spacing. On the right, tuning by increasing just the inset by 50%.',
      class = ''
  ) }}



_Takeaway_: You can tune spatial density even with a barely-beyond primitive set of options. Without them, density control is a dream. With them, you can gradually build towards a powerful engine to find, adjust, and tune space with great intent and less risk.

