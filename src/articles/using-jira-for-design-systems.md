---
  category : Process
  title : Using Jira for Design Systems
  deck : Iterate Work with Stories, Epics, Versions, Tasks and More
  title_abbreviation : Using Jira
  author_id : nathan
  date : 2019-10-14
  masthead : true
  layout : article.njk
  tags : []
---

{% import '../_includes/escom.njk' as escom with context %}

I _really_ like using Jira. I value the order it brings to the complicated chaos of making, curating, and contributing to design systems. I’m no Jira admin, and I ain’t no certified scrummaster. That said, I’ve brought enough order to design system chaos using Jira to share the durable approaches I’ve learned.

Others have their _feelings_ about Jira, too. I don’t know how your enterprise uses Jira. I don’t know how your team wants to manage tasks. Every team is different: what’s been good for my teams may not work well for your teams. Most of my clients use Jira, but there are some that don’t. If you don’t, or if you use Jira differently, I hope the ideas presented here still help you.

I’ll start with how I approach starting a **Project**, add stories with good names (**Summary**) and organization (**Epics**), and iterate (**Sprints**) work over time and releases (**Versions**). Things will get complex as we break down work (**Subtasks**). Yet, all this data must lead us to coordinate efficiently in day-to-day ceremonies like the **Grooming**, **Planning**, and **Standups**. Let’s dig in.

---

## #0. Start from Company Convention

To use Jira, you need a project instance. Avoid the hypocrisy of sidestepping conventions imperfect for your team (ahem, you are a design systems pro, so grow up!) by learning how your organization uses the tool.

- Find a **Jira admin point-of-contact**. Ask around. I usually get a “Oh, you need to talk to…” by the third or fourth person I ask.
- Learn enough about your company’s **Jira project templates**(s), often detailed on Confluence.
- **Discuss options** with your squad and community if needed. Don’t move too fast. Huddle to ensure the template you want is best for your team.

When ready, create a project with the help of an admin, starting with a name.

---

## #1. Name the Project

Every Jira project needs a name (like `Design System`) and, more importantly, a namespace (like `DS-`). That namespace shows up everywhere: screens, comments, descriptions, emails, pull requests in Bitbucket (or similar), etc.

Examples here use `DS-` (for a generic `d`esign `s`ystem). In real contexts, I’ll emulate the namespace used in CSS classes or web component prefixes that our users encounter in their work. For the <a href="https://designsystem.morningstar.com/">Morningstar Design System</a>, it’d be `mds-`. Once your project is setup and named, welcome to your clean, intimidatingly empty backlog.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '1',
  image_alt = 'Jira empty backlog view',
  caption = 'Jira empty backlog view',
  class = ''
) }}

---

## #2. Add Stories

### Feature Development (50% of stories)

A design system backlog is rich with features we make, from visual style’s Color and Typography to a UI component library’s Icon, Button and Modal. Since 2016, my teams have been breaking down work per feature into repeatable steps: `Propose` (or Discover), `Design`, `Code`, `Doc`, and `Publish` as described in <a href="/articles/design-system-features-step-by-step">Design System Features, Step-by-Step</a>.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '2',
  image_alt = 'Jira backlog with feature stories (such as Color [Design]) and event-based stories (such as final workflow for a release)',
  caption = 'Jira backlog with feature stories (such as Color [Design]) and event-based stories (such as final workflow for a release)',
  class = ''
) }}

In Jira, each step per feature is represented by a separate top-level story, such as `Color [Propose]` (scoping the work), `Color [Design]` (iterating in Sketch or Figma ), `Color [Code]` (delivering mixins and tokens), `Color [Doc]`, and `Color [Publish]`.

Why multiple stories per feature? Feature delivery usually spans many sprints, each step ends with a clear definition of done, and steps are assigned to different team members, such as a designer for[Propose], [Design] and [Doc], and a developer for[Code] and [Publish].

### Recurring Events: Releases, Demos, and more (10% of stories)

Work isn’t just feature development. Work also includes predictable routines also tracked as stories, including:

