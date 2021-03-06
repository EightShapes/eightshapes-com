---
  category : Contributions
  title : Stewarding Design System Contributions
  deck : Keep 'em on track with what they need, when they need it
  title_abbreviation : Stewarding
  author_id : nathan
  date : 2020-01-23
  masthead : true
  layout : article.njk
  tags : []
---

{% import '../_includes/escom.njk' as escom with context %}

Contributing to a design system should be simple, even if you aren't on the core team. Find it, change it, publish it, and everyone uses it! Easy peasy.

Unfortunately, completing most design system features is slightly more complicated. <a href="/articles/defining-contributions">Bug fixes and tiny enhancements</a> should be autonomous and quick. However, most prospective contributors don't know or want to do all the steps involved in delivering <a href="/articles/defining-contributions">large enhancements or new features</a>.

That's why a design system program needs stewards: selfless, knowledgable, attentive and warm people to guide contributors through their work. This post explores what to name the role, how to guide a contributor through their journey, and tips on building your system program's stewards over time.

---

## Naming the Role: Shepherd or Steward?

There's no consistent name for this role across system teams. "We're the **core team**." "We act as a **counselor**. "We're a **guide**." However, two terms stuck out most: shepherd and steward.

{{ escom.bar_quote(
    quote = '<strong>Shepherd</strong>: guide in a particular direction, especially in spiritual matters.'
) }}

For years, I've used shepherd for a core team member assigned to guide a contributor. The job can definitely feel like herding well intentioned yet directionless folk through an unfamiliar place.

For many, a shepherd metaphor invokes lambs, a smart, sensitive, and loyal species. Yet, some perceive lambs as dull, stupid, and impassive, not really the spirit you intend. Shepherds evoke religious themes, too. For a few, lambs even trigger Mariah Carey, who refers to her flock as her <a href="https://the-mariah-carey.fandom.com/wiki/The_Lambily">Lambily</a>. Sigh. Shepherd has baggage.

<a href="https://polaris.shopify.com/">Shopify's Polaris design system</a> team refers to the role with a less common name: steward.

{{ escom.bar_quote(
    quote = "<strong>Steward</strong>: An official appointed to supervise arrangements or keep order at a large public event; a person employed to manage another's property."
) }}

Steward resonates. I encountered stewardship in my personal experience managing annual giving for non-profits. Taking responsibility for the interests and intent of contributions mirrors design system motivations. Recently, I've found myself suggesting steward as the preferred term.

<i>Takeaway</i>: Steward, shepherd–you decide. But definitely decide. Name the role of the person assigned to guide contributors through the process.

---

## Steward Responsibilities, from Start to Finish

Once both contributor and steward are named, it's time to build a relationship and get to work. A steward onboards the contributor, guides the work through steps, presentations, and reviews, and fills in gaps along the way.

---

### #1. Onboard With Conversation, Not Documentation

It struck me how much seasoned leaders relied upon a conversation rather than shunting a prospective contributor to a documentation site.

{{ escom.pull_quote(
    quote = 'When people approach us, we‘ll respond "Can we talk about it?"',
    attribution = '<a href="https://twitter.com/SeleneHinkley">Selene Hinkley</a>, Shopify Polaris Design System',
    class = 'escom-pull-quote--light'
) }}

The initial approach can be a critical, emotionally charged moment. Does the contributor feel welcome, valuable, supported and empowered? Sure, many want to act autonomously with the help of straightforward documentation. Yet, for larger enhancements and new features, a conversation is the best way to get a contributor up and running.

{{ escom.pull_quote(
    quote = 'Criteria on our site is light. We start with conversation, then  dig into details.',
    attribution = '<a href="https://twitter.com/Amy_Hupe">Amy Hupe</a>, Formerly GOV.UK Design System',
    class = 'escom-pull-quote--light'
) }}

It's remarkable to learn that GOV.UK's team removed documentation about their process. Lighter doc triggered deeper conversation. This stark reversal – document less, engage directly more – caught me off guard and runs counter from most teams' instincts.

