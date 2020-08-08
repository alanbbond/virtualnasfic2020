---
title: Appearing
layout: default
category: public
order: 11

---
# Guests Of Honor

{% for programparticipant in site.data.programparticipants %}
{% if programparticipant.category contains "Guest" %}
{% include program_participant_listing.html %}
{% endif %}
{% endfor %}

# Program Participants

{% for programparticipant in site.data.programparticipants %}
{% unless programparticipant.category contains "Guest" %}
{% include program_participant_listing.html %}
{% endunless %}
{% endfor %}
