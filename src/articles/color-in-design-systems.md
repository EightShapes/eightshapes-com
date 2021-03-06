---
  category : Visual Style
  title : Color in Design Systems
  deck : 16 Tips for Setting Up a System That Endures
  title_abbreviation : Color
  author_id : nathan
  date : 2016-04-13
  masthead : true
  layout: article.njk
  tags: ['color', 'design systems', 'visual style']
---
{% import '../_includes/escom.njk' as escom with context %}

I’m no color expert. Far from, actually. Throughout my career, I’ve depended on visual designers better than myself to produce an engaging palette and apply it harmoniously across a UI.

Yet, as a systems designer, I’m often in the position to provoke and validate color decisions as a system takes shape. Here’s a 16 lessons I’ve learned while stabilizing a **primary palette** , **tint and shade choices** , **secondary palettes** , and solving for **accessible**  **contrast**.

* * *

## Primary Palette

By primary, we’re talking colors used everywhere including your **brand colors** , **neutrals** , and a typically **interactive** digital blue.

### #1. Stabilize Brand Colors Quickly

︎Every organization has one, two, or no more than a few core brand colors. THE red. THE blue. THE orange. Settle on them. Even if reasonably set up with a color variable or two, nothing signals a design system team that can’t get their act together than constantly changing primary colors.

_Takeaway_: Decide your essential brand colors early, because they spread widely, quickly.

{{- escom.article_figure(
    image_path = page.fileSlug,
    image_number = '2',
    image_alt = 'Primary red, white and blue colors',
    caption = '',
    class = ''
) -}}


* * *

### #2. Involve Brand (If You Alter a Brand Color)

Is brand blue a bit dull? Can’t resist the urge to liven it up? Nothing poisons early collaboration more than a casual “We saturated the brand orange for web” followed by brand reacting with “You did _what_?” Oh the sacrilege!

_Takeaway_: Brand colors are the brand team’s territory. So discuss adjustments with them and defer to their judgment as needed.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Alternative orange tints for brand versus digital display',
      caption = '',
      class = ''
  ) }}


* * *

### #3. Drop the Neutral Neutrals

From dark-as-night charcoal to fluffy light gray, neutrals provide essential UI scaffolding. Loading a system with neutrals, even a few, risks giving teams access to muddy colors. They can also lead to “wireframey” designs. And, neither dark nor light type has sufficiently accessible contrast on a medium gray background.

_Takeaway_: Provide a few light grays and a few dark grays to achieve useful contrast, but don’t get wishy washy wireframey. Consider avoiding medium grays in between.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Spectrum of neutral tints, with medium neutrals as an accessibility challenge to avoid',
      caption = '',
      class = ''
  ) }}


* * *

### #4. Go “Digital Blue.” Everybody Else Does.

My past five design systems settled on a saturated blue as a default button and link color. Links have always been blue, perhaps since the dawn of the first browser. This “Digital” blue, a utility color for links and clickable items, is essential in any core palette.

_Takeaway_: When (not if ;) ) you go with your “Digital Blue,” choose an accessible one and make sure it doesn’t clash with the brand’s own blue, or red, orange, purple, or green.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Blue used in links and buttons',
      caption = '',
      class = ''
  ) }}


* * *

## Tints & Shades Per Color

You can’t have just a few colors and call it a day, right? System users often need to tune a color choice across a range, reuse with ease, and know their boundaries.

### #5. Stack the Tint & Shade Range, Per Color

Color palette display patterns long predate the web. Yet I still love me a compactly arranged tint stack. They can be just…gorgeous. The best stacks visualize more than just a color, combining its name with HEX codes, code variables, and other indicators (such as prohibiting overlaid type). A quick scan is all you need.

_Takeaway_: Stack available colors in each hue, and treat the stack as a visualization to include important details compactly.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Tint stacks of blue and orange from Google Material design',
      caption = '<a href="https://www.google.com/design/spec/style/color.html" rel="nofollow noopener" target="_blank">Material Design</a>’s Indigo and Deep Orange',
      class = ''
  ) }}


* * *

### #6. Name Tints & Shades by Lightness

We’ve all been there. A month into the system, the neutrals `$color-gray-1`, `$color-gray-2`, ... , `$color-gray-7` — are stable. And then, in a stroke, you’ve got another tint to add stuck between -1 and -2. That numbering system stinks.

_Takeaway_: Scale color names between 0 and 100 based on HSL’s lightness, such as `$color-gray-05` and `$color-gray-92`. The scale reflects a familiar range from dark to light, allows for injecting new options between, and heck if I won’t remember `$color-gray-93` until we retire it later.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = 'Tint stacks of gray named poorly (enumerated) and well (using lightness)',
      caption = '',
      class = ''
  ) }}


* * *

