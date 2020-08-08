---
title: Appearing
layout: default
category: public
order: 11

---
# Guests Of Honor

{% for presenter in site.data.presenters %}
{% if presenter.category contains "Guest" %}
{% include presenter_listing.html %}
{% endif %}
{% endfor %}

# Presenters

{% for presenter in site.data.presenters %}
{% unless presenter.category contains "Guest" %}
{% include presenter_listing.html %}
{% endunless %}
{% endfor %}
