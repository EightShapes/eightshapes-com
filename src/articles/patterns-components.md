---
  category : UI Components
  title : UX Patterns ≠ UI Components
  deck : Our Community, not Companies, Should Build Pattern Libraries
  title_abbreviation : UX Patterns vs UI Components
  author_id : nathan
  date : 2017-01-27
  masthead : true
  layout : article.njk
  tags : [ui components]
---
{% import '../_includes/escom.njk' as escom with context %}

In “[Pattern patter.](https://ethanmarcotte.com/wrote/pattern-patter/)”, Ethan Marcotte writes yearningly for more design patterns in our practice. For now, many teams build libraries reusable components. However, these libraries usually lack thoughtful guidance to resolve myriad forces at play to compose interfaces effectively. Today’s libraries are (just) a kit of interface parts.

Ethan hints at the gap between reusable snippet and principled guidance. The call for _more_ patterns, in my opinion, it misses a point. Those “pattern” snippets aren’t patterns at all. At least not in the formal sense. Those snippets are components. And conflating the two confuses and clouds our judgment on why in-house teams don’t pursue patterns much anymore.

Let’s trace pattern history to understand the difference.

* * *

## Pattern Provenance

In learning patterns, designers immediately encounter Christopher Alexander’s inspirational [_A Pattern Language_](https://www.patternlanguage.com/bookstore/bookshelf.html#0) (1977).



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Photograph of A Pattern Language book',
      caption = 'Christopher Alexander’s A Pattern Language.',
      class = ''
  ) }}




The book is required reading (or browsing, since it’s THICK) for any aspiring design librarian. The book lays out myriad patterns — Arcades, Sequence of Sitting Spaces, Six-Foot Balcony, and 253 others — as a language options to ground sound architectural designs and decision making.

Alexander’s catalog sets a content model for each pattern we emulate today:

- **Name**
- **Problem Statement**
- **Sensitizing Picture** (always at the top)
- **Use When** (and often Don’t Use When)
- **Guidelines** rich with examples and scenarios

### Patterns in Software

You can trace Alexander’s influence into software engineering with [_Design Patterns:Elements of Reusable Object Oriented Software_](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612) (1994) by Gamma, Helm, Johnson, and Vlissides.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Photograph of Design Patterns book',
      caption = '',
      class = ''
  ) }}




Design Patterns quotes Alexander’s definition of a pattern:



  {{ escom.pull_quote(
      quote = 'Each pattern describes a problem that occurs over and over again in our environment, and then describes the core of the solution to that problem, in such a way that you can use this solution a million times over, <strong>without ever doing it the same way twice</strong> (emphasis added).',
      attribution = 'Chrisopher Alexander',
      class = 'escom-pull-quote--light'
  ) }}




The book then differentiates patterns from the components of today’s “living style guides:”



  {{ escom.pull_quote(
      quote = 'Design patterns are not about designs such as linked lists and hash tables that can be … reused as is. Nor are they complex, domain-specific designs for an entire application or subsystem. The design patterns in this book are descriptions … that are [then] customized to solve a general design problem in a particular context.',
      attribution = 'Christopher Alexander',
      class = 'escom-pull-quote--light'
  ) }}




Unlike patterns, components we use are already built for domain-specific reuse within a system. For example, a button is built for the web using HTML and CSS snippets to apply a visual language (like Material Design) for a layout motif (like a responsive site or dashboard app).

* * *

## The Rise of Patterns in Digital Design

In the mid-2000’s, Yahoo’s massive design organization released their pattern library to the public.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Screenshots of the Yahoo Pattern Library',
      caption = 'Yahoo Pattern Library Home, About &amp; Download pages, <a href="https://developer.yahoo.com/ypatterns/" rel="nofollow noopener" target="_blank">https://developer.yahoo.com/ypatterns/</a>',
      class = 'escom-article-figure--break-bleed'
  ) }}




Grounded by pioneering work of [Jenifer Tidwell](https://twitter.com/uipatternscom), luminaries like [Erin Malone](https://twitter.com/emalone), [Christian Crumlish](https://twitter.com/mediajunkie?lang=en), and [Bill Scott](https://twitter.com/billwscott?lang=en) contributed to the library that took at least my community (information architects) by storm. Erin [wrote up their whole process](http://boxesandarrows.com/implementing-a-pattern-library-in-the-real-world-a-yahoo-case-study/) on boxesandarrows.com. It’s processes and considerations are familiar to today’s design system makers. Many revered Yahoo then as they revere Salesforce Lightning and Google Material now.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Photograph of pattern books from the latter 2000s',
      caption = 'Design pattern books from the latter 2000s',
      class = 'escom-article-figure--break-bleed'
  ) }}



