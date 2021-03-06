---
category: Process
title: Design System Support
deck: Operating a Workflow to Resolve Designer and Developer Needs
title_abbreviation: Support
author_id: nathan
date: 2020-09-10
masthead: true
layout: article.njk
tags: []
---

{% import '../_includes/escom.njk' as escom with context %}

After building for months, <a href="https://designsystem.morningstar.com/">Morningstar Design System</a> released in <a href="https://designsystem.morningstar.com/legacy/release-history.html#v1-0-0-june-30-2017">June 2017</a> and celebrated the launch with our community of designers and developers.

Immediately, the community used it. And, immediately, they needed help.

What kind of help? Oh my goodness did those requests fly! Fix <a href="https://designsystem.morningstar.com/legacy/release-history.html#v1-0-3-july-28-2017">your defect</a>. Add a feature I want. Answer my question. Approve my proposal. Set up my files. Train us. Review that we used the system correctly. Link our library. On and on and on. Over eight weeks, 100+ incidents (or cases, in tech support speak) inundated the team in Slack, email, tickets, and more.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '1',
  image_alt = 'Visualization of help, defect, and new feature requests arising in Slack and Jira over eight weeks following a major launch',
  caption = 'Visualization of help, defect, and new feature requests arising in Slack and Jira over eight weeks following a major launch',
  class = 'escom-article-figure--break-bleed'
) }}

Gulp. We hadn’t anticipated the demand. Cases felt unceasing. Responses flew haphazardly. It was all quite chaotic. We figured it out, and we gained our customer’s trust. And, along the way, I learned a lesson.

Design systems must be ready to resolve emerging and at times urgent needs of designers and developers. This requires upfront investment in process and ongoing commitment that isn’t handwavingly trivial. Instead, a design system team must understanding and what types of **cases** it supports, in what **channels** they arise, and who’s responsible to **manage** and **resolve** each via a well-defined **workflow**.

---

## What is Support? Cases to Resolve Across Channels

Support is a concept interpreted in many ways. Two come to mind: “What are our supported browsers and devices?” (features) and “Do we have enough people on our core team to support the program?” (team capacity). For this article, I define support as:

{{ escom.bar_quote(
    quote = '<b>Design System Support</b>: how a design system takes in, triages, routes, assigns, and resolves customer incidents and requests on a case-by-case basis.'
) }}

The direction is inbound and the relationship usually individual, triggered by someone who needs something and expects a response from the system. This distinguishes support from outbound efforts that enable customers like <a href="/articles/design-system-communications">communications</a>, <a href="/articles/adopting-design-systems">adopter outreach</a>, governance and training events.

---

### What is — and is not—support?

Design systems always resolve cases when a designer or developer needs to…

- **Get Help** with system features and tools to move work forward.
- **Submit a Defect** when features behave unexpectedly or lack quality.
- **Request a (Compliance?) Review** emerging work to discern if a solution aligns or complies with standards.

These needs—and expected system response—is immediate. Lacking understanding or a defect may block someone from getting work done. If a system team isn’t responding to such needs, it strains the relationship and erodes trust.

Other requests require more deliberation, such as:

- **(Request a) Feature** when the system doesn’t yet offer something a customer expects or thinks it should.
- **(Propose a) Contribution** for something a system lacks that someone else is willing to provide.
- **(Request) Training/Onboarding** for an individual, team, or large group.

Here, customers need to know “What can the system do, by when?” rather an immediate outcome. While these requests aren’t thought of as “support,” they do flow through support channels. As a result, a support workflow will triage and route each to be declined, activated or settled into a backlog.

Finally, support often invites more generic interactions, such as:

- **Give Feedback** on system features, process, status, and more.
- **Contact Us** with whatever else you are curious about. We’re an open door.

---

### Where does support arise? Many places. Watch informal ones, too.

Support cases originate from sources formal and informal. Design systems typically promote formal paths in documentation and communications like:

