---
  category : Visual Style
  id : size-in-design-systems
  title : Size in Design Systems
  deck : Tuning Type & Space With an Eye on Height Per Component
  title_abbreviation : Size
  author_id : nathan
  date : 2019-04-25
  read_duration : 11
  masthead : true
  layout: article.njk
  tags: ['size', 'design systems', 'visual style']
---
{% import '../_includes/escom.njk' as escom with context %}



Higher density drives efficiency. Frequently used interfaces show you more and offer more diverse tasks via many interactive paths all without scrolling. On the other hand, a deep marketing message warrants a lengthy webpage that drives to a dominant call-to-action in a far less compact density. Yet, “rich app vs marketing webpage” is an incomplete contrast. Density can vary in the same product, page, or even component (such as for responsiveness).

The higher density you go, the more you risk hiding critical detail amid many contrasting signals, increasing interaction difficulty (Fitt’s Law), or even overwhelming a user with too much to process. So, density involves tradeoffs, and thus density involves judgment.

As enterprises scale design systems across teams, density creates friction. Roots of this opposition often trace to density: type too large, space too generous, elements too big. Teams designing data-rich analyst apps chafe at using components made for marketing content. When components don’t fit, they want to quit — or not even start with — a system.

A system plays a role in guiding and tooling density, starting with harmoniously applied sizes per component. This article describes how consider **density using component size and height**. Next, it describes how to **unify size across components** step-by-step. To conclude, **lessons learned** season perspectives of those adding size to a system.

* * *

## Approaching Density With Sizes That Unify Height

Interface density results from a tapestry of typography and spatial choices — paddings, margins, columns, gutters, etc— applied to everything from outer layout containers to primitive elements including components offered from a design system.

A UI component control what’s inside its boundary, unless it also adds margin that risk neighborly conflict, which I like to avoid. There are many properties in play, including font-size, font-weight, line-height, padding and, if relevant, border. These properties blend together, impact density, and — vitally — result in a size.


{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '1',
  image_alt = 'Button annotated for size, typography and padding',
  caption = 'Size Resulting from Space and Type',
  class = 'escom-article-figure--break-bleed'
) }}


Make no mistake: density ≠ size. But size impacts density and varying density can correlate strongly with tuning size. Increase or decrease font-size and padding, and the button gets larger or smaller, respectively.

Yet, many component libraries size components inconsistently. Sizes do exist, mind you. There’s a small input here. There’s a small and large button there. There may even be extra large or even a “puffy” button (yes, that’s happened). Upon inspection, small input and small button aren’t the same small.


{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '2',
  image_alt = 'Input and button size not aligned',
  caption = 'Inconsistent Component Height',
  class = 'escom-article-figure--break-bleed'
) }}


To build consistently and efficiently to varying densities using a system, adopters need a consistent component sizing model executed across a catalog. From both a visual and technical perspective, consistent sizing corresponds to a combination of it’s width and height. Width is often dictated by both context and content. On the other hand, consistent height is a realistic and desirable objective when arranging core components horizontally and vertically.

As a result, we’ve begun to approach unifying component size as a step-by-step process that includes typography, space, and height from the inside out.

* * *

## Sizing Components, Step-by-Step

Achieving consistent size across the component catalog grounded required a few steps: establish a scale, identify atomic components, determine a target height, and tune properties per component to achieve that height.

* * *

### 1. Identify and Name the Size You Need

For some teams, one is enough. Otherwise, how many sizes do we need?


{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '3',
  image_alt = 'Spectrum with default and high',
  caption = '',
  class = 'escom-article-figure--break-bleed'
) }}


Some trend towards (1) Default versus (2) High density. The former serves most adopters with a sensible starting point. The latter offers those designing denser interfaces the compression appropriate for their customer needs.

Two alternatives may not be enough. More often, we’ll see small, medium (the default) and large variants, serving experiences like:


{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '4',
  image_alt = 'Spectrum with small, medium and large',
  caption = '',
  class = 'escom-article-figure--break-bleed'
) }}


- **Small**: high-density displays for frequently used interfaces that integrate considerable data and enable diverse tasks.
- **Medium**: a default for many motifs and long-form reading experiences for any range of consumer, business, and internal apps and content.
- **Large**: content-rich marketing sites, promotions, and one-time data entry for onboarding, setup, and other simple flows.

One may be tempted to offer more discrete stops along a scale like XS, XL, XXL, and so on. But why stop there? A continuous scale entices us. We could build a system that maths up any stop you want! Start with a baseline 16, and tune up (to 19.4!) or down (to 14.263975!)! Really? Where’s the harmony, maintainability, and consistency in that? I’m not convinced, at least for now.

_Takeaway_: A component library likely requires two or (at most) three sizes. Avoid greater complexity, so that a systems offer choices that balance flexibility with continuity across a catalog.

* * *

### 2. Identify Components To Unify Height Across Sizes

Designing size across component starts with a small set of atomic elements. Not every component will implement every size (more on that later), and many components won’t be sized at all. Exclusions can be obvious (example: the invisible truncate), based on lack of demand (example: pagination), or unwarranted (who needs a large and medium footnote?).


{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '5',
  image_alt = 'Various components to synchronize size',
  caption = '',
  class = ''
) }}


Common components across which height is unified

_Takeaway_: Avoid the temptation to solve all components across all sizes from the outset. Instead, initiate work on a core component set to ground the foundation to density, and go from there.

* * *

### 3. Start with Button or Input

Once the components are identified and work begins, conventions emerge across components sizes. Work may start with the input or button.


{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '6',
  image_alt = 'Button by size',
  caption = 'Button by size',
  class = ''
) }}


As button size stabilize, other elements follow suit: search field (a specialized input), select, combo box, list group item, and table cell.

* * *

### 4. Unify Typography

Typography starts with font-size, although size variants can also trigger shifts in font-weight, line-height, and other properties. Models emerge and become embedded in cross-component tools that vary style based on a size property.


{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '7',
  image_alt = 'Button and Input with associated mixins used for typography',
  caption = 'Button and Input with associated mixins used for typography',
  class = ''
) }}


* * *

### 5. Unify Space

Similarly, a spatial model can govern how elements are inset within a component block, as described in <a href="/articles/space-in-design-systems">Space in Design Systems</a>. Small, medium, and large component sizes often apply a complementary mapping of insets across a scale, leveraged via <a href="/articles/tokens-in-design-systems">design tokens</a>.


{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '8',
  image_alt = 'Button and Input with associated space tokens',
  caption = 'Button and Input with associated space tokens',
  class = ''
) }}


Less often, incrementing sizes can also result in other changes, such as thickening a `border`, changing a `border-radius`, or shifting icon weight.


{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '9',
  image_alt = 'Grid of components by size',
  caption = 'Grid of components by size',
  class = 'escom-article-figure--break-bleed'
) }}


_Takeaway_: Normalizing size will either trigger or build upon cross-component tooling like mixins and design tokens. Embed conventions in such tooling, and leaving the fine-tuning per component for the next step.

* * *

### 6. Extend and Override the Model Per Component, As Needed

To unify height, one could specify height and then override the typography and space of the contained elements. Alternatively, component height can arise automatically from the blend of well-modeled type and spatial properties and other content (particularly, images). We choose the latter. Thus our approach overrides per component to achieve consistent height.


{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '10',
  image_alt = 'Overrides to default spacing models to account for borders and adjacent elements',
  caption = 'Overrides to default spacing models to account for borders and adjacent elements',
  class = ''
) }}


Component-specific extensions and overrides included things like:

- Adjusting an inset’s `padding-left` or `-right` due to the presence of an icon to the left or right of a button label or list item.
- Zeroing `padding-left` and `padding-right` for outer data table cells.
- Adding a border around a form control or `border-top` to a list item, reducing or expanding an inset’s `padding-top` and/or `-bottom`.

