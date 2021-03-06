---
  category : Systems of Systems
  title : Consolidating Design Systems
  deck : Over time, systems happen.
  title_abbreviation : Consolidation
  author_id : nathan
  date : 2018-02-27
  masthead : true
  layout : article.njk
  tags : []
---

{% import '../_includes/escom.njk' as escom with context %}

An enterprise usually has many concurrent design systems. Separate groups chart paths loosely aware or even willfully ignorant of what others do. Many systems isn’t necessarily bad. Different programs may support different experiences and teams with different tools, and that’s ok.

Other times, systems keep experiences and teams apart. Unjustifiable inconsistency. Varying quality. Unmistakable redundancy. “We can do better,” an enterprise leader may say, “designing at scale.” And so they ponder:

{{ escom.bar_quote(
      quote = 'Should we consolidate our design systems? If so, how?'
  ) }}

Consolidation takes effort, time, and an emotional capability to relinquish (some) control. Heretofore independent systems may resist this uncomfortable change. So an approach to consolidation is best shared, rational, and yet also decisive. First, share an understanding of how each system arose. Second, rationalize the features, outputs, and practices on offer. Finally, define a consolidated identity and how it comes together.

---

## How Did We Get Here? Map the Ecosystem.

Products (here, a circle) adopt systems (here, a diamond) to efficiently and consistently compose their experience.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Diagram of product depends on system',
      caption = '',
      class = ''
  ) }}

Across an enterprise, disparate systems can arise separate by myriad boundaries of teams, organization units, and platforms.

For example, systems can mirror organizational boundaries, such as:

- **Product** serving customers across web, native, and other touchpoints.
- **Internal** (aka, Intranet, Admin, “Enterprise”) apps serving employees.
- **Marketing** (for some, “.com”) and ecommerce, usually in the form of content sites and/or pre- and post-purchase transactional apps.
- **Corporate** sites about the company, finances, jobs, press, and microsites.

While distinct systems, outsiders assume they share a common visual language inherited from Brand. Or, at least the logo, right? Not always. Inspection reveals massive discrepancies. One experience touts modern typography sourced from Brand in 2018. An archaic internal toolset from 2013 still rocks Verdana. It’s as if they are from separate companies. If you’ve worked at a company of any scale, you’ve lived this.

Larger entities — think the size of Microsofts, Amazons, IBMs, GEs, or any of the large banks — may replicate such system divisions across lines of business.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Complex diagram mapping systems to products',
      caption = 'System of systems for a large bank, in need of more consolidation',
      class = ''
  ) }}

In other cases, lines of business also create boundaries, such as a bank’s groups and apps for credit card, banking accounts, and loans. Leaders in design, product and engineering may be on their consolidation journey, having consolidated some (like credit card and banking) while others (loans and institutional) lag behind.

Distinct systems can also emerge due to a fairly basic premise:

{{ escom.bar_quote(
      quote = '“That system, over there, wasn’t made for us.”',
      class = 'escom-pull-quote--light'
  ) }}

Maybe native design conventions differ from the better-funded web system. Or, there’s a belief that “Employee tools have different needs than customers. Therefore, we need a different visual style and components.” Flat out, maybe it’s thinly-veiled hubris: _their_ system isn’t good enough for _our_ stuff. Digging into this more subjective and often emotional divisiveness is important.

Well-intentioned system teams serving distinct portfolios do try to “stay in touch” and “share best practices.” Yet apart from a meeting here and a hallway conversation there, nothing comes to pass. Are they sharing outputs like code libraries, documentation, design asset libraries? Not even close.

---

## What Do We Have? Compare & Rationalize.

If you are considering consolidating, the first step is compare and rationalize differences. Your objective: help makers, customers, and sponsors get a sense of how things differ and could change as a result.

### Compare Libraries & Outputs

