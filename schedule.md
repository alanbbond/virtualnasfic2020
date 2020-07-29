---
title: Schedule
layout: default
category: pages
order: 2

---
# Events

The following events are not happening at NASFiC 2020. They are cribbed from other conventions in order to demonstrate this website. I can delete and replace all of them in bulk when some real events are ready. You can edit, add, or delete individual events in Forestry.io by clicking "Schedule Entries" in the sidebar.

{% for event in site.data.schedule %}
{% include schedule_listing.html %}
{% endfor %}