---
title: Schedule
layout: default
category: public
public: true
order: 4

---
# Events

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
{%       if start_time contains time %}
{%         include schedule_listing.html %}
{%       endif %}
{%     endif %}
{%   endfor %}
{% endfor %}
{% endfor %}
{% endfor %}
{% for event in site.data.schedule %}
{%   if event.datetime.size == 0 %}
{%     include schedule_listing.html %}
{%   endif %}
{% endfor %}
