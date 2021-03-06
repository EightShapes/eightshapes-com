---
  category : Workshop Activities
  title : The Component Cut Up Workshop
  deck : Kickoff a Design Library Effort by Engaging the Whole Team
  title_abbreviation : Component Cut Up
  author_id : nathan
  date : 2015-11-03
  masthead : true
  layout : article.njk
  tags : []
---

{% import '../_includes/escom.njk' as escom with context %}

{{ escom.bar_quote(
    quote = 'The following activity is an abridged and lightly updated excerpt from Chapter 8: Discover of <a href="http://www.amazon.com/Modular-Web-Design-Components-Documentation/dp/0321601351" rel="nofollow noopener" target="_blank">Modular Web Design</a>, published in 2009 in the era of component and pattern libraries. The approach is just as relevant as today <a href="http://alistapart.com/article/from-pages-to-patterns-an-exercise-for-everyone" rel="nofollow noopener" target="_blank">designers such as Charlotte Jackson</a> formulate similar techniques to kickstart a library.'
) }}

---

Nothing beats the energy of getting a team together to deconstruct an existing design system and arrive at a component library together.

Participants get their hands dirty by cutting up page screenshots with scissors and then grouping, labeling, prioritizing, and archiving a candidate catalog of components your team can focus on.

This workshop is always the centerpiece when convening a group to learn about and/or kicking off an effort to create a library. It generates momentum, builds early consensus, enables teams to brainstorm together, and align groups around a common understanding of what’s next.

## Inviting Participants

Invite anyone who will influence or benefit from the library. UX designers and front-end developers are critical. However, you’ll benefit from inviting other key stakeholders and potential champions too, for the workshop is a big event and generate momentum around the pursuit. Therefore, considering inviting QA, product managers, copywriters, project management, and even willing executive sponsors.

As you consider participants, you could:

- **form teams of three to six members** ; big enough to have diverse opinions but small enough to quickly progress and not get bogged down.
- **mix up roles, personalities, and perspectives** on standards, such as an interaction designer, developer, and product manager together.
- **(optional) mirror real project teams** or relationships, aligning subsets of 15–25 page printouts with the team responsible for that area of the experience.

## Preparing Materials

To prepare for the workshop, organize and print out screenshots from the existing site and/or applications, or a sufficiently broad set of emerging concepts. From the home page to search results, product pages to checkout, tabular displays to multi-page forms, choose pages that represent the breadth of the experience. Most importantly, select pages which cover the range of potential components you anticipate for your library.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Page screenshots laid out across a table so participants can familiarize themselves with the collection',
      caption = 'Page screenshots laid out across a table so participants can familiarize themselves with the collection',
      class = ''
  ) }}

Each page should be printed on a separate sheet of paper — ideally legal size, portrait orientation to accommodate taller pages — and at the same relative resolution. Usually 80 to 120 pages are sufficient to get started for larger sites, but you can get valuable results using as few as 15 to 20 pages.

### Make Component Cut-Outs Traceable

Once participants cut up pages into components, it’s painstaking and impractical to recall where the component came from unless you’ve got an easy way to trace the cutout back to its source. Therefore, assign each page a unique number and print that number small and repeatedly across the back of the page printout. We had a [legal-sized PDF with preprinted numbers for printing the flip side](https://www.dropbox.com/s/i75v4zd67wpqti9/ComponentWorkshop.Screenshots%28PageNumbers%29.pdf?dl=0).

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Each page screenshot is printed with a unique ID repeated across the flip side.',
      caption = 'Each page screenshot is printed with a unique ID repeated across the flip side.',
      class = ''
  ) }}

### Provide Tools-of-the-Trade, Especially Post-It Notes!

You’ll need to stock up for the workshop by purchasing scissors, Post-It® Notes, Post-It® Small Flags, sharpies large and small, scotch tape, and blank paper. Be sure to buy more than one item per team, so that participants **don’t sit idly as a single person cuts** everything with the only pair of scissors. Usually at least one item for every two participants is sufficient (such as three pairs of scissors for a team of six).

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'A bevy of materials, including pens, papers, Post-It Flags, Post-It Notes, and – of course – scissors',
      caption = 'A bevy of materials, including pens, papers, Post-It Flags, Post-It Notes, and – of course – scissors',
      class = ''
  ) }}

