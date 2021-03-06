---
  category : Workshop Activities
  title : Picking Parts, Products and People
  deck : A Team Activity to Start a Design System
  title_abbreviation : Parts, Products and People
  author_id : nathan
  date : 2016-03-22
  masthead : true
  layout : article.njk
  tags : []
---

{% import '../_includes/escom.njk' as escom with context %}

Teams can be awed by the scale and spread visible in finished systems like [Material Design](https://design.google.com/resources/) or [Lightning Design System](http://lightningdesignsystem.com). Systems can be both incredibly broad and deep once fully formed, if they ever get that far. Faced with such scale, getting started can be quite daunting or avoided altogether.

I’ve had success leading small teams through a quick, two-stage activity that, over ~60 minutes, bridges from exploring the myriad Parts of a system to considering People involved and Products it’ll impact. The activity is grounded by participants completing and sharing work of a two-page worksheet (download the [PDF](http://eightshapes.com/images/documents/PickingParts-Products-People.pdf) or [INDD](http://eightshapes.com/images/documents/PickingParts-Products-People.indd) source).

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Screenshot of picking parts worksheet',
      caption = 'Two page worksheet, starting with Parts before proceeding to prioritizing Parts, Products and People',
      class = 'escom-article-figure--break-bleed'
  ) }}

The moderator — often, a design system lead — walks away with well-structure data to inform system strategy and priorities.

Equally important, however, is how the activity effectively reveals a lack of alignment and personal biases across a team. By recognizing these gaps and discontinuities early, a team can draw boundaries around and break barriers of what the system can become sooner and later.

Here’s how the activity works.

---

## Stage 1: Pick the Parts

The first stage orients the group around tangible parts. Each person identifies what matters—and doesn’t matter—to them.

### The Protocol

Distribute the first page and briefly **introduce the categories** and kinds of parts they’ll see (visual language, elements, components, etc). Then instruct participants to:

1. Draw a thick line or X through **irrelevant categories.**
2. Circle the labels of up to the **5 most-important categories** (such as Design Language, Patterns, or Editorial) for your system.
3. Check up to **25 important parts** for your system. Each item (Typography) and sub-item (Web Fonts) is a _separate_ check, and checking an item does not imply all subitems are checked.
4. Of the 25 checked, circle labels of up to the **10 most-important parts.**

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Photograph of completed worksheets',
      caption = 'Parts worksheets, by participant, arranged to compare and discuss',
      class = 'escom-article-figure--break-bleed'
  ) }}

As participants finish, arrange all worksheets on a table. Let them scan the results and hunt for patterns, and then begin the discussion.

### The Discussion

Foster conversation on:

- **Breadth & Realism.** Wow, there’s so much! Recognize the scale and spread of parts, and how building a system requires a team to break down the work and prioritize.
- **What We All Value** : First find shared categories, then notable part(s). It’s common for (most of) _Visual Language_ and (a few) _Elements_ and _Components_ to emerge as a shared core.
- **What We All _Don’t_ Value** : Outline system boundaries everyone shares outside of which — for now — you’ll not focus.
- **What Few / One Value** : Note categories that only one or two participants selected. It’s common to address _Branding_, _Editorial_ and _Patterns._ Stoke the conversation around such boundaries. In or out? Now or later? Contrast perspectives, and let the discussion flow. Also listen for passions that signal people who may make or coordinate integrating less universally required parts.
- **Breadth vs Depth**? Most-oft selected parts (like _Color_, _Typography_, and _Buttons_) include deeper considerations as children (like _Contrast_, _Web Fonts_, and _Menu Buttons_). Use these to sensitize and trigger conversations on how much meticulous design, tooling, and variation is needed for certain parts.
- **Things That Surprise Us** (including the Moderator): Every group has a peculiar focus on certain parts, such as Ritz Carlton’s laser focus on branding and logo use when amid a rebranding of such a classic mark. Draw upon these surprises to denote what could be special vs. wrote within your system.

---

## Stage 2: Prioritize the System

The system’s tangible _Parts_ are familiar to beginners and experts alike. Using a second worksheet, you can bridge their appreciation of these parts to equally important and complicated concerns prioritization, _Products_ to which the system applies and _People_ that may be involved.

### **Column 1: _Prioritized_ Parts**

1. **Transcribe the 10 most-important parts** to the second worksheet, listing them in a rough prioritized order in the first column.
2. Asking “How much should we work on each important part?”, prioritize **effort per part** using no more than 25 tally marks, commensurate with the effort you’d expend on each of the 10 transcribed parts.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Photograph of priortized parts',
      caption = 'Parts transcribed from the first sheet, with tally marks revealing proportional effort to invest',
      class = 'escom-article-figure--break-bleed'
  ) }}

### Column 2: Products

1. Freelist as many **products by name** in your organization’s portfolio that you’ll apply the system. Time permitting, also identify a product’s **type** (WA: Web App, WS: Web Site, iOS, etc).
2. Asking “What are our most important products?”, prioritize **products by tier** up to 4 “Flagship” (most important) and 4 “Secondary” (next most important), marking them with an F or S, respectively.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Photograph of listed products',
      caption = 'Products, prioritized into tiers (like F = Flagship) and grouped by platform (like WS = Web Site)',
      class = 'escom-article-figure--break-bleed'
  ) }}

### Column 3: People

1. Name **centralized team members** who already have or will have nontrivial allocated time dedicated to the effort, and designate their primary discipline (such as UX, FED: Front End Development, or PdM: Product Management).
2. Identify **federated influencers** , often the talented designers and front-end developers from top products, that will play a key role in decision-making and creating things.
3. Include more **distant leaders to align** with, such as a director in Brand/Marketing, portfolio manager in Product Management, or similar systems experts in the enterprise.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Photograph of proposed people',
      caption = 'People by discipline',
      class = 'escom-article-figure--break-bleed'
  ) }}

### Discussion

Generally, it’s good to provoke discussion after each column (Parts then Products then People) but that can elongate the session and limit discussion on Products and especially People.

For each column, highlight:

- **Patterns** of consensus across the team
- **Outliers and contrasts** that reveal distinct perspectives, such as those of a designer with a strong connection to the Brand team or a developer with work limited to a platform like iOS or Windows.
- **Opportunities** for each participant to tell a story, be delegated a topic to focus on, or conversation to have next.

### Closing the Activity

End with “Closing Standup,” where each person articulates the 1 or 2 key themes or impressions one-by-one, around the circle. This should take no more than 3 to 5 minutes, give each participant a (last) voice, and enable a moderator to conclude with final thoughts and next steps.

---

## What’s Next After the Activity?

After the activity, the moderator can:

- Jot down **themes** , **opportunities** , and **risks** that’ll season a system’s strategy presentations and suggest blind spots to monitor.
- Aggregate and **transform Parts data** from worksheets to items prioritized in a backlog or task management system
- Inventory **Products** to plan engaging each, and a stronger sense of what Flagships to align with
- Reach out to the **People** that matter: potential members of a central team, influential designers and devs that’ll contribute, brand management, and—if you haven’t already—sponsoring and endorsing execs. Schedule a coffee. Or lunch. Or 10.

Best of luck getting your system off the ground!
