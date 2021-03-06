---
  category : Contributions
  title : Contributions to Design Systems
  deck : Opening a Library to a Community’s Code, Design, and More
  title_abbreviation : Contributions
  author_id : nathan
  date : 2017-03-14
  masthead : true
  layout : article.njk
  tags : []
---

{% import '../_includes/escom.njk' as escom with context %}

For a design system to thrive and scale within a larger product ecosystem, central system team members can’t make all the decisions, design all design, code all code. Instead, a system practice must [model and foster a federated community](/articles/team-models-for-scaling-a-design-system), opening the door to contributions far and wide. Don’t underestimate the effort to create and run these processes.

The open source community offers rich examples of well-documented contribution models, including [Rust](https://github.com/rust-lang/rfcs), [Ember](https://github.com/emberjs/rfcs), and [Node.js](https://nodejs.org/en/get-involved/development/). What follows is an expansion of those ideas to broader considerations needed to serve a diverse design system community.

---

## Who & What? Designer’s Design, Developer’s Code, People Do Make Lots of Things

Code is truth. Therefore, a system must articulate the expectations and process for submitting and reviewing code, usually via pull requests. However, from the outside, a system isn’t _just_ code: it’s design decisions, documentation, editorial word lists, the works.

Therefore, a system team should be ready for diverse contributions like:

- A designer contributing component design via Sketch files, even though the component isn’t built in system code.
- A code-wary designer offering a new colors for charts & visualizations.
- An editor expanding the published word list (XLS) with 50 additional entries along with another Do/Don’t pair for a punctuation page.

In many cases, a systems team slots such contributions into the system backlog. Yet, even if taken up, such contributions still require back and forth to clarify requests, work on naming, and more.

_Takeaway_: Consider the range of disciplines and experience levels served by the system, define how non-coders submit works, and anticipate level-of-effort needed to integrate some contributions from the outside.

---

## How Big? Small Changes Are Easy, Large Changes Are Hard

While contributions come in many sizes, you can usually classify them as small or large.

### Small Changes

Small changes can include fixing a functional, visual, or accessibility defect, objective improvements (such as a focus state), performance, and browser support. For code, such changes can be submitted as a pull request to a designated branch in the system repository, reviewed, and implemented in the team’s normal workflow.

### Large Changes

On the other hand, even a simple pull request (PR) can touch upon a system’s architecture, challenge widely applied conventions, or be “bigger than a breadbox.” Large changes can include:

- Alterations to the system’s visual languages built into constants woven across many CSS properties, mixins, and/or components.
- Proposing a new component.
- Enhancements that require breaking changes to markup and/or script.
- New documentation for concerns not already covered.

In those cases, system team members must devote more effort to consider impacts and guide, collaborate with and review contributions.

_Takeaway_: Distinguish what constitutes a small change from a large change, and deflect larger changes to an established review process.

### Process for Large Changes: “Request for Comment” (RFC)

For more substantial changes, a system must empathize with contributors by offering an easy to understand process that doesn’t waste their time. I find inspiration from the Request for Comment (RFC) model described by [Rust](https://github.com/rust-lang/rfcs) and [Ember](https://github.com/emberjs/rfcs).

Such a process should step through discussion, proposal with preliminary work and an ultimately larger time commitment in delivering and reviewing a polished, testing, and acceptable revision.

Steps could include:

1. **Initial Discussion** , often casual with system team members and/or the community, triggered by an request form, or discussed in a system critique session. “Check out our Contributor’s Guide at [enter URL here]” is a must have.
2. **Formal Proposal** outlining the contributor, detailed description, rationale, sub-team area (visual style, UI component, [UX pattern](/articles/patterns-components), or other concern), and relationship with ongoing system and product efforts.
3. **Triage & Clarification** period to triage the request to refine and detail the proposal. This budding conversation is also an opportunity to educate contributors about related tasks (QA, doc, etc), screening the over-ambitious.
4. **Discussion & Consensus** period to expose the proposal beyond the contributor and systems team into the community of system users in design and/or development. Common venues can include a system’s “council” of governing leaders, an open #system-design or #system-dev SlackHQ channel, an agenda item during critique, or a meeting with experts to dive deep.
5. **Approval and Activation** for the proposal to be fully implemented, however approval is defined within an organization.
6. **Implementation** to design, build and — oh yes, don’t forget — document the proposed feature(s).

_Takeaway_: Have a process, avoid too many steps, separate understanding the change from making the change, and include clear milestones so a contributor sensibly invests their time.

---

## How Good? Set Expectations on Quality

System parts must often be higher quality and more flexible to address a range of concerns. Mature system practices document processes and checklists (as described in [Component QA in Design Systems](/articles/component-qa-in-design-systems)) that can quite intimidate an aspiring contributor. In addition, a contributors’s proposal may trigger requirements they didn’t consider or don’t care about.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Page of many varying visual test cases',
      caption = 'Button kitchen sink page, showing variety of states and variations',
      class = 'escom-article-figure--break-bleed'
  ) }}

