---
title: "Fred-thoughts Bot"
date: "2016"
lede: "A Slackbot to automate a Twitter account."
link: ""
repo: "https://github.com/prichey/fredthoughts-bot"
order: 4
publish: false
lang: "Node.js"
---

One of the things I enjoyed about working at
<a href="http://www.40digits.com/" target="_blank">40Digits</a> was the
proximity that came with working with small teams. This meant we all got to know
each other very well, and we ended up with all sorts of inside jokes and bits.
One of these involved a particular coworker, Fred, who had a knack for making
the most ridiculous, off-the-wall comments, which became known as
_Fred-thoughts_. This became such a regular occurrence that our then-CTO started
a <a href="https://twitter.com/FromFredsMouth" target="_blank">Twitter
account</a> to keep a permanent record of the this coworker's 'best' lines
(anything tweeted from the account was first okay-ed by the coworker).

Eventually, we set up a Slack channel devoted to documenting these thoughts.
Every so often an admin would go through and tweet out the best lines. This
happened intermittently at best, and the lines would just pile up. I had spent a
bit of time playing around with
<a href="https://botkit.ai/" target="_blank">Botkit</a>, so I succumbed to that
developer's base-instinct and sought out to automate the process.

If you use Slack, you probably know that you can 'react' to messages with a
particular emoji. I had the idea of using reactions to allow coworkers either to
approve or veto Fred-thoughts. I decided to require 3 👍 reactions before the
message would be tweeted, and any message receiving any 👎 reactions would
automatically be prevented from being posted. That way, either Fred himself or
anyone else concerned about the thought being tweeted out publicly would be able
to veto it.

The bot ran successfully for over 6 months until Fred moved on to another
job, leaving the rest of us devoid of his precious nuggets of inspiration.
Still, we had a permanent record of past thoughts, which was certainly
better than nothing.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Amy: &quot;What kind of cat is it?&quot;<br />Fred: &quot;Normal.&quot;</p>&mdash; Fred Thoughts (@FromFredsMouth) <a href="https://twitter.com/FromFredsMouth/status/604444640335429633?ref_src=twsrc%5Etfw">May 30, 2015</a></blockquote>
