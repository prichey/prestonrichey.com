---
title: "@canizen"
date: "2016"
lede: "A Twitterbot that shows if one of Barkley's Zen Rooms is available."
link: "https://twitter.com/canizen"
repo: "https://github.com/MoonshotLab/state-of-zen"
order: 4
publish: true
lang: "Node.js"
---

In 2016, <a href="https://www.barkleyus.com/" target="_blank">Barkley</a> underwent major renovations on the 4th floor of the old <a href="https://en.wikipedia.org/wiki/TWA_Corporate_Headquarters_Building" target="_blank">TWA headquarters</a> it calls home. The space, formerly consisting mostly of client-specific 'war-rooms', was opened up as a collaboration space for all partners. It included an expanded company kitchen and lunch area, as well as two 'zen rooms', light- and sound-proof rooms no more than 6 feet on a side, for partners to use for work, sleep, or (ostensibly) meditation.

<div class="blog-inset">
  <hidden>
    <img src='doors.gif' />
  </hidden>
  <zoom-image src='doors.gif' alt='Zen Room Doors'></zoom-image>
</div>

The rooms were great in practice, but there was a glaring problem: there was no way to tell if a room was available without making the trek up from the 2nd or 3rd floor. As a developer, one of my most base instincts is to problem-solve my way out of (unnecessary) physical activity. So, that's just what I did.

Both of the rooms have a red light outside their door to indicate its occupancy. I added a <a href="https://www.amazon.com/Onite-2-Pack-Standard-Holder-Adapter/dp/B01EHAE56S" target="_blank">socket adapter</a> to each of the outlets, so that whenever the light came on, it powered the socket. My coworker <a href="https://about.me/ricky.catto" target="_blank">Ricky</a> and I designed and 3d-printed a small <a href="https://www.thingiverse.com/thing:1948319" target="_blank">housing</a> which contains a wifi-enabled <a href="https://www.particle.io/products/hardware/photon-wifi-dev-kit" target="_blank">Particle Photon</a> microcontroller and a USB power-adapter. Whenever the light turns on, the photon connects to wifi and broadcasts its status. A small script runs on a server and checks if either of the rooms are available, and if the status has changed, removes the previous status and tweets out the new one. Accurate to the minute, you can know, beyond a doubt, if you can, indeed, zen.

<!-- <div class="blog-inset">
  <a class="twitter-timeline" href="https://twitter.com/CanIZen?ref_src=twsrc%5Etfw">Tweets by CanIZen</a>
</div> -->

Check out the <a href="http://www.instructables.com/id/Spy-on-Your-Lightbulbs/" target="_blank">Instructable</a> for more information.
