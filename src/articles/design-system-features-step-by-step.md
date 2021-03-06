---
  category : Process
  title : Design System Features, Step by Step
  deck : A Workflow to Design, Build and Document Each Part
  title_abbreviation : Features, Step by Step
  author_id : nathan
  date : 2017-09-14
  masthead : true
  layout : article.njk
  tags : []
---

{% import '../_includes/escom.njk' as escom with context %}

Some teams barely organize how things get done. They’ll add a dash of design here, dive deep into code there, and maybe sprinkle on documentation as an afterthought. “Should we make this? What should it be? When do we QA?” For less disciplined teams, who the heck knows.

Lacking a workflow, a team litters a backlog with heterogeneous, overlapping tasks. From afar, you can’t learn or remember task objective and outcome(s). It’s impossible to relate one task to another. Friction and uncertainty ensue as a team drifts through day to day collaboration.

On the other hand, a defined workflow helps a team mutually understand the scope, reviewers, tools, and the definition of done at each step. With a workflow, collaboration tightens, delivery quickens, and the team predictably delivers features that products love.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Step by step process, from discover to design to build to doc to publish',
      caption = 'The EightShapes Five Step System Workflow',
      class = 'escom-article-figure--break-bleed'
  ) }}

My system teams make most features — visual style, UI components, documentation tooling, UX patterns, and more — by following simple, identified steps of **discover** , **design** , **build** , **documentation** , and **publish**. I can’t imagine building a design system without it.

---

## #1. Discover

Discovery clarifies the potential and the relevance of a new feature and decides whether or not to pursue it.

_Assigned To_: Anyone on the team, although usually a designer, front-end developer or product manager.

_Activities_: Triaging requests, interviews, products and system analysis, discussions with influential partners in the community, and even formal proposal processes like a [contributor’s Request for Comment](/articles/contributions-to-design-systems).

_Definition of Done_:

- As a system team, we understand the scope and cost of making this feature and who may do each step.
- As a system team (or product manager), we’ve (or I’ve) agreed or declined to or pursue this feature and prioritized it in our backlog.

---

## #2. Design

Design finalizes a range of variations, states, and other dimensions at high fidelity so that Build can be completed, whether for visual style (e.g., new icons!), UI components (like a button), or documentation displays (like a Color page’s swatches).

_Assigned To_: A designer.

_Activities_: Iterative design work and critique.

_Tools_: We’ll employ tools like Sketch, InVision, or Photoshop, finalizing work at a high-fidelity consistent with system conventions.

_Definition of Done_:

- As a design director (or similar role), I’ve approved the final design.
- As system designer(s) _and_ in the community, we’ve agreed that the design solves the problem and is suitable for use across products.
- As the assigned system engineer, I have the sufficient level of variations, states, and other details to complete a build.

---

## #3. Build

Build results in the codification of HTML, CSS, JavaScript, and other code.

_Assigned To_: Usually a front-end developer, although at times a designer.

_Activities_: Front end development and [testing, often in the context of a “kitchen sink” pages](/articles/component-qa-in-design-systems) (not documentation site pages) that demonstrates the range of the feature’s capabilities isolated from other system concerns.

_Tools_: Code and assets, git to manage within prescribed branches, and pull requests to comment and task corrections.

_Definition of Done_: To merge the feature into a release…

- As the assigned system designer, I’ve reviewed the build’s quality and confirmed it properly implemented scoped features.
- As a peer system engineer (or QA specialist), I’ve reviewed that the build functions properly, meets all [quality criteria](/articles/component-qa-in-design-systems) (accessibility, browser support, etc), and adheres to system’s code styles and conventions.

---

## #4. Doc

Ah, Doc, the task often conflated with Design or Build or ignored until the last minute. To our teams, Doc is different, focused on communicating not _what to build_, but instead _what’s built_ and _how to use it_. Doc is a separate task so that our authors focus on the quality and depth that system users crave.

_Assigned To_: The designer and/or front-end developer doing the work.

_Activities_:

- Author documentation copy for topics like Use When, Behaviors, Editorial, and other guidelines relevant to the feature and it’s variations.
- Identify if not create final code/example demonstrations.
- Compose illustrations, interactive demos, and screenshots.

_Tools_: **Author in Google Docs, NOT Pull Requests!** This collaboration includes a designer, engineer, reviewer(s), and ideally a technical editor too. Pull requests are primitive, limiting comments to lines.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Screenshot of Google Docs with many revisions highlighted',
      caption = 'Google Docs revision history of a Color page, highlighting suggestions and edits from one of history’s 60 total edits.',
      class = ''
  ) }}

Google Docs is made for collaborative authoring in which you can comment on any word or image as well as suggest and manage changes inline.

_Definition of Done_:

