---
  category : UI Components
  title : Getting Developers Started with a Design System
  deck : Onboard Step-by-Step So They Build with Confidence
  title_abbreviation : Getting Developers Started
  author_id : nathan
  date : 2019-09-25
  masthead : true
  layout : article.njk
  tags : [ui components]
---

{% import '../_includes/escom.njk' as escom with context %}

A smooth onboarding is an essential moment in a product experience. That’s why an **Getting Started as an Engineer** is arguably the most important documentation your system publishes.

Engineers want to traverse simple, dependable steps that are quick, effortless, and _painless_. Getting stuck can be catastrophic. They should plow through, even in minutes. By the end, they yearn to feel empowered and successful, ready to weave the system throughout their codebase. This first impression is critical to make or break their belief, leaving them confident (yes!) or confounded (oh no!).

_Getting Started for Engineers_ is not just positioned prominently on system’s homepage and in navigation. It should also be composed early as you iterate towards launch. The authoring process leads a team to affirm system architecture, test onboarding with key partners during a beta period, and polish it up by the time adoption is widespread.

---

## Getting Started Content, Step-by-Step

While each system is unique — how it’s built, features it provides, flexibility it enables, integration it requires — most Getting Started pages flow through how to install, use, extend/override, configure, learn more, and connect with the system team.

### #1. Installation

All is lost if they can’t integrate a system into their codebase. It may be tempting to scribble off a simple `yarn install` or `npm start` and move on. However, insufficient doc can leave aspiring adopters helpless by a blocked environment. Engineers need _details_ on how to:

