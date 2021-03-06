---
  category : Releases
  title : Dealing with Dependencies in Design Systems
  deck : Decomposing Features to Master Change Up the Chain
  title_abbreviation : Dependencies
  author_id : nathan
  date : 2018-10-03
  masthead : true
  layout : article.njk
  tags : []
---

{% import '../_includes/escom.njk' as escom with context %}

Within a component library, what component has the most dependents (other components in the library that include it)?

“Button!” is a knee-jerk response. Good guess! Buttons are reused heavily by many other components. "How about paragraph?" someone suggests. Not exactly. Paragraph is usually reused as a style, not a component. I pause, then reveal "Would you believe... icon?" Ahhh, of course, icon.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Diagram of many components depending on an icon',
      caption = 'Components that depend on the icon component',
      class = ''
  ) }}

Many, many components depend on `icon`: `checkbox`, `button`, `select`, `alert`, `list group`, and so many others. Even a simple, atomic `button` can include _two_ icons, one to the left and one to the right! Hopefully `icon` stabilizes early, and doesn’t change often. But when it does? All those dependent components must change too.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Diagram of a card component depending on a button, and both depend on icon',
      caption = '',
      class = ''
  ) }}

Compositional depth isn’t limited to two levels, and components don’t exist only on one prescribed level, anyway. A `card` can depend on a `button`, and both of them can depend on `icon`. Effective system teams understand this and cope with change across this hierarchical chain of dependencies.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Bar chart of dependent counts, including icon with 62',
      caption = '(Some of?) <a href="https://atlaskit.atlassian.com/packages" rel="nofollow noopener" target="_blank">Atlaskit’s component packages</a> with the highest number of dependents.',
      class = ''
  ) }}

Atlassian’s AtlasKit exposes dependent relationships visibly in NPM. Their published components reveal `icon`'s [dominance of 62 dependents](https://www.npmjs.com/package/@atlaskit/icon) that exceeds `button`'s [42](https://www.npmjs.com/package/@atlaskit/button), `avatar`'s [19](https://www.npmjs.com/package/@atlaskit/avatar), and `modal`'s [15](https://www.npmjs.com/package/@atlaskit/modal-dialog).

Composability made concrete exposes the dependency chain that a team must maintain as a library changes over time. As systems mature, teams build, trace, and update components as change ripple up through the hierarchy to keep their library outputs in sync as much as possible.

---

## Dependencies _Inside_ a Library

So many of our components are built using other, more primitive components in the library. Take, for example, a `menu`.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Diagram of menu depends on list group and popover, which depends on tooltip',
      caption = '',
      class = ''
  ) }}

Compositionally, a `menu` is a `popover` with a `list group` inside. The `popover` is `tooltip` with a flexible content area, reusing `tooltip`'s collision detection, directional notch, and layered appearance. Depending on how you architect your system, `menu` could depend on both `list-group` and `popover`, which might be a sibling of or dependent on `tooltip`.

_Takeaway_: Designers and developers level up system acumen by recognizing, unwinding, and delivering features with such compositional dependencies. Lessons learned decomposing this chain cost us sweat, tears, and scars, but are what earn our badges as “system thinkers.”

---

### Recognize Shared Styles and Behaviors as Implied Dependencies

Component-by-component dependencies should be visible and easy to trace. I _see_ an `icon` in the `button`. Other dependencies are implicit, especially styles and sometimes behaviors.

For example, a `tooltip` exhibits many behaviors relevant to other layered components like `popover`, `menu`, `modal`, and `dialog`. These include states (opening and closing), animation (how it opens and closes), and [collision detection](https://css-tricks.com/collision-detection/) (how it adjusts location based on proximity to a viewport's edge).

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Diagram of shared visual properties and displays across components',
      caption = 'Shared styles possibly limited to a subset of “layered” components',
      class = ''
  ) }}

Similarly, a `tooltip` usually imbues a shadow (separating it from content below), notch (connecting it with a trigger), elevation (within a page's z-index stack) and usually rounded shaped (produced by a border-radius). Such styles can be shared using [design tokens](/articles/tokens-in-design-systems), mixins, and other style tooling. It's guaranteed that other layered components also depend upon these styles.

_Takeaway_: Style and behavior, not just component objects, can propagate throughout a library. Therefore, establish predictable locations for both that can ease tracing from a decision’s root through the dependency chain.

---

### Build Small to Large, But Design Across Levels Too

If so commonly included, we should make icon first. For similarly reasons, buttons is among the first few components we will make. For the next layer of components, that order isn’t so clear. As we consider each, we decompose it into parts and gauge if some parts need to be delivered primitively first.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Diagram of Header, then Module Container, then Accordion component',
      caption = '',
      class = ''
  ) }}