To start, compare features of visual style, UI components, and other categories. Identify what features exist, how they are disseminated (as code and design assets), and depth of documentation of each part.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Rationalization table of two different systems',
      caption = 'High-level system comparison that precedes a more thorough audit and report',
      class = 'escom-article-figure--break-bleed'
  ) }}

For example, a Product group’s system may be more robustly featured and funded. On the other hand, Intranet’s system may be less mature, minimally funded. In that case, a high-level comparison would communicate:

- **Visual style: Inconsistent**.
  Hopes of existing alignment are dashed. The _logo_ and core brand _color_ match, but divergent neutral, interactive, and accent colors are in utter conflict. _Typography_ is a mess. _Icons_ are sourced from libraries with distinct tones.
- **UI Components: Overlapping but Inconsistent**.
  Both offer the same core set common components. But their design and variation taxonomy don’t at all match. Plus, each library _also_ offers up to 20 other components that the other does not.
- **Additional Libraries: One vast, another empty**.
  The Product catalog also strongly supports _UX Patterns_, _Accessibility_, _Layouts_, and _Motion_, while Internal Tools offers nothing beyond style and components. Where’s content strategy / _Editorial_? Both casually (or meekly) point to Brand’s PDF single page on tone.
- **Outputs: Different code frameworks, different design software**.
  Product offers _React_ code and _Sketch_ assets, while Internal tools provides a dated _Angular_ codebase and an _Adobe Illustrator_ symbol set.
- **Documentation: Different but both strong**.
  Both teams invested heavily in quality code documenting and contain relevant design guidance. That’s rare, but if true, then shift conversation to content reconciliation and information architecture concerns.

### Evaluate System Practices, Too

Systems aren’t just features. You must also evaluate how each system gets work done, expressed through the teams, processes, and depth of adoption already established. So also compare:

- **People** dedicated to making the system (and who funds their capacity) and the contribution activity from each community.
  _Reference_: [Designing a System Teams](/articles/designing-a-systems-team), [Team Models for Scaling Design Systems](/articles/team-models-for-scaling-a-design-system), [Contributions to Design Systems](/articles/contributions-to-design-systems)
- **Processes** done regularly with proficiency as a system team and group.
  _Reference_: [Practicing Design Systems](/articles/practicing-design-systems)
- **Products** (and other sites and experiences) serving as the customers would adopt the consolidated system across organizational boundaries.
  _Reference_: [Adopting Design Systems](/articles/adopting-design-systems)

---

## How Do We Consolidate? Pick a Path.

System histories and rationalization in hand, time to answer the big question: how do we consolidate and what — if any — systems survive it?

### Option #1. Keep Both. Do Nothing.

Sometimes, teams walk away from the table. They aren’t ready to yield the autonomy, established norms, and distinct goals they don’t share. Another big threat? Resistance to change among their adopting customers.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Diagram of two systems, remaining distinct',
      caption = '',
      class = ''
  ) }}

- For features, **nothing changes**. Both persist redundant libraries.
- For people and processes, **disconnected** practices remain.
- For products, **nothing changes**. Adopters dodge a refactoring or redesign, yet users continue with lower quality, inconsistent experiences.

_Takeaways_: If adoption of a consolidated system isn’t likely, why bother ?Traditionally, slowly changing products (I’m looking at you, internal tools!) are less likely to prioritize what consolidation brings.

To avoid doing nothing, begin conversation with agreement that both portfolios intend to use a consolidated system, soon. Also, to push conversation past a “do nothing” impasse, leadership must care enough, mandate consolidation, and designate a system to serve — and expected to be used by — teams into the future.

---

### Option #2. Keep Both and Start Sharing Subsystems.

Complete consolidation may be too ambitious, yet teams could start with subsystem(s). Multiple systems with smaller connections — in code _and_ collaboration — makes things more complicated. But start small, pilot sharing the foundational things, and see if it works.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Diagram of two systems depending on an ascendant shared system',
      caption = '',
      class = ''
  ) }}

