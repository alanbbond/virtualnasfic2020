---
title: Guest Itineraries
layout: default
category: info
public: true
order: 3

---

{% include jump_to.html content=site.data.programparticipants %}

# Guests Of Honor

{% for programparticipant in site.data.programparticipants %}
{% if programparticipant.guest_of_honor == true %}
{% include program_participant_itineraries.html %}
{% endif %}
{% endfor %}

# Program Participants

{% for programparticipant in site.data.programparticipants %}
{% unless programparticipant.guest_of_honor == true %}
{% include program_participant_itineraries.html %}
{% endunless %}
{% endfor %}