{{ escom.pull_quote(
    quote = 'I‘ve realized that things need to be better stood up at the outset to alleviate misunderstandings later on.',
    attribution = '<a href="https://www.linkedin.com/in/ewen-syme-2b303a1/">Ewen Syme</a>, Google Cloud',
    class = 'escom-pull-quote--light'
) }}

It's unrealistic to think that documentation will cover all questions and concerns about all scenarios. It's even less realistic to think a prospective contributor will read and understand it all.

<i>Takeaway</i>: Do contributors a favor: make time to talk to contributors. Be patient. Sit with them, in their space, to learn where they are at. As the relationship deepens over time by working together, continue helping a contributor along and teaching them each step of the way.

---

### #2. Teach the Next Step, Not the End-to-End Process

When onboarding a contributor, beware your instincts. Ask yourself: is it to a contributor's advantage to learn all the steps and sub-steps now? Must we plan all the presentations and reviews during this kickoff? Time to dig into handoffs off in opening minutes?

Slow your roll. Contributions can be intimidatingly complicated. Steps to high quality and community buy-in may be lengthy, arduous and often irrelevant to a contributor's typical day-to-day. Not only don't they want to do it all, but they won't end up doing every step either. So why teach them?

Instead, focus on next steps. Usually, their motivation is concentrated on designing a variation, writing code, or composing a guideline. While they should leave appreciating testing, reviews, and community engagement, onboarding isn't meant to train them for every protocol and eventuality.

<i>Takeaway</i>: Focus on next steps to build momentum. On the other hand, allude to-but don't deeply plan for-the longer road ahead.

---

### #3. Listen for What They Believe They Can Do

Contributor confidence is critical.

{{ escom.pull_quote(
    quote = 'We‘ll ask: "What can you do?"',
    attribution = '<a href="https://twitter.com/Amy_Hupe">Amy Hupe</a>, Formerly GOV.UK Design System',
    class = 'escom-pull-quote--light'
) }}

In the conversation, ask questions. "Would you be comfortable creating a range of visual test cases and running browser tests?" may yield a confident "😃 Sure!" If so, you are off to a great start. Yet, followup inquiries "How about marking up test cases for VRT?" and "Have you written unit tests before?" may yield "Ummm 😬." and "No 😩." respectively.

In an open community, no one wants to feel judged. Discussing personal capabilities can elicit emotionally vulnerable moments of truth. Don't expect a contributor to know how to do everything. Instead, stewards must teach while protecting confidence, acknowledging limits and reassuring that it's OK to not know everything.

<i>Takeaway</i>: Start with obvious and easy expectations, and establish boundaries from there. Avoid dwelling on intimidating tasks that turn them off. Instead, be enthusiastic! Reassure contributors that what they offer is valuable and they needn't know and do everything that must be done.

---

### #4. Build Cadence, Check In Regularly, and Avoid Stalling

Onboarding should conclude by discussing pace, cadence and collaboration. At a minimum, check in regularly and informally ("How's it going?") via messaging or email. Effective stewards also establish regular touchpoints (weekly? every other week?) and schedule brief prepping sessions prior to presenting to community peers.

Should a contributor embed in system team rituals like planning, standup, or review demos? Not usually. A contributor has their own rituals to worry about, and another team's ceremonies can feel an awkward place to ask questions and provide updates. Instead, the steward is responsible to represent the work and update the system team regularly.

What to avoid? A stalled contributor. A contributor's other work gets in the way sometimes. I get that. It happens. However, contributions stall just as often because a contributor doesn't hear from a steward and doesn't know what to do next. They feel blocked or paralyzed, work stops, and that's avoidable.

<i>Takeaway</i>: Once a contributor starts, the steward pushes the momentum. Within system team rituals, look to the steward to track the work. In those rituals, poke and remind each other to stay tuned into a contributor's needs.

---

### #5. Manage the Community So Contributors Focus on "Work"

While doing "the work" is what the contributor came for, that "work" doesn't include all the things system needs to get done. This is especially evident in how system decisions require engagement with a peer community across organizational boundaries.

