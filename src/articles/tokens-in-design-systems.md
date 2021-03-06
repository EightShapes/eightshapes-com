---
  category : Visual Style
  id : tokens-in-design-systems
  title : Tokens in Design Systems
  deck : 10 Tips to Architect & Implement Design Decisions for Everyone
  title_abbreviation : Tokens
  author_id : nathan
  date : 2016-06-24
  masthead : true
  layout: article.njk
  tags: ['tokens', 'design systems', 'visual style']
---
{% import '../_includes/escom.njk' as escom with context %}


In a recent code review, my passions stirred as I walked through a _Pill_ component&rsquo;s style with a designer teammate. I could hardly contain my excitement:

<script src="https://gist.github.com/nathanacurtis/2ec08026c75e280d558d65e472f6b465.js"></script>

&ldquo;Look. Yes, it&rsquo;s code, but look closely at those tokens. You know what this looks like? Like specs! So what? I can read this, as can you. And we can thread these everywhere: doc, designs, and convos too. _Everywhere_!&ldquo;

My teammate&rsquo;s reaction hinted curiosity, even if didn&rsquo;t match my outburst&rsquo;s emotional punch. He&rsquo;s not a system&rsquo;s geek like me. Not yet, at least. But he got what mattered: there&rsquo;s a visible path for decisions we make to where they are implemented.

We&rsquo;ve spent so much effort trying to get design _out_ of our variables — those most atomic of reusable code bits — I felt instantaneously attracted to the idea of putting design back in.

Here&rsquo;s how we evolved, architected, and implemented tokens throughout design, code and collaboration.

* * *

## From Variables to Tokens

Every design system offers **_options_**. For example, colors can scale from black through neutrals to white. Each neutral — identified via a HEX code like `#2B303B` — can be stored and made available in a variable `$color-neutral-20`, for use in a preprocessor like Sass.

<script src="https://gist.github.com/nathanacurtis/001acf3297a30179ced491349ba6de1c.js"></script>

Variables take the mystery out of obscure values. But they don&rsquo;t bridge the gap between naming and use. They answer &ldquo;What options do I have?&rdquo; yet leave &ldquo;What choice do I make?&rdquo; unclear.

Options aren&rsquo;t good enough.

* * *

### Design Decisions, an Option Applied to a Context

A system&rsquo;s strength comes from knowing how to apply options (like `$color-neutral-20`) to contexts (like a conventional dark background color). This grounds the option as a **_decision_**.

Those are decisions I can use with confidence!

However, such decisions are usually still buried in some file in some repo used by _developers_ working on the _web-based_ product they own. What about _designers_? Other web _products_? Across to other platforms like _iOS_ and _Android_? We&rsquo;ve encoded decisions meant for everyone, but they owned in some dungeon of a repo nobody else can find.

* * *

### Design Tokens, Decisions Propagated Through a System

