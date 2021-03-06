---
  category : Documentation
  title : Component Examples
  deck : Showcase your component’s quality, depth and versatility
  title_abbreviation : Examples
  author_id : nathan
  date : 2018-03-24
  masthead : true
  layout : article.njk
  tags : []
---

{% import '../_includes/escom.njk' as escom with context %}

Visual examples are the most essential element of effective component doc. How do you best render, arrange, label, and order each one to with effective content (but not embedded guidelines!) to enable quick use and experimentation? There are many questions to answer as you set about composing examples spread widely across a library. What follows are 15 tips of how to best showcase components in your system documentation.

---

## #1. Lead by Example

Show don’t tell. Seeing is believing. That’s why every component (even the invisible ones, diagrammed!) should lead by example.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Example of a component with list items',
      caption = 'A component example, either as static screenshot or rendered via code.',
      class = ''
  ) }}

The visualized example is _the_ most effective teaching moment on the page. Even better is the visualized example paired with code needed to render it.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Example paired with a code snippet',
      caption = 'Example/code pair, rendered via templates using library code',
      class = ''
  ) }}

As teams tool up, it’s easy to be seduced by the alluring **component explorer** , adding a control panel beside the example/code pair. Revealing many (but not necessarily all) properties, component explorers invite experimentation and teach a ton in a tight space. However, that power comes at a cost: build the UI, build the logic layer, and implement per component.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Example, code snippet, and control panel displayed together',
      caption = 'Component explorer panel (on the right) beside the example/code pair. For inspiration: <a href="https://www.predix-ui.com/#/elements/px-heatmap-grid" rel="noopener nofollow" target="_blank">
  <strong>GE Predix</strong>
</a> and <a href="https://designsystem.morningstar.com/charts/horizontal-bar.html" rel="noopener nofollow" target="_blank">
  <strong>Morningstar</strong>
</a>',
      class = ''
  ) }}

For a design-only library, paired code— let alone an explorer — is impossible. Instead, an **image** will have to do. I’ve never heard anyone disparage [Google Material](http://material.google.com/)’s design spec, which is full of images and inline demos.

If limited to images, consider depicting the component’s elemental **anatomy**. Such imagery expose the need for a visual language of annotations (often, we’ll use orange) distinct from the component’s themselves, and a template for producing consistently sized and styled images en masse.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Component anatomy annotated as an illustration',
      caption = 'Image annotating a component’s anatomy, saved as PNG as content for documentation site',
      class = ''
  ) }}

_Takeaway_: For libraries with code, enable live examples pairing picture and code early in your process. Component explorers are alluring, but setup can painstaking and distracting to a team early on. Consider saving explorer for a splashy followup to your `1.0.0`.

If relying on images, stabilize a visual language for annotations — color, type, image size, image scale — as you document a first few components.

---

## #2. Sensitize the Reader

Documenting patterns has long relied upon setting context chiefly through a visual _sensitizing example_. Christopher Alexander’s [_A Pattern Language_](https://en.wikipedia.org/wiki/A_Pattern_Language) (1977) does so with each and every pattern described. The digital design community reinforced this as [UX patterns arose in the mid-to-late 2000s](/articles/patterns-components).

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Photograph of a book',
      caption = 'Christopher Alexander’s “A Pattern Language (1977)”: Every pattern title is followed by a picture.',
      class = 'escom-article-figure--break-bleed'
  ) }}

For UI components, the best sensitizing example depends on component. For atomic primitives, pick the most oft-used case such as a primary button or generic input. For components composed of many elements, the choice is less clear. Do you opt for…

- the most **essential** , with only required elements?
- the most **common** , mixing required and popular optional elements?
- the most **exhaustive** , combining as many useful elements as possible?

  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Samples of a list group with increasing elements per row',
      caption = 'Sensitizing examples exhibiting element variety, from a simplistic <strong>Essential</strong> to rich <strong>Exhaustive</strong>.',
      class = 'escom-article-figure--break-bleed'
  ) }}

I love the highly versatile List Group component. But a glance at the essential — “Um, a stack of labels, linked?” — in unconvincing. The exhaustive case? Exhaustingly busy, unrealistic, even repellant. In this case, the best sensitizing example showcases elements like an heading, identifying icons, and maybe actions per row.

