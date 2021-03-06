---
  category : Releases
  title : Versioning Design Systems
  deck : Communicating Change Clearly to People Using Systems
  title_abbreviation : Versioning
  author_id : nathan
  date : 2018-09-17
  masthead : true
  layout : article.njk
  tags : []
---

{% import '../_includes/escom.njk' as escom with context %}

As a system changes, adopters will want to take advantage of what’s new.

{{ escom.bar_quote(
      quote = '“Let’s update the old Card with a new, shiny Card,” they say. Or, dangerously, “Let’s<strong> </strong>put this newer Button in the page with all those older ones.”'
  ) }}

Trouble arises when change is poorly communicated or its impacts ill-defined. Developers compare a proposed design to system code, identify what needs swapped or added, and carefully install or upgrade what’s needed. They are also usually mindful of [breaking change](/articles/visual-breaking-change-in-design-systems) in dependencies.

Are designers as sensitive to changes when working in a tool like Sketch? Not as much. They replace this with that. A new Button goes here, unaware that older buttons are used elsewhere in that or other pages. Designers flow updates swiftly, indicating neither the component’s version nor annotating an upgrade compared to what’s coded today. Friction ensues:

{{ escom.pull_quote(
      quote = 'I add a new system feature to my design. Yet the developer says we can’t use it.',
      attribution = 'Designer on a proudct team',
      class = 'escom-pull-quote--light'
  ) }}

{{ escom.pull_quote(
      quote = 'The designer sprays style and component upgrades across a new feature, completely unaware of the upgrade costs it triggers across our whole app.',
      attribution = 'Developer on the same product team',
      class = 'escom-pull-quote--light'
  ) }}

Designers want the latest. Developers balance tradeoffs of new quality with scale and maintenance. Systems should clean up that conversation.

Identifying **how to version** is simple (use SemVer!). However, identifying what’s versioned —  **by library or by component** —is more challenging. Versioning communicates how things change from launch through **deprecation** and **end-of-life**. This article takes us through that cycle of change across [system outputs](/articles/releasing-design-systems): code, tokens, design assets, and doc.

---

## How to Version? Start with SemVer

Every discussion about versioning design system outputs begins and ends with the industry standard [Semantic Versioning](https://semver.org/) (SemVer).

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Semver diagram of major, minor and patch version numbers',
      caption = '',
      class = ''
  ) }}

SemVer versions in a `MAJOR.MINOR.PATCH` format, incrementing each as a:

- `MAJOR` version for incompatible API changes (that is, something ["breaks"](/articles/visual-breaking-change-in-design-systems)),
- `MINOR` version for adding features that are backwards-compatible, and
- `PATCH` version for backwards-compatible bug fixes.

[Daniel O’Connor](https://medium.com/design-optimizely/how-to-version-your-ui-library-1c7a1b7ee23a), Atlassian’s [AtlasKit](https://atlaskit.atlassian.com/docs/guides/versioning), and [Morningstar’s Design System](https://designsystem.morningstar.com/about/versioning.html) offer helpful deeper examples describing SemVer’s application to system features.

Long an industry standard in versioning code, versioning is increasingly relevant in design tools too. Many system teams apply SemVer to Sketch symbol libraries in software tools like [Abstract](https://www.goabstract.com/) and [Invision DSM](https://www.invisionapp.com/design-system-manager/). You can learn the methodology at [http://www.semver.org](https://semver.org/).

_Takeaway_: Strongly encourage designers to learn SemVer. Not only will it help them communicate with engineers more effectively, but it is increasingly meaningful in designer-to-designer collaboration too. It [changes lives](https://uxplanet.org/how-version-control-changed-my-everyday-life-cc67b0009e3d)!

---

## What to Version? A Library or Features Within

A design system team versions its library as a single, monolithic package or separately per feature, such as component by component.

### Versioning the Library

A design system versioning by library applies the same version number to all system assets simultaneously, such as `1.4.0` applies across all components.

<esds-code-snippet copyable="false" preformatted max-height="none">
  library 1.4.0
  ├─ visual style
  └─ components
      ├─ button
      ├─ button group
      ├─ card
      ├─ checkbox
      ├─ radio button
      └─ ...
</esds-code-snippet>

If _any_ component adds a backwards-compatible feature, then the entire library increments a minor version from `1.4.0` to `1.5.0`. Similarly, if _any_ component has a breaking change, the entire library increments the major number from `1.4.0` to `2.0.0`.

Versioning “by library” is the comment choice for teams delivering vanilla HTML & CSS. Adopters typically integrate markup and style into their app and refer to a library’s collectively compiled CSS, such as `core.css`.

You can’t include a `core.css` from 2 or more versions without CSS conflicts. The only way to do so is if the system supports namespacing CSS files _and_ classes across versions. I’ve not seen a system do that. Instead, they all operate like this: Want button from library version `1.4.0`? Then _every_ component on that page must use library version`1.4.0`. Otherwise, things may break.

### Versioning By Component

Versioning “by component” enables adopting teams to mix and match button version `5.3.1` with form checkbox `3.1.0` and radio `1.1.0` in the same page.

<esds-code-snippet copyable="false" preformatted max-height="none">
  library
    ├─ visual style
    └─ components
        ├─ button 5.3.1
        ├─ button group 2.1.0
        ├─ card 3.7.6
        ├─ checkbox 3.1.0
        ├─ radio button 1.1.0
        └─ ...
</esds-code-snippet>

Adopters need not worry about when each was released, since HTML markup, style and script is encapsulated and won’t conflict with other components types included in the the same page. This may or may not mean you can uses multiple versions of one component simultaneously. “Can I include button’s `1.7.0` in one part of the page along with button `1.2.0` and `2.5.0` elsewhere on the same page?" Depends on how the library works.

Versioning by component is consistent for teams using a [continuous release model](/articles/design-system-release-cadence) and using a JavaScript framework (React, Vue, etc) or delivering web components. They’ll make much smaller changes more modularly more often.

---

## System Versions Over Time

SemVer enables adopters to recognize key moments in a system’s life cycle.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'System versions over months, as major minor and patch',
      caption = 'Rate of system change by version type, over a year and a half',
      class = 'escom-article-figure--break-bleed'
  ) }}

