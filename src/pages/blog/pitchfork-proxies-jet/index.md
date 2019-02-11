---
title: "Pitchfork and Proxies and Jet, Oh My!"
date: "2019-02-09"
excerpt: "On Monday, I launched p4ktldr. By Tuesday, I knew I'd been had."
publish: true
---

<section class="blog-section">

Last Monday, I launched <a target="_blank" href="https://p4ktldr.com/">p4ktldr</a>. By Tuesday, I knew I'd been had.

The idea for p4ktldr was simple: I'd provide a simple and intuitive interface to search for album reviews on <a target="_blank" href="https://pitchfork.com/">Pitchfork</a>, sorted by rating. The idea had been in my head for more than a year and I had started the site some 3 or 4 times since, most recently about a month ago spurred on by a bout of sober productivity (hello Dry January!) I took the opportunity to play around with <a target="_blank" href="https://reactjs.org/docs/hooks-intro.html">React Hooks</a> and a few weekends and weeknights later, I had a working prototype.

<a target="_blank" href="https://twitter.com/prestonrichey/status/1092621390702886917">I tweeted</a> a link to the site on Monday night, and Tuesday morning was retweeted by Rich Ziade and Paul Ford (the founders of <a target="_blank" href="https://postlight.com/">Postlight</a>, my employer) as the official Postlight <a target="_blank" href="https://twitter.com/PostlightStudio">Twitter account</a>. So, there were eyes on the site even if traffic wasn't outrageous.

Around lunchtime on Tuesday I checked the site and noticed something was off. The site was broken, but in a very specific and peculiar way: a search for any artist would return only one thing: a link to the seminal mid-aughts Australian garage rock band, <a target="_blank" href="https://en.wikipedia.org/wiki/Jet_(Australian_band)">Jet</a>.

I immediately knew something was up. Not only did any search return Jet and Jet alone, but the results of search for albums by Jet were also altered: only one album was returned, 2006's *Shine On*, with a perfect rating of 10.0. This is when I knew I had been had.

<div class="blog-inset">
  <hidden>
    <img src='shine-on.jpg' />
    <img src='shine-on-zoom.jpg' />
  </hidden>
  <zoom-image src='shine-on.jpg' zoomSrc='shine-on-zoom.jpg'></zoom-image>
</div>

I knew so because I knew Pitchfork had not given *Shine On* a 10 rating, but rather, [in]famously, a 0. The review had become a bit of a meme, reminiscent of <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">link-trolling</a> popular around that time. Alongside the 0.0 review of *Shine On*, in place of any explanation, was (and still is) an embedded video of a chimpanzee urinating into its own mouth. <a target="_blank" href="https://pitchfork.com/reviews/albums/9464-shine-on/">Really</a>.

After doing a bit more poking around, I found a final clue to what had happened. Embedded in the spoofed data returned by Pitchfork's API was a field that looked like this:

```json
"authors":[{
  "id":"deadbeef",
  "name":"With Love",
  "title":"The Dev Team",
  "url":"/reviews/albums/9464-shine-on/",
  "slug":"reviews/albums/9464-shine-on"
}]
```

I'm willing to bet you get the picture even if you can't read <a target="_blank" href="https://www.json.org/">JSON</a>.

So, I knew that someone on the Pitchfork dev team had found out about my site and decided to have some fun with me. It's worth saying, I think, that I wasn't upset by the trolling. After all, I was using a public but undocumented API provided by Pitchfork without their permission. They could have sent back an error response, at best, and a cease and desist, at worse. I appreciated that the team took the time to break my site in such a specific and laughable way.

But I knew I couldn't just accept defeat. I certainly don't have the time, knowledge, or prowess to wage war with a Condé Nast-funded team of developers. Still, I knew I had to at least attempt to answer what I saw as a challenge.

I'm reluctant to talk about my solution because currently (as of Saturday Feb. 9th), it's working. But I figure the site's survival hinges less on whether I write about it now and more on the goodwill of the dev team at Pitchfork (or their ability to turn a blind eye to the trivial amount of traffic p4ktldr drives their way). I have no intention to monetize p4ktldr and I don't really stand to benefit from its success other than its existence as a tool I personally find useful.

<div class="blog-inset">
  <hidden>
    <img src='jet.jpg' />
  </hidden>
  <zoom-image src='jet.jpg' zoomSrc='jet.jpg' caption="These guys say, 'use a proxy.'"></zoom-image>
</div>

So, my solution: use a proxy.

The initial requests to Pitchfork's servers were made from the site itself, so it was trivial to detect and give a spoofed response. This approach was the easiest to implement, but also the easiest to detect. With a proxy, I essentially introduce a middleman which makes requests on the behalf of the application. This approach obscures the referrer, making it harder to track, but is noticeably slower (a proxied request can take 2 - 5 times longer).

There are other reasons it isn't an ideal solution. For one, it has the potential to cost me money, since the proxy is an <a target="_blank" href="https://aws.amazon.com/lambda/">AWS Lambda</a> function charged per usage. It also is also somewhat brittle because Pitchfork could easily track down the IP of the proxy and blacklist it, much like they originally did to p4ktldr.com itself. I could probably fight this by relocating the proxy, but it'd be an exhausting game of cat and mouse and I'd much rather spend my time doing other things.

For those interested in how I make these proxied requests, you can check out the source <a target="_blank" href="https://github.com/prichey/p4ktldr/tree/master/src/lambda">here</a> and <a target="_blank" href="https://github.com/prichey/p4ktldr/blob/master/src/setupProxy.js">here</a>. The site was already hosted on <a target="_blank" href="https://www.netlify.com/">Netlify</a>, so I used <a target="_blank" href="https://www.netlify.com/docs/functions/">Functions</a>, which turned out to be very intuitive to use. <a target="_blank" href="https://github.com/netlify/netlify-lambda">This repo</a> was invaluable in getting everything wired up.

So, the ball's back in Pitchfork's court. For all I know, p4ktldr may be broken again later this evening. Or, it could carry on quietly for years to come. I appreciate that the dev team had a sense of humor about this, and frankly I learned quite a bit thinking through how to proxy requests in React, a question I'd yet to face in my years as a developer.

I still find p4ktldr useful so I'm going to fight for its continued existence, but if I run into further challenges it may be hosted somewhere a bit more obscure.

As someone more Australian than myself once <a target="_blank" href="https://www.youtube.com/watch?v=p9SDaQ1seSg">sang</a>:

> *When the stars all look the same*<br/>
> *Don't feel the cold or wind or rain*<br/>
> *Everything will be okay*<br/>
> *We will meet again one day*<br/>

> *And I will shine on for everyone*<br/>
> *Shine on for everyone*

<!-- ```
When the stars all look the same
Don't feel the cold or wind or rain
Everything will be okay
We will meet again one day

And I will shine on for everyone
Shine on for everyone
``` -->


</section>