_Takeaway_: The best sensitizing example is obvious for primitives. Yet, for composed components, it’s a delicate balance: exhaustive examples can be too complex and not what users typically encounter. yet plain essentials may be obscure it’s power and adaptability.

---

## #3. Order Examples by Type or Composibility

With a tone set by the sensitizing example, how do you order what’s left? This, too, depends on component type. Variants are clear among primitives like buttons: Primary, Secondary, and then Flat ([and then Ghost? Are you sure?](/articles/buttons-in-design-systems)).

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = 'Multiple variation examples stacked vertically',
      caption = 'Ordering atomic component by variant priority',
      class = ''
  ) }}

For composed components, it may progress from a default with required elements to successive examples overlaying each additional element. For example, you may express list group options with successive examples illustrating actions, headings, subheadings, metadata, badges, and avatars.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '8',
      image_alt = 'List example, default',
      caption = '',
      class = ''
  ) }}

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '9',
      image_alt = 'List example, with a group header',
      caption = '',
      class = ''
  ) }}

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '10',
      image_alt = 'List example, with an icon paired with the label',
      caption = '',
      class = ''
  ) }}

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '11',
      image_alt = 'List example, with an action per row',
      caption = '',
      class = ''
  ) }}

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '12',
      image_alt = 'List example, with metadata for some rows',
      caption = '',
      class = ''
  ) }}

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '13',
      image_alt = 'List example, with a badge of unread items in one row',
      caption = 'Examples ordered property-by-property, associating guidelines with each along the way.',
      class = ''
  ) }}

This may maps to Props or CSS modifiers, but don’t get stuck thinking this is mapping is one-to-one. I’ve seen teams seek to shoehorn the succession of examples to the list of Props. It takes a few components to acknowledge that there’s more to teach via examples than _just_ Props by varying states, content, behaviors, and other cases.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '14',
      image_alt = 'Local navigation of different components, positioning theming and sizing at the end',
      caption = '',
      class = ''
  ) }}

As your library grows, some properties may be repeated across many components, such as sizing (small, medium and large) or theming concerns. Consider including those examples last as a convention that recurring controls are explained after features unique to that component.

---

## #4. Limit Hierarchy

Back in the mid-2000s, I contributed to the Sun.com component library that contained 1000s of variations. The team classified components hierarchically: Category (`S`idebar) \> Component (`03` Filter) \> Variation (`1` Default) \> Example (`1`). Each item had a unique ID (such as `S03v1x1`), visible in doc, classnames and HTML comments still visible in [inspected source of oracle.com](https://blogs.oracle.com/bigdata/data-lake-database-data-warehouse-difference) today. (By the way, do you expect _your_ library to last _that_ long?)

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '15',
      image_alt = 'Slide screenshot from an old presentation',
      caption = 'Slide from my 2010 design systems workshop, based on Sun.com’s component library convention.',
      class = ''
  ) }}

In the early 2010s, such rigorous hierarchy gave way — usually — to a flat example list per component. For simple components with a few examples, flat is fine. Armed with a good sensitizing example, users scroll to scan and find the closest approximation of what they need.

Does this section actually _need_ a label? Maybe a “Variations” heading in local nav, though you can omit it from page content.

_Takeaway_: Don’t overlay a deep hierarchy couched in vague, misinterpreted levels unless forced to. You _could_ establish one, perhaps aligned with Sketch symbols or Props that necessitate hierarchy. But welcome hierarchy in a design tool’s UI muddle understanding a web page’s documentation. Instead, keep it flat and rely on the scrolling page to reveal variations progressively so customers can find what they need.

---

## #5. Don’t Go Wild with Combinations

As component use — and testing — increases in sophistication, it’s evident that the more you can vary a component’s content and properties, the more possible displays are possible. Got five independent properties each with four possible options? Already, that’s (5•5•5•5=) 625 possible combinations, without even considering variable content!

While there are approaches to avoid needing to test every possible combination, don’t feel compelled to show every combination on the doc page. It’d overwhelm the reader and vastly reduce the relevance of each case.