- **Pre-Version 1.0.0** releases (`0.1.0`, `0.2.0`, `0.3.0`, …) reveal an unstable system architecture and feature set. Over the past few years, this period lasts three to six months before a first major release for most teams.
- **First major release.** A launch designated `1.0.0` is hailed stable and dependable. It’s delivered with fanfare, signaling readiness for mass adoption. The `1.x.x` period that follows can last a year or more for systems versioned as libraries, and is shorter when versioning by individual components.
- **Subsequent major releases** increment version to `2.0.0`, `3.0.0`, …. This signals the system's interface broke. Attention and adjustment is needed as a team upgrades.

_Takeaway_: When planning a system, set expectations what version numbers mean. `1.0.0` should be a clear commitment to stable and predictable change.

---

### The Peril of Major’s Perception

A `1.0.0` designation comes with commitment. Freewheeling days of unstable early foundations are behind you.

Unfortunately, those unfamiliar with SemVer misinterpret what it means to go from `1.13.0` to `2.0.0`. There’s a breaking change, but not _necessarily_ new features and/or a costly upgrade afoot. It’s definitely not a marketing ploy to gain attention. But that’s how many perceive it.

A breaking change triggering `2.0.0` could be as simple as changing the `system-btn--primary` class to `system-button--primary`. Or retiring how Modals open using `toggleModal` in favor of `openModal` and `closeModal` instead. Small API changes, spread piecemeal through an adopter's code, could be straightforward to audit and cheap to correct.

[Eric Elliott](https://medium.com/@_ericelliott) describes a [more precise approach](https://medium.com/javascript-scene/software-versions-are-broken-3d2dc0da0783) to describe changes using SemVer with `breaking.feature.fix` labels. I agree, those labels clarify level of change. Neverthless, I’ll stick with a system that works well despite suboptimal labels.

_Takeaway_: A major version is neither a marketing ploy nor a guarantee that major effort awaits. Instead, it’s a signal that a stable architecture has shifted in ways large or small, and adopters should pay attention as they upgrade.

---

## **Bucketing Breaking Changes**

Once a major version like `2.0.0` is released, we'll classify new feature ideas and customer requests as `3.0.0` or `Breaking Change` using JIRA’s Version attribute. As we commit and plan for a `3.0.0` release, we’ll then deprioritize changes that didn’t make the cut to a new`4.0.0` JIRA version.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'JIRA’s Scrum Version panel, mocked up with typical version collections',
      caption = 'JIRA’s Scrum Version panel, mocked up with typical version collections',
      class = 'escom-article-figure--break-bleed'
  ) }}

_Takeaway_: Establish a routine for recording and funneling breaking changes trigger a major version. Isolating these items removes distraction from current work and provides a collection to review as you plan for what’s next.

---

## Deprecation & Ending Life

Deprecation warns that feature use should be discontinued and support will be removed in the future. The system may offer a preferred alternative, or the feature is no longer necessary or in demand.

When deprecating a feature, consider current use:

{{ escom.pull_quote(
      quote = 'We’ll audit product code to find instances where it’s used. If used broadly, then we’ll communicate with those teams prior to making a decision to deprecate.',
      attribution = '<a href="https://twitter.com/rowanmanning" rel="nofollow noopener" target="_blank">Rowan Manning</a>, <a href="https://origami.ft.com/" rel="nofollow noopener" target="_blank">Financial Times</a>',
      class = 'escom-pull-quote--light'
  ) }}