_Takeaway_: Aligning size requires conventions shared across components, but also nuance and adjustments per component. Count me among those that build both — convention, then configuration, in that order — into how style is propagated through a collection.

* * *

## Lessons Learned

Implementing Component by Component Leads to Inconsistency

Teams building components incrementally often apply space, per component, as each component is implemented. Many teams lack a sizing strategy, happening on sizes per component by accident, and realizing later that “Oh, yeah, these size names and visual properties aren’t aligned at all.”

Two components named the same size (Medium and Medium) yet have different typography and spacing values and, thus, different size.


{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '11',
  image_alt = 'Same Size Name, Different Size Outcomes',
  caption = 'Same Size Name, Different Size Outcomes',
  class = ''
) }}


Two components named different sizes (Medium and Small) yet share typography and spacing and, thus, are the same size.


{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '12',
  image_alt = 'Component naming inconsistency — Medium and Small — for the same visual size',
  caption = 'Component naming inconsistency — Medium and Small — for the same visual size',
  class = ''
) }}


Two components should be offered at the same size, yet only one’s available.


{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '13',
  image_alt = 'Component availability unpredictability or incompleteness',
  caption = 'Component availability unpredictability or incompleteness',
  class = ''
) }}


_Takeaway_: Anticipate and reduce the impacts of drift by establishing concepts, building tools (such as mixins and tokens), and expecting tools to evolve.

* * *

### Unify Size Holistically in a Single Pass

Many design system teams I’ve worked with has found themselves with an established library after a year that nonetheless lacked a consistently applied sizing model. It wasn’t some huge surprise. They’d seen it emerge over time.

At Morningstar, we prioritized unifying size across all components in the third half-year of the program. The team conducted an audit, established target component heights per size level and then — led by Adam Rowe, the team’s Senior Designer — cranked through components, one by one.

_Takeaway_: If a catalog lacks size continuity, consider a pass across the entire catalog as an objective that is more epic/quarter/semi-annual in length. Take on the challenge holistically, and align it with a major or generational update so adopters can similarly cope with the visual breaking change.

* * *

### Not Every Component Needs Every Size

The patterned use of some UI components runs counter to the intent of some stops on a sizing scale. Alerts, notifications, and other in-your-face cues must capture your attention, either by modally dominating a screen or presented so prominently that it can’t be missed. Offering a small variant runs counter to that mission.


{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '14',
  image_alt = 'Medium and Large Alert (Small Unnecessary)',
  caption = 'Medium and Large Alert (Small Unnecessary)',
  class = ''
) }}


On the other hand, a tag component denoting an attribute’s value revels in compact subtlety. It works well at small or medium sizes regardless of display. Offering a large variant doesn’t make sense.


{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '15',
  image_alt = 'Small and Medium Tag (Large Unnecessary)',
  caption = 'Small and Medium Tag (Large Unnecessary)',
  class = ''
) }}


Although the library may have changed since, at one point the Morningstar Design System offered sizes depending on component:

- **Small, Medium, and Large**: Button, Button Group, Card, Checkbox, Combo Box, Data Table, Error Text, Label, List Group, Loaders, Microcopy, Radio Button, Required Field, Search Field, Select, Stepper, Switch, Text Box, Text Area, Tooltip
- **Small, Medium Only**: Alert, Notification, Tag, Top Hat
- **Sizing as “Widths” Only**: Dialog, Modal, Popover
- **Alternative Sizing Model**: Headings (Levels 1+)
- **Default Size Only**: Layout Grid, Link, Module Container, Masthead, Navigation Container, Page Shell, Pagination (Insufficient Demand), Range Slider (Insufficient Demand), Site Navigation

_Takeaway_: Component purpose may run counter to an possible size. In such cases, avoid unnecessary variants and offer the size that suits the intent.

