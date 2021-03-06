---
  category : Releases
  title : Releasing Design Systems
  deck : Delivering Interconnected Outputs to Adopters Over Time
  title_abbreviation : Overview
  author_id : nathan
  date : 2018-08-28
  masthead : true
  layout : article.njk
  tags : []
---

{% import '../_includes/escom.njk' as escom with context %}

_#1 of 6 of the series Releasing Design Systems:_
**Outputs** | [Cadence](/articles/design-system-release-cadence) | [Versions](/articles/versioning-design-systems) | [Breaking](https://medium.com/@nathanacurtis/visual-breaking-change-in-design-systems-1e9109fac9c4) | [Dependencies](/articles/dealing-with-dependencies-inside-design-systems) | Process

Companies realize a design system’s value when adopting products use a system to make and ship experiences that _their_ customers use. As a part of that value chain, the system releases features over time. This puts the system into the hands of _its_ customer: designers and engineers doing their job.

Strong system teams take releases seriously. They don’t see themselves as releasing just component library code. Instead, they deliver many more outputs: design tokens, documentation, design assets, and other resources.

This series describes many facets of releasing design systems. It begins by defining a system’s many outputs and where they are delivered. Subsequent articles cover topics of cadence, versioning, breaking changes, dependencies, and a step-by-step approach.

These stories reflect what I’ve learned releasing systems working with teams like [Discovery Education](https://comet.discoveryeducation.com/), [Morningstar](https://designsystem.morningstar.com/), Target, and REI. They are elevated by insights from colleagues at [Salesforce](https://www.lightningdesignsystem.com/), [Adobe](https://theblog.adobe.com/introducing-spectrum-adobe-building-design-system-scale/), [Atlassian](https://atlaskit.atlassian.com/), [Shopify](https://polaris.shopify.com/) and [Financial Times](http://origami.ft.com/). Thanks for graciously sharing your time and practices!

---

## Outputs: What‘s Released?

Design systems programs release many types of outputs, not just code. As a result, a system should differentiate and communicate this range of versioned outputs to developers, designers, and other customers.

### Code, the Source of Truth

Most systems offers a single source of truth of presentation layer code as:

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Diagram of code tokens, components, and doc site',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

- **UI Component Library as HTML Markup & CSS**. Often referred to as “the CSS,” this package’s consumption rests upon using or compiling CSS as a consistent visual style baseline coupled with reusing HTML snippets.

and/or…

- **UI Components Library as Javascript** : Many systems wrap HTML & CSS with JavaScript to fortify logic, encapsulate style, and ease integration and maintenance more directly in a framework of choice. While most libraries target a _specific_ framework (React, Vue, Ember, Angular, …), industry signals suggest a shift to making web components for _all_ frameworks. My last six system efforts? Later 2017: Vanilla HTML, Vanilla HTML. Early 2018: React, Vue. Later 2018: [Web Components](https://www.smashingmagazine.com/2018/07/reusable-components-custom-elements-shadow-dom-npm/), [Web Components](https://www.smashingmagazine.com/2018/07/reusable-components-custom-elements-shadow-dom-npm/).

In addition, other prominent outputs may be released separately:

- **Design Tokens** establishing a visual style via semantically meaningful property-value pairs. Tokens are variables available in many formats for use across platforms (web, iOS, Android), preprocessors (Sass and LESS), and frameworks (like React). Some systems manage tokens in a repository separate from UI component code. As a result, their library — along with other implementations — can depend on token as a package, too.
- **Demo Apps/Sites** as a environment with page examples built using the component library. The demo’s also for tutorials and rapid prototyping, including by designers!
- **Cross-platform components** suitable for iOS, Android, and Windows.

---

### Design Assets

Most teams limit understanding of what they release to simple “we release code.” It’s eye opening for them to realize that they publish so many other tools that change over time. They include:

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Diagram of design assets, fonts, icons and other resources',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

- **Design Toolkits** as template files and symbol libraries offered in design software. Today, almost always Sketch. Tomorrow, Figma, Invision Studio, and other emerging competitors?
- **Fonts, Icons** , and even [Origami’s Image Sets](https://registry.origami.ft.com/components?search=&module=&imageset=true&service=&active=true&maintained=&experimental=&deprecated=&dead=) due to a system’s often expected role in distributing and versioning such libraries.
- **Other Design Resources** like illustration and color swatch ASE/CLR files as a springboard for bespoke artwork. These collections change slowly, less formally, and via contributions by community members not a part of a system core team. Yet, from the customer’s perspective and system’s communications, it’s part of the system.

---

### Documentation Site

Design systems need a home, a place everyone knows they can find a path to everything that will have the latest and greatest. Housed at a memorable URL, it’s often built with UI components specific to it’s mission.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Diagram of documentation in code and on site',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

- **Documentation Sites** describe features (like a button), onboard new users, and trigger processes like getting help or contributing. Teams build sites more often using a static site generator or less often with a content management system.
- [**Documentation Components**](/articles/design-system-doc-components) – `code-example-pair`, `do-dont`, `hex-code`, `component-explorer` – depend on the UI component library and serve usually only the doc site. Such components may be versioned with the documentation site or as a third, separately versioned library relative to doc and the UI components they rest between.

---

## Destinations: Where Does It Go?

When distributing code and design assets, it’s vital to offer the code in manners most easily consumed by your adopting engineers. This means that some systems must offer choice across a many options, while others can rely upon a single choice as organizational standard.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Diagram of doc site, registry and hosted assets',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

### For Code

- BEST: **Registries** like `npmjs` (or an internal counterpart like Sonatype's `nexus`) that provide access and management of released code packages. Developers then use tools like `bower`, `npm`, `yarn`, `webpack`, and `babel` to integrate and upgrade that code smoothly in their environments.
- BETTER: **Hosted** assets on CDNs for direct links to versioned style and script as well as fonts and icons that change more slowly.
- JUST OK: **Repository Access** to Github, Bitbucket or the like to clone, fork, or otherwise compile, use and maybe — eventually — contribute.
- IF NECESSARY: **Direct Code Downloads** , usually of “the ZIP file” of compiled or uncompiled system assets from the doc site for local use and/or manual integration into a separate repository.

[Bootstrap](http://getbootstrap.com/) and [Material Design Lite](https://getmdl.io/started/index.html) are examples releasing to 2+ destinations.

### **For Design Toolkits**

- BEST: **Create New** as a synced, embedded path in a design tool’s menu to create a new instance from a template.
- BETTER: Versioned and distributed using permission-based **design asset management** software such as [Abstract](https://www.goabstract.com/) or [Lingo](https://www.lingoapp.com/).
- GOOD: **Direct toolkit download** from a documentation site, with clear version indicated and associated Getting Started doc nearby.
- JUST OK: **Shared drive** , via well publicized and possibly simplified internal URL (such as `http://system.uitoolkit`).
- NOT GOOD ENOUGH: **Buried** on some fourth level page on a barely organized wiki site many people can’t find.