### Pattern Literature Explodes

As the decade closed, [many more libraries emerged](https://developer.yahoo.com/ypatterns/about/libraries.html) and books provided in-depth pattern catalogs from a variety of perspectives:

- [Designing Interfaces](https://www.amazon.com/Designing-Interfaces-Patterns-Effective-Interaction/dp/1449379702/ref=sr_1_1?s=books&ie=UTF8&qid=1483640085&sr=1-1&keywords=Designing+Interfaces) (Jenifer Tidwell, 2005), with associated [online catalog](http://designinginterfaces.com/patterns/)
- [Designing Web Interfaces](https://www.amazon.com/Designing-Web-Interfaces-Principles-Interactions/dp/0596516258/ref=sr_1_1?s=books&ie=UTF8&qid=1483640067&sr=1-1&keywords=Designing+Web+Interfaces) (Scott and Neil, 2009)
- [Designing Social Interfaces](https://www.amazon.com/Designing-Social-Interfaces-Principles-Experience/dp/0596154925) (Crumlish and Malone, 2009), with associate [online catalog](http://www.designingsocialinterfaces.com/patterns/Main_Page)
- [Modular Web Design](https://www.amazon.com/Modular-Web-Design-Components-Documentation/dp/0321601351) (Curtis, 2009)
- [Search Patterns](https://www.amazon.com/Search-Patterns-Discovery-Peter-Morville/dp/0596802277) (Peter Morville, 2010)

* * *

## However, Patterns Aren’t Components

Yahoo’s pattern library was a watershed moment as my career careened into components, patterns, and systems. It coincided with my first large scale library experience at sun.com from 2006–2010. Sun’s library was the most sophisticated library I’ve ever contributed to. However, those things we made at sun.com – and what so many teams make now – weren’t patterns in the formal sense.

In [Modular Web Design](https://www.amazon.com/Modular-Web-Design-Components-Documentation/dp/0321601351), I describe that **components are designed and built** in code, ready for reuse by plopping in a sketch file or HTML page, **patterns are abstract, principled guidance** applied _as you design and build._



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Annotated screenshot of Yahoo and Bootstrap Accordion pages',
      caption = 'An accordion as a <a href="https://developer.yahoo.com/ypatterns/navigation/accordion.html" rel="nofollow noopener" target="_blank">Yahoo Design Pattern</a> and <a href="http://getbootstrap.com/javascript/#collapse-example-accordion" rel="nofollow noopener" target="_blank">Bootstrap Javascript-driven Component</a>',
      class = 'escom-article-figure--break-bleed'
  ) }}




**Components are how something DOES work** , inclusive of tradeoffs and constraints realized through a build process. **Patterns describe how something SHOULD work** under preferred conditions and suggestions of how to cope with tradeoffs.

**Components are an interface chunk** to be added to an overall layout. whereas **patterns may be UI or a variety of other things** , like a behavior, flow, application motif or something else.

Completed **components exhibit a visual language** in polished, precise detail, yet **patterns are independent of any particular skin** and flexibly adapts across any visual language.

In Modular Web Design, Christian Crumlish (one time curator of the Yahoo pattern library) reinforced this nature of this distinction at Yahoo too. The public pattern library was related to but distinct from a ONE universal components library applied in-house across 80–90% of Yahoo’s product portfolio at the time.

* * *

## The 2011 & Beyond Era of Living Style Guides

Time passed, and things got quiet on the pattern front. Really quiet. Other stuff was going on.

In 2010, Ethan wrote a [responsive web design](http://alistapart.com/article/responsive-web-design) thing. HTML & CSS increased in power and simplicity simultaneously. Designers began prototyping and building in code (and arguing about unicorns).

As a result, design-oriented and architecturally inclined minds began to organize front-end assets in maintainable libraries. [Bootstrap](http://getbootstrap.com) hit, as did [Foundation](http://foundation.zurb.com/). Anna Debenham wrote about [building and maintaining living guides](http://24ways.org/2011/front-end-style-guides/). Mailchimp shared their [UI Patterns](http://us5.campaign-archive1.com/?u=7e093c5cf4&id=ead8a72012&e=ecb25a3f93). Brad Frost got atomic and worked with a team to launch [PatternLab](http://patternlab.io/). System of style and components exploded, but “traditional” patterns didn’t follow along.

### Our Community Diluted Pattern’s Definition

Where does this leave us? Many use patterns and components interchangeably as synonyms. Others explain “ patterns are complex components, arranged together, right?” Many can’t really say. Yet, a few high-profile libraries, like Google Material, strictly delineate the two.

I would spend energy distinguishing the two. But explaining abstract things is tiresome. Naming is hard. I moved on.

* * *

## Why “Patterns” Again, Now?

Folks are talking patterns again. In 2016, many of my clients began elevating (traditionally defined) UX Patterns for early system work. Still a lower priority relative to style and components, pattern interest is yet on the rise.

My conversations indicate this interest is due to:

- **Teams have solved how to systematize style and atomic components** at a high level. Non-designers get it and expect a “mini-bootstrappy kit made for us” with both. Patterns seem a logical next step.
- **More systems teams are funded and operate predictably**. As a system matures, they build a home and run workflows to disseminate advice to a wide community. Patterns can piggy back on this place to live.
- **It feels wrong to “leave UX out.”** UX designers begrudgingly admit that visual style threaded into a component library offers a predictable ROI across teams. However, that’s surface. These don’t address reusable, more structural solutions that UX designers grapple with. Patterns provide a platform for UX designers to share, debate, and converge on complex challenges.

Conclusion? System teams should invest in patterns too. Obviously, right?

Not so fast.

* * *

## (Most) System Teams Shouldn’t Invest In (Many) Patterns

I adore Google Material’s collection. I find inspiration in GE Predix’s expansion into patterns of flows and apps. But those enterprises are massive!

Most teams and organizations I serve are one or two orders of magnitude smaller than that. Therefore, when pattern patter arises I’ll advise a cautious, more deliberate pattern investment because:

- Designers apply patterns to make decisions. As a result, **patterns are for designers** (and developers) primarily in practice. They aren’t the actual decisions used by teams as products are made. Therefore, patterns can feel less relevant to a narrower audience.
- Patterns are universal. As a result, **patterns are abstract** , and thus effortful to reuse. As a decision-making mechanism, they offer considerations to judge, not a prescriptively solved item like a styled and coded button, tab, or card.
- **Patterns aren’t measurable**. Development organizations value tools teams can predictability and efficiently reuse. Visual style and component adoption can be measured. Patterns? Not nearly so much.
- **Patterns are made of lots of words**. Good patterns always start with a picture. However, understanding a pattern requires reading words. Lots of words. Usability testing of system doc suggests designers and devs don’t want to read: “Enough with the words. Gimme stuff to use.”
- **Patterns are expensive**. Composing patterns takes time and iteration, comparisons and conversations, whittling down to essential truths. That’s not quick and easy to do well. If you do it quickly, it shows in far wordier, narrowly considered advice. Again, the words.
- Patterns help improve design quality, no doubt. But **patterns**  **don’t necessarily improve – and can even lead to a lack of – cohesiveness** , another primary goal of system efforts. Citing a pattern’s abstract flexibility, designers can interpret patterns differently, resulting in different solutions that may be inconsistent to a customer.

Don’t get me wrong, I value patterns. It’s just not that I’ve found a justifiable return on investment in creating a reasonably sized pattern library in-house.

### Start with One Essential Pattern

On the other hand, I encourage small-to-medium size teams to compose just the most essential patterns unique to their customer experience:

- A bank’s pattern to **move money** from one account to another
- A database version control company’s pattern to **connect to a database**
- A sport performance analysis tool’s pattern to open or **edit video**

To these companies, such a moment is fundamental. A pattern provides a way forward to a consistent experience across such an arc of the interaction whether applied on web, iOS, Android, or Windows.

However, start with one. And when you find success, be wary of setting expectations that an essential pattern signals a vast library next.

* * *

## Then Who Creates Most of the Patterns? Could it be the Design Community, Together?

Patterns, if written well, probably don’t apply just to your team or even just your company. Well written patterns probably apply to _everyone, everywhere,_ doing what we do.

In the latter part of the last decade, lots of endeavoring designers published their own libraries. Now, there’s a vibrant, engaged system community and tools where we could work together to write patterns we all benefit from. Is now the moment for a community to dive into UX Patterns? I’m not convinced, but I’m open minded.

Plus, Alexander didn’t write A Pattern Language for a client, but for an architecture community. A book for everyone.













In “[Pattern patter.](https://ethanmarcotte.com/wrote/pattern-patter/)”, Ethan Marcotte writes yearningly for more design patterns in our practice. For now, many teams build libraries reusable components. However, these libraries usually lack thoughtful guidance to resolve myriad forces at play to compose interfaces effectively. Today’s libraries are (just) a kit of interface parts.

Ethan hints at the gap between reusable snippet and principled guidance. The call for _more_ patterns, in my opinion, it misses a point. Those “pattern” snippets aren’t patterns at all. At least not in the formal sense. Those snippets are components. And conflating the two confuses and clouds our judgment on why in-house teams don’t pursue patterns much anymore.

Let’s trace pattern history to understand the difference.

* * *

## Pattern Provenance

In learning patterns, designers immediately encounter Christopher Alexander’s inspirational [_A Pattern Language_](https://www.patternlanguage.com/bookstore/bookshelf.html#0) (1977).



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Photograph of A Pattern Language book',
      caption = 'Christopher Alexander’s A Pattern Language.',
      class = ''
  ) }}




The book is required reading (or browsing, since it’s THICK) for any aspiring design librarian. The book lays out myriad patterns — Arcades, Sequence of Sitting Spaces, Six-Foot Balcony, and 253 others — as a language options to ground sound architectural designs and decision making.

Alexander’s catalog sets a content model for each pattern we emulate today:

- **Name**
- **Problem Statement**
- **Sensitizing Picture** (always at the top)
- **Use When** (and often Don’t Use When)
- **Guidelines** rich with examples and scenarios

### Patterns in Software

You can trace Alexander’s influence into software engineering with [_Design Patterns:Elements of Reusable Object Oriented Software_](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612) (1994) by Gamma, Helm, Johnson, and Vlissides.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Photograph of Design Patterns book',
      caption = '',
      class = ''
  ) }}




Design Patterns quotes Alexander’s definition of a pattern:



  {{ escom.pull_quote(
      quote = 'Each pattern describes a problem that occurs over and over again in our environment, and then describes the core of the solution to that problem, in such a way that you can use this solution a million times over, <strong>without ever doing it the same way twice</strong> (emphasis added).',
      attribution = 'Chrisopher Alexander',
      class = 'escom-pull-quote--light'
  ) }}




The book then differentiates patterns from the components of today’s “living style guides:”



  {{ escom.pull_quote(
      quote = 'Design patterns are not about designs such as linked lists and hash tables that can be … reused as is. Nor are they complex, domain-specific designs for an entire application or subsystem. The design patterns in this book are descriptions … that are [then] customized to solve a general design problem in a particular context.',
      attribution = 'Christopher Alexander',
      class = 'escom-pull-quote--light'
  ) }}




Unlike patterns, components we use are already built for domain-specific reuse within a system. For example, a button is built for the web using HTML and CSS snippets to apply a visual language (like Material Design) for a layout motif (like a responsive site or dashboard app).

* * *

## The Rise of Patterns in Digital Design

In the mid-2000’s, Yahoo’s massive design organization released their pattern library to the public.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Screenshots of the Yahoo Pattern Library',
      caption = 'Yahoo Pattern Library Home, About &amp; Download pages, <a href="https://developer.yahoo.com/ypatterns/" rel="nofollow noopener" target="_blank">https://developer.yahoo.com/ypatterns/</a>',
      class = 'escom-article-figure--break-bleed'
  ) }}




