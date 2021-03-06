---
  category : Documentation
  title : Component Introductions
  deck : Pithy Names and Descriptions That Go a Long Way
  title_abbreviation : Introductions
  author_id : nathan
  date : 2018-03-22
  masthead : true
  layout : article.njk
  tags : [documentation]
---

{% import '../_includes/escom.njk' as escom with context %}

_#2 of 6 of the series Documenting Components:_
[Overview](/articles/documenting-components) | **Intros** | [Examples](/articles/component-examples) | [Design](/articles/component-design-guidelines) | Code | Authoring

---

## Component Names: “My name is…”

Naming a thing well is essential, and sometimes hard.

A component’s name (_Buttons_) appears as the page’s title, a label in site’s navigation (Buttons), and a code identifier of a CSS class (`-button`) or HTML element name (`<Button>`). _Button_ is easy. It’s a name we refer to easily and consistently, together, everywhere in our work.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Illustration of a component name appearing in different artifacts',
      caption = 'Persist the <em>same component name throughout design, code and conversation</em>',
      class = 'escom-article-figure--break-bleed'
  ) }}

_Drawer_ or _Accordion_ or _Collapsible_ is hard. Even harder? _Grid_ or _Layout_ or _Layout Grid_ or _Rows_ & _Columns_ or _Box_ or _Proportional Grid_ or whatever you call invisible scaffolding visually ordering a page. Even _Card_ isn’t universally defined: is it a generic container or the defined composite of all it contains? Making a library forces the choice.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Bar chart indicating the popularity of the simple term grid',
      caption = 'Name of component used to “Establish visual order on a page using rows and columns,” across 21 libraries.',
      class = ''
  ) }}

For most doc sites, navigation relies on label alone. With a little effort, nav could be enhanced with a _thumbnail_, maybe only via a _tooltip_ on hover. That same snapshot—or fully rendered components—could also be arranged in a gallery introducing the Components section. We can do more.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = '',
      caption = 'Diagram of thumbnails appearing in navigation',
      class = ''
  ) }}

If demystifying synonyms is your game, sprinkle in a little “also known as” subtlety to sensitize rather than confuse.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Diagram of a preferred term and alternate terms displayed adjacently',
      caption = '',
      class = ''
  ) }}

_Takeaway_: A optimally clear title can be a challenge, so sweat the decision only just enough. Always pair it with a sensitizing example, and sprinkle hints elsewhere in the UI.

---

### Button or Buttons? Deciding Singular vs Plural Form

Names in code uniformly refer to a singular instance (`-button`, `-input`, `-card`). For components used many times on a page, whether primitive (_Buttons_, _Inputs_) or composed (_Cards_), an industry sample suggests most libraries prefer the plural form for page titles and site navigation labels.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Illustration of whether to include component names as plural',
      caption = '',
      class = ''
  ) }}

However, the singular form is common for components used once on a page. _Global Navigation_, _Footer_, and _Grid_ are thought to frame the page (although _Grids_ do repeat within a page). Similarly, a _Masthead_, _Hero_, or _Billboard_ can set the page’s tone, but aren’t repeated further down. When we verbalize these, the singular form sounds more natural.

Now, navigation is tricky. As a component label, it’s the most vague, so consider avoiding it altogether. Yet for the remaining examples, plural variants — *Footers*, _Grids_, and *Mastheads* — work just fine.

_Takeaway_: Most teams favor plurals, and it’s up to your team to form a convention. Perfect consistency may not be worth the stirring the passions, but if you mix both, have a rationale.

---

## Component Intros: “…and what I do is…”

Names offer an imperfect, incomplete component explanation. Therefore, many libraries elaborate with a description to capture a component’s essence.

### Tantalizing with a Deck

The description can be short:

- Buttons can be used to show the user’s choice of options for actions and assign these to a clear hierarchy. (<a href="http://www.audi.com/ci/en/guides/user-interface/components/buttons.html" rel="nofollow noopener" target="_blank">Audi</a>)
- Grid systems are used for creating page layouts through a series of rows and columns that house your content. (<a href="http://carbondesignsystem.com/style/grid/design" rel="nofollow noopener" target="_blank">IBM Carbon</a>)

Each elaborates with details that sensitize: a _Button_’s action and hierarchy, a _Grid_’s rows, columns, and purpose to create page layout.

