---
title: Music
layout: default
category: info
public: true
order: 7

---
# Participatory Music

At NASFiC 2020, there will be events in which participants can use a Zoom call to participate in music together. Here's some guidance about how to do that.

## How does a zoom-based sing run?

Unfortunately (due to latencies), it _really_ doesn’t work to sing with multiple live microphones at the same time. This means that, during a song, all mics must be muted except for that of whoever is leading the song. (You’re encouraged to sing along, but -- for better or worse -- nobody else will hear you.) In between songs, it’s OK to have many live mics. Use of the zoom text chat panel is encouraged. The session moderator will determine and announce who’s singing next.

If you want to sing, use Zoom’s “raised hand” indicator at the bottom of the Participants list. Your hand raised icon will show on your video panel and in the Participants list in the order that hands were raised. The moderator will announce the next performer and un-mute their mic and mute all others while they perform. When done the moderator will mute the performers mic and lower the hand so the participant will drop down to the list below those with raised hands again and the next participant with a Raised Hand will be selected to perform.

## What do I need to participate in the zoom session?

You can join using a desktop or laptop computer, a tablet, a smartphone, or even a dumb phone. All but the last of these require a decent internet connection. Of course, if you don’t have a camera, others won’t be able to see you; if you don’t have a microphone, they won’t be able to hear you; and if you don’t have speakers, you won’t be able to hear them. Fortunately, most devices these days come with built-in cameras, mics, and speakers, as well as displays.

## What should I do for best results?

* An actual computer (as opposed to a phone or tablet) with decent CPU and a large screen will provide the best experience both for audio/video quality and internet connectivity. Using a tablet or phone with wifi is second best and phone with data is possible but may prove very intermittent.
* A decent USB mic is nice but not essential, especially if your system has a decent built-in mic. (Most Apple products are very good, for example.) If you lack a microphone or a camera or speakers, that will be a problem.
* Having the latest version of Zoom installed on your machine helps.
* Enabling “Original Sound” (under advanced audio settings) can be _very_ helpful, especially if you have accompaniment or multiple voices.
* In the Audio Settings menu available on most computers (but not phones or tablets) in the Microphone section you should UN-CHECK the setting for “Automatically adjust volume” if you plan to do any singing or instrument playing. This only works well for voice meetings.
* In the Audio Settings “Advanced” menu you should CHECK the setting to “Show in-meeting option to ‘Enable Original Sound’ from microphone. This will enable a button on your main zoom window at the top left to ‘Turn On Original Sound’ which is also preferred for music performances. Also in the Advanced audio setting menu you should DISABLE both the “Suppress.. Background Noise” options for better music audio.

# Schedule

{% assign published_events = site.data.schedule | where: "published", "true" %}
{% assign music_events = published_events | where: "music", "true" %}
{% assign days = "friday,saturday,sunday" | split: "," %}
{% assign meridians = "am,pm" | split: "," %}
{% assign times = "12,1,2,3,4,5,6,7,8,9,10,11" | split: "," %}
{% for day in days %}
{% for event in site.data.schedule %}
{% assign dt = event.datetime | downcase %}
{%   if dt == day %}
{%     include schedule_listing.html %}
{%   endif %}
{% endfor %}
{% for meridian in meridians %}
{% for event in music_events %}
{%   assign dt = event.datetime | downcase %}
{%   if dt contains day and meridian == "am" and dt contains "morning" %}
{%     include schedule_listing.html %}
{%   endif %}
{%   if dt contains day and meridian == "pm" and dt contains "afternoon" %}
{%     include schedule_listing.html %}
{%   endif %}
{% endfor %}
{% for time in times %}
{%   for event in music_events %}
{%     assign dt = event.datetime | downcase %}
{%     assign start_time = dt | split: ":" | first %}
{%     if dt contains day and dt contains meridian %}
{%       if time == "12" and start_time contains "12" %}
{%         include schedule_listing.html %}
{%       elsif time == "1" and start_time contains "1" %}
{%         unless start_time contains "10" or start_time contains "11" or start_time contains "12" %}
{%           include schedule_listing.html %}
{%         endunless %}
{%       elsif time == "2" and start_time contains "2" %}
{%         unless start_time contains "12" %}
{%           include schedule_listing.html %}
{%         endunless %}
{%       elsif start_time contains time %}
{%         include schedule_listing.html %}
{%       endif %}
{%     endif %}
{%   endfor %}
{% endfor %}
{% endfor %}
{% endfor %}
{% for event in music_events %}
{%   if event.datetime.size == 0 %}
{%     include schedule_listing.html %}
{%   endif %}
{% endfor %}