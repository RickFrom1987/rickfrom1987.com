---
title: MomentLens
subtitle: 2015
url: https://momentlens.co
---

Working with friends @ [MomentLens](//momentlens.co) was a once in a lifetime opportunity. It was the first hardware startup I have worked for and it was so insanely fun and exciting! I was able to learn a ton from Marc, Erik and Wes (the man behind the hardware of Moment Case!) about so many aspects of business, design and hardware. I was lucky enough to be onboard during which our team was able to raise money on [Kickstarter for the Moment Case](https://www.kickstarter.com/projects/584288471/moment-case-worlds-best-iphone-case-for-mobile-pho). I was brought in to work on whatever needed to be worked on:

<b>Basic Infrastructure.</b>
<p>
Their online shop and website was standing up and operating fairly well, but they wanted features, design changes and stability with little infrastructure to support it. I started by moving them onto version control and getting everything into Github asap, before editing a single line of code. I also setup some basic tests and pingdom monitoring so we could make small steps forward. Lessons here is to think about removing code before adding more!
</p>

<b>Wordpress Plugin Hell.</b>
<p>
They didn’t have a full time dev on the site prior to my arrival so they were able to get what they needed by adding a ton of Wordpress and Woocommerce plugins. The problem here is that they are constantly needing updates and can cause issues when doing theme or feature development. Also it is hell on page load time (this affected the site on mobile heavily). Before writing any more code I sat down with the team and went through every plugin to decide whether we actually needed them or not and defensively patched and removed plugins that we didn’t need to help make our codebase smaller and less of a headache.
</p>

<b>Streamlining Monotonous Tasks.</b>
<p>
My first major contribution was to help streamline their ordering process within WooCommerce. They had a manual process that took our customer support gal hours to complete. I hacked together a Woocommerce plugin that took away this task. The code is not ideal as I had zero experience writing Woocommerce plugins, but it worked and we moved forward.
</p>

<b>Data and Analytics.</b>
<p>
Turns out it is really important to understand your users and their buying behaviors. The learning in this area has been immense for me. I have always just setup Google analytics and that was the end of that. I am now using Google analytics a bit more carefully now. Working here has taught me that thinking carefully about where and when to hook into google analytics actions and events can make a world of difference in understanding a user base!
</p>

I faced many challenges during my time at moment. The site handled hundreds of orders a day, processing in the tens of thousands per month. I helped streamline the project management on the business side as well as some python scripts to help automate business processes. I also was able to train and help the tech intern Eli! Who is now on his way to working on great things, really proud of my time with him and helping him along.