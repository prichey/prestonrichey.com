---
title: "@menemnesa"
date: "2017"
lede: 'A Twitterbot that responded, "It is known..."'
link: "https://twitter.com/menemnesa"
repo: "https://github.com/prichey/itisknown"
order: 8
publish: true
lang: "Node.js"
---

Let it be known that I was a latecomer to Game of Thrones. One of my favorite recurring memes of the series is the <a href="http://gameofthrones.wikia.com/wiki/Dothraki" target="_blank">Dothraki</a> use of '<a href="https://www.youtube.com/watch?v=foqUPiwMiOM" target="_blank">it is known</a>' as an affirmation of common knowledge. While you don't hear the phrase used commonly today, you do often hear 'let it be known' (especially often on <a href="https://twitter.com/search?q=let+it+be+known" target="_blank">Twitter</a>, for some reason). After seeing one such tweet, I had the idea to make a Twitterbot that would affirm anyone (albeit passively) seeking just such affirmation.

Both @itisknown and @letitbeknown were taken, so I had to come up with something else. My Dothraki is fairly rusty, but I looked up how to say 'it is known' in the native tongue, and lo and behold, <a href="https://twitter.com/menemnesa" target="_blank">@menemnesa</a> (Me nem nesa) was available. I snagged the handle then wrote a short little script to find and reply to tweets containing the phrase 'let it be known'.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">It is known.</p>&mdash; It is known. (@menemnesa) <a href="https://twitter.com/menemnesa/status/915445151786586112?ref_src=twsrc%5Etfw">October 4, 2017</a></blockquote>

The bot tweeted just under 50 times before it was muzzled for violating Twitter's Terms of Service (something which I admittedly had not paid very close attention to previously). Per the TOS, a bot is not allowed to reply to a user unless the user first engages with the bot:

> "The reply and mention functions are intended to make communication between Twitter users easier. Automating these actions to reach many users on an unsolicited basis is an abuse of the feature, and is not permitted."

Totally understandable. You don't want automated bots spamming users like telemarketers. Even though all of the users @menemnesa replied to either ignored the tweet or were amused rather than disgruntled, I decided to retire the bot rather than trying to figure out some way around the TOS. I chalked this one up as a learning experience.

Let it be known that you should always read the Terms of Service.