- **Chat** (Slack, MS Team, Google Chat,…) monitored by the team, by far the preferred, most responsive and effective channel… if it exists.
- **Task management** software(Jira, Github, …), particularly defects.
- **System email inbox**(es) like designsystem@company.com.
- **Online form(s)** built with Google Forms or Survey Monkey.
- **Discussion boards** such as Stack Overflow, Github Issues, or Confluence.
- **Modules** and **links** in documentation, possibly triggering formal forms and/or configured with URL parameters to populate specific fields.

Support requests arise informally, too, amid interactions between system team members and those throughout a community. Encountered by any team member, they include:

- **Personal chat(s)** with and email inbox(es) of system team members.
- **Reviews** involving the system like design critiques and code reviews.
- **Communication** like replies to a release announcement or training event.
- **Surveys** with open ended questions inviting customers to comment.
- **Other meetings** like working sessions, training, town halls, and more.

_Takeaway_: Be thoughtful about which channels to open and monitor, and don’t support too many. For formal channels with high activity, optimize data collection, response time and response quality. For informal cases, ensure staff can put requests in the right place and gather just enough information to move things forward.

### What‘s Supported: System Features Only, or How to Make Things?

The design system serves teams throughout an organization. Unlike research and accessibility, the system makes things — visual style and (more core) UI components — in a process similar to how each team typically delivers their own product. System features are built into tools that adopters also use day to day, like Sketch for designers, frameworks (React, Angular, …) and code (CSS, JavaScript, …) for developers.

As a result, many requests are more “How do I do my job?” and less if at all “How does the system help me do my job?”

- “How to install this code package and manage that dependency?”
- “How should I apply CSS classes to apply this custom visual style?”
- “How should I organize my Sketch artboards for component designs?”

Such overlaps distort expectations. Should the design system team answer any question about Sketch, React or Angular because support other teams? Opinions are mixed, but my willingness to offer a helping hand has grown over time. This is consistent with creating a collective, nurturing environment and building trust in the system program. However, I’m also at the ready to admit “You understand your context more than I do, and I’m not informed enough to give you good advice.”

_Takeaway_: Be prepared for questions that are outside the scope of simply using a system. Depending on your capacity to do so, consider offering a helping hand as much as you can. However, know your role. Establish reasonable boundaries and expectations of what the system is and isn’t there to help with.

---

## Support Workflow: From Intake to Resolution

I’m not an authority on customer service workflow. That said, for design systems, I start simple and refine over time how a team intakes across channels, triages and routes requests responsively, and flows the work into existing scrum / kanban workflows as needed.

### Do all cases require a workflow? No, some resolve immediately.

Not every case needs to be formally tracked, and many resolve immediately. An answer in a meeting, a quick Slack chat, a rapid email. All are best resolved quickly and informally. This means no heavy form to complete, no new ticket to track in Jira, no notifications when resolved.

However, these “immediately resolved cases” are still support. The work demands attention and takes time away from other tasks. To ignore this effort is to ignore what might be consistently 20% or up to 50% of designer or developers job day-to-day.

_Takeaway_: Make easy-to-resolve interactions light and effective, resolving each with no loose ends. In doing so, don’t ignore—instead, recognize and plan for!—the time staff needs to handle these conversations properly.

---

### Is every case urgent? Gosh no, so set expectations.

Not all cases require an immediate response. Sure, a system should be able to rapidly release fixes, respond to feature requests and proposals “in the flow” of work. But not every case warrants stopping everything and getting whatever they ask for done.
Customers may have unrealistic expectations about how a system prioritizes their needs. Imagine a request like:

{{ escom.bar_quote(
    quote = '“We need a responsive, animated headline & hero photograph carousel reusable across all our marketing site landing pages. By next week. In production.”'
) }}

Um, no. That’s not how most systems work. Instead of scrambling to respond to and resolve that demand, a response could be:

{{ escom.bar_quote(
    quote = '“Given your urgency, your best bet is to make it locally in your product. We can help you align with standards and discern if it’s a need shared by others.”'
) }}

Design systems play the long game, incrementally adding features relevant for everybody by collaborating with everybody. A responsive support workflow shouldn’t be confused with a willingness to rapidly release complex features on a day’s notice.