### #7. Limit Tint & Shade Quantity

At the core of a good system is choice without endless options, a stable aesthetic to serve as a starting point. Odds are, you aren’t [Material Design](https://www.google.com/design/spec/style/color.html), intended to serve countless products. In most cases, a design system need not offer boundless choices. The more choices you provide, the tougher it’ll be to control harmonic combinations and a consistent feel across applications.

_Takeaway_: Offer a handful of options and avoid tedious variety. Empower system users with just enough choice: more than a single option, but only up to a few intentional choices.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '8',
      image_alt = 'Two orange tint stacks, one from Google Material with many and another with only a few',
      caption = '',
      class = ''
  ) }}


* * *

### #8. Tell Me How To Transform: Hand-Pick or Functionally

Modern tools like SASS and Stylus offer transformation functions like darken and lighten to shift a color by a brightness percentage. These handy tools enable a you to alter a color for subtle contrasts like a hovered button or tiered navigation.

But transforms can be troublesome: carefully crafted base colors can become inaccessible alternatives (see below), a page’s overall palette can muddy, or a “5% system” that works on moderately bright colors yields insufficient contrast for a very light or dark case.

_Takeaway_: Deliberately allow — or avoid — color transformations in your system. If you endorse the practice, then offer examples of when and how to do it effectively in your system, such as 5–10% for moderately bright cases and 10–20% in more extreme cases. If transformations should be avoided , document that succinctly.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '9',
      image_alt = 'Two orange tint stacks annotated for handpicked and functionally transformed colors, respectively',
      caption = '',
      class = ''
  ) }}


* * *

## Secondary Palettes

Beyond the brand colors and their variants, well-considered color systems array the broader variety of colors reserved for varied purposes.

### #9. Define Meaningful Sets Like Feedback Colors

Most systems reserve a certain red for errors, green for success, yellow for warning, and (possibly a lighter sky) blue for informational messages. Feedback color is critical, because it’s positioned at the top of the page interacting with other key components and/or encountered as a result of an unwelcome circumstance. Without system guidance, such messages become embedded in product code, the result of product teams solving a challenge quickly and moving on.

_Takeaway_: Explore and define the standard feedback colors and other relevant sets to ensure that colors fit harmoniously rather wedging them in later or having teammates recall “I just grabbed it from Google.”


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '10',
      image_alt = 'Green, yellow, red and blue colors as success, warning, error and informational',
      caption = 'Typical feedback colors: success, warning, error and informational',
      class = ''
  ) }}


* * *

### #10. Illustrate Theme Variety

In some systems, color use is customized per product, section, or brand. Often, this may be a result of relating a master brand (think, Marriott International) to its sub-brands (think Courtyard Hotels, Ritz Carlton, and Moxy Hotels). Or it’s a prefab themes like _Ambient Warmth_ and _Frozen Blue_. Maybe the user is complete control, and you need to illustrate the breadth of (all the havoc of) what they can do.

_Takeaway_: Reveal the range of themes available compactly, and set boundaries around allowable theme colors in certain contexts.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '11',
      image_alt = 'A variety of theme colors for Marriott hotels',
      caption = 'Theme colors for multiple Marriott.com hotels, derived from <a href="http://www.marriott.com/hotels/travel/wasrw-renaissance-washington-dc-dupont-circle-hotel/" rel="nofollow noopener" target="_blank">product pages</a>',
      class = ''
  ) }}


* * *

### #11. Define _How_ Theming Works

It’s not enough to simply say “Go ahead and theme it!” A theme color may apply to predictable accents throughout a UI such as button _background-color_, active tab _background-color_, or a primary navigation’s thick _border-top_. Just as important, theme colors may be forbidden from altering other bits, such as _long form type_ or — yikes! — a _link color_ that ends up invisible.

_Takeaway:_ Identify how theming works, particularly via reference to specific UI element properties in play. Just as important, articulate which — if not most — elements are off limits.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '12',
      image_alt = 'Theming color applied to a background, button and link',
      caption = '',
      class = ''
  ) }}


* * *

### #12. Avoid Guiding on Color-Mixing Until (At Least) Dust Settles