Once a feature is ready for deprecation, follow a well-defined process. [Atlaskit’s versioning doc](https://atlaskit.atlassian.com/docs/guides/versioning#deprecate) outlines a simple process:

1. **Communicate** intent via regular channels. Consider a blog post.
2. Decide on a **timeline**.
3. Add a **notice** to docs.
4. Run **commands** on the repository per package.
5. **Communicate** _one last time_.
6. **Delete** it from the repository!

In deprecating, timing removal is critical. You can’t yank it without warning.

{{ escom.pull_quote(
      quote = 'On our platform, teams builds huge solutions costing millions of dollars and walk away. If we change and they don’t know, then they get really upset. Our message? We’ll give you 18 months to react.',
      attribution = '<a href="https://github.com/brandonferrua" rel="nofollow noopener" target="_blank">Brandon Ferrua</a>, <a href="https://www.lightningdesignsystem.com/" rel="nofollow noopener" target="_blank">Salesforce Lightning</a>',
      class = 'escom-pull-quote--light'
  ) }}

How long is long enough? Salesforce supports a wide base of disconnected teams, so timing is clear and long: 18 months. Origami by Financial Times operates with a tighter developer community, allowing for a compressed period of 3 to 6 months.

A new feature can exist alongside old. Morningstar expanded the Notification component in `1.9.0` with new features, breaking the API in the process. For six months until `2.0.0`, the system offered both a new "enhanced" notification (the default doc page) and a deprecated notification (on a separate page), linking both via an introductory message.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Morningstar Notification pages',
      caption = 'During the 1.x.x period, Morningstar added <a href="https://designsystem.morningstar.com/v/1.14.0/components/notifications.html" rel="nofollow noopener" target="_blank">new Notification</a> favored over a <a href="https://designsystem.morningstar.com/v/1.14.0/components/notifications-deprecated.html" rel="nofollow noopener" target="_blank">deprecated original</a>. Both remained in code and doc until the deprecated version was removed in 2.0.0.',
      class = 'escom-article-figure--break-bleed'
  ) }}

Salesforce Lightning sustained two versions of a [Path component](https://www.lightningdesignsystem.com/components/path/).

{{ escom.pull_quote(
      quote = 'We built v1 Path, then…the whole design changed. Unsurprisingly, the existing API didn’t work with the new bells and whistles. So, we decided to deprecate and remove the old version eventually. No one will use it. They can’t find it, the code’s wrapped in a deprecate mixin, and retired selectors are described in metadata.',
      attribution = 'Brandon Ferrua, Salesforce Lightning',
      class = 'escom-pull-quote--light'
  ) }}

Code practices can also provide notice. The browser console and terminal can issue deprecation warnings, such as Salesforce UX’s [Sass Deprecate](https://github.com/salesforce-ux/sass-deprecate) feature.

As a deprecation period concludes, a system can either remove it or leave it in unsupported. “At no point does the deprecated feature become unavailable. Instead, our commitment to maintain it stops,” Origami’s [Rowan](https://twitter.com/rowanmanning?lang=en) explained.

_Takeaway_: Once you leap past `1.0.0`, establish a predicable time period for deprecating features. Communicate upcoming deprecation across channels (code, doc, design assets, announcements) to your community.

---

## Aligning Versions of Code, Doc, Design, and Tokens

A system’s code is it’s truth. A code’s versions takes their rightful role as the hub against which all other outputs—doc, design, tokens—align.

### ✔︎ Version Doc Separate from Library, But Keep ’em In Sync

Many systems weave code and (code-only) doc into the same files, producing navigable documentation from library’s core style and components. This coupling offers clear efficiencies yet triggers challenges like:

1. **Code doc** (props, CSS classes, etc) is embedded in code files. Changing a doc typo requires releasing (and incrementing a version of) library code.
2. **Release process** treats everything as a monolith. For bigger, more complex systems, it takes longer and thus happens less often.
3. **Doc tooling** (usually, a static site generator) weaves with testing pages, complicating how to identify if a defect is doc’s or library’s fault.

Should doc update every time the code releases? Absolutely. It must always reflect up-to-date examples and reference tables.

Should the library release for every little doc change? No. A UX pattern or workflow description may be pages-long, yet have no code. Why block publishing until the next code drop and/or increment a library’s version to make a content change?

Systems teams I lead take the mindset that the “doc site” (and its content) is a product consuming the system library. We separate the two codebases.

<esds-code-snippet copyable="false" preformatted max-height="none">
  /doc-site
   /components ## Doc site-only components
     /code-example-pair
     /do-dont
     /tint-stack
   /docs ## Doc site content
     /about
     /components
     /contribute
     /getting-started
     /ux-patterns
     /visual-style
</esds-code-snippet>
<esds-code-snippet copyable="false" preformatted max-height="none">
  /library
   /style ## Library core style
     /color
     /space
     /typography
   /components ## Library & testing HTML, CSS, & JS
     /card
     /button
     /icon
     /radio\_button
</esds-code-snippet>

I’m also unwilling to cede another tradeoff: diminished non-developer participation _and_ content serving wider audiences. The more doc is woven into complex code, the less flexible your content model and the less capable your other authors—designers, content strategists, accessibility specialists—are in editing or expanding it. A tight coupling of code and doc could also slow down how you publish a guideline in response to a community resolving a standard in critique.

_Takeaway_: Consider decoupling documentation versions from library code. This separation can trigger useful yet indistinct workflows for each.

---

### ✔︎ Sustain Doc of Past Versions, By Version

Most teams adopting a systems don’t upgrade with every system release. Some may upgrade no more often than every six months or a year alongside so much other “value generating” work.

Most system site document just “the latest.” But for a system describing button `v5.2.1`, how does a a team maintain their use of `v2.11.0`?

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Morningstar version history page',
      caption = 'Morningstar Design System access to past versions via highlighted “View Docs” link',
      class = ''
  ) }}

