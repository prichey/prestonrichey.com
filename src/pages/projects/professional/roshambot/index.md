---
title: "Roshambot"
date: "2016"
lede: "An artificially intelligent disembodied hand that plays rock-paper-scissors"
link: ""
repo: "https://github.com/MoonshotLab/RoShamBot"
order: 3
publish: true
---

Roshambot (more annoyingly styled RoShamBot) was my first project working with <a href="https://www.barkleyus.com/" target="_blank">Barkley</a>'s innovation lab, <a href="http://moonshot.barkleyus.com" target="_blank">Moonshot</a>. The idea for the project was to make artificial intelligence more easily understandable. We wanted to make the experience accessible to anyone, regardless of technical experience, so we decided to try and train an artificial intelligence to play a common, universal game. As luck would have it, a local bank just a few blocks away from Barkley holds an annual Rock-Paper-Scissors competition, et voilà, we decided to create a player to enter the competition.

![Roshambot Hand](hand.jpeg "Roshambot Hand")

The bot is comprised of an animatronic, 3D-printed hand rising out of a pedestal, which houses both the laptop running the main logic program, a <a href="https://en.wikipedia.org/wiki/Leap_Motion#Technology" target="_blank">Leap Motion</a> controller as well as an Arduino Uno which communicates with the laptop and controls the lights and scoreboard. To play, a user walks up to the machine and holds their hand above the sensor for 5 seconds. Then, after a countdown, both the player and the bot play their hands, and the bot uses the Leap Motion controller to figure out what the human played, and if the throw was a win, loss, or tie.

![Roshambot Pedestal](pedestal.jpeg "Roshambot Pedestal")

Roshambot maintains a database of every throw played against it, as well as the 'context' for each of those throws. This allows the bot to make inferences into how the individual plays, as well as how people tend to play, in general. It might find that people who play Rock and then Scissors typically switch back to Rock for the third throw. Or, a particular individual might tend towards Paper. In a game as random as Rock-Paper-Scissors, any universal commonalities are difficult to find, but with individual players, the bot can find and exploit subconscious biases, something I found to be truly remarkable (a fact shown by this eerily good <a href="http://www.nytimes.com/interactive/science/rock-paper-scissors.html" target="_blank">simulation</a> made by the New York Times).

<iframe width="608" height="342" src="https://www.youtube.com/embed/uS2KD28gLHM?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

While we weren't able to enter Roshambot into the RPS competition, we did bring it along to give competitors a chance to warm up. The crowd loved interacting with a device that was very clearly 'unhuman', yet possesses the capabilities to learn. Roshambot, at the end of the night, was bested by the winner of the RPS competition in a dramatic bout. But it was a close one, 2 to 3. The bot's been training, getting smarter and smarter, and we think it's only a matter of time before it returns to squash its puny human oppressors.

For more info, check out this <a href="https://medium.com/moonshotlab/man-vs-machine-learning-40a39f7f936" target="_blank">post</a> I wrote for the Moonshot <a href="https://medium.com/moonshotlab" target="_blank">blog</a>.
