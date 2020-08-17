---
title: Scioto Room
layout: default
category: room
public: false
order: 3

---
# The Scioto Event Room

Named for the Scioto River. Pronounced "Psy-Oh-Toe".

<iframe src="https://player.vimeo.com/video/448012416" frameborder="0" allow="autoplay; fullscreen" allowfullscreen  class="nasfic-video"></iframe>

<iframe frameborder="0" class="nasfic-chat">
</iframe>

The Discord chat channels named "scioto-even" and "scioto-odd" are for events 
happening on alternating hours. When you load or refresh this page, the chat 
widget will load the current channel. You may also change channels by clicking 
<span class="hamburger-menu-image">&nbsp;&nbsp;&nbsp;&nbsp;</span>
in the top left of the chat widget.

<script src="https://unpkg.com/dayjs@1.8.21/dayjs.min.js"></script>
<script src="https://unpkg.com/dayjs@1.8.21/plugin/utc.js"></script>
<script src="https://unpkg.com/dayjs@1.8.21/plugin/timezone.js"></script>
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
// The scioto-even and scioto-odd Discord channels are for events happening on
// alternating hours. Set src for chat iframe to a default channel based on what
// time it is:
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);
const timezone = dayjs.tz(dayjs());
console.log('timezone ', timezone);
const now = dayjs();
const minute = now.minute();
const hour = minute < 55 ? now.hour() : now.hour() + 1;
const even = "742199135716769875";
const odd = "742279253592113243";
const channel = hour % 2 === 0 ? even : odd;
const chat_src = `https://titanembeds.com/embed/680949000295284757?defaultchannel=${channel}`;
nasfic_chat.src = chat_src;
</script>