---
title: Guests
layout: default
category: public
order: 3

---
# Guests Of Honor

{% for programparticipant in site.data.programparticipants %}
{% if programparticipant.guest_of_honor == true %}
{% include program_participant_listing.html %}
{% endif %}
{% endfor %}

# Program Participants

{% for programparticipant in site.data.programparticipants %}
{% unless programparticipant.guest_of_honor == true %}
{% include program_participant_listing.html %}
{% endunless %}
{% endfor %}
