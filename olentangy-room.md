---
title: Olentangy Room
layout: default
category: room
public: false
order: 4

---
# The Olentangy Event Room

Named for the Olentangy River

<iframe src="https://player.vimeo.com/video/448013529" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<iframe frameborder="0" class="nasfic-chat">
</iframe>

The Discord chat channels named "olentangy-even" and "olentangy-odd" are for 
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
// The olentangy-even and olentangy-odd Discord channels are for events happening
// on alternating hours. Set src for chat iframe to a default channel based on 
// what time it is:
const now = dayjs();
const minute = now.minute();
const hour = minute < 55 ? now.hour() : now.hour() + 1;
const even = "742199193837371423";
const odd = "742279322726957118";
const channel = hour % 2 === 0 ? even : odd;
const chat_src = `https://titanembeds.com/embed/680949000295284757?defaultchannel=${channel}`;
nasfic_chat.src = chat_src;
</script>