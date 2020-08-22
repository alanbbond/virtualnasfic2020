---
title: Music
layout: default
category: info
public: true
order: 7

---


# Music/Filk Schedule

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