So many people! So many opinions! Which opinions really matter, anyway? From which teams? A contributor may neither have relationships nor own critique agendas. And those open, visible community venues are a risky place to be vulnerable. It can seem dangerous and beyond their control.

A steward's best response? "Leave that to me." The steward must know how to trigger the routines and involve people who matters most.

<i>Takeaway</i>: Smooth a contributor's journey through a community. A steward is equipped with norms, rituals and tips. Use them to connect contributors at each step they interact with a community.

---

### #6. Anticipate and Fill Gaps

Work can also stall as a contributor's early vision gives way to the complicated execution across myriad considerations. "How about size?" "What's the dark mode variant?" "There's more states to consider." "How's it appear in this context? And that context?"

{{ escom.pull_quote(
    quote = 'A designer approaches and mentions "I‘m starting to use shadows." We sit down, talk implications, discuss the breadth of an elevation system. As considerations expand, you can see the negative emotion of burden and commitment emerge.',
    attribution = '<a href="https://twitter.com/miked1ck">Mike Dick</a>, SurveyMonkey',
    class = 'escom-pull-quote--light'
) }}

For larger contributions, it's rare for a contributor to do all the work. Stewards must balance empowerment and realism. As a contributor slows down, shows resistance, or lacks confidence to continue, it's up to a steward to know what work remains and have a path to get it done.

{{ escom.pull_quote(
    quote = 'We‘re happy to pick up whatever others start and take it from there.',
    attribution = '<a href="https://twitter.com/miked1ck">Mike Dick</a>, SurveyMonkey',
    class = 'escom-pull-quote--light'
) }}

That doesn't mean that it's the steward's job necessarily. Discussing remaining work may yield other volunteers. If the steward's talent and time permits, that person may also just step in to fill in the blanks, get the last reviews complete or publish the work themselves.

On the other hand, the system team shouldn't always position themselves as responsible for getting work across the finish line.

{{ escom.pull_quote(
    quote = 'The right model ISN‘T the system team doing the tail end of the work. A system should empowers contributors, so that I donæt need to handhold people to the point of hitting the merge button. If a team has a CMS to put drafts in, that improves collaboration and yet puts the author in more direct control.',
    attribution = '<a href="https://twitter.com/SeleneHinkley">Selene Hinkley</a>, Shopify Polaris Design System',
    class = 'escom-pull-quote--light'
) }}

Whether for design, coding, or - in Shopify's case - documentation, it could set the wrong dynamic of system team dependency rather than autonomy that the system can evolve towards.

<i>Takeaway</i>: Anticipate work a contributor can't or won't complete. From the onboarding chat to the fine details near the end, the steward and contributor must work together to ensure system conventions are met for quality, community engagement, and other tasks.

---

### The Goal: Completed Contribution, Satisfied Contributor

In the end, a steward is responsible for managing work to completion. Just as important, however, is satisfying the contributor too. A contribution process is a journey of learning how the system works, both within "hard assets" (design files, code files and folders) along with a system's "softer side" of processes, relationships, and community engagement.

Focusing too much on just getting a contribution done? You stand to miss a a meaningful opportunity to deepen a contributor's connection to the system. Aim for both.

---

## Developing Stewards Over Time

So, who on a system team should be stewarding work? For some team members, stewardship and connection with contributors comes naturally. For others, it's not their strong suit. For most, it requires at least some experience themselves with how a system works.

### Assign a Steward to Work the Contribution, Start-to-Finish

Stewarding is a responsibility assigned to a core or extended team member to work with a contributor through completion. Often, a team member that initially responds and triages the contribution request assumes the steward role. But that needn't and often shouldn't determine a long term pairing.

A contributor will want to be paired with a steward familiar with the subject matter and discipline. It doesn't make much sense to connect a new system team designer with a contributing developer working a complex composition rife with dependencies. Pairing a system developer tuned to complicated internal tools with a brand designer isn't the right match.