At Morningstar, the team delivers dependent components in sequence. For example, the team first delivered [Header](https://designsystem.morningstar.com/components/headers.html) across many sized levels. Next, the team released a [Module Container](https://designsystem.morningstar.com/components/module-containers.html) for layouts with many content types. Finally, the team extended those features with an [Accordion](https://designsystem.morningstar.com/components/accordions.html).

As Accordion took shape, the team had to reconsider how Header and Module Container were built. While they avoided [breaking changes](/articles/visual-breaking-change-in-design-systems), deploying Accordion required deprecating the original Module Container in favor of an adjusted version.

_Takeaway_: Order what you build from small (like `tooltip`) to large (like `menu`). As you do so, create opportunities to compose examples of small things in larger things to stress-test how the chain works.

---

### Tracing How Change Ripples Through Dependents

You release `icon` first, and then other components that depend on it later. Then, `icon` adds minor features or suffers a [breaking change](http://View%20story). If you update `icon`, you can’t stop there. You must ripple that change through all of `icon`’s dependent in the library too.

{{ escom.pull_quote(
      quote = 'If we upgrade and break a component, we have to go through and fix all the dependent components.',
      attribution = "Jony Cheung, Software Engineering Manager, Atlassian’s Atlaskit",
      class = 'escom-pull-quote--light'
  ) }}

Developers and designers share this challenge. For code, some may start with a search through the `src` directory for instances. More sophisticated tooling enables teams to traces the repository in intelligent ways.

{{ escom.pull_quote(
      quote = 'We run a script to highlight where dependencies exist. That said, our team has been around long enough to be so familiar with the library to not need to use it.',
      attribution = 'Rowan Manning, Developer of FT’s Origami',
      class = 'escom-pull-quote--light'
  ) }}

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = 'Interface display of matched button instances within a design file',
      caption = 'Symbol Instance Locator results locating instances of Primary Button',
      class = ''
  ) }}

For designers, tracing through a Sketch file of library assets can be a chore. Imagine changing `button` spacing, or revising your interactive blue token. So many painstaking adjustments! Fortunately, Sketch plug-ins like [Symbol Instance Locator](https://github.com/sonburn/symbol-instance-locator) and [Find-all-instances-of-symbol](https://github.com/nmwoods1/Sketch---Find-all-instances-of-symbol) enable you to find symbols and instances across artboards and jump to their location.

---

### Automate Versioning, Warnings, and Other Tooling

As package management capabilities improve, teams improve how they cope and document a chain of impacted features. Atlassian’s AtlasKit release tool displays impacted dependencies and prompts authors to designate version increment level (breaking, minor, fix) for each one.

{{ escom.pull_quote(
      quote = 'Our release wizard provides a prompt identifying dependent components, indicating that they too will increment a version.',
      attribution = 'Jony Cheung, Software Engineering Manager, Atlassian’s Atlaskit',
      class = 'escom-pull-quote--light'
  ) }}

A team must decide version type for each impacted feature in the chain. Breaking `icon` means a major version increment. However, that doesn’t imply that `button`, `list group`, and `alert` also all incur a major increment. To some, it may simply be a patch increment to consume the new `icon` version.

Teams must also weed out inconsistent version dependencies within a catalog. Financial Time’s Origami errors when conflict occurs, like a [compilation resulting in multiple versions](https://www.ft.com/__origami/service/build/v2/#dependency-conflicts) of the same module being included.

`Cannot complete build: conflicting dependencies exist.o-colors:- Required at version 1.7 by o-nav- Required at version 1.9 by o-cookiewarn`

Wouldn’t it be nice if tools like Sketch could automate detection of old and new text and layer styles across a catalog? Yes, yes it would.

_Takeaway_: Establish moments in a release process to check and require authors to confirm and communicate change chained across the library.

---

## Dependencies _Across_ System Outputs

Most of our time as a system team is spent discussing the composible intricacies of the components we build. However, dependencies also span across the high-level outputs we deliver, from demo page types to the documentation and tokens too.

### Beyond Just Components: Example Compositions and Page Types

Many teams offer sample page types composed with many components composed together.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '8',
      image_alt = 'A responsive web page displayed in narrow and wide settings',
      caption = 'Discovery Education Comet’s page example, demoing a Product Bar component’s responsiveness when composed with other components.',
      class = 'escom-article-figure--break-bleed'
  ) }}

