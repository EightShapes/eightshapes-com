---
  category : Visual Style
  id : cropping-away-negative-impacts-of-line-height
  title : Cropping Away Negative Impacts of Line Height
  deck : Getting rid of pesky space above and below HTML text
  title_abbreviation : Cropping Line Height
  author_id : kevin
  date : 2018-05-22
  masthead : true
  layout: article.njk
  tags: ['typography', 'design systems', 'visual style']
---
{% import '../_includes/escom.njk' as escom with context %}


Every web font includes whitespace above and below the text, making it difficult to render space in UI components systematically. I created the [Text Crop Tool](http://text-crop.eightshapes.com) to empower designers and developers to remove this whitespace and more accurately render their components. This is how I did it.

## How it&nbsp;works

I’ve added a red border around this paragraph to illustrate the white space I want to remove.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = '',
      caption = '',
      class = ''
  ) }}



To remove the space, add pseudo&nbsp;:before and&nbsp;:after elements to the text element, each with negative margins.

In the Original, the&nbsp;:before and&nbsp;:after elements have height, width and background colors but no negative margins.

In the Desired example, applying negative margins to the pseudo elements removes the undesirable space.

The key benefit of this technique is that it removes top and bottom whitespace while preserving line height between lines in a multi-line block of text:


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = '',
      caption = 'Preserve internal line height but crop top and bottom white space',
      class = ''
  ) }}


## Finding the&nbsp;formula

By experimenting at multiple font sizes and noting the offsets needed to crop the text at each size, a formula started to emerge:

````scss
    // Top crop:

    $top-crop + ($desired-line-height - $line-height-with-crop) \* ($font-size-with-crop / 2)), 0) / $font-size-with-crop;

    // Bottom crop:

    $bottom-crop + ($desired-line-height - $line-height-with-crop) \* ($font-size-with-crop / 2)), 0) / $font-size-with-crop;
````

The formula involved two “magic numbers,” constant values representing the top and bottom crop.

The end result was a mixin that worked regardless of font size and only required a unitless line height to perform the calculation.

But my confidence was dashed when I applied the mixin to a different font face.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = '',
      caption = '',
      class = ''
  ) }}


## Making it work for any&nbsp;font

The mixin didn’t work when applied to different typefaces and I couldn’t figure out why. After months of head scratching and experimentation, I ran across this excellent article explaining [Font Metrics on the web](http://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align). In the article, Vincent De Oliveira describes the [Em Square](http://designwithfontforge.com/en-US/The_EM_Square.html).


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = '',
      caption = '',
      class = ''
  ) }}



I could now articulate in proper typographic terms what I aimed to do: crop the Em Square to the baseline and cap height of the font face.

However, _every font has a different em square definition_. Therefore the “magic numbers” that work for one font don’t work necessarily for other fonts.

With this new understanding I created a tool to measure the amount of cropping required for the font’s Em Square. It outputs the code to implement that crop via SCSS, LESS, or Stylus.

The [EightShapes Text Crop Tool](http://text-crop.eightshapes.com) is the outcome of that effort.

Select a Google font from within the tool or load a Custom Font, and then use the sliders to measure the top and bottom crop you want. The tool calculates the properties and formulae for you, just copy and paste the generated SCSS, LESS, or Stylus mixin into your source code and enjoy the crop! It’s not perfect, but it’s far better than before.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = '',
      caption = '',
      class = ''
  ) }}


## Cropping Caveats

Cropping the em square with this technique isn’t a silver bullet. Turns out typefaces (and em squares) render differently across operating systems. Cropping the em square to perfection on a Mac may be too much cropping or not enough on a Windows browser. Even on my local computer I’ve seen the crop be off by a pixel or two depending on whether I’m viewing on a regular resolution or retina display.

Despite these shortcomings the text crop tool has allowed me to fix many issues related to vertical alignment that previously required bespoke CSS pixel pushing. The versatility of this tool is especially useful alongside [space tokens](/articles/space-in-design-systems) in a design system.

Here are some common use cases for cropping the text:


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = '',
      caption = 'Vertically centering icons and text in a button and providing consistent internal padding.',
      class = ''
  ) }}


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = '',
      caption = 'Vertically aligning media and accompanying text in a Media Object component.',
      class = ''
  ) }}


## Three tips for text&nbsp;cropping

Here are some tips for using any typeface-specfic mixin you generate from the [Text Crop Tool](http://text-crop.eightshapes.com)

**1. Use it only when it’s beneficial.**
Only apply the text crop in situations that need it. Don’t do this:

````scss
* {
  @include text-crop;
}
````

This will affect any existing&nbsp;:before and&nbsp;:after pseudo elements you’re using and create undesirable effects on non-text elements.

**2. Create text-only HTML elements to reduce the scope.**
In most cases it’s best to apply text-crop to an element that contains only text content, not an element that contains child elements.
If you have a parent element that contains text and other content, try wrapping a \<span\> around the text you want to crop and apply the mixin to only that \<span\>.

**3. Test everywhere!** &nbsp;
Be sure to test on all the browsers you need to support. Test across operating systems. Through this testing you’ll gain confidence that the cropping is having the effect you desire.

## Better solutions?

I hope this tool can save you some time. I experienced a lot of “Google Drought” as I tried to find solutions for this problem. If you have a better way of doing this or a way to improve upon this technique I’d love to hear it. Shoot me a message on [twitter](https://twitter.com/kevinmpowell) or find me in the [Design Systems Slack](http://design.systems/slack/) (@kevinmpowell) if you want to chat!