_Takeaway_: Gauge how much your design system is coupled or decoupled individual and imminent product delivery to production. Generally, the larger and more diverse an adopter ecosystem, the less likely the system team is release features or even fixes to douse a single customer’s fire.

---

### What initiates a case? Intake, with just enough data.

When a case isn’t resolved immediately or is submitted independently, you’ll want to collect the right—and just enough—data. Prioritizing, managing and resolving a case is made easier with:

- **Requester name**, email and — if known—team, product, or organization.
- **Type**, such as Defect, Help, Review Request, and more.
- **Description**
- **Attachments**, like screenshots of what’s experienced or proposed.
- **Channel** where the request originated.
- **Group**, product, squad, … to identify who the requester represents.

For defects, you’ll also benefit from:

- What’s experienced, like screenshots and warning copy
- Steps to reproduce the result, as detailed as possible
- Versions, both of their tools (like a browser) and the system

For feature requests and contribution proposals, don’t go overboard. Keep it light and deepen afterwards through conversation and transitioning it to formal inquiry (such as a [DISCOVERY] task). Here, questions could include:

- **Type**: Is it new or an enhancement? If an enhancement, of what?
- **Shared Need**: What other teams would benefit?
- **Urgency**: Is this expected this week? month? quarter? year?

While you could collect so much data, avoid making things complicated. Forms with useful but onerous inputs, task templates, and specialized properties in task management software to improve data consistency yet also increase a submitter’s effort. Additionally, autoresponders to forms and incoming emails can ensure requesters feel heard, set expectations, and point to helpful materials but can also feel noisy.

_Takeaway_: Identify what to collect and where to track it. Collect only essential data and be resilient to missing data.

---

### Where, when do you triage and assign cases? Name a place, time.

Habits across teams vary. However, most teams route cases into project management rituals and tools, like:

- a daily scrum / standup
- a sprint backlog
- a weekly planning queue
- “To Triage” / “Not Yet Prioritized” bucket in a Kanban board (my favorite)

Ensure you’ve identified that place place and monitor it routinely. For teams with sufficient capacity, there’s people assigned to triage and assign cases in real time as they flow in during business hours. Other teams wait to discuss and assign cases in regular ceremonies like daily standup or—at most—biweekly planning.

---

### How fast do we respond? Set expectations with an SLA.

Systems earn trust by responding quickly. A first response of “We heard you, we’re working on it” is different from “Your case is resolved.” At a minimum, the requester should feel heard and trusts that you are on it.

Feedback from design system colleagues indicates that most design system teams promise to respond in a day or less.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '2',
  image_alt = 'Survey results of response time by design system team.',
  caption = 'Survey results of response time by design system team.',
  class = 'escom-article-figure--break-bleed'
) }}

I encourage teams to reveal a response time — the “**service level agreement**” (SLA)—in formal support channels. Advertising a SLA shifts a team to take support seriously and orient capacity to meet that commitment. Teams unprepared for support omit an SLA at their own peril, and this can’t last forever. A refusal to fluidly support your customers is a terrible signal to send.
What tool(s) should we use? Scale tools to suit demand.

System teams often mature through three or four stages of growth:

- **No tools**. The system team size and/or adopter quantity is small enough doesn’t warrant responding and tracking with any formality. While every team starts here, few system programs stay here for long.
- **Spreadsheets.** The first instinct: when managing cases is a challenge, track the work in a spreadsheet like Excel or Google Sheets!
- **Task management** software, such as Jira, Asana, or Github Issues, managing cases in a primary team tool. Other channels—a form, a link with URL parameters, etc—tend to route submissions into that tool.
- **Ticketing software**, such as Jira Service Desk or Help Scout.

Most established teams end up in task management software like Jira, while those handling a high case load turn to tools optimized for their scale.

{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '3',
  image_alt = 'Chart of tools used by design system teams. 80% use task management like Jira, with a balance across other options.',
  caption = 'Survey results of what tools are used by design system teams.',
  class = 'escom-article-figure--break-bleed'
) }}