- **Sprint grooming**, usually by a scrum master or product owner, from prior to the grooming session all the way to the planning sessions.
- **Sprint demos** including inviting special presenters and attendees, forming and sending agendas, recording, and posting materials afterwards.
- **Releases** that synchronize publishing design, code and documentation, including change histories, FTPing, and tools like Jenkins and Maven.
- **Communications**n usually following a sprint and/or release, that’s published across channels like Slack, email, and a wiki, blog or vlog.
- **Sprint turnover**, in which incomplete issues are moved, sprints are open and closed, and impacted individuals are notified.

Each of these are added regularly to and completed within a sprint, loaded with copious repeatable subtasks (see below).

### Other Stories (40% of stories)

All sorts of other work crops up: special research, strategic presentations, technical spikes, process documentation. These stories round out a backlog, comprising a non-trivial array of non-repeatable work. This work is difficult or impossible to model well, so we borrow conventions (like calling a process activities Code and Doc based on it’s outcomes) but acclimate and get comfortable with the rich heterogeneity of day-to-day reality too.

### Normalizing Story Titles

My pursuit of clarity (some say OCD) requires normalizing and improving story summaries that can be vaguely or imprecisely input by teammates. For example, I’ll often append a missing task type (`[Propose]`, `[Design]`, `[Code]`, `[Doc]`, `[Publish]`, `[Defect]`, etc). These small adjustments improve story scanability and consistency in Backlog and Active Sprint views.

---

## #3. Categorize Work in Epics

Epics organize work into well understood categories for filtering (using the Epics panel on the left) and scanning (a story’s category as badge per row). Too many epics can overwhelm. So we’ll limit epics to **evergreen** categories, **formative** epics for early work, and epics representing **growth** or **change**.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '3',
  image_alt = 'Jira epics set up for a formative period of a design system',
  caption = 'Jira epics set up for a formative period of a design system',
  class = ''
) }}

### Evergreen Epics

Some design systems work is like the mail: <a href="https://www.youtube.com/watch?v=LL6ubXD9ZjY">it never stops</a>. These persistent categories represent the work we are always doing:

- **Visual style**, including color, type, space, size, iconography, and more.
- **UI components** to fix, enhance, deprecate, or add.
- **Technical architecture** to improve testing, build tools, app integrations, and other technical bits beyond the source code of the library itself.
- **Operations** to run the program, and refine how it’s run.

### Formative Epics

When <a href="/articles/starting-a-design-system">starting a design system</a>, big investments are required even if they eventually taper off into normal business as usual. As a result, a formative period may also deliver on epics like:

- **Strategy** including the roadshow decks, presentations, cross functional alignment, solicitation of staff capacity, and the like.
- **Early Adopter** coordination to discover, align, collaborate, and experiment with how the system works.
- **Documentation** site to build capabilities to host, template, and render design guidelines, code examples, and other displays we know and love.

### Epics of Growth and Change

After a formative period yields a major release, work transitions into business-as-usual. Nevertheless, the system can evolve and grown with work like:

- Emerging feature categories like **Charts**, **UX Patterns**, **Editorial** as peers to visual style and UI components.
- Major initiatives to grow an existing category, such as a notable UI component expansion into **Navigation** or a **Forms upgrade**.
- Shifts in design or tech stacks that require strategy, experiments, and change management, like **Figma** (you know you’re doing it!) or **Web Components** (you know you want to!).

---

## #4. Order the Delivery with Versions

Versions can break down the work into periods that result in delivering value to your users. These versions enable teammates to see badges per backlog row and filter features and other stories relate to a particular release (such as `1.3.0`) or period (such as `2020Q1`).

Systems versioning at the library level may group stories into versions of:

- `Alpha (0.0.x)` to validate a system’s design and code architecture, such as for color and typography applied to icons and buttons.
- `Beta (0.x.0)` to progressively deliver a stabilizing set of UI component design, code and documentation to early adopters.
- `Launch (1.0.0)` for a complete library’s first major release.
- `Ongoing (1.x.x)` for work out-of-scope for launch, yet not breaking.
- `Next Major Release (2.0.0)` to bucket those stories – small to large – that will be breaking changes or major shifts to save for later.
- `Not Yet Prioritized` for work that’s come in recently but hasn’t been assigned a release.
- `Business as Usual` for work that’s part of a day-to-day operations and not tied to any particular delivery.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '4',
  image_alt = 'Jira versions across a range of releases and business-as-usual',
  caption = 'Jira versions across a range of releases and business-as-usual',
  class = ''
) }}