_Takeaway_: Save combinatoric displays for testing environments. For doc, display to a progression of orderly examples to show how it works. Got a zany example? Go for it. But don’t strive to depict every possible instance.

---

## #6. Reveal States Without Requiring Interaction

Many components — especially atomic ones — exhibit states as a user interacts. Links, buttons, inputs, and more all exhibit varied displays on `hover`, `active`, `focus`, `click`, and `disabled`.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '16',
      image_alt = 'Button examples per state, annotated',
      caption = '<strong>DO </strong>Stack states, one by one',
      class = ''
  ) }}

So display each state visibly, labeled and adjacent to one another, without requiring the reader to interact with the page. This usually means a little extra effort within the code, such as an extra documentation-only CSS class like `.system__button--doc-hover`.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '17',
      image_alt = 'Button examples per state, not annotated',
      caption = '<strong>DON’T</strong> Arrange examples by state in a single example',
      class = ''
  ) }}

Many libraries choose to take a shortcut and display states horizontally adjacent to one another. While more compact, the practice relies on components that are narrow and have just one label, embedding the annotation (“Active”) inside the art. The practice doesn’t scale.

_Takeaway_: Documentation shouldn’t be a treasure hunt. Don’t make readers work hard to see what’s important. Instead, show an example’s many states by default on the page _without_ requiring interaction.

---

## #7. Prove Theming via Live Demos

If components can be placed on different canvases (usually, light to dark) or vary based on themes (usually, distinct brand identities), readers will want to quickly compare how the component appears in each circumstance.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '18',
      image_alt = 'Predix dark mode switcher',
      caption = '<a href="https://www.predix-ui.com/" rel="noopener nofollow" target="_blank">
  <strong>Predix Design System</strong>
</a> light/dark toggle in the page’s upper right swaps the whole page.',
      class = ''
  ) }}

GE’s Predix documentation fully embraces the reversal of foreground / background colors, providing a toggle to the “light” and “dark” theme in the viewport’s upper corner.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '19',
      image_alt = 'Button example, on a light and dark background',
      caption = 'Theming toggle adjacent to example. Inspiration: <a href="https://designsystem.morningstar.com/components/buttons.html" rel="noopener nofollow" target="_blank">
  <strong>Morningstar</strong>
</a>.',
      class = ''
  ) }}

You can localizes this toggle to the component itself, insulating the display shift from the rest of the page and exposing more than a binary option.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '20',
      image_alt = 'Semantic UI demoing theming within its homepage',
      caption = '<a href="https://semantic-ui.com/" rel="nofollow noopener" target="_blank">
  <strong>Semantic UI’s</strong>
</a> theming proof, toggled right on the homepage. I’m convinced!',
      class = ''
  ) }}

Semantic UI’s proves themability with a menu-driven demo in a row of the homepage. By shifting the style of essential components, prospective adopters are convinced quickly of the library’s potential.

_Takeaway_: Got themable components? Prove it by demonstrating it. Expose it via tools adjacent to it. Empower it with inspectable code that triggers it.

---

## #8. Embed Content, Not Guidelines

So, what content should our examples include? [Dan Brown](https://medium.com/@brownorama) summarized techniques to represent copy in design artifacts the “Representing Data in Wireframes” poster (IA Summit,2005). Avoid _dummy_ (“Homer Simpson”), _symbolic_ (“XXXX XXXXXX”), or _lorem ipsum_ for textual copy.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '21',
      image_alt = 'Content as dummy content such as Homer Simpson',
      caption = '',
      class = ''
  ) }}

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '22',
      image_alt = 'Symbolic content like XXXXX',
      caption = '',
      class = ''
  ) }}

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '23',
      image_alt = 'Lorem ipsum content',
      caption = '<strong>DON’T</strong> use Dummy, Symbolic or Lorem Ipsum content',
      class = ''
  ) }}

Instead, opt for _real_ content (“Mary Smith”) or _labeled_ data (“[Full Name]”).

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '24',
      image_alt = 'Real content',
      caption = '',
      class = ''
  ) }}

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '25',
      image_alt = 'Content labeled by enclosing it in brackets',
      caption = '<strong>DO</strong> Use real or labeled copy within component examples.',
      class = ''
  ) }}

