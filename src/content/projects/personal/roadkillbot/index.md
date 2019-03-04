---
title: "@roadkillbot"
date: "2015"
lede: "A Twitterbot to remind people to clean up dead Meerkats."
link: "https://twitter.com/roadkillbot"
repo: "https://github.com/prichey/roadkillbot"
order: 2
publish: true
lang: "Ruby"
---

<a href="https://techcrunch.com/2015/03/01/meerkat/" target="_blank">Meerkat</a>,
the now-defunct live-streaming app predating Twitter's own Periscope by only a
few precious months, was released to the general public in early March 2015. The
app, in what would eventually become its downfall, lacked its own
infrastructure, so Meerkat streams were necessarily distributed through one's
own Twitter feed. Yet there was no way to archive a stream for later viewing (as
Periscope does now), so clicking on a link (which was accompanied with Meerkat's
automated stream description, "|LIVE NOW|") often took you to a 'stream over'
landing page, since most streams, especially early on, were live for just a
minute or two.

This frustrated me. It frustrated others, as well. John Constine, in his March
1st <a href="https://techcrunch.com/2015/03/01/meerkat/" target="_blank">launch
article</a> for TechCrunch, wrote:

> "The only real downside to the reliance on Twitter is that Meerkat links live
> forever in tweets, even through the streams they lead to may be over and gone
> in a few minutes. That’s one thing Twitter could improve on if it built or
> bought something like Meerkat."

So, I set out to do something about it. The idea I came up with was Roadkill
Collector
(<a href="https://twitter.com/roadkillbot" target="_blank">@roadkillbot</a>), my
first real Twitterbot. The idea was simple: watch for tweets with Meerkat stream
links, check if the stream had ended, and if so, tweet at the user asking them
to delete the stream tweet (in retrospect, the copy I used could have been a bit
less cheeky and more direct). Twitter users could also follow the account and be
able to see the bot's reply to the original Meerkat stream inline (since with
Twitter you'll only see @reply's to users you also follow), saving them the time
of clicking on the stream.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/Gina_Coburn?ref_src=twsrc%5Etfw">@Gina_Coburn</a> |STREAM OVER| Looks like we&#39;ve found ourselves a dead meerkat. Mind cleaning up the mess?</p>&mdash; Roadkill Collector (@roadkillbot) <a href="https://twitter.com/roadkillbot/status/579810929879158785?ref_src=twsrc%5Etfw">March 23, 2015</a></blockquote>

The bot ran for just 2 days, March 22nd & 23rd, and replied to 759 individual
tweets. During this timeframe, @VH1
<a href="https://twitter.com/VH1/status/580068247455842304" target="_blank">tweeted
a link</a> to a Meerkat stream of a Q&A with Shawn Mendes which was retweeted
over 1,300 times and received nearly 300 replies. Due to some faulty logic in my
script, the bot saw replies to a dead Meerkat link as individual tweets that
themselves contained dead links, so it replied to lots of tweets mistakenly.
Lots of users were also either
<a href="https://twitter.com/ryamidon/status/579801414060257280" target="_blank">perturbed</a>
by the bot, or just
<a href="https://twitter.com/GhostRhino23/status/579793803269283840" target="_blank">confused</a>.
I added a default response to any users who tweeted back at the bot, informing
users that it was an automated service and that they could yell at
<a href="https://twitter.com/prestonrichey" target="_blank">@prestonrichey</a>
(me) if they wanted to.

I disabled the service because I started to question the ethics of such an
automated, naggy (and somewhat passive-agressive) service. Building the bot was
a fun exercise, but in the end I figured it should be up to Twitter users if
they wanted to delete Tweets to dead Meerkat streams (even if I still believed
that's what should be done). Twitter has since added a clause in their Terms of
Service that prevents bots from reaching out to users, unprovoked, something I
learned later on when building
[@menemnesa](/projects/personal/menemnesa/).
