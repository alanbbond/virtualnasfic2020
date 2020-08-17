---
title: Auditorium
layout: default
category: room
public: false
order: 2

---
# Auditorium

<iframe src="https://player.vimeo.com/video/448011776" frameborder="0" allow="autoplay; fullscreen" allowfullscreen  class="nasfic-video" ></iframe>

<iframe frameborder="0" class="nasfic-chat">
</iframe>

The Discord chat channels named "auditorium-even" and "auditorium-odd" are for 
events happening on alternating hours. When you load or refresh this page, the 
chat widget will load the current channel. You may also change channels by clicking 
<span class="hamburger-menu-image">&nbsp;&nbsp;&nbsp;&nbsp;</span>
in the top left of the chat widget.

<script src="https://unpkg.com/dayjs@1.8.21/dayjs.min.js"></script>
<script>
const even = "742198998722543678";
const odd = "742279184956522496";
</script>
{% include room_scripts.html %}