The Morningstar Design System publishes “the latest” at `.com/` [root](https://designsystem.morningstar.com/) and _also_ offers access to every [past doc site version](https://designsystem.morningstar.com/v/1.13.0/) at predictable subfolders such as `.com/v1.13.0/`. Each version is accessed via a “View Docs” link per entry in the Release History. Just as important: doc links are relative, so that once in docs for `v1.13.0`, you stay within docs for `v1.13.0`.

_Takeaway_: When your system serves a wide audience upgrading irregularly, ensure they have doc of what _they_ use for as long as _they_ see fit.

---

### ✔︎ Align Design Assets Versions with Code

Sketch libraries and other design resources are designer territory. “How should we version these?” a system designer asks. “We’ll put the latest in the Google Drive folder location that everyone else refers to.” they often answer. Not bad, but not enough.

Using a linked library, designers can be completely unaware how assets changed since they’ve used it a day, week or month ago. They dynamically integrate “the latest” symbols en masse into art. Away they go! It’s magical! Until it’s not magical, at all, for engineers building.

What version(s) of what component(s) are these? Technically, it may be that _everything on the page must be from the same system version_. Designers mixing and matching versions drive developers bonkers. It’s not just inconsistent but technically expensive or impossible.

A design system could do better to:

- Version assets in a manner **evident** to designers applying them.
- Reveal versions in a manner **evident** to developers building with them.
- Align asset versions with versions of their code counterparts.

That means _not_ indicating a version (“Use this latest!”) or using last updated date (like `System_Sketch_2016_10_31.sketch`) should be behind us. In design assets, you can communicate version number in…

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Screenshot of a Sketch linked library',
      caption = 'Linked library name',
      class = ''
  ) }}

…symbol library name (or last updated if versioning by feature)…

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = 'Screenshot of Sketch symbol in layers panel',
      caption = 'Component-specific version in symbol name',
      class = ''
  ) }}

…symbol name, particular if within a folder-based hierarchy…

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '8',
      image_alt = 'Screenshot of a version number within a visible annotation',
      caption = 'Component version annotation, in orange',
      class = ''
  ) }}

…or an annotation layer, particularly if toggled on/off in artwork.

Even for “design-only” libraries lacking code, communicating design and doc changed to teams making features themselves has significant value.

_Takeaway_: “Use the latest” isn’t good enough, so establish a versioning scheme for design assets. The scheme should maximize how design assets relate to system code and enable designers and developers to communicate and consider version impacts as they make their product.

---

### ✔︎ Consider Versioning Tokens Separate from Code, Too

[Design tokens](/articles/tokens-in-design-systems) codify style. At their core, they’re a component dependency. Many teams embed tokens in the versioned library of web-based components. Yet, tokens could serve other teams, whether more web products making their own components or teams building for iOS & Android.

A new tokens version could include new colors (such as a data visualization palette) or fine tune an interactive blue to improve accessibility. When embedded in a web-based component library, such changes could block release since you’d have to update all components too.

It doesn’t have to be this way. If you separate tokens as a packaged dependency of UI component library, then:

1. All adopters–not just the design system team–get unfettered access to the most up-to-date definition of visual style.
2. Communications can focus better on updates to style fundamentals.
3. Style can evolve separately from UI component code, upgrading the token dependency when the effort makes sense.

_Takeaway_: Separating tokens from UI components could improve tool flexibility and signal improved support for more and more adopters.