For example, Discovery Education’s Comet design system provides a link on the [Product Bar](https://comet.discoveryeducation.com/components/product-bar.html) component page to demo the component composed along with a [nav](https://comet.discoveryeducation.com/components/page-shell.html) on the left, a [footer](https://comet.discoveryeducation.com/components/footer.html) at the bottom, and content like [cards](https://comet.discoveryeducation.com/components/cards.html) in rows.

When releasing a new version of the library, system teams themselves must cope with the cascading changes beyond just the component library. The examples aren’t dependencies of other teams. But they are essential demos, starting points, and even fertile ground for testing whether a component works as expected. For testing, [Morningstar’s form compositions](https://designsystem.morningstar.com/test/components/forms-composed.html) reveals impacts in composed dependencies by signaling failures in automated visual regression testing.

_Takeaway_: Arranging components into compositions is a great way to stress test the library, yet it comes with a production and maintenance cost. Justify that cost by fortifying system quality through manual or automated tests that trace the impacts of dependencies.

---

### Chained System Repositories Release in Sequence

Opinions are as varied as there are system teams, but some choose to separate high-level system concerns. For example, at EightShapes we’ll often separate UI component code for the library from design tokens, documentation content and templating, documentation components, and even build tools across separate chained repositories (refer to [ESDS Build](https://github.com/EightShapes/esds-build)).

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '9',
      image_alt = 'Diagram of nested repository dependencies',
      caption = 'Dependency chain for some design system repository setups, from tooling to documentation site',
      class = ''
  ) }}

This suggests releases must be coordinated across and published sequentially through that dependency chain. First, build tooling, then tokens, library, doc components, and ultimately the documentation site itself. Other teams like Shopify sequence releases similarly:

{{ escom.pull_quote(
      quote = 'Tokens, then React, UI Kit, then Doc Site for changed links to those + release docs',
      attribution = 'Kaelig Deloumeau-Prigent, Developer, Shopify’s Polaris',
      class = 'escom-pull-quote--light'
  ) }}

A separated token dependency affords the flexibility to more quickly publish changes to a visual foundation prior to releasing component library outputs. However, that separation is _more useful_ for token adopters _avoiding_ your component library code and potentially just taking advantage of design tokens, sketch assets, doc or all three together.

_Takeaway_: Do your best to synchronize system assets. While some assets (like documentation components) may rarely change, others — particularly design tokens, UI component code, Sketch assets, and a documentation site—can often change simultaneously from release to release.

---

### On Frameworks and Third-Party Dependencies

This post focused on dependencies _within_ a system team’s features. However, it’s worth recognizing two external dependencies that have impacted my system teams more than most: frameworks and third-party scripts.

Frameworks impact both engineers and designers. When coding components compliant to a JavaScript framework like Vue, Angular, or React, it can be an extraordinary cost to upgrade a library from one version to another. One team starting a library in early 2018 was extra flummoxed: build for React v15, v16, or… both? Picking the correct option is essential.

The same goes for designers with fast changing products like Sketch. Count me among the elated to hear about [Sketch 52’s Text and Layer Style overrides](https://blog.sketchapp.com/dark-mode-data-a-brand-new-look-and-more-in-sketch-52-e462c8a64d00). Count me also among the freaked out, since a month prior I’d built a library using cruder styling methods that were “state of the art” before. There’s now a huge cloud hanging over my increasing design debt strewn across system assets as I continue making edits in the old way.

System teams have control over how often they upgrade their dependency. But they don’t control how often the dependency gets upgraded. More than one system team I’ve found depends heavily on [Select2](https://select2.org/getting-started/basic-usage) for quickly implementing combo boxes, yet laments it’s slow growth and incomplete accessibility configurations. Every six month planning session diverts into the “Should we just build this ourselves? When will it change? Should we ditch it?” 10 minute conversation before a facilitator urges the team to move on.

_Takeaway_: Integrate third-party and framework dependencies that you are comfortable with depending on _at least_ the current version offered. Avoid avoidable dependencies if you can, yet be cautious of building things yourself that the world struggles to do as community.

---

**#4.** [**Visual Breaking Change**](/articles/visual-breaking-change-in-design-systems) ← Previous | Next → **#6. Step-by-Step**
