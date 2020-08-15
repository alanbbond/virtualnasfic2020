---
title: Auditorium
layout: default
category: room
public: false
order: 2

---
# Auditorium

<iframe width="700" height="500" src="https://www.youtube.com/embed/3XXKXV6JsYw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" class="nasfic-video" allowfullscreen>
</iframe>

<iframe height="600" width="800" frameborder="0" class="nasfic-chat">
</iframe>

The Discord chat channels named "auditorium-even" and "auditorium-odd" are for 
events happening on alternating hours. When you load or refresh this page, the 
chat widget will load the current channel. You may also change channels by clicking 
<span class="hamburger-menu-image">&nbsp;&nbsp;&nbsp;&nbsp;</span>
in the top left of the chat widget.

<script src="https://unpkg.com/dayjs@1.8.21/dayjs.min.js"></script>
<script>
const nasfic_video = document.getElementsByClassName("nasfic-video")\[0\];
const nasfic_chat = document.getElementsByClassName("nasfic-chat")\[0\];
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
// The olentangy-even and olentangy-odd Discord channels are for events happening
// on alternating hours. Set src for chat iframe to a default channel based on 
// what time it is:
const now = dayjs();
const minute = now.minute();
const hour = minute < 55 ? now.hour() : now.hour() + 1;
const even = "742198998722543678";
const odd = "742279184956522496";
const channel = hour % 2 === 0 ? even : odd;
const chat_src = `https://titanembeds.com/embed/680949000295284757?defaultchannel=${channel}`;
nasfic_chat.src = chat_src;
</script>