One of my favorite all time design system tools is [Google’s MDL Color Customizer](http://www.getmdl.io/customize/index.html), which enables users to combine primary and secondary UI colors effectively. It’s so easy, and the outcome so helpful. Yet, the system teams I work with either don’t want to provide this kind of flexibility or lack the time and care necessary to solve such a combinatoric challenge.

_Takeaway_: Avoid the rabbit hole of solving for a vast array of color combinations unless it’s a core system value. In most cases, system users will pair up their own combinations or benefit from a tool more dedicated to doing just that. Help them propagate their choice rather than solving for every combination they may consider. That experimentation is their job.

Serve users of your system by making it efficient to <em>propagate </em>their choice through a product, rather than <em>making the choice</em> for them.

* * *

## Contrast & Accessibility

Solving for accessible color contrast should a core practice of setting up any digital color system from the get go. However, design can be tumultuous place, and teams can lose sometimes. Or some members don’t know about accessibility. Or they simply don’t prioritize it.

A systems team can engrain accessible practices into a workflow to provoke and spread values in accessibility broadly across an enterprise.

### #13. Check Contrast Early & Ritually

It happens often: a few weeks or days before a product — or design system — launch, _finally_ somebody notices. The design team hasn’t taken necessary care to ensure the primary and secondary color palette is being applied in a way to meet WCAG 2.0 color contrast of 3.0 (for large, heavier type) or 4.5 (for standard type). So designers — and then, their developers — scramble to determine fixes and inject it into the code.

_Takeaway_: Any system designer responsible for color must be familiar with WCAG 2.0 rules, have a tool (like Tanaguru) to test color pairs, and incorporate the practice into color selection.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '13',
      image_alt = 'A screenshot of the Tanaguru color contrast finder',
      caption = '<a href="http://contrast-finder.tanaguru.com/" rel="nofollow noopener" target="_blank">Tanaguru</a>, one of many accessibility calculators online',
      class = ''
  ) }}


* * *

### #14. Explore Accessible Color Choices Across Ranges

A drawback of WCAG guidelines is its stark threshold: a color pair passes or fails. This leaves designers yearning for more, but worse leaves stakeholders flummoxed at how bad the color pair fails and how much it needs to change.

Conversation quickens when we reveal a spectrum of choices. There are a bevy of tools in the design community for visualizing the contrast between foreground and background colors, including:

- <a href="https://webaim.org/resources/contrastchecker/">webaim.org/resources/contrastchecker/</a>
- <a href="https://contrast-finder.tanaguru.com/">contrast-finder.tanaguru.com/</a>
- <a href="https://snook.ca/technical/colour_contrast/colour.html">snook.ca/technical/colour_contrast/- colour.html</a>
- <a href="https://www.checkmycolours.com/">www.checkmycolours.com/</a>
- <a href="https://usecontrast.com/">usecontrast.com/</a> (Mac app)
- <a href="http://www.brandwood.com/a11y/">www.brandwood.com/a11y/</a> (Text on images)
- <a href="http://www.webaxe.org/color-contrast-tools/">www.webaxe.org/color-contrast-tools/</a > (Comprehensive list of many tools)

We even built our own tool at EightShapes called the <a href="http://contrast-grid.eightshapes.com/">Contrast Grid</a>. This tool enables you to easily input a range of HEX codes, name them, and contrast every combination (even distinct colors for foreground and background).



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '14',
      image_alt = 'Interactive colors displayed across a range of neutral backgrounds',
      caption = 'Explore foreground and background color contrast across ranges using <a href="http://contrast-grid.eightshapes.com/">Contrast Grid</a>',
      class = ''
  ) }}

This quick visualization isn't just efficient for experimenting and choosing the right color, but also communicating contrast ranges to those less familiar with contrast subtleties. Recently, we're really encouraged about how such exploratory tools are being integrated directly into design tools, too.

_Takeaway_: When exploring accessible color contrast, show a range of choices to help a team select a color that passes the test.

* * *

### #15. Solve the Reverse Light on Dark and Dark on Light

When creating a system, it’s up to the systems designer to be mindful of and solve for the entire range of choices on offer. It’s not enough to just test for accessibility problems as they arise. Instead, a color palette should be thoroughly reviewed prior to publishing a system for reuse.

This is especially true for reverse color treatments. It’s very common for a system to default to dark text on a light background. However, most find themselves reversing color treatments, whether a black and white on light and dark neutrals or tints of another primary or secondary color.

_Takeaway:_ Solve for and recommend reversed pairings to adopt or avoid.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '15',
      image_alt = 'Link colors explored on light and dark neutral backgrounds',
      caption = 'A table of calculated contrast (using a SASS function) between neutral backgrounds and interactive blue alternatives',
      class = ''
  ) }}


* * *

### #16. Use Color to Provoke Broader Accessibility Awareness

Color is fundamental to a system, and accessible color contrast is fundamental to color. This injects accessibility smack dab into the middle of a system’s formation. People that matter are paying attention: brand managers, design leads, developers, and execs. What a wonderful opportunity to use color to open a door to the broader array of accessibility considerations.

_Takeaway_: Seize the opportunity to advocate for accessibility. Always be probing a collaborator’s knowledge of accessibility (or lack thereof) and educate and advocate all you can.

* * *

## Revision History

**2020-01-24**: Revised color contrast section to highlight EightShapes contrast grid (including image), list other relevant contrast tools.


