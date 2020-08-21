---
title: Schedule
layout: default
category: public
public: false
order: 4

---
This schedule is still subject to change. We have asked program participants to get back to us by the end of the day, Tuesday August 18, with any modifications they need.

On the day of the convention, you will see additional pages on this website called "rooms", containing embedded streams and Discord channels. Each listing below on this page will then have a link to its room.

{% include jump_to_event.html content=site.data.schedule %}

# Events

{% assign days = "friday,saturday,sunday" | split: "," %}
{% assign meridians = "am,pm" | split: "," %}
{% assign times = "12,1,2,3,4,5,6,7,8,9,10,11" | split: "," %}
{% for day in days %}
{% for event in site.data.schedule %}
{% assign dt = event.datetime | downcase %}
{%   if event.published and dt == day %}
{%     include schedule_listing.html %}
{%   endif %}
{% endfor %}
{% for meridian in meridians %}
{% for event in site.data.schedule %}
{%   assign dt = event.datetime | downcase %}
{%   if event.published and dt contains day and meridian == "am" and dt contains "morning" %}
{%     include schedule_listing.html %}
{%   endif %}
{%   if event.published and dt contains day and meridian == "pm" and dt contains "afternoon" %}
{%     include schedule_listing.html %}
{%   endif %}
{% endfor %}
{% for time in times %}
{%   for event in site.data.schedule %}
{%     assign dt = event.datetime | downcase %}
{%     assign start_time = dt | split: ":" | first %}
{%     if event.published and dt contains day and dt contains meridian %}
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
{% for event in site.data.schedule %}
{%   if event.published and event.datetime.size == 0 %}
{%     include schedule_listing.html %}
{%   endif %}
{% endfor %}