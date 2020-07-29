---
title: Schedule
layout: default
category: pages
order: 2
---

# Events

The following events are not happening at NASFiC 2020. They are cribbed from other conventions in order to demonstrate this website. Please use the Forestry.io account to <span style="color: red">delete and replace all of them</span> and delete this paragraph before the weekend. :)

{% for event in site.data.schedule %}
{% include schedule_listing.html %}
{% endfor %}