Once such a team completes its Launch 1.0.0, versions can shift to:

- `Next Minor Release (1.4.0)` for work to deliver in the next sprint or two, after which retire that version and add Next Minor Release (1.5.0).
- `Ongoing (1.x.x)` for work out-of-scope the next minor release.
- `Next Major Release (2.0.0)`

If the team tends to deliver a minor release just about every sprint, then the `Next Minor Release` approach is redundant. Instead, the active sprint serves the purpose of scoping the next minor release, and all near term work organized into the Ongoing (1.x.x) version.

For teams versioning at the component level, we’ll use versions to group stories by an increment of time, such as:

- `2019Q4`, `2020Q1`, and `2020Q2` for three upcoming quarters.
- `Not Yet Prioritized`, `Business as Usual`, and other designations.

### Jira Epics and Releases, Combined!

Some teams use many, many more epics and may not even use versions. When I introduce the approach described above, their chief complaint is something like “These epics are too broad. There’s too many stories per epic to deliver something meaningful.”

However, epics shouldn’t stand alone. Instead, filtering by epic and version should result in a small set of stories pursued as a meaningful objectives. Both dimensions – independent, applied together – has proven incredibly valuable.

---

## #5. Filter with Quickfilters

I’ll create Jira quickfilters to ease filtering stories by team members using succinct initials (such as NC for Nathan Curtis). These filters are essential during ceremonies like standup and planning as we discuss stories person by person. Recently, Jira has added an avatar-based list of assignees above this feature, also useful for filtering.

Beyond names, other quickfilters have proven helpful:

- **Contributor** assignees, filtering using a Jira Label applied to those stories assigned to those outside the core team lacking their own quickfilter.
- **My issues** for anyone looking at the backlog.
- **Not done**, filtering the display to show only incomplete work.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '5',
  image_alt = 'Quickfilters for team members and other special cases',
  caption = 'Quickfilters for team members and other special cases',
  class = ''
) }}

---

## #6. Iterate with Sprints

Most of my systems teams iterate in two-week sprints. My habits for managing sprints include:

- Append a **date the sprint ends**, such as [Ends 10/1], to every sprint title.
- Using two or at most three **upcoming sprints** to collect stories from (a) the current sprint that are no longer feasible or (b) the backlog to organize and signal upcoming work to assignees.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '6',
  image_alt = 'Additional sprints for dragging tickets',
  caption = 'Additional sprints for dragging tickets',
  class = ''
) }}

---

## #7. Break Down and Assign Work with Subtasks

Let’s be honest. It ain’t simple to make visual style and components at high quality to serve many contexts. There are so many tasks involved to setup, make, test, present, review, and commit work each step of the way: `[Propose]`, `[Design]`, `[Code]`, `[Doc]`, and `[Publish]`. I recently created a superset of all these subtasks, across steps, that many teams conduct.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '7',
  image_alt = 'Chart of subtasks per feature development steps',
  caption = 'Chart of subtasks per feature development steps',
  class = ''
) }}

Yet, once you tame the beast of all these repetitive tasks, you can use a Jira add-on to create and apply subtask templates — a collection of reusable subtasks — to common story types. There are many add-ons to choose from, such as <a href="https://marketplace.atlassian.com/apps/1216960/automatic-subtasks-add-on?hosting=cloud&tab=overview">Automatic Subtasks</a> Add-On and <a href="https://marketplace.atlassian.com/apps/1214056/sub-task-manager-for-jira?hosting=cloud&tab=overview">Subtask Manager</a> (shown here).

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '8',
  image_alt = 'Subtask Manager Template of many [Proposal] step subtasks',
  caption = 'Subtask Manager Template of many [Proposal] step subtasks',
  class = ''
) }}

As a step begins, apply a template to auto-generate subtasks needed. For example, a `[Propose]` story could apply a subtask template with:

- **Pre-proposal** reviewing similar apps and sites as well as existing system components for similar patterns.
- **Proposal** scoping and authoring.
- **Presentation** to the system team, design community, and dev community.
- **Reviewing** and commenting by system team and community members.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '9',
  image_alt = 'Propose story, with subtasks generated and assigned',
  caption = 'Propose story, with subtasks generated and assigned',
  class = ''
) }}

