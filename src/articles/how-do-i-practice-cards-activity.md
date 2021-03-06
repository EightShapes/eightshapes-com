---
  category : Workshop Activities
  title : How Do I? Practice Cards Activity
  deck : Prioritize Processes Your Design System Needs
  title_abbreviation : How Do I? Cards
  author_id : nathan
  date : 2017-10-17
  masthead : true
  layout : article.njk
  tags : []
---

{% import '../_includes/escom.njk' as escom with context %}

There’s a ton of [“How Do I…?” questions](/articles/practicing-design-systems) to consider as you optimize your design system practice. Whether [starting a design system](/articles/starting-a-design-system) practice from scratch _or_ rebooting that practice, teams may put “everything we do” on the table for review.

This is the perfect time to assess processes from a high-level overall and decide the right time and depth to establish or refine each one. I’ll use a “How do I…?” Design System Practice Cards activity to help a team appreciate the range of processes and prioritize what to focus on.

---

## The Activity

### Objective

Convene a cross-disciplinary group of _at least_ the [core system team](/articles/designing-a-systems-team) to identify and prioritize developing and/or refining processes, resulting in backlog tickets arranged to define and document each one.

### Format

Organize “How do I…?” practice cards on a large table by urgency (as columns) and depth and formality required (as rows).

### Duration

30 to 90 minutes depending on discussion depth and number of groups.

### Group Size, by Table

While it works solitary, it functions well with tables of 4 to 6 participants. With 8 participants at a table, conversation may bog down and contributions become uneven. If running 2+ tables, have each table complete the process independently and then present their results to other tables.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Photo of four stacks of cards',
      caption = 'Stacks of “How do I…?” questions by group (System Team, Adopter, Contributor, and Leader)',
      class = ''
  ) }}

### Materials

Starting from the questions formulated in my [Practicing Design Systems](/articles/practicing-design-systems) article, I’ll use an [InDesign template](https://drive.google.com/open?id=0B8d1xG5453rOZWNqLTJnclEtc0E) and it’s [exported PDF](https://drive.google.com/open?id=0B8d1xG5453rOLVVRRjByTmpBdVU) to print sheets of cards tagged by group. I’ll then take a few minutes to slice up each sheet into cards, with a few blanks just in case.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Photo of printable sheet cut up into cards',
      caption = 'Practice “How Do I…?” cards cut up from letter size prints from a template',
      class = ''
  ) }}

### Prioritize Urgency as Columns

It’s impossible to define, initiate, and refine all system processes at once. Therefore, I’ll arrange Post-It Notes to form columns of time (such as months or quarters of a year) or — my preference — key milestones in rebooting or [starting a design system](/articles/starting-a-design-system) (such as “Now”, `0.1`, `1.0`, and “Later”).

### Prioritize Depth & Formality as Rows

Just as important as timing is how deep and to what quality your process is documented and explained.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Photo of post it notes arranged to create a grid of milestones versus documentation detail levels',
      caption = 'The activity table set up, ready for “How Do I…?” cards to be placed.',
      class = ''
  ) }}

### Protocol

Read a card aloud, ensure everyone mutually understands it, establish consensus on where it goes, and place it on the table. While one person can read all cards, I suggest teams pass the deck around the table so that each person reads cards and triggers conversation.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Photo of cards placed in a grid of milestones versus documentation levels of detail',
      caption = '“How do I…?” practice cards prioritized part way through the activity, organized by urgency and depth',
      class = ''
  ) }}

---

## Resulting Themes

Having run the exercise with many groups, I’m always surprised by the distinct value that individuals and groups place on certain tasks. That said, there are patterns to how teams organize process formation.

---

### Define System Team Process Now, Yet Skimp on Doc Early

While certainly biased because it’s my job as a consultant, teams invariably prioritize many System Team cards in the Now, No Doc area, including:

- As a system team, how do we get [from nothing to **launch a first release**](/articles/starting-a-design-system)?
- As a system team, how do we **organize** & **track** our work on a daily basis?
- As a system team, how do we meet as a team to discuss **status**?
- As a system team, how do we convene to **critique** a teammate’s work?
- As a system team member, how do I **request a review** from a teammate so I can complete my task?

These are table stakes for a high-performing team, and begin to set the stage for how they soon expand operations to include adopters and contributors. However, documentation for team processes will be required as members rotate in, requiring onboarding.

---

### Prep Adopters with Essential Startup & Support Tools

When the `0.1` release become available, early adopters may swarm, trading off negative potential for breaking changes with a spike in efficiencies. Therefore, getting started efficiently is essentially, requiring answers to:

- As an adopting designer, how do I **get started**?
- As an adopting developer, how do I **get started**?
- As an adopter, how do I **request** a new feature?
- As an adopter, how do I learn about **new system updates**?
- As an adopter, how do I get **help**?

---

### Optimize Repetitive Processes Iteratively

Some processes take shape over time, release by release. A team should find their groove across sprints, reaching a`1.0` launch by iteratively refining and documenting repetitive processes like:

- As a system team developer, how do I **release** a version?
- As a system team member, how do I **publish** content on the system site?
- As a system team, how do we **communicate and promote** each release?
- As an adopter, how do I get a (short) system **introduction** for my team?
- As an contributing developer, how do I follow **coding style** requirements?

---

### Serve Contributors Later, Once the System Forms

While some systems can emerge organically from a community, I find it more predictable to set a baseline centrally and then gradually open up to contributions over time. Therefore, serving contributors with well-defined processes spans from the `1.0` period and beyond with:

- As a contributor, how do I [**propose a contribution**](/articles/contributions-to-design-systems) to be evaluated for inclusion in the system?
- As a contributor, how and where do I **compose documentation** and get it reviewed and approved?
- As a contributor, how do I [**join the systems team**](/articles/designing-a-systems-team) as a rotating team member for a shorter period, and convince my boss too?
- As a leader, how do I get regular **system updates** on progress?
