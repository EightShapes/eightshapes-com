---
  category : Strategy
  title : Accessible” Design Systems Don’t Guarantee Accessible Products
  deck : Accessibility is an Adopter’s Job Too, and They’ve Got Work To Do
  title_abbreviation : Accessibility
  author_id : nathan
  date : 2018-11-29
  masthead : true
  layout : article.njk
  tags : []
---

{% import '../_includes/escom.njk' as escom with context %}

In late 2016, I helped pitch a design system all the way up to executives that included the CEO, COO, CPO, Head of Design, and other peers. The pitch’s mood shifted when accessibility came up:

{{ escom.pull_quote(
    quote = 'Oh, our teams will make accessible products if they use the system? Sold!',
    attribution = 'C-Level Executive',
    class = 'escom-pull-quote--light'
) }}

Some embraced accessibility in the design system’s role to optimize quality and promote inclusivity as a core value. Others heralded that the system would cut costs (by solving challenges shared by many) and mitigate risk (by reducing litigation occurrence and/or scale). Together, leadership connected good business with doing the right thing.

However, touting system accessibility can grossly distort expectations. Half a decade into their design system journey, leaders of a similar organization were confounded as accessibility across their portfolio remained incomplete.

{{ escom.pull_quote(
    quote = 'So, we aren’t accessible? I hear we can’t say that, even though everyone adopted the system. How’s this possible? Inclusivity is a part of our identity!',
    attribution = 'Head of Design',
    class = 'escom-pull-quote--light'
) }}

If accessible experiences are the goal, the role of a design system and the limits of what it provides remain unclear. Beyond the accessibility-ready parts provided, there’s more work to do? If so, what? And who’s supposed to do it?

---

## System Adopters Make an Experience Accessible. And It Takes Work.

In serving a collective, people making systems can hold strong beliefs about community and inclusivity, which corresponds to passion for accessibility. They consider accessibility in each design choice: sufficient text and background color contrast, myriad aria properties, scriptable props to shift states in a manner consistent with WCAG guidelines. They document how-tos, tips, and rules per component.

As a result, design system programs position their kit as an enabler providing accessible components for adopting squads. Salesforce Lightning positions their toolkit as an accessible basis for another team’s development:

{{ escom.bar_quote(
    quote = 'The Lightning Design System provides accessible markup which will serve as a foundation for your application development.'
) }}

However, the higher up the ladder of leadership and management you go, they’ll read this and falsely perceive that with accessibility baked in to a foundation, accessibility is achieved. Mission accomplished, move on.

Not so fast. Each adopting team still has work to do to:

- Configure individual system components for accessibility.
- Compose multiple components together accessibly.
- Customize components from scratch accessibly, using a system’s documented foundation.

---

### #1. Configure Individual Components for Accessibility

Adopters are responsible for configuring all elements and properties themselves, such as including a notification’s `role` or a checkbox label's `for` attribute. Per component, these configurations should feel like a checklist.

A design system can help by:

- Itemizing blanks to fill, such as aria labels for popovers, lists and buttons.
- Embedding required HTML elements and properties in scripted output.
- Requiring and throwing errors for missing properties, such as a hidden label for a checkbox overlaid on an object that lacks a visible label.

### #2. Compose Components Together Accessibly

Adopting teams must also compose interfaces made of many system parts — inputs, labels, groups, images, and more — in an accessible manner. This includes using appropriate HTML tags, ordering fields, and aligning content that’s read by a screenreader with clarity.

{{ escom.pull_quote(
    quote = 'Need someone to appreciate how hard this is? Challenge them to experience their work through a screenreader. As it flows from one element to the next, they’ll quickly get how hard this is to do well and how much can go wrong.',
    attribution = 'Adam Rowe, Morningstar Design System',
    class = 'escom-pull-quote--light'
) }}

A design system can help also by:

- Demoing composition using page samples, such as for <a href="https://designsystem.morningstar.com/components/forms.html#examples">forms</a> data entry.
- Documenting guidance for elements used in concert, such as a <a href="https://designsystem.morningstar.com/components/forms.html#accessibility">checkbox and it’s label via IDs, field groups, and related microcopy and error text</a>.
- Describing values that shift across states like <a href="https://designsystem.morningstar.com/components/loaders.html#accessibility">Loader’s `aria-busy`</a>.

