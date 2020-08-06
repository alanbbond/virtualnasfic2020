---
title: Auditorium
layout: default
category: accesscontrol
order: 10

---
# Auditorium

<iframe width="700" height="500" src="https://www.youtube.com/embed/3XXKXV6JsYw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" class="nasfic-video" allowfullscreen>
</iframe>

<widgetbot
server="680949000295284757"
channel="740005240069292072"
width="45%"
height="53vh"
class="nasfic-chat"
>
</widgetbot>
<script src="https://cdn.jsdelivr.net/npm/@widgetbot/html-embed"></script>
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