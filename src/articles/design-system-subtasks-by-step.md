---
  category : Process
  title : Design System Subtasks, by Step
  deck : Decompose Your Workflow into Checklists
  title_abbreviation : Subtasks, by Step
  author_id : nathan
  date : 2020-02-06
  masthead : true
  layout : article.njk
  tags : []
---

{% import '../_includes/escom.njk' as escom with context %}

Top-level steps to develop a system feature-from `Propose` and `Design` to `Code` and `Doc`-are valuable but not enough. Teammates made different assumptions about what's needed to complete a step. High-level definitions-of-done were helpful. Yet, outputs lacked robustness when smaller substeps were completed inconsistently. Team members called for checklists to identify everything expected along the way.

This post introduces **Subtasks** per **Step** organized in **Phases**. Each of four major steps - `Propose`, `Design`, `Code` and `Document`-are expanded to include detailed subtasks with examples revealing what subtasks are needed when. The post concludes with advice on **assignments**, **tracking** and the **balance** between not enough and too much

---

## Breaking Down Step into Phases, Per Step

Delivering a feature like a component or visual style upgrade progresses through top-level steps like Propose, Design, Code, Doc and Release.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '1',
  image_alt = 'A typical five-step process for delivering a system feature',
  caption = 'A typical five-step process for delivering a system feature',
  class = 'escom-article-figure--break-bleed'
) }}

There are many activities in each step. So many that they feel unwieldy. So, when creating a process for a team, I'll encourage them to consider subtasks across phases of work, including:

- **`START`** sets up files (usually templates) and audits for reusable things
- **`COMPOSE`** involves what most perceive as "the work" to create something
- **`TEST`** involves assessing that work against standards of quality
- **`PRESENT`** involves the broader community for face-to-face discussion
- **`REVIEW`** involves peer inspection, with comments and corrections
- **`DELIVER`** involves the final edits, readying work for the next step

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '2',
  image_alt = 'Each step can be broken down into six phases in a typical sequence',
  caption = 'Each step can be broken down into six phases in a typical sequence',
  class = 'escom-article-figure--break-bleed'
) }}

Different phases require different lengths of time. Phases like `START` and `DELIVER` move swiftly. `COMPOSE` requires many steps, the most work and the most time. `TEST`, `PRESENT`, and `REVIEW` include checks to ensure quality, involve the community, and trigger iteration to ensure things are made well.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '3',
  image_alt = "Phases aren't all the same duration; START is quick and COMPOSE can be longer",
  caption = "Phases aren't all the same duration; START is quick and COMPOSE can be longer",
  class = 'escom-article-figure--break-bleed'
) }}

Each major process step - `Propose`, `Design`, `Code`, `Documentation`-shares these common phases from start to finish, even if the subtasks vary for each.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '4',
  image_alt = 'All steps have `START`, Compose, Review, and Deliver phases',
  caption = 'All steps have `START`, Compose, Review, and Deliver phases',
  class = 'escom-article-figure--break-bleed'
) }}

For example, all steps start from a template, even though a Design template is far different than a Documentation authoring template (or is it?). A Design step tests some accessibility and possibly usability, whereas Code delves into more accessibility along with unit, regression, and functional tests.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '5',
  image_alt = 'Substeps per phase per step',
  caption = 'Substeps per phase per step',
  class = 'escom-article-figure--break-bleed'
) }}

Organizing work with phases, a teams can identify subtasks needed to deliver a robust, high quality feature predictably. The following sections illustrate common subtasks included in Propose, Design, Code and Doc steps.

---

## Propose

The Propose step requires a system to consider not a quick component for themselves, but a robust components for everyone. The step is done when a team decides whether to pursue a feature, scopes requirements, and plans the work. As a result, it demands auditing and collaborating with many people.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '6',
  image_alt = 'Propose process',
  caption = '',
  class = 'escom-article-figure--full-width'
) }}

### Common Propose Subtasks

- **`START`**: A proposal starts with basics (a template like: What? Why? For Who/How Many? By When?) whether by system team or contributor. An audit across experiences follows to assess needs and current patterns.
- **`COMPOSE`**: The proposer articulates feature direction, scope, and related ideas. For simple UI components, lists of "Must", "Should", "Could", "Nice to…", and "Won't" Haves may suffice (see List Group below). Proposing a complex layout grids with rows, columns, offsets, breakpoints, and more may take pages and include proposed values and code demos. These details lead to feature prioritization during reviews and presentations.

