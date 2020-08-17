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
// The -even and -odd Discord channels are for events happening on alternating
// hours. Set src for chat iframe to a default channel based on what time it is,
// adjusting for the viewer's time zone:
const now = dayjs();
const minute = now.minute();
const hour = minute < 55 ? now.hour() : now.hour() + 1;
const eastern_list = ['Cancun', 'Detroit', 'Indiana/Indianapolis', 'Indiana/Marengo', 'Indiana/Petersburg', 'Indiana/Tell_City', 'Indiana/Vevay', 'Indiana/Vincennes', 'Indiana/Winamac', 'Iqaluit', 'Kentucky/Louisville', 'Kentucky/Monticello', 'New_York', 'Nipigon', 'Pangnirtung', 'Thunder_Bay', 'Toronto'];
const central_list = ['Bahia_Banderas', 'Chicago', 'Indiana/Knox', 'Indiana/Tell_City', 'Matamoros', 'Menominee', 'Merida', 'Mexico_City', 'Monterrey', 'North_Dakota/Beulah', 'North_Dakota/Center', 'North_Dakota/New_Salem', 'Rainy_River', 'Rankin_Inlet', 'Resolute', 'Winnipeg'];
const mountain_list = ['Boise', 'Cambridge_Bay', 'Chihuahua', 'Denver', 'Edmonton', 'Hermosillo', 'Inuvik', 'Mazatlan', 'Ojinaga', 'Yellowknife'];
const pacific_list = ['Dawson', 'Los_Angeles', 'Tijuana', 'Vancouver', 'Whitehorse'];
const timezone = Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone?.replace('America/', '');;
if (central_list.includes(timezone) || pacific_list.includes(timezone)) {
  hour++;
}
const channel = hour % 2 === 0 ? even : odd;
const chat_src = `https://titanembeds.com/embed/680949000295284757?defaultchannel=${channel}`;
nasfic_chat.src = chat_src;