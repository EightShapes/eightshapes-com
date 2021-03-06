---
  category : Process
  title : Roadmaps for Design Systems
  deck : Communicate What You’ll Do Next That Teams Can Depend On
  title_abbreviation : Roadmaps
  author_id : nathan
  date : 2015-10-28
  masthead : true
  layout : article.njk
  tags : []
---

{% import '../_includes/escom.njk' as escom with context %}

Whenever I chat with a new design system team, I ask:

{{ escom.bar_quote(
    quote = 'So, what are you working on?'
) }}

Some teams muster only an incoherent rambling of scattered tasks. Others confidently articulate discrete areas of focus, and when they plan to deliver each one. I view the latter — a team’s collective understanding that they are evolving a product with a roadmap — as a signal that that the system is operating well.

### A Roadmap Reveals a System’s Direction

A design system’s roadmap need not be exhaustive. Most I’ve seen depict nothing more than what’s going on now, next and sometime in the near future across their increments of work, whether a two-week sprint or month-by-month delivery.

A roadmap enables a design system team to convey:

- **commitment** to delivering value, justifying their well-defined funding
- **transparent priorities** , especially critical when serving [products and platforms with divergent interests](/articles/finding-platform-balance-in-a-design-system)
- reliable **cadence** that customers depend on

### Roadmaps Signal Releases That Set Product Team Expectations

Roadmaps highlight the most important elements of each release, charting the system’s direction without drowning in detail. Organizing that simple story into a a milestone based, columnar roadmap format works wonders.

If a system is just getting started, a roadmap may be limited to fundamentals like visual style (like color and typography), key UI components (like buttons & forms), and parts needed to assemble common displays (like getting started and a layout/grid system).

In fact, getting all those aspirational parts on stickies \_and then\_ arranging those stickies in a columnar roadmap format is a great exercise to center a team’s purpose early on.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Roadmap as post it notes on the wall, before and after prioritizing',
      caption = 'Roadmapping exercise leading up to system launch, organizing parts into columns for what to deliver now, sooner, later, and wait',
      class = 'escom-article-figure--break-bleed'
  ) }}

Once a design system is smoothly operating across releases, roadmaps tend to reveal, in priority order:

- **New sections and broad topics** first, like expansions into branding, editorial guidance, a new platform (like Android), or practice like SEO
- New, **important parts** , like a modal component, editorial word list, or system onboarding training for new hires
- Very important **enhancements & extensions** to existing parts, like adding tertiary button variation or more responsive layout variations

  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Roadmap organized into months',
      caption = 'Roadmap of an operating design system, delivering on a monthly cadence',
      class = 'escom-article-figure--break-bleed'
  ) }}

Leave out the detail. Less relevant parts and a long tail of fixes and burgeoning documentation drown a roadmap, robbing it of its simple and focused appeal.

### Roadmaps Expose What a System Values

Roadmaps also expose what a system team — and by extension, an enterprise — values at any given time. Our system roadmap across years of a responsive redesign always seemed to position responsive images in the third, “coming soon” column. During every monthly (sprint) planning meeting, we’d try to nudge it into next.

But there was no organization traction, and thus no will on the system team to drive an initiative that they didn’t own. Responsive images stayed on the far right month after month after month, until one of us had the guts to finally remove it until products got their act together. The roadmap worked well: the system’s priorities aligned with the portfolio it served.

### Does Your System Have a Roadmap?

Your team need not display a glossy roadmap visualization on your homepage or rendered dynamically from a Jira backlog (although, either would be awesome).

Just ensure your team can tell a consistent, confident story of “We are working on [this] now, [that] next, and the [other thing] sometime soon…”

If you get your story straight and you deliver releases predictably consistent with that story, teams will value and depend on you.
