---
  category : UI Components
  title : Classification in Design Systems
  deck : Recent Trends in Naming Things in Design Libraries
  title_abbreviation : Classification
  author_id : nathan
  date : 2016-02-26
  masthead : false
  layout : article.njk
  tags : [ui components]
---

{% import '../_includes/escom.njk' as escom with context %}

Trent Walton’s article [Atomic Classification](http://trentwalton.com/2016/02/26/atomic-classification/) raises some excellent points and considerations when naming and organizing things in a design system. Some highlights include:

- “Choose names … that make the most sense for the most people.”
- “Naming components could be included … early on.”
- “Atomic Design, like any valuable tool, resource, or concept, doesn’t have to be an all-or-nothing proposition.”

Absolutely. Brad Frost’s [atomic design](http://atomicdesign.bradfrost.com/) metaphor and storytelling resonates strongly across disciplines and experience-levels. It’s elevated the conversation and equipped everyone with a foundation to build on.

But naming and organizing things is hard. And abstract concepts (like atoms and molecules) applied to our own everyday objects (like HTML elements and CSS properties) creates a layer of transformation that sometimes gets in the way.

---

## Organizing a Library, Back Then

In my book [Modular Web Design](http://www.amazon.com/Modular-Web-Design-Components-Documentation/dp/0321601351) (2009), I devoted an entire Chapter 9: Organize to concerns around naming and organizing components in a library, and even devote a step of the [Component Cut Up workshop](/articles/the-component-cut-up-workshop) to naming each part.

The chapter addresses two prominent concepts in naming things:

- **Taxonomy** , including not just a (component’s) name, but grouping in _categories_ (like Header/Footer, Sidebar, and the overlapping Content or Navigation, don’t get me started) and as well as _variations_ and _examples_ of each.
- **Codes** as _IDs_ (like G03v1 for global navigation’s default footer variation) that serve as shorthand verbal references for knowledgable teams (“Use an S12 there!”) as well as searchable targets used in CSS class names and HTML comments bounding each component in an assembled page.

Such classification can be powerful, specific, and – once you get the hang of it – incredibly efficient. But cryptic codification can lead to poor learnability and memorability, a perception of exclusivity (“What the heck is an S12?”), and more challenging (and annoying) conversations around naming things.

---

## How Classification Has Evolved, For Now

Seven years and ~20 libraries later, my beliefs have evolved. I still appreciate the geeked out notions of taxonomy and coded classification as described above. However, approaches have trended towards a simpler future.

When working with a new system, we’ll usually:

- **Start with Visual Style**. This category may be alternatively referred to as visual language, design language, or something else. But we’ve seen designers and devs in usability tests of a style guide accurately predict what’s in the Visual Style section: color, type, icons, and less often things like space, photography, and other properties. It’s also different from components because it’s properties of things, not the things themselves.
- **Call things Elements and Components** rather than Atoms and Molecules, or whatever other platform-specific or metaphor-rich jargon is being considered. Again, to be clear: Atomic Design is awesome, but most libraries employ less metaphorical terms such as components for reusable parts.
- **Don’t distinguish Elements from Components. Just call them all Components**. Sure, HTML is made of elements (P, LI, BUTTON, INPUT). But the line between what’s an element versus what’s a component is subjective. It’s annoying to constantly debate. It creates confusion in finding things. So why bother? It’s a longer list, but they’ll always find _Buttons_ and _Forms_ and _Lists_ in that single place.
- **Even invisible things are Components.** The invisible table-based layout scaffolding of yesterday is gone, but even _Grids_ and/or _Layouts_ can reasonably be called components.
- **Components can contain Components.** “Our HTML layouts are so hierarchical, so what if this thing is inside a component?” “So what. A component contains a component. It happens.” “Oh, ok. I guess it’s not that big a deal.”
- **Distinguish Components from Patterns**. So, let’s break with our trend of simplifying to persist an age old adage: patterns are principled guidance to interpret (not necessarily transformed into reusable code) whereas components are prescriptive objects coded for use. You can even have a _Sign In_ pattern (encapsulating behaviors and tone across platforms) aligned with an iOS Sign In component and even multiple web-based Sign In components. Say what?
- **Centralize guidance around objects you use** (Components), but still have sections of across-object guidances that’s relevant. If you are trying to teach your team how to use “Sign In” instead of “Log In,” the best place to put that editorial guidance is on the Sign In component (errr, or pattern) documentation page. Nevertheless, such guidance could also make it’s way into a word list accessed via an _Voice and Tone_ or _Editorial_ section.