Salesforce UX provides a glimpse. Their ideas captivate me, most of all their [Living Style Guide](https://medium.com/salesforce-ux/living-design-system-3ab1f2280ef7#.r26jko9u3) concept that applies [Design Tokens](https://www.lightningdesignsystem.com/tokens/) across products using their open source [Theo](https://github.com/salesforce-ux/theo) tool.

Here, options and decisions aren&rsquo;t buried in Sass files. Instead, they are centralized and propagated as **_tokens_** to any product, designer or developer adopting the system, in easy-to-use, predictable formats.

Hundreds of tokens can become readable, intentional, and traceable decisions woven into a portfolio&rsquo;s or enterprise&rsquo;s products.

See the decisions as a big spec sheet? I can. Designers can too. With such visibility and tooling, they recognize the impact of their decisions. Before, we decided on `$color-neutral-80` for a border or background with a bit of whimsy. Now, we&rsquo;re applying `$border-hairline` or a `$background-color-light` in a thoughtful, conventional manner.

Designers start to collaborate. They make decisions with more deliberation and confidence, organized their thoughts in a structure they share. Developers follow suit.

This can transform painstaking activities like redlines and pixel measuring into collaboration rich with token talk. Across our work — critiquing design concepts, writing acceptance criteria, reviewing pull requests — the **architecture** and **implementation** of tokens is ever-present.

* * *

## Architecting Tokens

A successful, enduring token architecture depends on straightforward grouping, ordering, classification and decision-making.

### #1. Show Options First, Then Decisions Next

You can&rsquo;t make decisions without options. Tokens are an effective instrument for illustrating the path from one to the other.

<script src="https://gist.github.com/nathanacurtis/0e02631e1e47c0c5c1d061e5462cb557.js"></script>

In our token files, we begin with options like available colors. After that, we apply options to contexts like `text-color` and `background-color`.

_Takeaway_: Organize your decisions to suggest their atomic basis: building from options to decisions and simple to complex.

* * *

### #2. Start with Color & Font, and Don&rsquo;t Stop There!

I often talk of a design language&rsquo;s big three: color, typography, and iconography. So it&rsquo;s no surprise that our token file begins with color and type options and decisions (icons are automated elsewhere). However, visual style is composed of so much more, and so could tokens.

While we&rsquo;ll start with applying color to background and text, we&rsquo;ll expand to many other types of decisions, including things like:

<script src="https://gist.github.com/nathanacurtis/39c9a3bcc5cbf25f3c236be5f620ed9b.js"></script>

_Takeaway_: Start with but don&rsquo;t stall with just color & type. Expand your decisions to cover the myriad concerns of a design language.

* * *

### #3. Vary Options Across Meaningful Scales

Many tokenized concepts include scales to choose from, such as t-shirt sizing (`XS`, `S`, `M`, `L`, `XL`, `XXL`), progressions (like a geometric `2`, `4`, `8`, `16`, `32`, `64`), or custom terminology (like `compact`, `cozy`, and `comfortable`). Scales can also start with a few options (only `S` & `M`) and grow to include more as warranted.

<script src="https://gist.github.com/nathanacurtis/d2d2984de8a56700154024df1d3e1f45.js"></script>

Scales afford branching a token hierarchy to similar yet distinct variants, such as enriching `space-inset` (from `XS` to `XL`) to variants of `space-inset-squish` and `space-inset-stretch` (both of which also offer `XS` to `XL`).

Agreeing on a scaling model — t-shirts or progressions, you decide! — for ranges like these is a team-specific endeavor. Even tougher, you&rsquo;ll need to avoid hardened scales not resilient to inserting a step in between later.

_Takeaway_: Adopt and tokenize scales and demonstrate how they apply across different scenarios.

* * *

### #4. Invite Contribution, but Curate the Collection

When does a choice warrant becoming a token? A single use: nope, not enough. A second may lack conviction. But three? If it shows up that much, it&rsquo;s usually token-worthy. Exceptions exist, but &ldquo;Used 3 times?&rdquo; criteria grounds discussion.

So who&rsquo;s the token gatekeeper? Nobody, if we employ healthy processes for design and dev reviews. Anyone can propose tokens, surfacing candidates in a concept or pull requests. Our Slack channel has much token talk, too.

Nevertheless, I serve as a token _curator_, scanning work with an eye for token candidates. I may skim a request&rsquo;s markup and skip the JavaScript. However, I thoroughly scan style and token files to finesse names, reclassify wayward nominees, and challenge excessive expansion. Everyone has a token voice. But not everyone cares enough or has time to keep tokens clean.

_Takeaway_: Make tokens a team endeavor, and (even if implicitly) designate a structured architectural mind to curate the collection.

* * *

### #5. Graduate Decisions from Components to Tokens

It&rsquo;s a distraction to divert brainpower to constantly think tokens, tokens, tokens. &ldquo;Should this be a new token? Is that a token? I&rsquo;m not using a token? Oh no!&rdquo; Nobody needs this friction.

However, my teammate Kevin Powell has a healthy habit of stockpiling variables at the top of a component style file. For example, a portion of variables in use in his _form_ component&rsquo;s style identify many applications of text color to form elements like inline errors, input, labels, and placeholder text.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Comparative code display showing variables and a hierarchy of yaml code',
      caption = 'Emerging component file on the left, with file-specific variables at the top easy to compare with and consider for the tokens file on the right.',
      class = 'escom-article-figure--break-bleed'
  ) }}



These component-specific variables offer a helpful inventory of candidates to graduate to the token library. Here, we can catch an opportunity to replace a less-specific disabled color of _$color-neutral-90_ with it&rsquo;s more intentional _$background-color-disabled_ in the _form\_elements.styl_ file. On the other hand, the component&rsquo;s _$border-color-input-hover_ is less likely for reuse beyond forms and thus a poor token candidate.

_Takeaway_: Encourage habits in design and development that park reusable decisions — token _candidates_ — in a predictable place such as the top of a text file or corner of design art.

* * *

### #6. Cope with Systemic Change Predictably

Tokens are a wonderful tool as you formulate a pristine system from scratch. But what about 18 months from now, when design decisions evolve? How does a token change cascade? What are the risks, and how do you mitigate them?

Tokens protect you from unpredictable, widespread change given their specificity and – as a result – more limited and intentional use.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Screenshot of a UI dialog searching for a variable',
      caption = 'Searching for a generic variable',
      class = ''
  ) }}