{{ escom.pull_quote(
    quote = 'Who [stewards] depends on comfort zones. Our 16 developers have different origin stories. Some come from marketing and brand work, and they are more comfortable reaching into that world. When a team member brings tribal knowledge, it‘s helpful to assign them as a steward to sustain those contacts.',
    attribution = '<a href="https://twitter.com/spindledesco">Teresa Aguilera</a>, Gap Inc Design System',
    class = 'escom-pull-quote--light'
) }}

<i>Takeaway</i>: Be deliberate with how partnerships are established. Personal relationships and familiarity with disciplines, challenges, system architecture, and organizational units make a big difference.

---

### Grow and Mentor Others into Stewardship

For systems of smaller scale, it may only ever be one designer or developer that stewards contributions.

{{ escom.pull_quote(
    quote = 'People just talk to me as a hub of our open source model.',
    attribution = '<a href="https://twitter.com/Darren_Head">Darren Head</a>, Google Cloud',
    class = 'escom-pull-quote--light'
) }}

In other cases, while anyone swarms to help requests coming into Slack and Jira, fewer may have the experience, connections, confidence or capacity to steward a contribution. Senior design and development leads may steward early on and mentor less experienced teammates to do the same as capacity, interest, and capability permit.

{{ escom.pull_quote(
    quote = 'When we started, one or two devs were go-tos and took on a lot of [stewarding]. As I and others joined, we grabbed that context and became go-tos.',
    attribution = '<a href="https://www.linkedin.com/in/chloemrice/">Chloe Rice</a>, Shopify Polaris Design System',
    class = 'escom-pull-quote--light'
) }}

Teams also experiment with different assignment models: an assigned go-to, whoever's available, or a subset of the team dedicated to support. One long-standing team serving 100s of developers talked of dedicating team member(s) to stewarding contributions as a sole responsibility in 2020. Wow, team members dedicated solely to handling contributions!?!? If you are aiming to go from 20 to 200 components, stewarding can be a full time job. Oh, the ways our systems will grow!

<i>Takeaway</i>: Be well-equipped enough, knowledgable enough and ready to serve. As you evolve a system team, identify who's ready now, how to grow others into the role, and how much capacity they'll need to be successful.

---

### Develop Cross-Disciplinary Stewards that Bridge Design, Development, and Content

Shepherds are usually discipline specific, yet system work crosses disciplines.

{{ escom.pull_quote(
    quote = 'Every contribution needs collaboration across disciplines. Every time we do a doc clinic, we benefit from having every discipline in the room: content, design, UX development, accessibility and-in a perfect world-research.',
    attribution = '<a href="https://twitter.com/SeleneHinkley">Selene Hinkley</a>, Shopify Polaris Design System',
    class = 'escom-pull-quote--light'
) }}

Interviews suggest that most designers and developers don't have a strong grasp of process details pursued by the other discipline. However, most also expect system stewards to understand and coach both.

Also, a system team invariably has experts on various part, whether a set of components, a motion language, or package management. For an icon contribution, pair a steward that knows the icon catalog. For a specialized modal stepping through a sequence, identify a steward knowledgable of layering, progressions, forms and dialogs.

Are contributions an opportunity to build steward awareness of system capabilities they've not got experience with? Maybe, but approach with caution.

{{ escom.pull_quote(
    quote = 'We pair people of different backgrounds to gain expertise.',
    attribution = '<a href="https://twitter.com/spindledesco">Teresa Aguilera</a>, Gap Inc Design System',
    class = 'escom-pull-quote--light'
) }}

Pairing contributors and stewards, both of varying expertise, requires balance. As a leader, I want team members to gradually learn the range of system capabilities. However, contributor needs-move confidently, work with a knowledgable contact-trump my team's needs to grow. A contributor will grow frustrated if their steward becomes simply a link in a game of telephone to find every answer.

<i>Takeaway</i>: Favor contributor success over team development. Systems work and expertise spans disciplines and features, so grow stewards capability to serve. Yet, always sure that contributor experience is positive and successful, for you may have yet another steward in your midst!