While it may seem tempting to reveal editorial guidelines or data requirements inside examples, it doesn’t scale and muddles design and annotation. The biggest culprit? Buttons with labels: Default, Hover, Active, and Disabled. Better to use a real label consistently like “Save Profile” so that button state displays mirror other, more complicated components.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '26',
      image_alt = 'Example of embedding guidelines in a list component',
      caption = '<strong>DON’T </strong>Embed guidelines into example content',
      class = ''
  ) }}

Those editorial tips for “Key Benefits” feel convenient. But what if your list can’t exceed three bullets? Can I change the title? What about link labels? Imagine: how would you document editorial tips for a button component? The approach breaks down.

_Takeaway_: Avoid the embedded guidance. Keep content real, and fall back to labeled data, especially for conditions where implementers focused on authoring and managing content.

---

## #9. Reveal Layered Items In-Page _and_ In-Context

While most components are visible in the display by default, others require an interaction to trigger the display of relevant content. Modals, popovers, menus, tooltips, off-canvas navigation all come into the page layered above or below or adjacent to content you could already see.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '27',
      image_alt = 'Example omitting a visual demo of a components opened state',
      caption = '<strong>DON’T</strong> <em>Just show code and require the user to open each example individually.</em>',
      class = ''
  ) }}

The easiest path to provide access to these components is adding a trigger in place of where the sample would go. Usually a button or link, it either invokes (akwardly?) the component in the doc page itself or navigates to a separate page’s demonstration. However, that too is a treasure hunt.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '28',
      image_alt = 'Example including a visual demo of a component open state',
      caption = '<strong>DO</strong> Reveal layered content without interaction and offer a trigger of display in context.',
      class = ''
  ) }}

Embedding the layered display into the page’s canvas does require incremental effort. However, it’s essential to reveal the layered content – often via many examples—without pogosticking from one to another.

_Takeaway_: Tool up templating to show layered components in a page’s flow. Readers must easily see it, including variations of features and content, before figuring out how to configure it. Nobody I know wants to hunt and peck, and opening and closing example after example gets tiresome.

---

## #10. Cope with Examples Exceeding Content Width

Many documentation sites display rendered examples in blocks that reach a maximum width between 700px and 1000px. Examples on other sites have no max width, expanding as the page does forever.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '29',
      image_alt = 'Comparing an open and closed state',
      caption = 'Sites like <a href="http://rizzo.lonelyplanet.com/styleguide/ui-components/hero-banner" rel="nofollow noopener" target="_blank">
  <strong>Lonely Planet</strong>
</a>, <a href="https://polaris.shopify.com/components/navigation/tabs#navigation" rel="nofollow noopener" target="_blank">
  <strong>Shopify</strong>
</a> and <a href="http://luci.netapp.com/components/data-tables.html" rel="nofollow noopener" target="_blank">
  <strong>Netapp</strong>
</a> apply a max width, whereas <a href="https://solid.buzzfeed.com/tables.html" rel="nofollow noopener" target="_blank">
  <strong>Buzzfeed</strong>
</a>, <a href="https://vueds.com/example/#navbar" rel="nofollow noopener" target="_blank">
  <strong>Vue</strong>
</a>, <a href="http://carbondesignsystem.com/components/pagination/code" rel="nofollow noopener" target="_blank">
  <strong>IBM Carbon</strong>
</a>, and <a href="https://www.lightningdesignsystem.com/components/cards" rel="nofollow noopener" target="_blank">
  <strong>Salesforce Lightning</strong>
</a> do not.',
      class = ''
  ) }}

Components like horizontal navigation bars and toolbars require more width than 700px or 800px to mimic results users see. Expanding available width creates tensions with competing elements in the overall page layout (usually, navigation on the left and right) as well as excessive [line measure](https://en.wikipedia.org/wiki/Line_length) (characters per line) of content above and below the example.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '30',
      image_alt = 'A demo of overlapping elements when an example lacks sufficient width',
      caption = 'Discovery Education <a href="https://comet.discoveryeducation.com/components/product-bar.html" rel="noopener nofollow" target="_blank">
  <strong>Comet</strong>
</a>’s horizontal Product Bar, displayed in a sometimes too-narrow width.',
      class = ''
  ) }}

