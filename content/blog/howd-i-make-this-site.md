---
templateKey: blog-post
path: how-did-i-make-this-site
date: 2021-01-10T22:54:06.524Z
title: How'd I make this site?
description: Here's everything that I did to create this version of my site.
image: assets/blake-connally-ikuygcfmfw4-unsplash.jpg
cta:
  ctaTitle: Need help with your own personal website?
  ctaText: I'd be more than happy to help guide you and to provide some feedback.
  ctaBtn: Let's Connect
seo:
  seoDescription: A short recap on my journey to get this Gatsby.js and NetlifyCMS
    website up and running.
  seoTitle: How I created this website | Jason Somai
---
## Design

Figma is my absolute favorite design tool. <a href="https://www.figma.com/proto/dw0UB2bWREjaNxY5NWgn5X/Portfolio-2021?node-id=1%3A2&viewport=321%2C523%2C0.4156603515148163&scaling=scale-down-width" class="arrow-btn">Here's my design</a>

The final website and the design have a fair amount of differences. Being the designer, developer and only stakeholder meant I could change things on the fly as I had innovative ideas, such as adding more blobs to everything, creating a call to action on each page, adjusting the contact section, etc.

If you want a cool comparison to my previous design language, you can check out my [old website](https://nostalgic-bohr-935b8b.netlify.app/), first made before attending any UX courses, or having a design mentor. Learning from others and taking feedback seriously is the only way to see improvements this quickly.

## React, Gatsby, and Netlify CMS

My previous website was based on [this Netlify CMS starter](https://github.com/Jinksi/netlify-cms-react-starter), which uses React itself and Netlify CMS. There wasn’t much of a challenge to rework the CSS and Javascript to suit my needs, and I hadn’t learned much. 

With my new site, I wanted to be as ambitious as possible and break new ground, but stick to JAMstack. My goal was to learn the basics of React, JSX, and to use a popular framework for React. I settled on Gatsby.js due to it being recommended by Netlify, it’s popularity beyond Netlify, and the use of GraphQL - something I’ve heard about but never really took a stab at it as someone who was a primarily PHP/WordPress developer.

I followed this [super useful tutorial](https://medium.com/frontend-digest/how-to-create-your-first-blog-with-netlify-cms-86a706b8118b) in addition to Gatsby’s and Netlify’s documentation, and I was on my way forward.

## Anime.js and SVGs

I wanted this website to feel fluid and constantly shifting, and I knew animating SVGs would help accomplish that feel. I searched codepen.io for some inspiration, and I found [this amazing pen](https://codepen.io/louden/pen/rpQOKx) using Anime.js. I was instantly hooked and I decided that it would be the basis for my new site. Recreating the effect in React, using an Anime.js component was a major learning moment for me. The transforming blob shapes started to proliferate through all of the pages (hopefully not too much), and I made use of the [blobs.app](https://blobs.app/) website for all of my shapes.

After a lot of growth, experimentation, and challenging myself, I have a website that I'm finally proud of.