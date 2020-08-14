---
title: Embed Experiment
layout: default
category: room
public: false
order: 14

---

This room will be removed from the website before the convention.

<iframe width="700" height="500" src="https://www.youtube.com/embed/3XXKXV6JsYw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" class="nasfic-video" allowfullscreen>
</iframe>

<iframe src="https://titanembeds.com/embed/680949000295284757" defaultchannel="742198998722543678" height="600" width="800" frameborder="0" class="nasfic-chat">
</iframe>
<script>
const nasfic_video = document.getElementsByClassName("nasfic-video")[0];
const nasfic_chat = document.getElementsByClassName("nasfic-chat")[0];
const resizeVideoAndChat = () => {
  const w = (window.innerWidth / 2) - 40;
  // Maintain a 4-3 aspect ratio
  const h = (w / 4) * 3;
  nasfic_video.style.width = `${w}px`;
  nasfic_chat.style.width  = `${w}px`;
  nasfic_video.style.height = `${h}px`;
  nasfic_chat.style.height  = `${h}px`;
} 
window.addEventListener("resize", resizeVideoAndChat, false);
document.addEventListener('fullscreenchange', resizeVideoAndChat, false);

resizeVideoAndChat();
</script>