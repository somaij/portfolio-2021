---
templateKey: work-post
path: guideo
title: Guideo
description: UX/UI Design
image: assets/toronto-streetcar-downtown.jpg
summary: "[During my 5 weeks at
  Brainstation](https://brainstation.io/course/toronto/user-experience-design),
  our class was given the assignment to create a transit app. It was left up to
  us to find a transit problem, and solve it with the skills and digital tools
  learned in class. For this project we used the **[human centered
  design](https://en.wikipedia.org/wiki/Human-centered_design)** approach which
  included identifying problems in current user experiences by user interviews
  and testing our solutions by having users navigate rough sketches (using the
  [Marvel ](https://marvelapp.com/)app) and low fidelity wireframes (using
  [Moqups](https://moqups.com))."
summary-buttons:
  - btnlink: https://app.moqups.com/JSomai/Aln757niFM/view/page/aa9df7b72
    btntext: View Wireframe
glance:
  - image: assets/sketches.jpg
    title: Initial Sketches
    description: These (crudely) hand drawn sketches were what I started to
      prototype with. My classmates tested my user flows with these.
    btnlink: user-flows-&-sketches
    btntext: Skip to Sketches
    anchor: "#user-flows-sketches"
  - image: assets/wireframe.png
    title: Final Prototype
    description: The final low fidelity wireframe was made in Moqups. It’s fully
      interactive with hotspots to click on and navigate through the prototype.
    btnlink: wireframe
    btntext: Skip to Wireframe
    anchor: "#wireframe"
  - title: Presentation
    description: "The final presentation was the culmination of everything we had
      done during the 5 week bootcamp. "
    btnlink: presentation
    btntext: Skip to Presentation
    image: assets/final-pres.png
    anchor: "#presentation"
workContent:
  - sectionTitle: Research
    sectionText: >-
      The first step in the process was finding out what the problem was in the
      first place! I interviewed 4 people, with this set of questions:


      1. What is your name?

      2. Where do you live? And work?

      3. Describe the last time you walked somewhere.

      4. What apps do you use to navigate?

      5. What makes you walk over using public transit?

      6. What do you wish you could change about the process of navigating somewhere?

      7. What information do you wish was readily available?


      I then found some common issues that my interviewees shared:


      1. Transfers were a hassle due to delays and misinformation.

      2. Navigation apps would only provide a set of immutable routes. Users couldn't change parts of a route, so that they could walk halfway instead of using a streetcar.

      3. Detailed information such as a route being presto only or pricing information wasn't easily found.

      4. Uber was expensive, and Uber Pool didn't prioritize getting users there on time.


      Surprisingly, none of my interviewees didn't mind walking 20 minutes if they didn't need to take another streetcar or bus.
  - sectionTitle: Personas
    sectionText: >-
      Using the information I gathered, I created two personas to embody the two
      user flows I was working towards. 

      ![Sara - Persona for Guideo](/assets/sara.jpg)

      ![Rupert - Persona for Guideo](/assets/rupert.jpg)
  - sectionTitle: Information Architecture
    sectionText: >-
      I created an information architecture that a conventional navigational app
      would, but I kept it laser focused on one thing: making commute routes
      changeable at all times.

      <a href="#img1" id="img-1-link" class="lightbox-link"><img class="inline-image height-400" src="/assets/ia.jpg"/></a><a href="#img-1-link" class="lightbox" id="img1"><span style="background-image: url('/assets/ia.jpg')"></span></a>
  - sectionTitle: User Flows & Sketches
    sectionText: >-
      Waze and Google Maps were the main user interface inspiration. All of the
      users I interviewed were very familiar with them, and I wanted to use
      conventional, industry standard guidelines. Every second counts when
      trying to get somewhere, so recognition is key.

      **Original First User Flow & Sketch - Use bussing to get to work**

      I had run into a problem during the sketch mock-up testing of one of my initial user flows, and I had to rethink the purpose of this app. My initial hypothesis was that users would want to _pick a way_ to go instead of _picking where to go_. This proved to be very confusing to my test users, as they weren't accustomed to not seeing a map and choosing a place. It also didn't really serve a purpose, as person really only chooses how they want to get there after seeing where it was.

      ![Original User Flow 1](/assets/sketch1.jpg)

      Some other interesting observations were that the "Go" button was confused with the Go Transit and users instinctively looked at the top of the screen to enter information.

      I created two new user flows that reflected map and location first user flows, and during testing these seemed better received.

      **Version 2 First User Flow Sketch - Walk due to delays**

      <img src="/assets/sketch2.jpg"/ class="centered-image height-600" />


      <img src="/assets/uf1.jpg" class="centered-image height-600" />


      This new first flow is about a user is trying to find their way to work, and a delay comes up. They are be prompted to reroute and they follow the route. The revamped sketch included a full screen map, with a textbox at the top to type in the location.

      **Second User Flow - Navigate to David's Tea**

      <img src="/assets/sketch3.jpg" class="centered-image height-600" />

      <img src="/assets/sketch4.jpg" class="centered-image height-600" />


      <img src="/assets/uf2.jpg" class="centered-image height-600" />

      The second one is a user who wants to walk halfway instead of using public transit all the way. It's a spiritual successor to the original first sketch, in that it helps the user plan their route better.
  - sectionTitle: Wireframe
    sectionText: >-
      The [full
      wireframe](https://app.moqups.com/JSomai/Aln757niFM/view/page/a10d02abc)
      has 2 interactive user flows.

      **First User Flow Sketch - Walk due to delays**

      ![Wireframe First Flow](/assets/wf1.jpg)

      If you click on the **Work button**, you will follow the **User Navigates to Work flow**. This one demos how the app handles delays and re-routes.

      **Second User Flow - Navigate to David's Tea**

      ![Wireframe Second Flow](/assets/wf2.jpg)

      The **User Navigates to David's Tea task flow** can be started by clicking in the **second textbox at the top**, next to the location marker. This flow showcases how to modify routes.
  - sectionTitle: Presentation
    sectionText: >-
      **Final Presentation**

      <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTvCa5MSh0fyD1tQCqV3YM9CzS3OdqIe2KsXeEfSmFtWMNt9OOAx4u-JJH7P-4TWyqlvBOnMfd0ArB-/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" id="slides"></iframe>


      **Project Deliverables**

      All of the following deliverables can be found in the presentation above.

      * 4 User Interviews

      * Information Architecture

      * 2 Personas

      * 2 User Flows & Sets of Sketches

      * Wireframe


      The differentiating factors of Guideo were three things:

      1. A faster way to identify alternative routes, and modify specific parts of a route with walking.

      2. Pricing information is readily available, and it notifies if a route is presto only.

      3. It will notify and provide alternative **walking** routes when there is a delay.

      I came away from the course with a greater understand of how to produce a better user experience. I learned how to throw away my ego when being critiqued. How to stay silent and provide not provide answers during user testing. When and how to prod for knowledge the interviewee thought was common sense.

      Industry professionals [Gerard Dolan](https://www.linkedin.com/in/gerarddolan/) and [David Aboutboul](https://www.linkedin.com/in/david-aboutboul/) taught our class invaluable life and career lessons. I hope to carry a design thinking approach to everything that I do henceforth.
ctaTitle: Let's Talk
ctaBtn: Connect
order: "3"
cta:
  ctaBtn: Contact Me!
  ctaTitle: Let's Talk
  ctaText: You've really made it all the way down here? Thanks for reading! If you
    have any questions about my Brainstation experience, or want to learn more
    about any steps in the process, let me know.
seo:
  seoTitle: Guideo - A Brainstation Project | Jason Somai
  seoDescription: A UX research and prototype project that I did for my 5 week
    User Experience Design course at Brainstation in 2018. It combines walking
    and public transportation to get you to your destination on time.
ctaText: Want to talk about UX? Great! Get in touch pronto.
---