```
List Group Proposal

## MUST HAVE

Item names, vertically stacked
Linked (Linked or unlinked items)
Size (Large, medium or small)
Microcopy (above OR below but not both?)
Pill (trails title as span element)
Icon (on left)

## COULD HAVE

Sublist (indented, L2 small text within L1 medium text, L2 medium text with L1 large text)
Sublist expand/collapse
Sublist expanded (default false)
Selected / active item(s)
Microcopy location (above or below?)
Eyebrow heading (included or separate component? If so, include ARIA connection between header and list below it.)
Badge (for count of items)
Checkbox (for interactively toggling an item)

## DEPENDENCIES

heading
icon
link?
checkbox?
pill? (for badge)
accordion? (for sublist expand/collapse)
```

- **`TEST`**: N/A for Propose.
- **`REVIEW`**: System team members, product owner, and a community should have the opportunity to read, comment and make suggestions.
- **`PRESENT`**: The proposer typically presents proposed ideas to a system team and then to design and developer communities and leaders, if necessary.
- **`DELIVER`**: If the feature is approved, finishing a Propose task involves finalizing scope and planning next steps. This can include making and assigning Jira tickets for `Design`, `Code`, and `Doc` steps.

### Other Propose Considerations

In contrast to `Design`, `Code`, and `Doc` steps that follow, `REVIEW` typically precedes `PRESENT` during the `Propose` step.

---

## Design

The Design step solves for interface and visual design. It's considered done when a designer delivers a complete design to a developer to code the feature.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '7',
  image_alt = 'Design process',
  caption = '',
  class = 'escom-article-figure--full-width'
) }}

### Common Design Subtasks

- **`START`**: Start quickly from a symbol-loaded template (Teresa Aguilera of Gap Inc suggests structuring templates as a "Mad Libs" for component design), and aggregate and normalize art from any other sources.
- **`COMPOSE`**: Design the feature-variations, states, responsiveness, content samples, the works-while ensuring it's fully integrated design tokens and annotated for presentation and a developer's coding.
- **`TEST`**: For designers, testing accessibility is a must while feature usability is often considered optional at best.
- **`PRESENT`**: The design makes the rounds: system designers, system team overall, system leaders, and the design community. Presentation priority varies by organization. That said, healthy and regular system discussion within design community critique is correlated with good system health.
- **`REVIEW`**: The developer assigned to `Code` the feature should engage no later than late in `Design`. Accessibility review during Design is smart. Engaging content strategy for review is a bonus for many teams!
- **`DELIVER`**: A designer ensures artwork and annotations are complete, tokens integrated, and details expanded on prior to developer handoff.

### Outside Participants

Design may require participation others, here from high-to-low priority:

- **Design community**, engaged via critique, communication (such as Slack posts in #system-design) and ad-hoc working sessions.
- **Accessibility specialist**, for a thorough review later in the process.
- **Content strategist**, to address content in design ? If you can, it's vital.
- **Researchers** seem quite rare in most design system tasks.

### Other Design Considerations

What of `Design Assets` built into design software like Sketch or Figma? These may require adjustments as `Code` progresses and be completed later along with `Doc`. Therefore, some teams separate a `Design Assets` from the `Design` step concluding earlier.

---

## Code

The `Code` step includes setting up an environment, composing and testing thoroughly, and engaging the system team and developer community before merging an approved solution. Community engagement via presentations is rarer but recommended. However, testing and reviews are quite thorough.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '8',
  image_alt = 'Code process',
  caption = '',
  class = 'escom-article-figure--full-width'
) }}

### Common Code Subtasks

