---
  category : UI Components
  title : Component Testing Plans
  deck : Building a Quality Base, One Criteria at a Time
  title_abbreviation : Component Testing Plans
  author_id : nathan
  date : 2019-04-03
  masthead : true
  layout : article.njk
  tags : [ui components]
---

{% import '../_includes/escom.njk' as escom with context %}

Whether standing up a system from scratch or engaging in incremental planning, teams wonder: what’s a mature component catalog look like? Conversations quickly hone in on quantity: 30 components? 50? 70?

{{ escom.pull_quote(
    quote = 'How many components does our catalog need?',
    attribution = false,
    class = 'escom-pull-quote--light'
) }}

Making components—a repetitive and reliable process yielding measurable outputs—can become a team’s comfort zone. Yet, on average, each additional is more complicated, has more dependencies, and costs more to make and maintain. These same components also tend to be less relevant to fewer customers. There’s a point when the next component, centrally made and maintained, isn’t worth it. There must be a quantity ceiling. This ceiling has teams thinking.

In later 2018, multiple teams gauged the stakeholder sentiment of: “If you had to choose only one, should the system…

- Add more components?
- Remove components, shedding what we don’t need?
- Improve the quality of components we already have?
- Do nothing?

The question’s premise shook respondents:

{{ escom.pull_quote(
    quote = 'Hold on. Our components aren’t already top quality?',
    attribution = false,
    class = 'escom-pull-quote--light'
) }}

An insatiable instinct for more components was halted by challenging their assumption of perfect quality. No system I’ve worked on has perfect components. Shouldn’t teams assessing system maturity based on quality as much as quantity?

Quality stems from and is proven by an implemented testing plan by which components are inspected prior to release. This article describes **criteria and tools** for testing components and how to **order making them** at a high level to help teams plan.

---

## Planning Testing by Capability, Across Components

Any time is the right time to assess a testing plan, whether starting from scratch, coming out of a hectic delivery a first generation, or assessing the health of a mature system. The list of potential capabilities is intimidating in it’s length and cost. Yet, a team can add such capabilities incrementally, intensely at first but even more gradually over time.

During the planning of a system program’s increment (usually, three or six months), I’ll weave testing into the our discussion of what components are in and out of scope. Invariably, that component list reveals itself as a list in a spreadsheet or on a whiteboard.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '1',
  image_alt = 'Table of testing capability completed by component',
  caption = '',
  class = 'escom-article-figure--break-bleed'
) }}

I’ve gotten into the habit of listing prospective capabilities as columns above and to the right of that list, creating a tabular structure. This helps teams to:

- Visualize and relate testing criteria relevant across all components
- Identify tooling or processes the team lacks
- Appreciate the rigor that lies ahead

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '2',
  image_alt = 'Photograph of whiteboard where team prioritized testing capabilities',
  caption = '',
  class = 'escom-article-figure--break-bleed'
) }}

Testing plan criteria listed on a whiteboard and subsequently prioritized as critical, yes, maybe, or not pursued

---

## Get Started with Testing Basics

As development begins, tooling must enable both developers and designers to inspect visual test cases and code practices. Avoid blocking early work by the misguided notion of starting with a perfect, comprehensive test suite. Instead, focus on testing fundamentals as you iterate early work. As a team establishes environments, I suggest that they set up:

### ✔︎ Visual Testing Page (aka, “The Kitchen Sink”)

A testing page visualizes and enables inspection of component variations, states, behaviors, content examples. Visible to all, it evokes every possibility including background settings, sizes, and responsive qualities.

### ✔︎ Display on a Default (White?) Background Setting

Every component catalog I’ve worked on must work on a white background. Therefore, components are built at least to display properly in that setting.

### ✔︎ Resilient to a Hostile Style Environment

Components must not be impacted by styling applied elsewhere in the page. Introduce hostile styles on generic, page-level selectors to pollute the cascade, triggering visual errors in a component that’s insufficiently styled.

### ✔︎ Styled with Design Tokens

Components must be infused with <a href="/articles/tokens-in-design-systems">design tokens</a> codifying visual style, which requires a token dependency setup from the beginning. Both developers and designers are expected to review how tokens are applied via code reviews.

### ✔︎ Tested Across Browsers, Manually

Components must work across supported browsers, each tested manually as every feature, defect, or optimization is added. Obtaining access to browsers can be painstaking (particularly, IE11 and Edge for those working on Macs).

### ✔︎ Linted Code

<a href="https://en.wikipedia.org/wiki/Lint_(software)">Linting</a> tools analyze source code for easy-to-detect programming errors, bugs, suspicious constructs, and of adherence to team conventions. It’s easy to setup, confirm via pull requests, and require corrections prior to approval.

---

## Layer More Procedures Leading to Launch

As development accelerates, adopters begin using alpha and beta releases. Expectations rise. At this point, testing rigor must expand based on what the team values most. Equally important is establishing who reviews each, whether the assigned developer, one or more reviewers, or a team’s outsider.