- As a system user, I’ll have sufficient design guidance (use when, behaviors, visual style, content, & more) and code specs (reference tables, variables, code/example demos) to use the feature correctly.
- As a systems technical editor, the documentation reflects the content models and editorial standards for our documentation.

---

## #5. Publish

Once documentation is complete, it must be migrated to the publishing platform for release.

_Assigned To_: Front-end developer or designer capable of working in code.

_Tools:_ Most system teams I’ve come across use some form of HTML templating (ours: [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) weaving [Markdown](https://daringfireball.net/projects/markdown/syntax) and homegrown [Documentation Components](/articles/design-system-doc-components) together), while others hand-code HTML page-by-page (Ack!) or have a more formal CMS (Wordpress or Drupal, anyone?).

_Activities_:

- Migrating copy from Google Docs to the publishing platform.
- Uploading assets like images, design templates, and interactive demos.
- Finalizing live code/example demos.
- Testing page display, links, and other publishing QA.

_Tools_: Usually an assortment of assets that weave into a system’s site experience, the rubber meets the road with the composed and published page(s), achieved via however content is managed.

_Definition of Done_:

- As a system team collaborator, I’ve reviewed committed page changes and tested page displays and links.
- As a system user, I have access to in-depth documentation of a complete feature I can use.

---

## Steps Aren’t a Waterfall, But Do End Sequentially

While the workflow suggests a strict sequence, that doesn’t necessarily imply a waterfall where subsequent steps don’t begin until their predecessor ends. Instead, it’s very common to conduct steps — Design, Build, and Doc — simultaneously, even if the intensity of one is driving the work.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Diagram of steps overlapping with many substeps annotated',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

For example, as design solidifies, we’ll start our Google Doc to itemize requirements and collaborate on naming and also start to build prototype HTML and CSS to validate the design. Later on, we’ll review of draft of fully coded designs and shortly thereafter close the design step as a result.

That’s why we’ll have top-level JIRA tasks for each step, since different people may be working different steps at the same time, and each task has different reviewers (for which we use subtasks). There are other ways to model this in JIRA, but this setup works for us.

Nevertheless, the steps _end_ sequentially, such that Design closes before Build, and Build closes before Doc. Publish, at the end, is the only task that doesn’t begin until all the other steps have concluded.

---

## Not All Features Require Every Step

Discovery is unnecessary for many features of any self-respecting design system such as color, buttons, or form controls. Instead, each starts with design and progress through remaining steps.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Diagram of steps overlapping yet ending in sequence',
      caption = '',
      class = ''
  ) }}

However, many other tasks use a subset of the workflow to make things. A helpful Getting Started page or description of a Contribution process requires only documentation and thus omits Design and Build:

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Diagram of a subset of steps',
      caption = '',
      class = ''
  ) }}

Similarly, UX patterns don’t result in reusable code, but can require discovery to assess cross-product relevance and needs and iterate through design ideas before being formally documented and published on a system site.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Diagram of a subset of steps',
      caption = '',
      class = ''
  ) }}

---

## For Trivial Tasks, Combine Steps

Our team will also classify Sketch symbol library development as a Design task that’s followed by combination of Doc (change the version number, describe the change in one line in the release history) and Publish as a single task:

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = 'Diagram indicating combined steps',
      caption = '',
      class = ''
  ) }}

In another case where a feature — like a disabled state — is documented sufficiently by a coded example and requires no further elaboration, we’ll skip the Doc step and combine Build / Publish step.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '8',
      image_alt = 'Diagram indicating combined steps',
      caption = '',
      class = ''
  ) }}

In any case where steps are combined into a single task, the completion criteria for all steps still apply to the task.

---

## Reflect the Steps in Task or Subtask Titles

Naming conventions — or lack thereof — within a backlog can reflect a level of predictability and rigor of a team.

As I’ve instituted this workflow across many teams over the past few years, our backlogs have become a scannable set of titled tasks for which we can accurately predict the outcomes, reviewers, and relationships of each one.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '9',
      image_alt = 'Comparison of Jira task titles, verbose and unstructured versus succinct and structured',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

We’ll use the ticket’s title to reflect a feature’s name and workflow step, and leave the acceptance criteria and deeper descriptions to the details.

---

## Structure Reports to Visualize Doneness

Using a well-modeled workflow, the system team can report on progress across features in a structured fashion, helping stakeholders (and sponsors!) see how the team progresses towards the goals of a first release or beyond.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '10',
      image_alt = 'Doneness matrix as a scoreboard of a component library release',
      caption = 'First Release <a href="https://medium.com/p/doneness-matrices-c7f0a026365f" target="_blank">Doneness Matrix</a>',
      class = 'escom-article-figure--break-bleed'
  ) }}

At the beginning of every sprint leading up to a first release, I’ll include this table of visual style and UI component features progressing across steps. This gives stakeholders a sense of progress, both item-by-item as well as for the overall release scope.