- **`START`**: Create code branch, generate file(s), and source reusable code (to acclimate to tools, similar components, and visual tooling available).
- **`COMPOSE`**: Draft an API and review it with the dev community. Code the HTML, CSS and JavaScript. Create robust visual tests. Document the API. Don't forget: update dependent components that are impacted, too!
- **`TEST`**: What's your <a href="/articles/component-testing-plans">testing plan</a>? Mine includes functionality, browsers and devices, unit tests, visual regression, and accessibility (both automated with <a href="https://developers.google.com/web/tools/lighthouse">Google Lighthouse</a> or <a href="https://wave.webaim.org/">Wave</a> and manually via <a href="https://en.wikipedia.org/wiki/JAWS_(screen_reader)">JAWS</a> or <a href="https://www.chromevox.com/">Chromevox</a>).
- **`PRESENT`**: Presenting to the assigned designer and system team presumed and sometimes simultaneous. A developer community presentation is rare; a quick demo during a system's sprint review may suffice.
- **`REVIEW`**: Many can engage during a pull request: designer (inspects features visually, combing for <a href="/articles/tokens-in-design-systems">design tokens</a>), developers (inspecting and running tests), accessibility specialist (engaged from outside the team).
- **`DELIVER`**: Ultimately, `Code` finishes with a merged pull request, often including a changelog and patches rippling across dependents.

### Outside Participants

Code may require participation others, here from high-to-low priority:

- **Accessibility specialist**, for a thorough review later in the process.
- **Developer community**, engaged via communication (such as a Slack post in a #system-developers thread) or face-to-face working group meeting.
- **Quality assurance** (QA) are quite rare in design systems I've come across.
- **Content strategist**, to inspect coded visual test cases? What a luxury.

### Other Code Considerations

- Teams end up with many, many `Code` subtasks. As such, don't overwhelm a developer with all of them. Instead, add a phase or two's worth (such as `START` and `COMPOSE`) to the ticket, saving other subtasks for later.
- Disciplined teams invest heavily in testing capabilities. Therefore, `TEST` subtasks can exceed `COMPOSE`, and the two phases could actually reverse (in <a href="https://en.wikipedia.org/wiki/Test-driven_development">test driven development</a>), overlap or iterate back and forth.
- When doing small things (fix a defect, enhance a feature), exclude subtasks for things that already exist (`Generating file(s)`, `Create visual testing page`) or won't change (`Document API`). Also limit `TEST`, `PRESENT`, and `REVIEW` subtasks to what's needed. As a result, Code for fixing a defect should have far fewer subtasks (see diagram below).

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '9',
  image_alt = 'For defects, minimize needed subtasks commensurate with TEST, PRESENT, and REVIEW needed',
  caption = 'For defects, minimize needed subtasks commensurate with TEST, PRESENT, and REVIEW needed',
  class = 'escom-article-figure--full-width'
) }}

Coordinate community engagement in a timely way. If `Review API with Dev Community` blocks getting started, then move it backward into `INTIATE`. If feedback is expected to be light, move it forward (into `TEST`, `PRESENT` or… just `REVIEW` it).

---

### Documentation ("Doc")

There's more to documentation than just code's Props, Methods, and Events (which may be completed during `Code`). There's <a href="/articles/component-design-guidelines">design guidelines</a>. There's copious <a href="/articles/component-examples">examples with meaningful content</a>. There's accessibility notes, for both designers and developers. Producing a robust feature with rigor? For design systems, that means subtasks for documentation too.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '10',
  image_alt = 'Doc process',
  caption = '',
  class = 'escom-article-figure--full-width'
) }}

### Common Documentation Subtasks

- **`START`**: Set up a documentation file from a template, such as a Microsoft Word, Google Doc, or a generated code file.
- **`COMPOSE`**: Author varying content types, from <a href="/articles/documenting-component-introductions">component introductions</a> to <a href="/articles/component-examples">examples with real content</a>, from <a href="/articles/component-design-guidelines">design guidelines</a> to accessibility notes for design and code.
- **`TEST`**, **`PRESENT`**: N/A for Doc, or at least optional depending on the scale of material.
- **`REVIEW`**: For `Doc`, reviews feel more contained within the system core team. Both disciplines-designer, developer-should review all content types. Additionally, I value when teams engage a content strategist as a "System Editor" for quick reviews queued ad-hoc over time.
- **`DELIVER`**: Depending on your process, migrating (to Markdown?) and publishing may be a subtask within _this_ `Doc` step or a `Publish` step.

### Outside Participants

Doc may require participation of those outside the system team including:

- **Design and developer community** members, less formally but valuable to review emerging work, often notified in messaging or email apps.
- **Content strategist** as "System Editor" to review queued materials.
- **Accessibility specialist** to compose or review accessibility guidelines.

---

## Assignments, Integration & Tracking

Woah! That's a ton of substeps! So much work is required to be meticulous and robust. How do teams stay on top of it all?

### Per Step, Assign a "Main Owner" and Integrate Others

By breaking down steps into subtasks, we can assign different subtasks to different people.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '11',
  image_alt = 'Per Step, Assign a "Main Owner" and Integrate Others',
  caption = 'Per Step, Assign a "Main Owner" and Integrate Others',
  class = 'escom-article-figure--break-bleed'
) }}

When a new feature `Code` step is assigned to a system team developer, they'll complete nearly all tasks except reviews. On the other hand, a less seasoned contributing developer outside the system team may complete `START` and `COMPOSE` tasks, partner with a system team developer to `TEST` and `PRESENT`, and gradually cede `REVIEW` and `DELIVER` tasks.

### Best: Integrate Tasks in Tools!

I'm really encouraged by teams and tools like Storybook that build many substeps into directly into tools. For example, <a href="https://twitter.com/domyen/status/1225110323625123844">Dominic Nguyen exposed tooling</a> that blocks merging code until sufficient reviewers, outstanding comments, and other workflows have been completed.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '12',
  image_filetype = 'gif',
  image_alt = 'UI checklist for Storybook in Chromatic.com',
  caption = 'UI checklist for Storybook in <a href="http://chromatic.com">Chromatic.com</a>',
  class = 'escom-article-figure--break-bleed'
) }}

The more designer and developer tools integrate these substeps into tools naturally, bringing the workflow into the work, the better. While I may spend considerable time orchestrating data in Jira, my teammates don't. They'd much rather spend time in their own tools, collaborating and running commands to get work done.

### Better: Task Management Details

Nevertheless, tools like Jira and Asana exist for a reason. We're currently far from tracking every subtask across every step for every feature. While we can optimize the heaviest step (`Code`) for things we make the most (UI Components), tooling `Propose`, `Design`, and `Doc` for things like UX patterns, visual style, and others is reach too far for tools today.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '13',
  image_alt = 'Propose story, with subtasks generated and assigned',
  caption = 'Propose story, with subtasks generated and assigned',
  class = 'escom-article-figure--break-bleed'
) }}

Therefore, teams integrate common, repeatable checklists as subtasks per step into how they use Asana or <a href="/articles/using-jira-for-design-systems">Jira for design systems</a>. For example, one team I worked with created checklists consistent with their workflow, easily copied into Jira's Create Multiple Subtasks dialog when the time is right (below, for a `Propose` task).

<esds-code-snippet max-height="none">
- Discover requirements, including audits / assignee:"@current"
- Obtain input on scope from communities / assignee:"@current"
- Document scope and plan / assignee:"@current"
- Present in system team critique / assignee:"@current"
- Present in design critique / assignee:"@current"
- Review by system product owner
- Review by system designer
- Review by system eveloper
- Approve or decline proposal, including feature name / assignee:"@current"
- Add, prioritize and assign Jira tasks / assignee:"@current"
</esds-code-snippet>

---

### Split Subtasks Across Iterations to Not Overwhelm

Kevin Powell and I work together often across different client engagements. He's experienced workflows like these many times, and bristles at a Code step with so many substeps obviously unrealistic to complete in an iteration.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '14',
  image_alt = 'Process phases split across two sprints',
  caption = '',
  class = 'escom-article-figure--break-bleed'
) }}

Instead, he prefers breaking down all the substeps into smaller chunks. This model directly suggests how to do so, such as `START` and `COMPOSE` in one sprint followed by `TEST`, `PRESENT`, `REVIEW`, and `DELIVER` in the next sprint.

---

Subtasks per step offer robustness, lead to quality, and generate confidence and trust that the system is a disciplined, focused effort. However, with rigor comes complexity, wider coordination, and overhead. Things can slow down.

As I work with teams, I encourage two things: balance and gradual, incremental growth. It's hard for a team to adapt to all these steps all at once. It's a lot. So take it one step at a time. Use these categories, examples, and practices to norm operations on a practice that suits you best. You'll get there!