For a contribution of a new `Dialog` component, we’ll populate a `[Propose]` story with relevant subtasks, assign most of them to a contributor, and also assign review tasks to the team member shepherding the work.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '10',
  image_alt = 'Subtask templates for feature development, releases, and sprint management',
  caption = 'Subtask templates for feature development, releases, and sprint management',
  class = ''
) }}

Subtask templates are addictive. They’ll remove the mundane repetitiveness of typing in work, and provide immediate clarity and structure as a checklist. Within days of creating our first template, we’d created templates for:

- **Feature development** step (`[Propose]`, `[Design]`, `[Code]`, `[Doc]`, and `[Publish]`) as well as specialized, shorter template for [Defect].
- **Recurring sprint events** like sprint planning, demos, announcements.
- **Common release** types of minor, patch/fix releases.

### Subtask Norms Take Time

Team norms around how to use subtasks effectively take time. Encourage patience as your team adapts. The detailed descriptions, assignment timing, and handing off work takes some getting used to. Over time, I’ve come to embrace behaviors like:

- **Mass assign most of the subtasks** to the parent story’s assignee at the moment you generate subtasks. Automating these assignments is preferred to that assignee having to manually (and annoyingly) assigning each subtask to themselves later on.
- **Empower team members to generate subtasks themselves**. While some resist project management as “not my job,” most are empowered and educated about work ahead when they add subtasks for themselves.
- **Prune irrelevant subtasks**. If a story doesn’t require it, delete it.
- **Don’t overwhelm contributors** unfamiliar with a process. Consider limiting contributor subtask assignments to only those that are active.
- **Don’t preassign review subtasks**. Instead, wait until the review is ready to begin. Almost no one prefers a subtask to appear in their view if they can’t start yet.

---

## #8. Moderate Ceremonies with Efficiency

When used most effectively, Jira becomes a hub of communication and the central tool for facilitating regular team-wide ceremonies of grooming, planning, and standups.

### Jira for Sprint Grooming

Working with (most often a small subset of) the team, I’ll present Jira’s Backlog view to:

- Tag stories with without epics and versions, properly categorizing and applying a `Not Yet Prioritized` version.
- Polish story summaries / titles based on team norms.
- Discuss and prioritize stories marked Not Yet Prioritized into a version.
- Communicate with submitters of proposals, defects, and feature requests.
- Comment to assignees / submitters to fill gaps in insufficient descriptions.
- Generate subtasks for design, code, and doc tasks about to be assigned.
- Move stories between sprints and assignees to setup for planning.

### Jira for Sprint Planning

After the team agrees on sprint goals, we’ll focus on Jira’s Backlog view to:

- Move incomplete tasks in the current sprint to the next sprint.
- Overall, align agreed objectives with stories in the next sprint.
- Review, prioritize, and sequence task assignment, per person using the Quickfilter filter by that assignee.
- Review, prioritize, and assign tasks not yet assigned.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '11',
  image_alt = 'Jira’s Active Sprints view of To Do, In Progress, and Done',
  caption = 'Jira’s Active Sprints view of To Do, In Progress, and Done',
  class = ''
) }}

### Jira for Standup

Most teams I work with conduct a standup two- to three times per week, using Jira’s Active Sprints view simple columns of `To Do`, `In Progress`, and `Done` to chart and progress current tasks. During that meeting, I’ll:

- Always filter the display to a specific assignee and Not Done, to vastly simplify the view.
- Review ongoing work per person based on their Quickfilter.
- Start with an assignee’s subtasks that review and coordinate other people’s work (where the assignee has subtasks other people depend on) before they describe larger stories they own.
- Move tasks across columns and add details as needed and can be done quickly, but otherwise ask assignees to do that themselves in the background to move conversation forward.

I’ve seen some teams employ a much more complex Active Sprints view, with many many columns corresponding not just to top level tasks (like `Design`) but also reviews and handoffs (like `PR Review`). That has never worked for me, in that our tasks are to heterogeneous, our steps and subtasks too fluid, to make a top-level status board that rigid.

---

Jira is an acquired taste, and using it effectively across a team takes time, commitment, flexibility, and a willingness to converge on a shared language. In my work across many teams, Jira’s effectiveness seems correlated with those teams invested in a system’s long arc. Those are just the teams and systems I want to work with most.