As a typographic tradition, the description—known as a [Deck](https://www.thoughtco.com/what-is-an-article-deck-1078014)—should be paired visually with the component’s title and separate from remaining content. The deck’s font size should notably larger than paragraphs that follow. Tantalize the reader onward.

---

### Keep the Deck to a Tweet

How long’s too long? I encourage teammates to embrace “Tweet length” (and by tweet, I mean original the length of 144 characters). Is two sentences OK? Perhaps, although my peer reviewing history is littered with suggestions trimming from two sentences to one.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Illustation of what to do: keep an intro short',
      caption = '',
      class = ''
  ) }}

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = 'Illustration of what not to do: go long with an intro',
      caption = '<strong>DO</strong> Keep the deck short. <strong>DON’T</strong> explain everything before Examples do a better job explaining everything.',
      class = ''
  ) }}

When writing an introduction, capture the essence, not the whole story. That means clarifying component structure and purpose instead of implementation details. For a _Grid_, “rows and columns” for “responsive layout” are favored over “12 columns” or “breakpoints at 768 and 1024.” For _Buttons_, keep it very short. Like 10 words or less short! Everyone knows what a button is.

_Takeaway_: Set essential context and tone, avoid packing in every feature, and above all else: keep it short.

---

### Industry Examples to Inspire

For **Buttons** :

- The Predix UI Buttons module is a simple, robust, extensible baseline for building entire suites of buttons on. (<a href="https://designsystem.morningstar.com/components/buttons.html" rel="nofollow noopener" target="_blank">GE Predix</a>)
- Buttons make common actions immediately visible and easy to perform with one click or tap. They can be used for any type of action, including navigation.(<a href="https://polaris.shopify.com/components/actions/button#navigation" rel="nofollow noopener" target="_blank">Shopify</a>)
- Buttons are used for actions, like in forms, while textual hyperlinks are used for destinations, or moving from one page to another. (<a href="https://github.com/primer/primer/tree/master/modules/primer-buttons" rel="nofollow noopener" target="_blank">Github Primer</a>) %}
- Buttons are used to invoke an event. (<a href="http://Buttons%20are%20used%20to%20invoke%20an%20event" rel="nofollow noopener" target="_blank">Salesforce Lightning</a>)

For **Cards** :

- Provide entry into detailed content via an image, text, and related information. (<a href="https://comet.discoveryeducation.com/components/cards.html" rel="nofollow noopener" target="_blank">Discovery Comet</a>)
- A card is a sheet of material that serves as an entry point to more detailed information. (<a href="https://material-ui-next.com/demos/cards/" rel="nofollow noopener" target="_blank">Material UI</a>)
- Cards contain elements and functions on a single topic and can be used as teasers for further content. (<a href="http://www.audi.com/ci/en/guides/user-interface/components/card.html" rel="nofollow noopener" target="_blank">Audi</a>)

For **(Layout) Grids**:

- This 12-column, responsive grid provides structure for website content. (<a href="https://designsystem.digital.gov/components/grids/" rel="nofollow noopener" target="_blank">USDS</a>)
- The grid provides the foundation for harmoniously positioning elements, while maintaining a consistent and coherent look to the screen. (<a href="https://atlassian.design/guidelines/product/foundations/grid" rel="nofollow noopener" target="_blank">Atlassian</a>)
- Box component provides an easy way to apply standardized size &amp; space to your layout. (<a href="http://mineral-ui.com/components/box/" rel="nofollow noopener" target="_blank">Mineral</a>)

---

## A Too-Detailed Introduction? “Get to the Goods!”

Sometimes components require introductions that elaborate on concepts, complexity, or library-specific points of view that aren’t self evident.

This is very evident in _Layout Grid_ documentation. Rows, columns, breakpoints, alignment, shifting, stacking, offsetting. Oh my, there’s so much to understand. I’m exhausted just thinking about it.

So the instinct is to introduce in detail. An introductory paragraph becomes a section. Code examples to explain each concept only crop up later, mirror the introduction’s subheads. The repetition is unnecessary, bogging a reader down in details before they even get started.

Component recognition relies as much or more on what a reader sees (the picture) rather than read (the name), even if recall and conversation depend on the name. Therefore, position the name as the page’s title close to the item’s picture. Usability testing of component doc affirms:

{{ escom.bar_quote(
      quote = '“I don’t want to read all this.”<br>“Show me stuff I can immediately use.”<br>“Get me to the goods.”<br>“Where are the tools?”'
  ) }}

In a introduction, avoid deep context setting and lengthy overviews. Save the feature details and expansive design and code guidelines for the examples.

_Takeaway_: Spare the gory details; instead, get to examples adopters can immediately apply! If you have long story to tell, save it for later.

---

Component introductions must be powerful yet short. The objective is to tantalize enough to ensure the reader is in the right place. As a result, minimize the distance from component title to a first glimpse of the “goods” that follow. Get to the examples you can to use.

[**#1. Overview**](/articles/documenting-components) ← Previous | Next → [**#3. Examples**](/articles/component-examples)
