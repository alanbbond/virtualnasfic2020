---
title: Readings
layout: default
category: room
public: false
order: 5

---
# Author Readings Room

<iframe src="https://player.vimeo.com/video/448011776" frameborder="0" allow="autoplay; fullscreen" allowfullscreen  class="nasfic-video" ></iframe>

<iframe frameborder="0" class="nasfic-chat">
</iframe>

The Discord chat channels named "readings-even" and "readings-odd" are for 
events happening on alternating hours. When you load or refresh this page, the 
chat widget will load the current channel. You may also change channels by clicking 
<span class="hamburger-menu-image">&nbsp;&nbsp;&nbsp;&nbsp;</span>
in the top left of the chat widget.

<script src="https://unpkg.com/dayjs@1.8.21/dayjs.min.js"></script>
<script>
const nasfic_video = document.getElementsByClassName("nasfic-video")[0];
const nasfic_chat = document.getElementsByClassName("nasfic-chat")[0];
const resizeVideoAndChat = () => {
const w = (window.innerWidth / 2) - 40;
// Maintain a 16-9 aspect ratio
const h = (w / 16) * 9;
nasfic_video.style.width = `${w}px`;
nasfic_chat.style.width  = `${w}px`;
nasfic_video.style.height = `${h}px`;
nasfic_chat.style.height  = `${h}px`;
}
window.addEventListener("resize", resizeVideoAndChat, false);
document.addEventListener('fullscreenchange', resizeVideoAndChat, false);
resizeVideoAndChat();
// The readings-even and readings-odd Discord channels are for events happening
// on alternating hours. Set src for chat iframe to a default channel based on 
// what time it is:
const now = dayjs();
const minute = now.minute();
const hour = minute < 55 ? now.hour() : now.hour() + 1;
const even = "743859917340803102";
const odd = "743859953445372021";
const channel = hour % 2 === 0 ? even : odd;
https://discordapp.com/widget?id=680949000295284757&theme=dark
const chat_src = `https://titanembeds.com/embed/680949000295284757?defaultchannel=${channel}`;
nasfic_chat.src = chat_src;
</script>
