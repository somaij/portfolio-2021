---
templateKey: work-post
path: ifc
title: Islamic Forum of Canada
description: UX/UI & Lead Web Dev
image: assets/photo_3200_1-copy.jpg
summary: The IFC is a local Mosque that has a strong web presence with numerous
  livestreams, but they needed a website that could work for them and provide
  self-service features that would free up the managing staff's time. As an
  outsider to the Muslim faith, this was a unique challenge in understanding the
  needs of their demographic.
summary-buttons:
  - btnlink: https://invis.io/J6U7ILKE7AB#/386902438_Home
    btntext: Invision Design
glance:
  - image: assets/screen-shot-2020-12-21-at-9.51.52-am.png
    title: Homepage
    description: "The homepage features a lot of peeks into what the mosque's main
      services are. "
    btntext: Skip to Home Design
    btnlink: homepage
    anchor: homepage
  - image: assets/ifc-prayer-month.png
    title: Prayer Times
    description: This normally tabular formatted information was made more digestible.
    btntext: Skip to Prayer Times Design
    anchor: prayer-times
  - image: assets/ifc-madrasah-mast.png
    title: "School (Madrasah) "
    description: The Madrasah is the mosque's main source of donations. A secondary
      homepage was necessary.
    anchor: madrasah-school
    btntext: Skip to Madrasah Design