If the overall layout constrains width, you can augment rendered code examples with screenshots (Example: [Morningstar](https://designsystem.morningstar.com/components/mastheads.html)) or present components embedded in an `iframe` to scale down a display (Example: [NetApp](http://luci.netapp.com/archives/3_3_2/component.property-bar.html)).

_Takeaway_: If your library has wide components, consider alternatives so that those examples display effectively in the default presentation of the page. Widening the content’s main column — or even having example/code viewers exceed that boundary — is the first option to pursue.

---

## #11. Demonstrate Responsiveness

Some doc sites offer inline responsive viewing by changing available width via a scrubber (Example: [Shopify](https://polaris.shopify.com/components/structure/callout-card#navigation)) or scale examples down and even variations them to tell a responsive story in space available (Example: [NetApp](http://luci.netapp.com/archives/3_3_2/component.property-bar.html)).

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '32',
      image_alt = 'Embedded nav bar responsive examples of varying viewport widths',
      caption = 'NetApp’s <a href="http://luci.netapp.com/archives/3_3_2/component.property-navigation-bar.html" rel="nofollow noopener" target="_blank">
  <strong>LUCI library</strong>
</a> embeds scaled down examples in iFrame viewers.',
      class = ''
  ) }}

_Takeaway_: If you want the oohs and ahhs, this will do it. The UI design can be tricky, however, and the implementation – and managing examples shown therein – can get costly. Some teams choose to pass.

---

## #12. Copy to Clipboard

For code viewers, it’s essential that code is readably pretty, thus our consistent use of [Prism](https://prismjs.com). Beyond that, any self respecting code snippet usually offers a copy-to-clipboard button, ideally using the system’s own tooltip or other indicator to indicate the copy is complete.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '33',
      image_alt = 'Code snippet with a copy to clipboard button',
      caption = '',
      class = ''
  ) }}

---

## #13. Enable Experimentation

The next most common interactions are a link to play with the component in isolation such as Codepen (Example: [Material UI](https://material-ui-next.com/demos/cards/)) as well as direct link to the component code’s source file in a code repository like Github or Bitbucket.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '34',
      image_alt = 'Code snippet with many action buttons',
      caption = 'Actions to experiment on <strong>Codepen</strong> and view code in the system <strong>Github</strong> repo adjacent to <strong>Copy</strong>.',
      class = ''
  ) }}

---

## #14. Offer Code Alternatives

Depending on how it’s used, provide tabs for how to add a component to different settings. For example, an engineer may want vanilla HTML, a template’s macro (for Nunjucks) or JavaScript-based element (for React).

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '35',
      image_alt = 'Code snippet with tabs for HTML, React Web, React Native and Nunjucks',
      caption = '',
      class = ''
  ) }}

For example, Hudl’s Uniform unifies component code across web and native, clearly expressing an intent to unify the experience across all platforms.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '36',
      image_alt = 'Code snippet with tabs for iOS and Android',
      caption = 'Hudl’s <a href="http://uniform.hudl.com/components/toast/code?ios" rel="nofollow noopener" target="_blank">
  <strong>Uniform</strong>
</a>, offering code snippets for the same component across platforms.',
      class = ''
  ) }}

---

## #15. Limit Captured Scrolling within Code Blocks

When it comes to code snippets, beware of scrolling. If code blocks are given a max height, the area _within_ the block scrolls. Readers may find the flip flop of scrolling a page vs scrolling code block disruptive as they experience a page.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '37',
      image_alt = 'Annotation of scrolled code snippets with a more broadly scrolled page',
      caption = '',
      class = ''
  ) }}

If it’s an issue, consider collapsing code by default and providing individual or page-level switches toggle to open it.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '38',
      image_alt = 'Annotation of code toggles for a stack of code snippets',
      caption = '',
      class = ''
  ) }}

_Takeaway_: Tooling up a viewer requires non-trivial feature development, so balance the extra sauce — Codepens, automated direct links, rendered examples across framework types — as needs require.

---

[**#2. Introductions**](/articles/documenting-component-introductions) ← Previous | Next → [**#4. Design Guidelines**](/articles/component-design-guidelines)
