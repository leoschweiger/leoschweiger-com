---
layout: ../../layouts/Project.astro

title: "fight guys"
date: "2025-06-01"
description: "A physics-based auto battler with asynchronous multiplayer matches. Players build teams of up to five units that fight automatically using physics-driven interactions. Units can be modified with items, potions, and stat upgrades."

links:
  - url: "https://leoschweiger.itch.io/fight-guys"
    text: "game page"
  - url: "https://leoschweiger.itch.io/fight-guys/devlog/958323/fight-guys-021-patch-notes"
    text: "week one recap"
  - url: "https://youtu.be/iWUF-No3fm8"
    text: "gameplay video"
---

<div id="iframe-container" style="margin: 0; padding: 0"></div>
<script>
  if (window.matchMedia("(min-width: 556px)").matches) {
    document.getElementById("iframe-container").innerHTML = `
      <iframe title="fight guys game embed"  class="image" style="margin-bottom: -20px; border: 0" src="https://itch.io/embed-upload/15254512?color=ffffff" allowfullscreen><a href="https://leoschweiger.itch.io/fight-guys">Play Fight guys on itch.io</a></iframe>
    `;
  }
</script>


![](../../media/projects/fight-guys_0.webp)
![](../../media/projects/fight-guys_1.webp)

---

### overview
Developed as part of a multimedia project at Salzburg University of Applied Sciences with [David Zandanell](https://portfolio.fh-salzburg.ac.at/users/david-thomas-zandanell). Game logic, networking, art, and concept were handled by us, while music and sound were provided by [Sebi Schweiger](https://www.schweigersebi.com/), [Andreas Steiner](https://www.instagram.com/tom.joseph.official/) and [Saida Feitl](https://www.instagram.com/saidaftl).

### what i did
I implemented the unit battle logic and physics interactions in Unity using C#, and built the asynchronous multiplayer systems along with content pipelines for units, items, and modifiers. I also created all the art assets and animations.

### results
Over 2000 matches were played in the first week. We also showcased the game at the [Level Up Salzburg](https://www.levelup-salzburg.at/) and the [A1 Esports Festival Vienna](https://www.a1esports.at/festival/). We presented it to visitors and received positive feedback from players and developers alike.