workContent:
  - sectionTitle: Research
    sectionText: >-
      After many discussions with the main stakeholder, I started with a very
      simple wireframe, contrary to normal procedure. As I wasn’t able to have
      direct interaction with the interviewees, I decided that a visual aide
      would be crucial to gain actual feedback.


      #### Initial Wireframe


      <a href="#img1" id="img-1-link" class="lightbox-link"><img class="inline-image height-400" src="/assets/home.png"/></a><a href="#img-1-link" class="lightbox" id="img1"><span style="background-image: url('/assets/home.png')"></span></a>


      Afterwards the team and I created questions about the wireframe and also in general about the new website.


      Layout


      1. What is the first thing you want people to see when they visit your website, beyond the navigation menu?

      2. How much would you like to promote donating? It is currently a tab in the navigation menu with a separate box highlighting it.

      3. There is an opportunity to have blog posts more prominent on your website. How often do you post blogs and what are they currently used for? How could blogs be otherwise utilized?

      4. What other kinds of content do you find yourself uploading a lot of? Things such as testimonials, videos, livestreams, events, members of community, gallery of pictures etc. How would you like that content to be organized and presented?

      5. Would you like e-mail forms present on the website?

      6. View the alpha wireframe. Are you satisfied with the positioning of the blocks? This is the alpha version, and we randomly placed them wherever. If you prefer a different topography, please detail it below (i.e. do you want the blogs to appear above the events? Do you want the blogs to appear in a different style, such as one highlighted blog previewed, with a link to all other blogs? Are you satisfied with where the map appears? Do you even want a map on the front page? Etc) 


      Content


      7. In the wireframe, “Lorem Ipsum...” is placeholder text. What are the first words that you want users to see when they first look at your website? If we were to include a slider here, what would you want to appear?

      8. The 7 current tabs are placeholders. What would you suggest are the tabs we should include here?

      9. What is the type of wording/visual presentation you would like to use around donations? How would you like the user to interact with this?

      10. What do you think a user visiting your current website would be doing, other than finding out contact/location information? What do you want them to be doing with this new website?


      Look and Feel


      11. We have been shown the 10 minute promotional video, and we were told that the website would want to capture a similar theme that was presented throughout. In your own words (and to help us understand) what exactly is that theme? What does the “Forum Family” mean to you, and how do we go about capturing that?

      12. We have been told to capture a mature and intellectual ascetic. In your own words, describe what that means to you. What are some guiding tips that we can follow throughout the project to help us stay on track?


      This extensive list of questions was sent out to the 7 volunteers and were answered thoroughly. I was able to extract the main priorities of the mosque and it’s community.


      1. Be great to look at, and extremely easy to use due to the wide demographic of users.

      2. Automate or simplify as many tasks as possible to free up the managing team’s time. Things such as donations, creating events, special function requests (marriage for example)

      3. Gather donations

      4. Let members quickly check the current daily prayer times.

      5. Sell members on their school programs

      6. Present Islam in a non-daunting way to Canadian-Muslims and be an informational resource for the Mosque.
  - sectionTitle: Homepage
    sectionText: >-
      From those findings, I felt confident with the overall layout. We went
      through a number of colour pallet decisions, and decided on this pale
      brown <span style="color:#E0BE8E">(Calico)</span> colour due to a
      historical aspect of how this Mosque was started. To contrast, I felt a
      rich blue <span style="color:#123C69">(Chathams Blue)</span> worked well.


      The current version of the homepage shows most of what the mosque offers, without being overwhelming.


      <a href="https://invis.io/J6U7ILKE7AB#/386902438_Home" class="arrow-btn">Full Home Page Design</a>


      ### Masthead


      <img class="centered-image height-400" src="/assets/ifc-masthead.png"/>


      In a short amount of time, the visitor is able to figure out who the website is for, what it is about, and it's main objectives.


      The masthead always displays the current prayer times. This is achieved by using Advanced Custom Fields, and filling in a large repeater. The logic to detect what prayer period should be displayed is by checking when the "start" date is, and comparing that to the current date. 


      ### School


      <img class="centered-image height-400" src="/assets/ifc-madrasah.png"/>


      The school, or *Madrasah,* is one of the main avenues that the mosque collects donations. It is an after school and weekend program that children participate in and learn more about their faith, as well as some fun mixed in. As it is one of the larger contributors to their bottom line, I chose to make this portion of the page a testimonial call to action section.


      ### Events


      <img class="centered-image height-400" src="/assets/ifc-events.png"/>


      Using *The Events Calendar* plugin, visitors will be able to check out the latest events that go on. During the pandemic, the mosque has resorted to using livestreams as a way to reach their followers, and the inner event pages will be able to host their livestreams via YouTube.


      ### CTA


      <img class="centered-image height-400" src="/assets/ifc-cta.png"/>


      This final call to action is sitewide where it makes sense. The usage of the background popping above a darker off-white background really makes it more eye-catching then a regular banner type of CTA.
  - sectionTitle: Prayer Times
    sectionText: >-
      Design and Development wise, this is the section I'm most proud of. In the
      Islamic Faith, there is a set calendar of prayer times, to the minute,
      that are determined by the current date range. 


      <a href="https://projects.invisionapp.com/share/J6U7ILKE7AB#/screens/392300954" class="arrow-btn">Full Prayer Times Page Design</a> 


      ### Current Month's Prayer Times


      <img class="centered-image height-400" src="/assets/ifc-prayer-month.png"/>


      The prayer times page shows the current month's time period first, broken into their own sections by period. 


      ### All Months


      <img class="centered-image height-400" src="/assets/ifc-prayer-all.png"/>


      For the rest of the months, they're changed to a table style format. The next upcoming month is opaque, but the rest are somewhat transparent (will become opaque on hover). There's also a sidebar for easy navigation.


      ### Implementation


      Using ACF, the backbone of any WordPress theme I make, I created a Prayer Times repeater field. The field looks like this in the backend editor:

      <img class="centered-image height-400" src="/assets/prayer-times-acf.png"/>


      The basic PHP logic is to group the prayer times by month, based on the start time, and create a 2D array. It will then loop over each month and print out a table. If it's the current month, it will be skipped.
  - sectionTitle: Madrasah (School)
    sectionText: >-
      This section of the site has a high importance on the success of the
      mosque, and as a result needed to be treated like a secondary homepage. 


      <a href="https://projects.invisionapp.com/share/J6U7ILKE7AB#/screens/387973042" class="arrow-btn">Full Madrasah Page Design</a> 


      ### Masthead


      <img class="centered-image height-400" src="/assets/ifc-madrasah-mast.png"/>


      This was designed to be more traditional in appearance, and get a strong message across that will hopefully encourage the user to enroll their child. There was a lot of strong imagery that the managing team already had, so I chose to lean into that more.


      The Madrasah navigation item has a sub navigation that's always visible when on any page that's related to it.


      ### Informational Sections


      <img class="centered-image height-400" src="/assets/ifc-mad-content.png"/>


      The following two sections leans further into their strong imagery, and provides a spot for the team drive home the philosophy that drives their school. I decided to make a single link out to a curriculum page, to restrict information overload.  


      ### Gallery


      <img class="centered-image height-400" src="/assets/ifc-gallery.png"/>


      The best way of showing what their children will be doing in class is with photographic evidence. The gallery is a preview of a full gallery page, and it generates feelings of trust. I put this at the bottom because the only it's likely some users would reach the bottom of the page without taking an action in search of finding reasons to trust the program.
ctaTitle: Questions? I may have answers!
ctaBtn: Let's Chat
order: "2"
cta:
  ctaTitle: Get in Touch
  ctaText: Are you looking to do something similar? Let's connect. I can advise
    you on how to go about the process.
  ctaBtn: Send a Message
seo:
  seoTitle: IFC - Redesign in Sketch | Jason Somai
  seoDescription: The Islamic Forum of Canada is a local Mosque that needed a
    website that could work for them. Check out how I've designed their new site
    to make that happen.
ctaText: If you'd like to find out more, please get in touch.
---