## Step 0: Ponder the Collection

Encourage teams to review the pages to become comfortable with the scope of their collection and notice reused frequently components. Some teams spread out the pages across a table for a bird’s eye view, pondering for a minute before the begin to cut.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Array the pages across the table to get a birds-eye view',
      caption = 'Array the pages across the table to get a birds-eye view',
      class = ''
  ) }}

## Step 1: Cut Out Components

Participants cut up each and every page into components, separating each component on the table. During this stage, participants will often ask and need clarity on “how granular should I do cut this up: should it be this bigger section or just these few elements?”, and workshop leads can tips on how to cut each component and relate different variations of the same component.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Identify components by cutting apart a page screenshot into chunks',
      caption = 'Identify components by cutting apart a page screenshot into chunks',
      class = ''
  ) }}

As duplicate and undesirable components arise (such as a common header on every page), crumple them up and throw them on the floor. Participants enjoy this the most, removing from contention examples of what not to do. Just plan to clean up the mess on the floor after the workshop is over.

## Step 2: Arrange Into Groups

As pages are cut up, group components on the table. For example, header and footer components congregate in one area, all navigation components in another, and sidebar components separate too. Once all pages are cut out, teams should focus on grouping all components into meaningful categories before proceeding to archive and prioritize items.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = 'Organize components by moving cut outs into groups on the table',
      caption = 'Organize components by moving cut outs into groups on the table',
      class = ''
  ) }}

## Step 3: Label Groups

Use Post-It® Notes with big labels to name each of the groups you’ve formed, such as Header and Footer, Content, Navigation, Promos, and Sidebar.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '8',
      image_alt = 'Label groups using a very visible Post-It Note and/or heavy-weighted Sharpie pen',
      caption = 'Label groups using a very visible Post-It Note and/or heavy-weighted Sharpie pen',
      class = ''
  ) }}

## Step 4: Tape Groups

Teams often then tape components to plain pieces of white paper (ideally, tabloid size) so that library leads can walk out of the workshop with tangible, organized results.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '9',
      image_alt = 'Tape components to Tabloid sheets of paper.',
      caption = 'Tape components to Tabloid sheets of paper.',
      class = ''
  ) }}

## Step 5: Prioritize Components

Using Post-It® Small Flags, teams can also prioritize each component by importance. For example, green is “must have,” yellow is “nice to have,” and red is for “less important” candidates. Encourage participants to balance the quantity of each priority. If everything is green, then you haven’t prioritized anything.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '10',
      image_alt = 'Prioritize components by applying a color-coded flag next to each one.',
      caption = 'Prioritize components by applying a color-coded flag next to each one.',
      class = ''
  ) }}

## Step 6: Label / Describe Components

Teams can use their remaining time to write common names used to refer to each component, such as “Base of Page” and “Footer Promo.” This step enables participants to discuss common terms used to refer to each item, informing the nomenclature of the formal catalog.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '11',
      image_alt = 'Label individual components to record internal nomenclature.',
      caption = 'Label individual components to record internal nomenclature.',
      class = ''
  ) }}

## Wrap Up

After the teams complete the steps, reconvene the entire group to

- summarize results across teams.
- identify differences, such as how teams may have cut up a header component slightly differently.
- foster an open forum on the value and direction of using components.
- clarify next steps, such as cataloging the results in a spreadsheet (see Chapter 9: Organize, similar to [Dan Mall’s approach discussed on the Style Guide podcast](http://styleguides.io/podcast/dan-mall/)).

Discovering components together in a workshop setting can be an enlightening experience. Some teams react with lots of enthusiasm, as the workshop demonstrates how they can modularize and reuse aspects of their design system. Others guard their optimism, correctly perceiving the constraints that standards and libraries could place on their design freedom.

Most of all, use the workshop setting — component cut outs, tactile tools like scissors and Post-Its, and discarded paper littering the floors — to signal how what’s next will require the group to roll up it sleeves. Investing in a library requires rigor, investment, and determination to stick with such a set of standards, and you’ll need to communicate the scale and scope they should expect.