System solutions must be more robust, adhering to conventions that can include:

- Additional states and behaviors
- Accessibility failures in color contrast or interactivity
- Considerations across contexts, such as a darker setting or responsiveness
- Composability in layouts and adjacent to other elements

Ugh! Suddenly, an ambitious contributor is overwhelmed by and frustrated with complexity. They may rescind the contribution, slow down, or negotiate with system team members to fill gaps, smooth rough edges, and complete the contribution.

_Takeaway_: Be prepared for difficult conversations to establish the meticulous quality required. If the contribution has validity, they balk, and you have time, ask if they are comfortable handing you the baton.

---

## How To? Set Expectations on Documentation, Too

Ah, documentation. I’ve worked with some incredibly talented designers and developers over the year that struggle when faced with a documentation template in Google Docs. Often, they can’t get started, because they fear or acknowledge that they write poorly, avoiding the task so as to prevent their contribution at all.

Let’s face it, Material Design’s documentation is fantastically well-written with gorgeous Do’s, Don’ts, other imagery and demos. It’s like a design course! Salesforce Lightning’s component doc is incredibly detailed. Both are great examples to emulate. My teams also make [doc components within our component libraries to document components](/articles/design-system-doc-components). Head spinning yet?

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Google Material and Salesforce Lightning button documentation',
      caption = 'Button documentation from <a href="https://material.io/guidelines/components/buttons.html#buttons-raised-buttons" rel="nofollow noopener" target="_blank">Google Material Design</a> and <a href="https://www.lightningdesignsystem.com/components/buttons/" rel="nofollow noopener" target="_blank">Salesforce Lightning</a>',
      class = 'escom-article-figure--break-bleed'
  ) }}

So, it’s the contributor’s job to document their new work, using the system’s tools, to meet a certain level of quality. Right? Usually.

However, set expectations that documentation — like design and coding — is incremental. Your system’s threshold for “good enough” documentation is likely lower. Therefore, offer templates (such as a Google Doc they can copy) and a System Doc Editorial Guide to improve authoring efficiency and quality.

_Takeaway_: Make good documentation a required part of the contribution process, even if a more well-trained system team member does much of the work. Offer predictable models for building variations and authoring doc to smooth the process and get the most out of your contributors.

---

## Expect to Normalize Contributions, Then and Thereafter

With so many contributions, it’s really up to the systems team to ensure they blend well. There’s often a normalize step – whether design, code, documentation, or artifacts from other disciplines – that follows to clean up the contribution. Other times, that normalization crops up as realizations after the fact.

_Takeaway_: Live with the reality that core members are responsible for maintaining an internally consistent system, and that curation takes effort. Your community appreciates you for it!

---

## Praise Contributor Value in Public Settings

Whether it’s a new icon (easy!) or a complex combo box with hierarchical menus (hard!), every person I’ve met derives intrinsic reward for doing something that mattered. But it matters much more to them when a system practice recognizes their efforts. Here’s some ideas on how to recognize contributors:

- A documentation **page byline** identifying authors.
- A system’s email **release announcement** , with a section elaborating on special contributions.
- A **release history** denoting authors for each line item.
- Empowering contributors to **demonstrate their own work** during brown bags and town halls.
- Promotion to owning a “segment” concern, becoming the point person for a topical area.

The system of the people, for the people, and by the people indeed!