---

### #3. Customize Their Own Components Accessibly, Too

Design systems don’t cover every part every team ever needs. They’ll also make their own components, too. When creating their own markup, style, and script, they’ll need to know how to implement accessibility standards and apply the system accessibly.

This is undoubtedly the most difficult part for teams and individuals. Often, product designer and engineers lack expertise (and access to experts) compared to the systems team. They have so many other priorities. It’s hard.

Design systems can help by:

- Heavily infusing accessibility guidance and tools into color, form design, and other system concerns most relevant to accessibility.
- Providing experts and/or how-to kits for conducting an accessibility audit.
- In addition to per-component guidance, housing more general content on accessibility within design system documentation. The mission could be to provide a plainer introduction to WCAG content that many of us can admit reads as a dense, academic prose.
- Modeling collaborative behavior, such as how they thread copywriting into all the design and dev that focuses on accessibility.

---

On Cost, Success, and Getting to “Good Enough?”

A Head of Design asked:

{{ escom.pull_quote(
    quote = 'Ok, if the system gets us part way, how far along is that? And how much more will it cost to be good enough?',
    attribution = 'Head of Design',
    class = 'escom-pull-quote--light'
) }}

I appreciated his pragmatic attitude, pairing a recognition of system value with conceding that work remains (and the implication that it’ll force tradeoffs). That a system and adopting product share the responsibility shouldn’t be a surprise. Most have lived this reality for some time. It’s more that adopters often need a nudge — or shove — to prioritize their part.

How much more work? That’s impossible to precisely estimate. “So, are you saving each team 50% of their time dedicated to making things accessible by using your kit?” I’d hope it’s _at least_ that much time, but I can’t say for sure.

---

### Accessibility Belief Varies by Organization, Often Wildly

What still surprises me is how inconsistently different organizations value accessibility. Over the 30 design system I’ve contributed to, there’s only been one or two in-house design system leaders outright hostile to accessibility.

{{ escom.pull_quote(
    quote = 'That doesn’t matter to our of users. It’s not a priority.',
    attribution = 'Leader that does not value accessibility',
    class = 'escom-pull-quote--light'
) }}

Sigh. There, we build accessibility-ready features anyway, harnessing passions of those who share our ideals without (visibly?) impacting delivery.

On the other hand, another client valued accessibility so much as to contractually require it within the master services agreement (MSA). 20% of the dense, dense document focused on accessibility.

{{ escom.pull_quote(
    quote = 'To work for us means that you deliver accessible solutions. Period.',
    attribution = 'Organization focused on accessibiliy',
    class = 'escom-pull-quote--light'
) }}

Extraordinary! Now THAT’S a declaration of commitment. We had no problem integrating accessibility into our process (it got its own step!), accessing in-house experts, and positioning its value to other teams.

So, tighten up your explicit goals for accessibility, both as a system program and an organization overall.

---

### Is Perfect Accessibility Unrealistic? If So, What’s “Good Enough?”

The predominant undercurrent of conversations is a lack of clarity on how much more needs to be done. What’s enough? Accessibility feels an imprecise practice. No product I’ve ever contributed to really achieved “perfect, indisputable accessibility.”

Audits reveal the hidden truth: there’s so many accessibility improvements to choose from. Audits identify tens if not hundreds items to consider. It’s up to teams to prioritize what’s important and begin cranking away. In practice, at some point they reach a threshold of “good enough” before attention shifts to other features, optimizations, defects, and research.

So, in my experience at least, perfection isn’t the outcome.

Instead, like most tasks of optimization, “enough” might be 70%? (or 90%? or 98%?) of audited and/or checklist requirements to form what seems objective measurement. Once you reach that threshold, can you declare success?

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '1',
  image_alt = 'Bar chart communicating what is embedded in the system, what a team configures, and what a team must do themselves',
  caption = '',
  class = 'escom-article-figure--break-bleed'
) }}

This convergence on a limit hints at a mindset shift. Accessibility is best a quality pervasively pursued from discovery through design and code to testing, delivery, and optimization. It spans definitions of done across disciplines of design, content, research, engineering, and testing.

Accessibility is not one box checked by one person, and a design system is central way to model and amplify that tone through it’s tools and communications.