### ✔︎ Functional Testing

At their core, a component must work. A team must establish conventions of how they’ll test functionality, such as a modal’s open/close toggle, a tooltip’s sensitivity to a viewport’s edge, and more.

### ✔︎ Automated Visual Regression (AVR) (of HTML/CSS display)

AVR establishes a baseline result of all visual test cases (variations, states, content examples, etc) and then automates comparison of the baseline with the result of each successive change. Our tool of choice: BackstopJS.

✔ Unit Testing (of JS-based components)

Unit tests are short code fragments written to test the success of small units of source code. One reference: Morningstar Design System’s documented test driven development (TDD) approach for making web components.

### ✔︎ Accessibility Audit

System designers and developers deliver with accessibility in mind. However, they may lack in-depth expertise of an accessibility specialist. Audits canvas an entire library or changes since a previous audit. Some specialists drop in to assess each component as it’s completed, whereas others engage at regular intervals (quarterly? semi-annually? annually?).

### ✔︎ Semantic Versioning

### ✔︎ Changes Logged Readably

I’d expect a team to norm on how to version components, deal with dependencies, and assess <a href="/articles/visual-breaking-change-in-design-systems">breaking changes</a> as they get started. Nevertheless, they’ll acclimate to making—and documenting—those decisions as they iterate through early cycles. Proof will be in how successful features are packaged and changes logged.

---

## Address Other Scope, As Needed

Depending on the features of your system, there may be additional criteria relevant to most components in a catalog. These can include validation of:

### ✔︎ Display in both Light & Dark Settings

Also known as “Light and Dark Mode,” a component can be placed on both <a href="/articles/light-dark">light and dark background settings</a>. Many start with white and “black” (which actually may be a darkest gray like #222). More sophisticated systems may offer four (white, black, light gray and dark gray) or even eight settings.

### ✔︎ Display on Additional “Brand” Background Settings

Some systems support backgrounds for one brand color (“Brand Blue”), many brand colors (blue and teal and green and …), or even multiple tints of each brand color (light, medium and dark teal, …). If components promise to work everywhere, testing must address variations and states in each setting.

### ✔︎ Themed for Subbrands and/or Via User Customization

Some systems can revel in the simplicity of a single theme. Others must test for a closed set (such as a company’s 37 subbrands) or an open field (think: <a href="https://themes.getbootstrap.com/">Bootstrap</a> or <a href="https://material.io/design/material-theming/overview.html">Material</a> supporting any theme). Such an API into component styles warrants markedly incremental testing procedures.

### ✔︎ Sized for Varying Density

Systems like <a href="https://designsystem.morningstar.com/components/component-status.html">Morningstar Design System</a> apply consistent schemes to size components for varied settings. They’ll position small, medium, and large size variants for <a href="https://designsystem.morningstar.com/components/list-groups.html#sizing">List Group</a>, <a href="https://designsystem.morningstar.com/components/buttons.html#sizing">Button</a>, and most of the remaining catalog. Testing would address both component-specific sizing across contained elements as well as the composability across components of the same size.

### ✔︎ Touch Ready

How well are interactions tuned to the conventions of varying platforms in which a component is displayed?

### ✔︎ Internationalization & Localization

### ✔︎ Supports Right-to-Left Display

Validating the display for a range of languages isn’t as easy as inserting a long German label in a title field (although that’s a good place to start). Know your languages, and then ensure you can promise each component addresses those needs. Easier is a price displayed in Japanese Yen, far wider than USD. More challenging: a “global” header bar supporting German, Chinese, Arabic and Cyrillic. Many more visual test cases are required, indeed.

---

## Advanced Capabilities, Out of Reach of Most Teams

### ✔︎ A Dedicated QA Team Member

Recently, I was elated to learn that a team I coach announced they’d be adding a team member dedicated to QA. Such is a luxury at this stage when establishing a core team in our burgeoning field, with nearly every other team falling back on designers and developers filling that void.

### ✔︎ Automated Browser Testing

Teams alleviate considerable manual rigor by automating the testing of visual test cases across browsers. Tools like Selenium also multiply the range of browsers and devices teams can and are willing to test against. Nevertheless, such automation seems beyond the grasp of most system teams.

### ✔︎ Advanced Responsive Testing

As individual components become more complicated, their responsive capabilities may become quite varied and sophisticated. Testing environments must be easy to setup and ideally automated to validate displays across a range of widths, contexts, and triggers.

### ✔︎ User Behavior & Component Use Analytics

I’m very impressed by (and jealous of) <a href="https://atlaskit.atlassian.com/packages/core/analytics">Atlassian’s Component Analytics</a> Framework. The framework enables teams to track how customers use an app (via public events) and component authors to monitor how teams use their components (via private events). Once established, a team must validate the setup and performance of such tooling across each component.
