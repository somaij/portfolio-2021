---
templateKey: blog-post
path: responsive-animations
date: 2022-05-13T16:36:05.875Z
title: Responsive On-Scroll Animations
description: Using the intersection observer and some CSS magic!
image: assets/daniel-korpai-pkrnxegurgm-unsplash.jpg
cta:
  ctaTitle: Having Trouble?
  ctaText: I can help point you in the right direction.
  ctaBtn: Email Me!
seo:
  seoTitle: Using the Intersection Observer to do Responsive Animations | Jason Somai
  seoDescription: Here's an easier way to do on-scroll animations without using an
    external library, and with having full control over the interactions.
---
Sometimes your environment may be so locked down that you can’t use an external animation library for either security or technical reasons. You may even find yourself confined to creating and editing pages through the backend of a CMS. I pride myself on finding workarounds, and I’ve finally found one for the biggest creative problem in my current role.

**Responsive on-scroll animations without an external library that doesn’t break your site.**

**Here's how I managed to do it:**

## Using the Intersection Observer (obviously)

```
<script>
// Reverted back to non-arrow functions because it would break IE11 completely.

var observer = new IntersectionObserver(
	function (entries) {
		entries.forEach(function (entry) {
			var el = entry.target;
			if (entry.isIntersecting) {
				el.classList.add("animate");
				return;
			}
		});
	},
	{ threshold: 0.2 }
);

document.querySelectorAll(".animation").forEach(function (i) {
	if (i) {
		observer.observe(i);
	}
});
</script>
```

As shown above, the code is fairly standard use of the intersection observer, except translated to not use arrow functions for maximum compatibility (arrow functions basically break IE11).

I’ve added a class called **"animation"** to all elements I want to animate. When the intersection observer picks up an element with the **.animation** class in the viewport, it assigns an **"animate"** class. Fairly simple. 

With this method, you'll have access to pre and post visibility css selectors. For example:

```
<style>
.fade{ opacity:0; transition 1500ms all ease-in-out; } /* Pre animation */
.fade.animate{ opacity 1; } /* Animation triggered state */
</style>
```

Now, all you need to write in HTML is:

```
<div class="fade animation">Fading in!</div>
```

You should have a div that fades in on scroll. Neat!

## Now for responsive

The cool thing about this setup is that you can assign multiple viewport state animations to a div. You can have a div like this:

```
<div class="animation fade-left-desktop fade-up-mobile">
Thing that looks good fading in from the left on desktop, 
but not on mobile
</div>
```

And your CSS would look like this:

```
<style>
/* Using min and max width media queries
to not have overlapping states. */

@media screen and (min-width: 768px) {
	.fade-left-desktop{
		opacity: 0;
		transition: 1500ms all ease-in-out;
		transform: translateX(50px);
	}
	.fade-left-desktop.animate{
		opacity: 1;
		transform: translateX(0);
	}
}

@media screen and (max-width: 767px) {
	.fade-up-mobile {
		opacity: 0;
		transition: 1500ms all ease-in-out;
        transform: translateY(50px);
	}
	.fade-up-mobile.animate {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
```

You don’t even have to write more JavaScript! 

## And... you can even delay animations

Another scenario is delaying divs on desktop, but not delayed on mobile.

```
<div class="fade-up-desktop fade-mobile animation">Delayed 300ms</div>
<div class="fade-up-desktop fade-mobile animation stagger-desktop-1">Delayed 300ms</div>
<div class="fade-up-desktop fade-mobile animation stagger-desktop-2">Delayed 600ms</div>

<style>
@media screen and (min-width: 768px) {
	.fade-up-desktop {
		opacity: 0;
		transition: 1500ms all ease-in-out;
		transform: translateY(50px);
	}
	.fade-up-desktop.animate {
		opacity: 1;
		transform: translateY(0);
	}
	.stagger-desktop-1 {
		transition-delay: 300ms;
	}
	.stagger-desktop-2 {
		transition-delay: 600ms;
	}

}
@media screen and (max-width: 767px) {
	.fade-mobile {
		opacity: 0;
		transition: 1000ms all ease-in-out;
	}
	.fade-mobile.animate {
		opacity: 1;
	}
}
</style>
```

This is so useful for **changing the timing on elements as your viewport size changes**. This was a major problem I ran into with **AOS.js**.

You’ll also notice that I’ve stuck to **relative** positioning, and using CSS transforms to do the animations. This doesn’t break any preexisting DOM or cause layout shifts as the element aren't changing position.

Here is a pen that you can scroll and see all of this in effect. You’ll also notice there’s a grow animation that can lead to some interesting combinations.

<iframe height="500" style="width: 100%;" scrolling="no" title="Easy On Scroll Responsive Animations" src="https://codepen.io/jsomai/embed/MWQgPRY?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jsomai/pen/MWQgPRY">
  Easy On Scroll Responsive Animations</a> by Jason Somai (<a href="https://codepen.io/jsomai">@jsomai</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>