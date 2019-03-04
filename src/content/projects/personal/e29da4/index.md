---
title: "@E29DA4"
date: "2014"
lede: "A Vinebot that commented rainbow hearts on Westboro Baptist Church Vines."
link: ""
repo: "https://gist.github.com/prichey/cb161f121301ef4f2f22"
order: 1
publish: true
lang: "Python"
---

Though I refuse to say anything the
<a href="https://en.wikipedia.org/wiki/Westboro_Baptist_Church" target="_blank">Westboro
Baptist Church</a> does is actually _good_, it certainly had a
<a href="http://gawker.com/the-god-hates-fags-church-makes-amazing-vines-1498972724" target="_blank">prolific</a>
Vine account. By the time the service shut down (RIP 😭), the account had
amassed 793 posts and a whopping 46M loops. With as many eyes as it had captive,
I decided to try and use my budding Python skills for a bit of social media
activism.

The Vine API was never officially documented, but an
<a href="https://github.com/starlock/vino/wiki/API-Reference" target="_blank">unofficial
reference</a> surfaced, as did several API wrappers. I started playing around
with <a href="https://github.com/davoclavo/vinepy" target="_blank">vinepy</a>
and was quickly browsing the timeline, liking Vines, and commenting. I came up
with the idea of leaving comments on each of the WBC's Vines. Even though I
couldn't stop them from posting, I could automate a response that would be
carried along and seen by thousands.

I set up a login,
<a href="https://twitter.com/E29DA4/" target="_blank">@E29DA4</a> (#E29DA4 being
the hex representation of Unicode code point U+2764, ❤), then wrote this script,
which finds the most recent WBC Vine and comments "❤️💛💚💙💜". The Vine API
didn't allow you to comment the same thing twice on the same Vine, so I was
saved the effort of checking whether or not I'd already commented. With a simple
hourly cron job, @E29DA4 was up and running.

The script ran for several months before WBC blocked the account, preventing it
from commenting any longer. I wish I had statistics about on how many Vines the
script commented, but my guess would be in the hundreds, since it ran during the
period when the WBC was most active.
