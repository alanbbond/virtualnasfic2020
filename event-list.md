---
title: Event List
layout: default
category: info
public: true
order: 4

---

{% include jump_to_event.html content=site.data.schedule %}

# Events

{% assign days = "friday,saturday,sunday" | split: "," %}
{% assign meridians = "am,pm" | split: "," %}
{% assign times = "12,1,2,3,4,5,6,7,8,9,10,11" | split: "," %}
<ul>
{% for day in days %}
{% for event in site.data.schedule %}
{% assign dt = event.datetime | downcase %}
{%   if dt == day %}
{% capture pub %}{% if event.published %}not-published{% endif %}{% endcapture %}
<li class='{{pub}}'>
  <span class="datetime">{{ event.datetime}}</span>
  <span class="room">{{ event.room | markdownify | replace: "<p>", "" | replace: "</p>", "" }}</span>
  <span class="title">{{ event.title}}</span>
</li>
{%   endif %}
{% endfor %}
{% for meridian in meridians %}
{% for event in site.data.schedule %}
{%   assign dt = event.datetime | downcase %}
{%   if dt contains day and meridian == "am" and dt contains "morning" %}
{% capture pub %}{% if event.published %}not-published{% endif %}{% endcapture %}
<li class='{{pub}}'>
  <span class="datetime">{{ event.datetime}}</span>
  <span class="room">{{ event.room | markdownify | replace: "<p>", "" | replace: "</p>", "" }}</span>
  <span class="title">{{ event.title}}</span>
</li>
{%   endif %}
{%   if dt contains day and meridian == "pm" and dt contains "afternoon" %}
{% capture pub %}{% if event.published %}not-published{% endif %}{% endcapture %}
<li class='{{pub}}'>
  <span class="datetime">{{ event.datetime}}</span>
  <span class="room">{{ event.room | markdownify | replace: "<p>", "" | replace: "</p>", "" }}</span>
  <span class="title">{{ event.title}}</span>
</li>
{%   endif %}
{% endfor %}
{% for time in times %}
{%   for event in site.data.schedule %}
{%     assign dt = event.datetime | downcase %}
{%     assign start_time = dt | split: ":" | first %}
{%     if dt contains day and dt contains meridian %}
{%       if time == "12" and start_time contains "12" %}
{% capture pub %}{% if event.published %}not-published{% endif %}{% endcapture %}
<li class='{{pub}}'>
  <span class="datetime">{{ event.datetime}}</span>
  <span class="room">{{ event.room | markdownify | replace: "<p>", "" | replace: "</p>", "" }}</span>
  <span class="title">{{ event.title}}</span>
</li>
{%       elsif time == "1" and start_time contains "1" %}
{%         unless start_time contains "10" or start_time contains "11" or start_time contains "12" %}
{% capture pub %}{% if event.published %}not-published{% endif %}{% endcapture %}
<li class='{{pub}}'>
  <span class="datetime">{{ event.datetime}}</span>
  <span class="room">{{ event.room | markdownify | replace: "<p>", "" | replace: "</p>", "" }}</span>
  <span class="title">{{ event.title}}</span>
</li>
{%         endunless %}
{%       elsif time == "2" and start_time contains "2" %}
{%         unless start_time contains "12" %}
{% capture pub %}{% if event.published %}not-published{% endif %}{% endcapture %}
<li class='{{pub}}'>
  <span class="datetime">{{ event.datetime}}</span>
  <span class="room">{{ event.room | markdownify | replace: "<p>", "" | replace: "</p>", "" }}</span>
  <span class="title">{{ event.title}}</span>
</li>
{%         endunless %}
{%       elsif start_time contains time %}
{% capture pub %}{% if event.published %}not-published{% endif %}{% endcapture %}
<li class='{{pub}}'>
  <span class="datetime">{{ event.datetime}}</span>
  <span class="room">{{ event.room | markdownify | replace: "<p>", "" | replace: "</p>", "" }}</span>
  <span class="title">{{ event.title}}</span>
</li>
{%       endif %}
{%     endif %}
{%   endfor %}
{% endfor %}
{% endfor %}
{% endfor %}
{% for event in site.data.schedule %}
{%   if event.datetime.size == 0 %}
{% capture pub %}{% if event.published %}not-published{% endif %}{% endcapture %}
<li class='{{pub}}'>
  <span class="datetime">{{ event.datetime}}</span>
  <span class="room">{{ event.room | markdownify | replace: "<p>", "" | replace: "</p>", "" }}</span>
  <span class="title">{{ event.title}}</span>
</li>
{%   endif %}
{% endfor %}
</ul>