Grounded by pioneering work of [Jenifer Tidwell](https://twitter.com/uipatternscom), luminaries like [Erin Malone](https://twitter.com/emalone), [Christian Crumlish](https://twitter.com/mediajunkie?lang=en), and [Bill Scott](https://twitter.com/billwscott?lang=en) contributed to the library that took at least my community (information architects) by storm. Erin [wrote up their whole process](http://boxesandarrows.com/implementing-a-pattern-library-in-the-real-world-a-yahoo-case-study/) on boxesandarrows.com. It’s processes and considerations are familiar to today’s design system makers. Many revered Yahoo then as they revere Salesforce Lightning and Google Material now.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Photograph of pattern books from the latter 2000s',
      caption = 'Design pattern books from the latter 2000s',
      class = 'escom-article-figure--break-bleed'
  ) }}



### Pattern Literature Explodes

As the decade closed, [many more libraries emerged](https://developer.yahoo.com/ypatterns/about/libraries.html) and books provided in-depth pattern catalogs from a variety of perspectives:

- [Designing Interfaces](https://www.amazon.com/Designing-Interfaces-Patterns-Effective-Interaction/dp/1449379702/ref=sr_1_1?s=books&ie=UTF8&qid=1483640085&sr=1-1&keywords=Designing+Interfaces) (Jenifer Tidwell, 2005), with associated [online catalog](http://designinginterfaces.com/patterns/)
- [Designing Web Interfaces](https://www.amazon.com/Designing-Web-Interfaces-Principles-Interactions/dp/0596516258/ref=sr_1_1?s=books&ie=UTF8&qid=1483640067&sr=1-1&keywords=Designing+Web+Interfaces) (Scott and Neil, 2009)
- [Designing Social Interfaces](https://www.amazon.com/Designing-Social-Interfaces-Principles-Experience/dp/0596154925) (Crumlish and Malone, 2009), with associate [online catalog](http://www.designingsocialinterfaces.com/patterns/Main_Page)
- [Modular Web Design](https://www.amazon.com/Modular-Web-Design-Components-Documentation/dp/0321601351) (Curtis, 2009)
- [Search Patterns](https://www.amazon.com/Search-Patterns-Discovery-Peter-Morville/dp/0596802277) (Peter Morville, 2010)

* * *

## However, Patterns Aren’t Components

Yahoo’s pattern library was a watershed moment as my career careened into components, patterns, and systems. It coincided with my first large scale library experience at sun.com from 2006–2010. Sun’s library was the most sophisticated library I’ve ever contributed to. However, those things we made at sun.com – and what so many teams make now – weren’t patterns in the formal sense.

In [Modular Web Design](https://www.amazon.com/Modular-Web-Design-Components-Documentation/dp/0321601351), I describe that **components are designed and built** in code, ready for reuse by plopping in a sketch file or HTML page, **patterns are abstract, principled guidance** applied _as you design and build._



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Annotated screenshot of Yahoo and Bootstrap Accordion pages',
      caption = 'An accordion as a <a href="https://developer.yahoo.com/ypatterns/navigation/accordion.html" rel="nofollow noopener" target="_blank">Yahoo Design Pattern</a> and <a href="http://getbootstrap.com/javascript/#collapse-example-accordion" rel="nofollow noopener" target="_blank">Bootstrap Javascript-driven Component</a>',
      class = 'escom-article-figure--break-bleed'
  ) }}




**Components are how something DOES work** , inclusive of tradeoffs and constraints realized through a build process. **Patterns describe how something SHOULD work** under preferred conditions and suggestions of how to cope with tradeoffs.

**Components are an interface chunk** to be added to an overall layout. whereas **patterns may be UI or a variety of other things** , like a behavior, flow, application motif or something else.

Completed **components exhibit a visual language** in polished, precise detail, yet **patterns are independent of any particular skin** and flexibly adapts across any visual language.

In Modular Web Design, Christian Crumlish (one time curator of the Yahoo pattern library) reinforced this nature of this distinction at Yahoo too. The public pattern library was related to but distinct from a ONE universal components library applied in-house across 80–90% of Yahoo’s product portfolio at the time.

* * *

## The 2011 & Beyond Era of Living Style Guides

Time passed, and things got quiet on the pattern front. Really quiet. Other stuff was going on.

In 2010, Ethan wrote a [responsive web design](http://alistapart.com/article/responsive-web-design) thing. HTML & CSS increased in power and simplicity simultaneously. Designers began prototyping and building in code (and arguing about unicorns).

As a result, design-oriented and architecturally inclined minds began to organize front-end assets in maintainable libraries. [Bootstrap](http://getbootstrap.com) hit, as did [Foundation](http://foundation.zurb.com/). Anna Debenham wrote about [building and maintaining living guides](http://24ways.org/2011/front-end-style-guides/). Mailchimp shared their [UI Patterns](http://us5.campaign-archive1.com/?u=7e093c5cf4&id=ead8a72012&e=ecb25a3f93). Brad Frost got atomic and worked with a team to launch [PatternLab](http://patternlab.io/). System of style and components exploded, but “traditional” patterns didn’t follow along.

### Our Community Diluted Pattern’s Definition

Where does this leave us? Many use patterns and components interchangeably as synonyms. Others explain “ patterns are complex components, arranged together, right?” Many can’t really say. Yet, a few high-profile libraries, like Google Material, strictly delineate the two.

I would spend energy distinguishing the two. But explaining abstract things is tiresome. Naming is hard. I moved on.

* * *

## Why “Patterns” Again, Now?

Folks are talking patterns again. In 2016, many of my clients began elevating (traditionally defined) UX Patterns for early system work. Still a lower priority relative to style and components, pattern interest is yet on the rise.

My conversations indicate this interest is due to:

- **Teams have solved how to systematize style and atomic components** at a high level. Non-designers get it and expect a “mini-bootstrappy kit made for us” with both. Patterns seem a logical next step.
- **More systems teams are funded and operate predictably**. As a system matures, they build a home and run workflows to disseminate advice to a wide community. Patterns can piggy back on this place to live.
- **It feels wrong to “leave UX out.”** UX designers begrudgingly admit that visual style threaded into a component library offers a predictable ROI across teams. However, that’s surface. These don’t address reusable, more structural solutions that UX designers grapple with. Patterns provide a platform for UX designers to share, debate, and converge on complex challenges.

Conclusion? System teams should invest in patterns too. Obviously, right?

Not so fast.

* * *

## (Most) System Teams Shouldn’t Invest In (Many) Patterns

I adore Google Material’s collection. I find inspiration in GE Predix’s expansion into patterns of flows and apps. But those enterprises are massive!

Most teams and organizations I serve are one or two orders of magnitude smaller than that. Therefore, when pattern patter arises I’ll advise a cautious, more deliberate pattern investment because:

- Designers apply patterns to make decisions. As a result, **patterns are for designers** (and developers) primarily in practice. They aren’t the actual decisions used by teams as products are made. Therefore, patterns can feel less relevant to a narrower audience.
- Patterns are universal. As a result, **patterns are abstract** , and thus effortful to reuse. As a decision-making mechanism, they offer considerations to judge, not a prescriptively solved item like a styled and coded button, tab, or card.
- **Patterns aren’t measurable**. Development organizations value tools teams can predictability and efficiently reuse. Visual style and component adoption can be measured. Patterns? Not nearly so much.
- **Patterns are made of lots of words**. Good patterns always start with a picture. However, understanding a pattern requires reading words. Lots of words. Usability testing of system doc suggests designers and devs don’t want to read: “Enough with the words. Gimme stuff to use.”
- **Patterns are expensive**. Composing patterns takes time and iteration, comparisons and conversations, whittling down to essential truths. That’s not quick and easy to do well. If you do it quickly, it shows in far wordier, narrowly considered advice. Again, the words.
- Patterns help improve design quality, no doubt. But **patterns**  **don’t necessarily improve – and can even lead to a lack of – cohesiveness** , another primary goal of system efforts. Citing a pattern’s abstract flexibility, designers can interpret patterns differently, resulting in different solutions that may be inconsistent to a customer.

Don’t get me wrong, I value patterns. It’s just not that I’ve found a justifiable return on investment in creating a reasonably sized pattern library in-house.

### Start with One Essential Pattern

On the other hand, I encourage small-to-medium size teams to compose just the most essential patterns unique to their customer experience:

- A bank’s pattern to **move money** from one account to another
- A database version control company’s pattern to **connect to a database**
- A sport performance analysis tool’s pattern to open or **edit video**

To these companies, such a moment is fundamental. A pattern provides a way forward to a consistent experience across such an arc of the interaction whether applied on web, iOS, Android, or Windows.

However, start with one. And when you find success, be wary of setting expectations that an essential pattern signals a vast library next.

* * *

## Then Who Creates Most of the Patterns? Could it be the Design Community, Together?

Patterns, if written well, probably don’t apply just to your team or even just your company. Well written patterns probably apply to _everyone, everywhere,_ doing what we do.

In the latter part of the last decade, lots of endeavoring designers published their own libraries. Now, there’s a vibrant, engaged system community and tools where we could work together to write patterns we all benefit from. Is now the moment for a community to dive into UX Patterns? I’m not convinced, but I’m open minded.

Plus, Alexander didn’t write A Pattern Language for a client, but for an architecture community. A book for everyone.