- For features, **converge foundations, even if design before code**. Start with style (color, typography) applied to essential components (buttons, forms). Do teams share a dependency on [design tokens](/articles/tokens-in-design-systems) that are separated from any given component library? Be realistic that a single source-of-truth for front-end code and documentation probably come later.
- For people and process, **increase collaboration** across groups. Brown bags and random shares should give way to vibrant Slack discussions and and regularly attended critique. Leaders must create space and time for this, but it may not yet be time to unify rituals into a single team.
- For products, **demonstrate proof of intent** through willing teams on both sides without a mandate wide change all products now.

_Takeaways_: It’s hard to stay connected, in agreement, and synchronized across boundaries without a long term commitment.

I’ve never seen a subsystem-only step occur, although I’ve discussed it with a few organizations. The approach appeals to sensibilities of separating concerns and making incremental progress. Yet change will be slow and and lack authoritative oomph. My role as outsider often leads to the harder, strategic question: are we _really_ consolidating or not, and if so, how?

---

### Option #3. Retire Both and Build a New System Together

Instead of sustaining existing features from one or both systems, you may retire both as a reboot to something new. Blowing up the old and starting fresh, bigger may be triggered by an external force — an executive mandate, brand refresh, or tech replatform. Maybe all of the above.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Diagram of all products shifting to a shared, new third system',
      caption = '',
      class = ''
  ) }}

- For features, once a **new design language** is in play, so too will be UI components and code too. The “softer” libraries like UX patterns and editorial may avoid reimagination, but they won’t be in the spotlight.
- For people and processes, a **larger team** may combines the capacity of both existing programs under a bigger umbrella, although maybe **efficiencies risk trimming system capacity**.
- For products, every … single … experience faces **uncertain, potentially large change**. Existing adopters from all sides may wince at integrating a massive redesign while being subsumed by something intended for an even more diverse portfolio.

_Takeaways_: Consolidation framed as a merger of equals raises complications. Decision-making is unclear. Everything is up for discussion. Without a considerable reboot leveling the playing field and _really_ starting fresh, rationalization could dilute the value of both and integration becomes time-consuming. It’s expensive to reinvent from the ground up. Worse, every product’s change will take a long time. This is a difficult path to tread.

---

### Option #4. Keep One and Inherit Features From the Other

Rationalization often indicates a predominant choice. A stronger system. As such, the mindset shifts to acquisition: what must we add from the weaker to the stronger system to best support all customers?

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = 'Diagram of some products shifting to a new system',
      caption = '',
      class = ''
  ) }}

- For features, acquired customers will **demand feature parity** with what they currently use. You can’t drop components, features, frameworks, and supported platforms, can you? Possibly, but the surviving system will need to grow and diversify to serve a wider customer base.
- For people and processes, combine both to ideally **grow the team** to serve the wider base. Adopting a stronger system favors adopting the workflows and operations of that system, but not always.
- For products, it’s business as usual for those using the surviving system. On the other hand, **acquired customers must adopt something new**.

When discussing an acquisition, ask the hard questions:

- Is the acquiring system willing to support more teams with more diverse needs likely less relevant to their current customer base?
- Is the acquired product community and system team willing to yield to the design, code and documentation already on offer? Or does friction await?
- Are organizational units migrating to a new system willing to engage regularly and drive change so teams use the system, faithfully?
- Who funds future system efforts? Will a shared cost model work for previously independent sponsors, or will the team drift towards one or the other existing cost center, biasing the results?

_Takeaways_: A stronger system’s success places them in a powerful position to dictate terms. Acquired systems may bring weaker tools, processes, capacity and commitments from their leaders. Yet their core features may still be strong, as is their emotional tie to them.

When talking mergers and acquisitions, “look into the books” of weaker system too. They may be looking for a way out, an existential lifeline, otherwise risking a fade into an abyss without a consolidation.

These imbalances makes consolidation conversations difficult. Your goal? Realizing the promise of a thriving practice serving more teams at scale. So time to exercise some leadership _and_ management to make consolidation best serve your community!