_Takeaway_: Systems built to last include tool(s) to manage support tasks and integrate and make visible those tasks on a daily basis. A spreadsheet managed in solitude on a shared drive isn’t enough for large-scale efforts.

## Roles: Who Manages and Resolves Cases?

### Who manages (parts of) the workflow? One, some, or all of us.

Larger system teams benefit from project managers / scrummasters whose job it is to route tickets and manage workflow. For system teams not at that scale, designers and developers are saddled with the responsibility. Whether junior or senior, such practitioners tend to be less interested in triaging and routing support tickets than their core mandate: design and code.

So who should monitor support channels, triage requests, and route assignments? Different design system teams take different approaches:

**\*A single person.** Whether a lead, project manager, or practitioner, a single person may be responsible. Their day-to-day routine may be to monitor chats, inboxes and form submissions, and trigger the workflow as a result. The tradeoff here is efficiency and decisiveness with “single-point-of-failure” for responsiveness if busy with meetings, out sick or on vacation.
**\*A defined subset of the team.** Usually pairing a lead and project manager or practitioner, there’s few enough cooks in the kitchen that coordinate who owns what is easy via backchannel chats and st andup.
**\*Anyone on the team.** Should anyone respond to anything? While more responsive, it can miss cases, lead to chaos and requires consistent answers and workflow across many people.

Decomposing the challenge a bit more, does everyone monitor Slack but designated individual(s) monitor an email inbox and ticket submissions?

_Takeaway_: Most bias towards using an entire team or a defined subset. My experience suggests that formal channels benefit from a single person accountable to route cases and ensure each resolves. On larger teams, everyone can’t do everything.
So chalk up my vote for balance. Align a few to operate the workflow, coordinate in the backchannel, and unburden the rest of the team. Also, consider making support triage an impermanent tour-of-duty so that team members rotate and don’t get burned out.

---

### It’s not for everybody.

Some designers and developers relish back-and-forth problem solving and the connectedness provoked by support. They welcome bouncing in and out of resolving requests. Positive vibes emit from their pores as each interaction accumulates the intrinsic reward of helping others.

Others? Nah. Not so much. First, not everyone can bring the patience, curiosity, and positive attitude needed. Also, many find context-switching disruptive, friction-filled, and far from the designing, coding and documenting they enjoy most. I’ve seen team members assigned enough support work that they unexpectedly leave a team. That’s sad and avoidable. Support isn’t for everyone.

_Takeaway_: When starting support and preceding assignments, consider frank and individual discussions with each person. You can cover topics like preferences, comfort level, flexibility, attitude, confidence, and capability. Once you are confident they are the right person for the job, away you go!

---

### How responsive is TOO responsive? Beware of “The Swarm™”

If more than one person can respond (usually in chats like Slack or Teams), then two or more staff members may swarm to respond simultaneously. This sometimes works, and certainly signals you care. Yet, swarming risks crosstalk, splayed directions, and conflicting advice. Avoid overwhelming those in need, align answers, and coordinate activity when one respondent suffices.

_Takeaway_: Telling some team members that they can’t or shouldn’t talk to customers is a signal to avoid. Instead, establish expectations that team members coordinate in a private backchannel before inundating a requester with feedback.

---

### How good are responses? Friendly, yet authority and quality matter.

Confidence and authority matter. While a design lead may be more knowledgable of brand and organizational nuance, others lack that context. A tech lead knows how to balance constraints, frameworks, and approaches; other developers lacks experience.

_Takeaway_: Incorporate moments to review responses prior to sending.

---

### Who should have access to tools? Visibility & collaboration matter.

Tools should permit visibility and collaboration between a requester, responder, and those managing the process. A less structured Jira board visible to all three participants is better than a spreadsheet or souped-up ticketing software only accessible by a responder alone.

_Takeaway_: Most system teams lack the scale to need ticketing software. However, a dependable case workflow through assignable and measurable task management is a hallmark of operations that take support seriously.