Previously, you comb and assess a repository for a _#2B303B_ hex code or _$color-neutral-20_ variable applied to myriad different elements. Boo!


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Screenshot of searching for a specific term',
      caption = 'Searching for a specific decision.',
      class = ''
  ) }}



Now, you&rsquo;re tracing the breadth of use of _$text-color-microcopy_ precisely and narrowing risk. Yes!

_Takeaway_: Take advantage of a token&rsquo;s maintenance benefits, and use that as a selling point to your adopting team.

* * *

## Implementing Tokens

Most teams start consolidating decisions as a huge stack of predictable, hierarchical variables names in a SASS or Stylus file. But that file buries decisions in one place, limiting use to that technology.

That leaves the promise of tokens unfulfilled. A first step in spreading tokens throughout a system is freeing them with an open format like JSON.

### #7. Make Token Data Reusable, via JSON

[JSON](https://en.wikipedia.org/wiki/JSON) is an ideal open standard for encoding hierarchical name/value pairs for reuse across tools.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Diagram of JSON data converted into SASS, LESS, and Stylus',
      caption = '',
      class = ''
  ) }}



With tokens in JSON, you can transform decisions for multiple preprocessors — SASS, Stylus and LESS — as your community requires. This opens the door to products constrained to a preprocessor they can&rsquo;t or won&rsquo;t leave behind, even if it&rsquo;s not the system&rsquo;s &ldquo;recommended&rdquo; one.

Similarly, JSON creates a bridge to other platforms, whether directly consumed in iOS work or transformed into XML for Android teams.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Diagram of JSON data being converted to formats relevant to platforms like web, iOS and Android',
      caption = '',
      class = ''
  ) }}



_Takeaway_: Encode tokens in a format reusable across platforms, exposing them in a form everyone can use.

* * *

### #8. Manage & Read Token Data Easily, via YAML

JSON is powerful, hierarchical, and flexible. However, it&rsquo;s imperfect as a place to _manage_ data. Syntax is verbose, prone to error when manually curated, lacks comment support, and lacks variables.

Enter [YAML](https://en.wikipedia.org/wiki/YAML), a more human-readable language for recording hierarchical property/value pairs. YAML adds variables and comments to JSON&rsquo;s hierarchical capability in a more readable format. YAML helps quickly _show_ tokens readably to any audience and its simplicity opens a border for designers to suggest new values and even submit pull request themselves.

Our team uses [yamljs](https://www.npmjs.com/package/yamljs) to transform the YAML data we manage as a single-source-of-truth into a JavaScript object as a step of our build process.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = 'Diagram illustrating how design decisions stored in YAML are propagated to other formats',
      caption = '',
      class = ''
  ) }}



_Takeaway_: Consider YAML to empower designers to engage with and _work in code_, drawing them closer to code and those that use code.

* * *

### #9. Automate Documentation with Token Data

Embedding design decisions in code isn&rsquo;t valuable if designers and developers don&rsquo;t know what the decisions are and how to access them. That&rsquo;s why we use tokens as _content_ as much as we do _code_.

In our systems, we thread tokens as a data structure (think: JSON) into templates to show decisions in a tokens reference and other topics like space and themed buttons.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '8',
      image_alt = 'Screenshot of a macros in nunjucks that reuse collections of tokens',
      caption = 'Basic templates for documentation site, powered by token data',
      class = ''
  ) }}



Other documentation is more customized, such as a color tint stack that includes names, accessibility scores, and more. While not a simple loop through token hierarchy, the documentation can still use tokens directly.

_Takeaway_: Use tokens to enrich how living your living guide can be.

* * *

### #10. Embed Token Data in Design Tools, Too

Token data can inspire ideas for tools for not just developers, but designers too. We talk about building custom tools for our portfolio&rsquo;s designer community in tools like **Sketch** , **Photoshop** , or (back in the day) **InDesign**.

Such software offers varyingly robust hooks to use JSON data to your advantage. For example, [InVision](https://www.invisionapp.com/)&rsquo;s [Craft](https://www.invisionapp.com/craft) relies upon JSON objects stored as text in subfolders, suggesting a possible integration with outputs of our system&rsquo;s build process. Such connections were effortful and siloed enough in the past that they&rsquo;d be ignored. Today, they feel more realistic as a system matures.

_Takeaway_: Identify opportunities to extend the system into designer tools, especially design software. Consider costs — both setup and maintenance — relative to the benefits to your _system user_&rsquo;s experience.

* * *

The more my teams use tokens, the more at home I feel discussing design. Threading smart decisions encoded with meaningful names helps me trust the output of my team is arcing towards the aspiration of a more cohesive, maintainable system.