- Choose how to **consume assets** that are `hosted`, `downloaded` (as pre-built or built by the adopter), or integrated via tools such as `yarn`, `bower`, `npm`, and/or `gulp`. (example: [Material Design Lite](https://getmdl.io/started/index.html#download)).
- Access such repositories, if **authentication** is required.
- Apply the system to a specific **platform** like `web` versus `React Native`, `Android`, or `Apple` (example: [Hudl Uniform](http://uniform.hudl.com/get-started/code/)).
- Choose between a **JavaScript-based framework** like `React` or `Vue` or **vanilla HTML & CSS** , if both are available. (example: [Shopify Polaris](https://polaris.shopify.com/components/get-started#using-components))
- Integrate with or **relate to other environments** used by the community. (example: [Salesforce Lightning Design System](https://www.lightningdesignsystem.com/getting-started/))

_Takeaway_: Don’t skimp on installation. If poorly described, you risk alienating adopters before they get through the front door and/or relying upon costly and disruptive calls for assistance.

---

### #2. Inspect What’s&nbsp;Included

Once installed, give the engineer a lay of the land. Components are here, fonts and icons there. Markup is invoked from these files, scripts are references in those folders. This can be as simple as a diagram of folder hierarchy (example: [IBM Carbon](http://carbondesignsystem.com/getting-started/developers)) or two-column table related assets to folder locations.

_Takeaway_: Help an engineer see and find what they want while sensitizing them to what’s to come. This familiarity improves confidence and momentum towards the tasks that remain.

---

### #3. Apply Visual&nbsp;Style

Usually, setting visual style up for success precedes the widespread application of components. From colors to space and size, from icon files to web fonts, there’s a core set of fairly predictable assets and variables upon which components are built. Engineers need to know how to:

- Refer to “the main CSS” such via a `<link>` in the view (example: [Morningstar Design System](https://designsystem.morningstar.com/getting-started.html#using-css-1)), if relevant.
- Refer to **icon assets** , whether a single or set of SVGs or other file type(s).
- Refer to **fonts** used for typography and/or icon symbols.
- Load and compile pre-compiled **style assets and functions** like Sass mixins, when relevant.
- Integrate and apply [design tokens](/articles/tokens-in-design-systems), whether as a file integrated into the library or consumed as a separate dependency.
- Link with other libraries like animation (example: [Angular Material](https://material.angular.io/guide/getting-started#step-2-animations)) or photographs (as content repos?).

_Takeaway_: Don’t skip visual style as you barrel towards components. Empower engineers to ground and extend their implementation using the system with style tools and assets that are well-organized and dependable.

---

### #4. Use a Component

To engineers, design systems are fundamentally a catalog of components to reuse as building blocks to compose an interface. So this section better bring the goods. Engineers need to know how to:

- Include a component, sometimes via `import` statement & folder paths.
- Integrate a component by adding the element markup to a layout or invoking it via a script.
- Configure a component in context, such as adding BEM modifier classes or adjusting props.
- Properly encode components for maintainability, such as using functions or macros rather than copying and pasting markup.
- Architect their own app (to the extent you can), often by viewing a sample reference application you publish based on your system.

This is almost always done by a single, sensitizing example akin to the “Hello World” of a component in an implementation.

_Takeaway_: Here more than anywhere, the focus should be on instructions and outcomes. Code examples are essential, but improving the instructions with rendered outputs can reinforce the “what you get” and provide opportunities to elaborate on the most important suggestions to optimize their adoption.

---

### #5. Override / Extend a Component

At times, your `DatePicker`, `Masthead`, or – heck, even – `Button` may not offer all the features and variety an adopter craves. To solve their problem, they may need to build upon or override what's on offer to be successful.

Engineers need to know how to:

- Compose in context to **extend markup, style, and script** to extend an existing component.
- Apply lower-order system features — particularly, **design tokens** and **primitive components** like `Icon` and `Button`—to build a custom displays like a `Card` action bar.
- Model composition in a manner consistent with system architecture, particularly if the work hints at a future system contribution.

_Takeaway_: As much as you may want to believe otherwise, a system doesn’t solve every problem for every adopter. Therefore, tune onboarding to the reality that a system serves as baseline tools that equip adopters to compose components themselves, too.

---

### #6. Configure & Optimize What’s&nbsp;Used

A system should afford how consumers flexibility adapt what’s on offer to serve their own needs. Engineers may need to know how to:

- **Theme** components to an alternative visual style.
- Configure what assets are consumed to **optimize** outputs (like `<link>`ed CSS) and other downloads (like an icon SVG).

For more powerful configurations, these topics may warrant their own pages to describe more in-depth step-by-step processes. When this occurs, expose the scenarios here to familiarize first timers and link elsewhere to the details.

_Takeaway_: Since adaption can take many forms, limit onboarding materials to the most common case(s) for which your system invests in tuning its tooling.

---

### #7. Learn the Rest: Principles, Methodology, Dependencies, and Resources

While allusions to methodology can pepper an entire onboarding process, most Getting Started samples in our industry leave such overviews to the end. These sections can include:

- **Principles** on how code was architected, packaged, and distributed.
- **Standards** serving as criteria of how code was made, such as accessibility and browsers supported. (Example: [Discovery Education’s Comet](https://comet.discoveryeducation.com/getting-started.html#support))
- General **rules and recommendations** , such as how to compose markup and classes. (Example: [Material Lite](https://getmdl.io/started/index.html#general-rules))
- **Methodologies** on how code was constructed, such as the BEM CSS methodology.
- **Dependencies** like jQuery, Select2, polyfills and more that make their way into adopter’s front-end code (Example: [Morningstar](https://designsystem.morningstar.com/getting-started.html#javascript-1), [IBM Carbon](http://carbondesignsystem.com/getting-started/developers)).
- **Resources** to learn more about employed frameworks such as React or Vue. (Example: [Shopify Polaris](https://polaris.shopify.com/components/get-started#using-components))

---

### #8. Connect with the Community

Hopefully, by the end of a getting started, they’ve started. They are now building using the system! But systems nothing without a community of support and collaboration. Therefore, leave your adopters with an inclusive sense of how to:

- Get **help** when things go wrong.
- Identify **defects** of how things currently work.
- **Request features** they lack the confidence or time to build themselves.
- **Contribute** their own feature.

_Takeaway_: Conclude an onboarding process with calls-to-action that leave the a new adopter not stranded on an island but connected to a community. Encourage them to engage!