* * *

### Avoid Using “Sizes” for Single-Dimension Options Like Width

While most sizing models concentrate on height, width can also vary per component with a set of discrete options. For example, a modal may be recommended at three discrete widths:400px, 600px, or 800px.


{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '16',
  image_alt = 'Modals available at three discrete widths',
  caption = 'Modals available at three discrete widths',
  class = 'escom-article-figure--break-bleed'
) }}


On the other hand, dialog may offer 300px and500px variants, and a popover 200px and 300px variants.


{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '17',
  image_alt = 'Popovers available at two discrete widths',
  caption = 'Popovers available at two discrete widths',
  class = 'escom-article-figure--break-bleed'
) }}


In this case, it could be tempting to apply S/M/L, S/M, and S/M names to the modal, dialog, and popover variants respectively. However, at least dialogs and popovers may also have variants applying typography and spacing rules similar to those above. Similarly, a component like modal may add 1000px as another variant, begging the question: is that ML? Me-rge? La-dium?

_Takeaway_: Avoid using a T-Shirt size model (S/M/L) that correspond to a single quantity like width, since such naming isn’t resilient to additions and the component sizing otherwise may already use T-Shirt sizing. Instead, consider naming the options based on explicit values, such as modal--width-500 and modal--width-700.

* * *

### Type Hierarchy ≠ Size. Relate Them, Per Component Size

Oh, those headings, their scale, and the hierarchy they create across the page. It’s a challenge, I know. This gets exasperated when component size is introduced as an dimension orthogonal to heading level. How so?

It’s common for design systems to offer up to 9 heading levels. As typography is woven through a catalog, those headings are applied to components including accordions, tiles and alerts. As each of those components are varied via size, teams discover that the heading levels too vary by size. Therefore, a system can take one of two approaches.

A system could offer a long list of heading sizes (such as 1–5) and apply levels consistently across components per size:


{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '18',
  image_alt = 'One heading set applied across component sizes',
  caption = 'One heading set applied across component sizes',
  class = ''
) }}


Alternatively, a system could offer a more limited set of heading levels, and specify font-size and other properties per size level:


{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '19',
  image_alt = 'Heading level sets per component size',
  caption = 'Heading level sets per component size',
  class = ''
) }}


_Takeaway_: As a component collection implements sizing, it’s not only critical to standardize how heading styles are applied across components, but also how that model varies an element’s heading level for each size offered.

* * *

### Mix and Match Sizes During Composition

You’ve got small, medium and large elemental components. So naturally, as you compose more sophisticated components, they’ll include components only from the same sizing scale, right? Stay in your size lane, so to speak?

When it comes to composition, that’s not a given, and you may find justification in your very first component composition: icon into button. The Morningstar Design System team advises that small and medium buttons apply small icons, whereas a large button applied a medium icon.


{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '20',
  image_alt = 'Mapping icon size to button size',
  caption = 'Mapping icon size to button size',
  class = ''
) }}


More surprisingly, their flat button worked well with a small icon in some cases and a medium icon in other cases. Therefore, the system offered a mds-button--flat-icon-m modifier empowering adopting teams to choose.


{{ escom.article_figure(
  image_path = page.fileSlug,
  image_number = '21',
  image_alt = 'While small and large buttons have a fixed icon, the medium button offers choice',
  caption = 'While small and large buttons have a fixed icon, the medium button offers choice',
  class = ''
) }}


The lesson here? Mixing and matching of component sizes has validity even in the most atomic of cases: button and icon. Therefore, be prepared for justifiable cases of mixing and matching at any level of UI composition up to a full page layout with many, many components. Adopting teams mold pieces together to create contrast, solve their problems, and optimize an experience.

A design system plays a role in density by guiding use and providing tools. Consistent sizes is a place to start. Level up your models for typography and space, and begin to unify your catalog along dimensions of height and more.

Happy sizing!

