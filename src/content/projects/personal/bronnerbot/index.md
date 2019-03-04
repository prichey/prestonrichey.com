---
title: "@bronnerbot"
lede: "A Twitterbot that tweets like a Dr. Bronner's bottle."
date: "2015"
link: "https://twitter.com/bronnerbot"
repo: "https://github.com/prichey/bronnerbot"
order: 3
publish: true
lang: "Ruby"
---

<a href="" target="_blank">@bronnerbot</a> was my first ebooks-style
<a href="https://en.wikipedia.org/wiki/Markov_chain" target="_blank">Markov</a>
Twitterbot. I had the idea after absentmindedly reading a
<a href="https://www.drbronner.com/" target="_blank">Dr. Bronner's</a>
<a href="https://shop.drbronner.com/pub/media/catalog/product/b/r/bronner-us-liquid-32oz-peppermint-lspe32us5-02.jpg" target="_blank">soap
bottle</a>, which is a treat I recommend to anyone who hasn't already had the
pleasure. The label, rambling, whimsical, and circuitous, almost seems as if it
were generated from a Markov chain rather than written by Dr. Bronner himself.
So, I figured, why not train a model on copy transcribed from each individual
label?

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">A PSALM OF SOAP EXCELLENCE</p>&mdash; bronnerbot (@bronnerbot) <a href="https://twitter.com/bronnerbot/status/883838107661078528?ref_src=twsrc%5Etfw">July 9, 2017</a></blockquote>

I found several labels ready-transcribed online, but for the remaining few I
found an image and typed by hand. (This explains bot typos, which happen every
so often). Each variety of soap has a slightly different label, which made for
an 8,000+ word
<a href="https://github.com/prichey/bronnerbot/blob/master/corpus/label.txt" target="_blank">text
file</a> to train the model. After generating the model, I scheduled the bot to
tweet every 6 hours and @bronnerbot was live. It has been tweeting regularly
since 2015, and has tweeted over 5,000 times. The bot gained only a handful of
followers (39, at time of this writing), but ultimately I made the bot for
myself. Most of its tweets are nonsensical riffs on 'ALL-ONE! ALL-ONE!' (which
is a crutch Dr. Bronner leaned on more often than any other), but occasionally
the bot tweets something serendipitously poetic. I'm convinced all that
transcription was worth it.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Soap can make Love last 1 trillion years of sweet eternities!</p>&mdash; bronnerbot (@bronnerbot) <a href="https://twitter.com/bronnerbot/status/875774977609478144?ref_src=twsrc%5Etfw">June 16, 2017</a></blockquote>
